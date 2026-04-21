import type { AxiosResponse } from "axios";
import { Paginator } from "./paginator";

type Item = { id: number };

function makeResponse(count: number): AxiosResponse<Item[], any> {
  return {
    data: Array.from({ length: count }, (_, i) => ({ id: i })),
    status: 200,
    statusText: "OK",
    headers: {},
    config: {} as any,
  };
}

function makeAxiosError(status: number): Error {
  const err: any = new Error(`Request failed with status code ${status}`);
  err.response = { status };
  return err;
}

// Collects all items from an async generator without relying on for-await-of
// so we don't need ES2018.asyncIterable in the tsconfig lib.
async function collect(generator: any): Promise<any[]> {
  const items: any[] = [];
  let result = await generator.next();
  while (!result.done) {
    items.push(result.value);
    result = await generator.next();
  }
  return items;
}

describe("Paginator.paginate", () => {
  it("returns all results when the total is less than the increment", async () => {
    const mockFn = jest.fn().mockResolvedValueOnce(makeResponse(123));

    const result = await Paginator.paginate({} as any, mockFn, {} as any, 250);

    expect(result.data).toHaveLength(123);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("returns all results when the total is an exact multiple of the increment (the boundary bug)", async () => {
    const mockFn = jest.fn()
      .mockResolvedValueOnce(makeResponse(250))
      .mockRejectedValueOnce(makeAxiosError(400));

    const result = await Paginator.paginate({} as any, mockFn, {} as any, 250);

    expect(result.data).toHaveLength(250);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("returns all results across multiple pages when the total is an exact multiple of the increment", async () => {
    const mockFn = jest.fn()
      .mockResolvedValueOnce(makeResponse(250))
      .mockResolvedValueOnce(makeResponse(250))
      .mockRejectedValueOnce(makeAxiosError(400));

    const result = await Paginator.paginate({} as any, mockFn, {} as any, 250);

    expect(result.data).toHaveLength(500);
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  it("returns all results across multiple full pages followed by a partial page", async () => {
    const mockFn = jest.fn()
      .mockResolvedValueOnce(makeResponse(250))
      .mockResolvedValueOnce(makeResponse(87));

    const result = await Paginator.paginate({} as any, mockFn, {} as any, 250);

    expect(result.data).toHaveLength(337);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("re-throws a 4xx error on the first call", async () => {
    const mockFn = jest.fn().mockRejectedValueOnce(makeAxiosError(400));

    await expect(
      Paginator.paginate({} as any, mockFn, {} as any, 250)
    ).rejects.toMatchObject({ response: { status: 400 } });
  });

  it("re-throws a 5xx error on a subsequent page", async () => {
    const mockFn = jest.fn()
      .mockResolvedValueOnce(makeResponse(250))
      .mockRejectedValueOnce(makeAxiosError(500));

    await expect(
      Paginator.paginate({} as any, mockFn, {} as any, 250)
    ).rejects.toMatchObject({ response: { status: 500 } });
  });
});

describe("Paginator.paginateGenerator", () => {
  it("yields all results when the total is less than the increment", async () => {
    const mockFn = jest.fn().mockResolvedValueOnce(makeResponse(123));

    const items = await collect(Paginator.paginateGenerator({} as any, mockFn, {} as any, 250));

    expect(items).toHaveLength(123);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("yields all results when the total is an exact multiple of the increment (the boundary bug)", async () => {
    const mockFn = jest.fn()
      .mockResolvedValueOnce(makeResponse(250))
      .mockRejectedValueOnce(makeAxiosError(400));

    const items = await collect(Paginator.paginateGenerator({} as any, mockFn, {} as any, 250));

    expect(items).toHaveLength(250);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("yields all results across multiple pages when the total is an exact multiple of the increment", async () => {
    const mockFn = jest.fn()
      .mockResolvedValueOnce(makeResponse(250))
      .mockResolvedValueOnce(makeResponse(250))
      .mockRejectedValueOnce(makeAxiosError(400));

    const items = await collect(Paginator.paginateGenerator({} as any, mockFn, {} as any, 250));

    expect(items).toHaveLength(500);
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  it("yields all results across multiple full pages followed by a partial page", async () => {
    const mockFn = jest.fn()
      .mockResolvedValueOnce(makeResponse(250))
      .mockResolvedValueOnce(makeResponse(87));

    const items = await collect(Paginator.paginateGenerator({} as any, mockFn, {} as any, 250));

    expect(items).toHaveLength(337);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("re-throws a 4xx error on the first call", async () => {
    const mockFn = jest.fn().mockRejectedValueOnce(makeAxiosError(400));

    await expect(
      collect(Paginator.paginateGenerator({} as any, mockFn, {} as any, 250))
    ).rejects.toMatchObject({ response: { status: 400 } });
  });

  it("re-throws a 5xx error on a subsequent page", async () => {
    const mockFn = jest.fn()
      .mockResolvedValueOnce(makeResponse(250))
      .mockRejectedValueOnce(makeAxiosError(500));

    await expect(
      collect(Paginator.paginateGenerator({} as any, mockFn, {} as any, 250))
    ).rejects.toMatchObject({ response: { status: 500 } });
  });
});

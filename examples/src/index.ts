import { AccountsApi, axiosRetry, Configuration, EntitlementsV2025Api, GovernanceGroupsBetaApi, IdentityDocument, Paginator, Search, SearchApi, TransformsApi, TransformsApiCreateTransformRequest, TransformsBetaApi } from "sailpoint-api-client"

const createTransform = async () => {

    let apiConfig = new Configuration()
    let api = new TransformsApi(apiConfig)
    let transform: TransformsApiCreateTransformRequest = 
    {
        transform:
        {
            name: "Test Transform",
            type: "dateFormat",
            attributes: {
                inputFormat: "MMM dd yyyy, HH:mm:ss.SSS",
                outputFormat: "yyyy/dd/MM"
            }
        }
    }
    const val = await api.createTransform(transform)
    console.log(val.data)
}

// const search = async () => {
//     let apiConfig = new Configuration()
//     let api = new SearchApi(apiConfig)
//     let search: Search = {
//         indices: [
//             "identities"
//         ],
//         query: {
//             query: "*"
//         },
//         sort: ["-name"]
// 	}
//     const val = await Paginator.paginateSearchApi(api, search, 100, 1000)

//     for (const result of val.data) {
//         const castedResult: IdentityDocument = result
//         console.log(castedResult.name)
//     }
    
// }

const getPaginatedAccounts = async () => {

    
    let apiConfig = new Configuration()
    apiConfig.retriesConfig = {
        retries: 4,
        retryDelay: axiosRetry.exponentialDelay,
        onRetry(retryCount, error, requestConfig) {
            console.log(`retrying due to request error, try number ${retryCount}`)
        },
    }
    let api = new AccountsApi(apiConfig)

    
    const val = await Paginator.paginate(api, api.listAccounts, {limit: 20, sorters: "created"}, 10)

    console.log(val.data)

}


const getPaginatedTransforms = async () => {

    
    let apiConfig = new Configuration()
    apiConfig.retriesConfig = {
        retries: 4,
        retryDelay: axiosRetry.exponentialDelay,
        onRetry(retryCount, error, requestConfig) {
            console.log(`retrying due to request error, try number ${retryCount}`)
        },
    }
    let api = new TransformsApi(apiConfig)
    
    const val = await Paginator.paginate(api, api.listTransforms, {limit: 250}, 100)

    console.log(val.data.length)

}

const listTransforms = async () => {

    let apiConfig = new Configuration()
    let api = new TransformsBetaApi(apiConfig)
   
    const val = await api.listTransforms()
    console.log(val.data)
}

const listEntitlements = async () => {

    let apiConfig = new Configuration()
    apiConfig.experimental = true
    let api = new EntitlementsV2025Api(apiConfig)
   
    const val = await api.listEntitlements()
    console.log(val.data)
}

// Generator Examples - Memory efficient pagination

const getPaginatedAccountsWithGenerator = async () => {
    console.log("\n=== Using Generator for Accounts ===")
    
    let apiConfig = new Configuration()
    let api = new AccountsApi(apiConfig)
    
    let processedCount = 0
    
    // Process accounts one by one as they arrive
    for await (const account of Paginator.paginateGenerator(
        api, 
        api.listAccounts, 
        { limit: 100, sorters: "created" }, // Total limit of 100
        20  // Page size of 20
    )) {
        processedCount++
        console.log(`Account ${processedCount}: ${account.name} (${account.id})`)
        
        // Example: Stop early if we find what we're looking for
        if (account.name?.includes("admin")) {
            console.log("Found admin account, stopping early")
            break
        }
    }
    
    console.log(`Total accounts processed: ${processedCount}`)
}

const searchWithGenerator = async () => {
    console.log("\n=== Using Generator for Search ===")
    
    let apiConfig = new Configuration()
    let api = new SearchApi(apiConfig)
    let search: Search = {
        indices: ["identities"],
        query: { query: "*" },
        sort: ["name"]  // Required for search pagination
    }
    
    let count = 0
    const startTime = Date.now()
    
    // Process search results as they arrive
    for await (const doc of Paginator.paginateSearchApiGenerator(api, search, 50, 200)) {
        const identity = doc as IdentityDocument
        count++
        
        // Process each identity immediately
        if (count <= 5) {
            console.log(`Identity ${count}: ${identity.name}`)
        }
        
        // Example use case: Find specific identities without loading all
        if (identity.attributes?.department === "Engineering") {
            console.log(`Found Engineering member: ${identity.name}`)
        }
    }
    
    const elapsed = Date.now() - startTime
    console.log(`\nProcessed ${count} identities in ${elapsed}ms`)
    console.log("Started processing immediately, didn't wait for all data!")
}

const compareGeneratorVsRegularPagination = async () => {
    console.log("\n=== Comparing Generator vs Regular Pagination ===")
    
    let apiConfig = new Configuration()
    let api = new GovernanceGroupsBetaApi(apiConfig)
    
    // Regular pagination - waits for all data
    console.log("\n1. Regular Pagination (waits for all data):")
    const regularStart = Date.now()
    const allGroups = await Paginator.paginate(api, api.listWorkgroups, { limit: 50 }, 10)
    const regularTime = Date.now() - regularStart
    console.log(`   Fetched all ${allGroups.data.length} groups in ${regularTime}ms`)
    console.log("   Now processing them...")
    allGroups.data.forEach((group, i) => {
        if (i < 3) console.log(`   - ${group.name}`)
    })
    
    // Generator pagination - processes as data arrives
    console.log("\n2. Generator Pagination (processes immediately):")
    const generatorStart = Date.now()
    let genCount = 0
    let firstItemTime = 0
    
    for await (const group of Paginator.paginateGenerator(api, api.listWorkgroups, { limit: 50 }, 10)) {
        genCount++
        if (genCount === 1) {
            firstItemTime = Date.now() - generatorStart
            console.log(`   First item available after ${firstItemTime}ms!`)
        }
        if (genCount <= 3) {
            console.log(`   - ${group.name}`)
        }
    }
    
    const generatorTime = Date.now() - generatorStart
    console.log(`   Processed ${genCount} groups in ${generatorTime}ms`)
    console.log(`   Started processing ${regularTime - firstItemTime}ms earlier than regular pagination!`)
}

// Run examples
// listEntitlements()
// getPaginatedAccountsWithGenerator()
// searchWithGenerator()
compareGeneratorVsRegularPagination()
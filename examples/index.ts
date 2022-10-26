
import { AccountsV3, ConfigurationV3 } from "sailpoint-sdk"
let apiConfig = new ConfigurationV3

apiConfig.basePath = 'https://devrel.api.identitynow.com/V3:/'
apiConfig.accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIyZjlkOTZiMC03ZWIwLTRlNGUtYWE0MS03Nzk2YmU1ODQ2Y2YiLCJwb2QiOiJzdGcwMy11c2Vhc3QxIiwic3Ryb25nX2F1dGhfc3VwcG9ydGVkIjpmYWxzZSwib3JnIjoiZGV2cmVsIiwiaWRlbnRpdHlfaWQiOiIyYzkxODA4OTdkMmNiODBiMDE3ZDM5Y2NiMjZjMTgwNCIsInVzZXJfbmFtZSI6InBoaWxpcC5lbGxpcyIsInNjb3BlIjpbIkJnPT0iXSwic3Ryb25nX2F1dGgiOnRydWUsImV4cCI6MTY2NjY2NzcxNywiYXV0aG9yaXRpZXMiOlsiT1JHX0FETUlOIiwic3A6dXNlciJdLCJqdGkiOiJDSTBUaXNvTE5JWUpPTklWekFyNU1lZ0lfSk0iLCJjbGllbnRfaWQiOiJkNDFiN2QyMDdjMzU0Nzg4OGE2YmZmMWM4ZTExZTE1NCJ9.m8cxkCqyGU0OJtylBC87D-qOlZfh_V8kOOO4NrHAkxw'


//let api = new SourcesApi(apiConfig)

let api = new AccountsV3(apiConfig)

api.listAccounts().then((val) => {
    console.log(val)
})

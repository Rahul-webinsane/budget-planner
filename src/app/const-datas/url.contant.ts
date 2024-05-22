import { environment } from "../environments/environment";
const {baseUrl} = environment;

export const URLS = Object.freeze({
    userList:`${baseUrl}/api/users`,
    addTransaction:`${baseUrl}/api/transactions`,
    getTransaction:`${baseUrl}/api/transactions`,
    deleteTransactions:`${baseUrl}/api/transactions`
})
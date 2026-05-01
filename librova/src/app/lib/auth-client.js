import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: process.env.MONGO_URI
})
export const { signIn, signUp, useSession } = createAuthClient()
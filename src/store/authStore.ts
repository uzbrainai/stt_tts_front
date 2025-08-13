import {create} from "zustand";

export type authStoreType = {
    isAuth: boolean
    loading: boolean
    user: currentUserType | undefined
    permissions: string[]
    setLoading: (isLoading: boolean) => void
    setAuth: (isAuth: boolean) => void
    setUserAndAuth: (data: { isAuth: boolean, user: currentUserType | undefined, permissions: string[] }) => void
}

export type userAccountType = {
    amount: number
    id: number
    lastPaymentAmount: number
    lastPaymentDate: number
}

export type currentUserType = {
    id: number,
    lastName: string,
    middleName: string,
    firstName: string,
    roles: Array<roleType>,
    username: string,
    requiredChangePassword: boolean,
    userAccount: userAccountType
}

export type roleType = {
    id: number
    name: string
    permissions: Array<string>
    prettyName: string
}

export const useAuthStore = create<authStoreType>((setState) => ({
    isAuth: false,
    user: undefined,
    loading: false,
    permissions: [],
    setLoading: (b) => (setState(() => ({loading: b}))),
    setAuth: (isAuth) => (setState(() => ({isAuth}))),
    setUserAndAuth: (data) => (setState(() => ({isAuth: data.isAuth, user: data.user, permissions: data?.permissions})))
}))
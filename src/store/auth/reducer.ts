import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { showSuccessMessage, showInfoMessage, showErrorMessage } from '../../utils/toast-service'
import { IUser, LoginDto, UserDto } from '../../types/auth'
import { API_CONFIG, APP_CONSTANTS } from '../../config'
import { apiClient } from '../../services'
import { storage } from '../../utils'

interface IAuthStore {
    error: string
    user: IUser
    isLoggedIn: boolean
    requestStatus?: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const name = 'auth'

const initialState: IAuthStore = {
    error: '',
    user: {
        _id: '',
        email: '',
        fullname: '',
        gender: '',
        verified: false,
    },
    isLoggedIn: false,
    requestStatus: 'idle',
}

// Async redux action: signUp
export const signUp = createAsyncThunk<any, UserDto>(
    `${name}/signUp`,
    async (registrationData) => {
        if (!registrationData) return showInfoMessage('No registration information')
        try {
            const result = await apiClient.post(API_CONFIG.ENDPOINTS.AUTH.SIGNUP, registrationData);
            if (result.status === APP_CONSTANTS.HTTP_STATUS.CREATED && result.data) {
                return result.data;
            } else if (result.status === APP_CONSTANTS.HTTP_STATUS.BAD_REQUEST) {
                throw new Error(result.data.error);
            }
        } catch (e: any) {
            // authErrorHandler(err);
        }
    }
)

export const signIn = createAsyncThunk<any, LoginDto>(
    `${name}/signIn`,
    async (logInCredential) => {
        if (!logInCredential) return showInfoMessage('Enter your login credentials')
        try {
            const result = await apiClient.post(API_CONFIG.ENDPOINTS.AUTH.LOGIN, logInCredential)
            if (result.status === APP_CONSTANTS.HTTP_STATUS.CREATED && result.data) {
                return result.data;
            } else if (result.status === APP_CONSTANTS.HTTP_STATUS.BAD_REQUEST) {
                throw new Error(result.data.error);
            }
        } catch (e: any) {
            // authErrorHandler(err);
        }
    },
)

// Create slice.
const AuthSlice = createSlice({
    name,
    initialState,
    reducers: {
        signOut: (state) => {
            state.requestStatus = 'idle'
            state.user = {
                _id: '',
                email: '',
                fullname: '',
                gender: '',
                verified: false,
            }
            state.error = ''
            state.isLoggedIn = false
            storage.removeAuthToken()
            window.location.assign('/login')
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signUp.pending, (state) => {
            state.requestStatus = 'loading'
        })
        builder.addCase(signUp.rejected, (state, action) => {
            state.error = action.error.message!
            state.requestStatus = 'failed'
            showErrorMessage(action.error.message!)
        })
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.requestStatus = 'succeeded'
            state.isLoggedIn = true
            state.user = action.payload?.data
            storage.setAuthToken(action.payload.token)
            showSuccessMessage(action.payload.message)
        })

        // => Login Async Reducer
        builder.addCase(signIn.pending, (state) => {
            state.requestStatus = 'loading'
        })
        builder.addCase(signIn.rejected, (state, action) => {
            state.error = action.error.message!
            state.requestStatus = 'failed'
            showErrorMessage(action.error.message!)
        })
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.user = action.payload?.data
            state.requestStatus = 'succeeded'
            state.isLoggedIn = true
            showSuccessMessage(action.payload.message)
            storage.setAuthToken(action.payload.token)
        })
    },
})

export const { signOut } = AuthSlice.actions
export const selectAuth = (store: any) => store.Auth as IAuthStore
export default AuthSlice.reducer
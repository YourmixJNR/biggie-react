const APP_CONSTANTS = {
    ROUTES: {
        HOME: '/',
        ABOUT: '/about',
        DASHBOARD: '/dashboard',
        AUTH: {
            LOGIN: '/auth/login',
            SIGNUP: '/auth/signup',
            FORGOT_PASSWORD: '/auth/forgot-password',
        },
        // ... other route definitions
    },
} as const

export default APP_CONSTANTS
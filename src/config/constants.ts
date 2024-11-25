const APP_CONSTANTS = {
    HTTP_STATUS: {
        OK: 200,
        CREATED: 201,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
    },
    PAGINATION: {
        DEFAULT_PAGE_SIZE: 10,
        MAX_PAGE_SIZE: 100,
    },
    STORAGE_KEYS: {
        SESSION: 'your-app-name',
    },
    ROUTES: {
        HOME: '/',
        ABOUT: '/about',
        DASHBOARD: '/app',
        FUNDME: '/app/fund-me',
        AUTH: {
            LOGIN: '/login',
            SIGNUP: '/signup',
            FORGOT_PASSWORD: '/forgot-password',
        },
    },
} as const

export default APP_CONSTANTS
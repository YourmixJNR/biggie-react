const API_CONFIG = {
    TIMEOUT: 30000,
    RETRY_ATTEMPTS: 3,
    ENDPOINTS: {
        AUTH: {
            LOGIN: '/auth/login',
            LOGOUT: '/auth/logout',
            REFRESH_TOKEN: '/auth/refresh',
        },
        USERS: {
            BASE: '/users',
            PROFILE: '/users/profile',
            PREFERENCES: '/users/preferences',
        },
    },
    HEADERS: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
} as const;

export default API_CONFIG
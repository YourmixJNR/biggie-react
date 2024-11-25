import { APP_CONSTANTS } from "../config"

export const setAuthToken = (token: string): void => {
  try {
    localStorage.setItem(APP_CONSTANTS.STORAGE_KEYS.SESSION, token)
  } catch (error) {
    console.error('Failed to set auth token:', error)
  }
}

export const getAuthToken = (): string | null => {
  try {
    return localStorage.getItem(APP_CONSTANTS.STORAGE_KEYS.SESSION)
  } catch (error) {
    console.error('Failed to get auth token:', error)
    return null
  }
}

export const removeAuthToken = (): void => {
  try {
    localStorage.removeItem(APP_CONSTANTS.STORAGE_KEYS.SESSION)
  } catch (error) {
    console.error('Failed to remove auth token:', error)
  }
}


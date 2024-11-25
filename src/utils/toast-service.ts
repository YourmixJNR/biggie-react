import { toast } from 'react-toastify'

const position = 'top-right'
const theme = 'dark' // 'colored' | 'dark'
const hideProgressBar = true
const autoClose = 5000

export const showSuccessMessage = (message: string): void => {
    toast.success(message, {
        position,
        theme,
        hideProgressBar,
        autoClose,
    })
}
export const showInfoMessage = (message: string): void => {
    toast.info(message, {
        position,
        hideProgressBar,
        theme,
        autoClose,
    })
}


export const showErrorMessage = (message: string): void => {
    toast.error(message, {
        position,
        hideProgressBar,
        theme,
        autoClose,
    })
}
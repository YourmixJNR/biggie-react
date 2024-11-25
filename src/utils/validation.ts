export const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const isValidPassword = (password: string): {
    isValid: boolean;
    errors: string[];
} => {
    const errors: string[] = [];
    if (password.length < 8) errors.push('Password must be at least 8 characters');
    if (!/[A-Z]/.test(password)) errors.push('Password must contain an uppercase letter');
    if (!/[a-z]/.test(password)) errors.push('Password must contain a lowercase letter');
    if (!/[0-9]/.test(password)) errors.push('Password must contain a number');

    return {
        isValid: errors.length === 0,
        errors
    };
};

export const phone = (phone: string) => {
    return /^\+?[\d\s-]{10,}$/.test(phone);
}


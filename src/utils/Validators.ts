export const validateEmail = (email: string): string | null => {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Email is not suitable'
  }
  return null
}

export const validatePassword = (password: string): string | null => {
  if (password.length < 8) return 'Password must be at least 8 characters'
  if (!/(?=.*[A-Z])/.test(password)) return 'Password must contain an uppercase letter'
  if (!/(?=.*\d)/.test(password)) return 'Password must contain a number'
  return null
}

export const validateNotEmpty = (value: string, fieldName: string): string | null => {
  if (value.trim()) {
    return null
  } else {
    return `${fieldName} cannot be empty`
  }
}

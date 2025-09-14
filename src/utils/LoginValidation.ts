export const validateLogin = (email: string, password: string): boolean => {
  if (!email.trim() || !password.trim()) {
    return false
  }

  if (password.length < 8) {
    return false
  }

  if (!/(?=.*\d)(?=.*[a-zA-Z])(?=.*[!#\$%&\?]).{8,}/.test(password)) {
    return false
  }

  if (!/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email)) {
    return false
  }

  return true
}
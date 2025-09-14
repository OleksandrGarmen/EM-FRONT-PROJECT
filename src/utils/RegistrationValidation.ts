export const validateRegister = (
  username: string,
  email: string,
  password: string,
  repeatPassword: string
): boolean => {
  if (!username.trim() || !email.trim() || !password.trim() || !repeatPassword.trim()) {
    return false
  }

  if (username.length < 2) {
    return false
  }

  if (password.length < 8) {
    return false
  }

  if (!/(?=.*\d)(?=.*[a-zA-Z])(?=.*[!#\$%&\?]).{8,}/.test(password)) {
    return false
  }

  if (
    !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email)) {
    return false
  }

  if (password !== repeatPassword) {
    return false
  }

  return true
}

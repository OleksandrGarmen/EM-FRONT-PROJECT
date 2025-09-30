import { validateEmail, validatePassword, validateNotEmpty } from './Validators'

export const validateRegister = (
  username: string,
  email: string,
  password: string,
  repeatPassword: string
): string | null => {
  const usernameEmptyError = validateNotEmpty(username, 'Username')
  if (usernameEmptyError) return usernameEmptyError

  const emailEmptyError = validateNotEmpty(email, 'Email')
  if (emailEmptyError) return emailEmptyError

  const emailError = validateEmail(email)
  if (emailError) return emailError

  const validateEmtyPassword = validateNotEmpty(password, 'Password')
  if (validateEmtyPassword) return validateEmtyPassword

  const validatePasswordError = validatePassword(password)
  if (validatePasswordError) return validatePasswordError

  if (password !== repeatPassword) return 'Passwords do not match'

  return null
}

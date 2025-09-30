import { validateEmail, validateNotEmpty, validatePassword } from './Validators'

export const validateLogin = (email: string, password: string): string | null => {
  const emailEmptyError = validateNotEmpty(email, 'Email')
  if (emailEmptyError) return emailEmptyError

  const emailError = validateEmail(email)
  if (emailError) return emailError

  const validateEmtyPassword = validateNotEmpty(password, 'Password')
  if (validateEmtyPassword) return validateEmtyPassword

  const validatePasswordError = validatePassword(password)
  if (validatePasswordError) return validatePasswordError

  return null
}

import { body } from 'express-validator'

export const registerValidator = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Минимальная длина пароля 7 символов').isLength({ min: 7 }),
  body('name', 'Неверный формат имени').isString()
]

export const loginValidator = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Минимальная длина пароля 7 символов').isLength({ min: 7 }),
]
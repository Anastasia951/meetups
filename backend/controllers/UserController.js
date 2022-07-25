import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from '../models/User.js'
import { isObjectEmpty } from '../utils/isObjectEmpty.js'

export const register = async (req, res) => {
  try {
    const { email, name, password } = req.body
    const testUser = await UserModel.findOne({ email })

    if (testUser) {
      return res.status(400).json({
        message: 'Пользователь уже существует'
      })
    }

    const salt = await bcrypt.genSalt(7)
    const hash = await bcrypt.hash(password, salt)

    const doc = new UserModel({
      email, name, passwordHash: hash
    })

    const user = await doc.save()

    const token = jwt.sign(
      {
        id: user._id
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '1h'
      }
    )

    const { passwordHash, ...userData } = user._doc

    res.json({
      ...userData,
      token
    })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Не удалось зарегистрироваться'
    })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await UserModel.findOne({ email })
    if (isObjectEmpty(user)) {
      return res.status(400).json({
        message: 'Пользователь не найден'
      })
    }

    const isValidPassword = await bcrypt.compare(password, user._doc.passwordHash)

    if (!isValidPassword) return res.status(400).json({ message: 'Неверный email или пароль' })

    const token = jwt.sign(
      {
        id: user._id
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '1h'
      }
    )

    const { passwordHash, ...userData } = user._doc

    res.json({
      token,
      ...userData
    })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'Не удалось авторизоваться'
    })
  }
}

export const fetchMe = async (req, res) => {
  try {
    const token = req.headers.authorization || ''
    if (token) {
      const testUser = await UserModel.findOne({ token })
      if (isObjectEmpty(testUser)) {
        return res.status(404).json({
          message: 'Пользователь не найден'
        })
      }

      const { passwordHash, ...user } = testUser._doc
      return res.json({
        user, token
      })
    }
  } catch (e) {
    console.log(e)
    res.status(400).json({
      message: ''
    })
  }
}
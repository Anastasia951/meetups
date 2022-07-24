import jwt from 'jsonwebtoken'

export const checkAuthMe = (req, res, next) => {
  try {
    const token = req.header.authorization || ''

    if (token) {
      const decoded = jwt.verify(token, process.env.SECRET_KEY)

      req.userId = decoded._id
      next()
    } else {
      return res.status(403).json({
        message: "Нет доступа"
      })
    }
  } catch (e) {
    return res.status(403).json({
      message: "Нет доступа"
    })
  }
}
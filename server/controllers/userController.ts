import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/userModel'

const createToken = (_id: string) => {
  return jwt.sign({ _id }, process.env.SECRET as string, { expiresIn: '3d' })
}

// login user
const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const user = await User.logIn(email, password)
    const firstName = user.firstName
    const lastName = user.lastName
    const _id = user._id
    const token = createToken(user._id)

    res.status(200).json({ firstName, lastName, email, token, _id })
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

// create user
const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body

  try {
    const user = await User.signUp(firstName, lastName, email, password)

    //create a token
    const token = createToken(user._id)
    const _id = user._id

    res.status(200).json({ firstName, lastName, email, token, _id })
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

export { createUser, loginUser }

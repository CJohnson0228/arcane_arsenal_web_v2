import bcrypt from 'bcrypt'
import { Model, Schema, model } from 'mongoose'
import validator from 'validator'

export interface Iuser {
  firstName: string
  lastName: string
  email: string
  password: string
  avatarURL?: string
}

export interface IuserMethods extends Model<Iuser> {
  signUp: (firstName: string, lastName: string, email: string, password: string) => Promise<any>
  logIn: (email: string, password: string) => Promise<any>
  updateProfile: (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    avatarURL: string
  ) => Promise<any>
}

export const userSchema = new Schema<Iuser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatarURL: { type: String, required: false },
})

userSchema.statics.signUp = async function (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  // validation
  if (!email || !password) {
    throw Error('All Fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email is not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  const user = await this.create({ firstName, lastName, email, password: hash })

  return user
}

userSchema.statics.logIn = async function (email: string, password: string) {
  if (!email || !password) {
    throw Error('All Fields must be filled')
  }

  const user = await this.findOne({ email })

  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

const User = model<Iuser, IuserMethods>('Users', userSchema)

export default User

import UserModel from '../models/user.model.js'

export default class User {
  constructor() {}

  get = async () => {
    return await UserModel.find().lean().exec()
  }

  getByID = async id => {
    return await UserModel.findById(id).lean().exec()
  }

  getByEmail = async email => {
    return await UserModel.findOne({ email }).lean().exec()
  }

  create = async data => {
    const user = await UserModel.create(data)
    return user
  }

  update = async (id, data) => {
    return await UserModel.updateOne({ _id: id }, data)
  }

  delete = async id => {
    return await UserModel.deleteOne({ _id: id })
  }
}

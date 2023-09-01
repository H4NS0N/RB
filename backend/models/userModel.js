const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },  
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  //dateOfBirth: Date
})

// static signup method
userSchema.statics.signup = async function(firstName, lastName, email, password, city, address, phone, /*dateOfBirth*/) {

  // validation
  //!firstName || !lastName || !email || !password || !city || !address || !phone
  
    if (!email || !password) {
      throw Error('Alle felter skal udfyldes')
    }
    if (!validator.isEmail(email)) {
      throw Error('Email er ikke gyldig.')
    }
    if (!validator.isStrongPassword(password)) {
      throw Error('Kodeord er ikke stærkt nok')
    }
  

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email allerede i brug.')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({firstName, lastName, email, password: hash, city, address, phone, /*dateOfBirth*/})

  return user
}

// static login method
userSchema.statics.login = async function(email, password){
  if (!email || !password) {
    throw Error('Alle felter skal udfyldes')
  }

  const user = await this.findOne({ email })

  if (!user) {
    throw Error('Forkert email')
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    throw Error('Forkert kode')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)
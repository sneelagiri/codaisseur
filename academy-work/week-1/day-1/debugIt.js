const input = 'IVEGOTTHEPWR!'
const maxLoginAttempts = 3
const user = {
  name: 'Rein',
  age: '30',
  credentials: {
    username: 'pwrUser',
    password: 'IVEGOTTHEPWR!',
  },
  loginAttemptsFailed: '1',
  accountLocked: 'false'
}
const passwordCorrect = user.credentials.password === input
const finalLoginAttempt = parseInt(user.loginAttemptsFailed) +1 >= maxLoginAttempts
const accountLocked = user.accountLocked
console.log(`Password correct? ${passwordCorrect}`) // wait what?
console.log(`Final Login Attempt? ${finalLoginAttempt}`) // but we've only had 1 attempt!?
console.log(`Account locked? ${accountLocked}`) // ..?
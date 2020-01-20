// object-instantiated-with-class.js
class User {
  // implement the user class here
  constructor(firstName, lastName, email, password, posts) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email 
    this.password = password
    this.posts = []
  }

  authenticate(email, password){
    if(email === this.email && password === this.password){
        return true
    } else {
        return false
    }
  }
  post(title){
    if(!title) return console.log('please provide a title to post')
    this.posts.push({ id: this.posts.length + 1, title: title })
  }
  getPosts(){
    return this.posts
  }
}
const user = new User('Wouter', 'de Vos', 'wouter@wouter.com', 'likeABoss')
console.log(user) // console.log what user is
// TODO: uncomment these lines 1 by 1 and make them work as expected
const authAttempt1 = user.authenticate('wouter@wouter.com', 'hacketyhack') // returns false
const authAttempt2 = user.authenticate('wouter@wouter.com', 'likeABoss') // returns true
console.log(authAttempt1, authAttempt2)
user.post() // no post is created
user.post('7 Productivity hacks using Asana')
user.post('We need more diversity in programming')
const woutersPosts = user.getPosts() // array of 2 posts: function
console.log(woutersPosts)

const me = new User('Shashank', 'Neelagiri', 'shashankn96@gmail.com', 'likeAStudent')
console.log(me)

const authAttempt3 = me.authenticate('shashankn96@gmail.com', 'abc123')
const authAttempt4 = me.authenticate('shashankn96@gmail.com', 'likeAStudent')
console.log(authAttempt3, authAttempt4)

me.post()
me.post('We need more women in programming')
me.post('We need more non-degree holders in tech')

const shashankPosts = me.getPosts()
console.log(shashankPosts)

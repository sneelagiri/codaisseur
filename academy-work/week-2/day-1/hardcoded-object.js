// hardcoded-object.js
const user = {
  firstName: 'Wouter',
  lastName: 'de Vos',
  password: 'likeABoss',
  email: 'wouter@wouter.com',
  posts: [],
  authenticate: function(email, password){
      if(email === this.email && password === this.password){
          return true
      } else {
          return false
      }
  },
  post: function(title){
      if(!title) return console.log('please provide a title to post')
      this.posts.push({ id: this.posts.length + 1, title: title })
  },
  getPosts: function(){
      return this.posts
  }
}
const authAttempt1 = user.authenticate('wouter@wouter.com', 'hacketyhack') // returns false
const authAttempt2 = user.authenticate('wouter@wouter.com', 'likeABoss') // returns true
console.log(authAttempt1, authAttempt2)
user.post() // no post is created
user.post('7 Productivity hacks using Asana')
user.post('We need more diversity in programming')
const woutersPosts = user.getPosts() // array of 2 posts
console.log(woutersPosts)
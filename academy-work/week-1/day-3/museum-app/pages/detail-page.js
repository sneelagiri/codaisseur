function submitComment() {
    const inputField = document.getElementById('name')
    const name = inputField.value
    const inputField2 = document.getElementById('msg')
    const msg = inputField2.value
    const comment = document.getElementById('comments')
    const h3 = document.getElementById('commenter')
    const p = document.getElementById('theComment')
    
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)

    console.log(comment)
    
}

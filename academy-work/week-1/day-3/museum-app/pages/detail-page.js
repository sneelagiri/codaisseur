function submitComment() {
    const inputField = document.getElementById('name')
    const name = inputField.value
    const inputField2 = document.getElementById('msg')
    const msg = inputField2.value
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)

    console.log(comment)
    
    const commentSection = document.getElementById('comments')

    console.log(commentSection)

    commentSection.appendChild(comment)

    inputField.value = null
    textArea.value = null
    
}

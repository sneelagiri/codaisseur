{
    const message = "I'm inside a block statement."
    console.log(message)
    {
        const message = "I'm inside a block statement, inside another block statement."
        console.log(message)
    }
    console.log(message)
}

//example 2
for (let i = 0; i < 5; i++) {
    console.log("I'm inside the loop, and i == " + i)
}
console.log("I'm outside of the loop, and i == " + i)  
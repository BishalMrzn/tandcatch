try {
    // console.log("1")
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    // console.log("2")

    if (age > 100) {
        console.log("hello")
        // throw new Error(("this is err"))
        throw new SyntaxError(("this is syntax error"))
        
    }
}
catch (err) {
    console.log(err.message)
    console.log(err.name)
    console.log(err.stack)

}
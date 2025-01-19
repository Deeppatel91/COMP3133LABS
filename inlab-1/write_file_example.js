const fs= require('fs')

var data = "Hello World!"

fs.writeFile('output.txt', 'Hello World!', (err) => {
    if (err) {
        console.error(err.message)
        return
    }
    console.log('File has been written successfully')
})
data = "Testing..."
var error = fs.writeFileSync('output.txt', data)
console.log('File has been written synchronously')
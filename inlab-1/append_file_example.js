const fs = require('fs');
var dataToAppend = "This is the data to append";

fs.appendFile('output.txt', dataToAppend, (err) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log('Data has been appended to the file');
});

const error = fs.appendFileSync('output.txt', dataToAppend);


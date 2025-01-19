const fs = require('fs');

console.log("--start--");

// Asynchronous read using readFile
fs.readFile('input.txt', (err, data) => {
    if (err) {
        console.error("Error reading file asynchronously:", err.message);
        return;
    }
    console.log("Asynchronous read: " + data.toString());
});

// Synchronous read using readSync
try {
    // Open the file to get the file descriptor
    const fd = fs.openSync('input.txt', 'r');

    // Allocate a buffer to store file contents
    const buffer = Buffer.alloc(1024);

    // Read the contents into the buffer
    const bytesRead = fs.readSync(fd, buffer, 0, buffer.length, null);

    console.log("Synchronous read: " + buffer.toString('utf8', 0, bytesRead));

    // Close the file descriptor
    fs.closeSync(fd);
} catch (err) {
    console.error("Error reading file synchronously:", err.message);
}

console.log("--End--");

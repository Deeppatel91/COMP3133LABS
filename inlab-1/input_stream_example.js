const fs = require('fs');
var zlib = require('zlib');

const readStream = fs.createReadStream('input_stream.txt');
const writeStream = fs.createWriteStream('output_stream.txt');

// Read Stream Events
readStream.on('data', (chunk) => {
    console.log(`Chunk Length: ${chunk.length}`);
    console.log(`Chunk Content: ${chunk.toString()}`);
});

readStream.on('end', () => {
    console.log('Input Stream Ends');
});

readStream.on('error', (err) => {
    console.error(`Read Stream Error: ${err.message}`);
});

readStream.on('close', () => {
    console.log('Input Stream Closed');
});

// Write Stream Error Event
writeStream.on('error', (err) => {
    console.error(`Write Stream Error: ${err.message}`);
});

// Pipe the Read Stream to the Write Stream
readStream.pipe(writeStream);

// Pipe the Read Stream to Gzip and Write Compressed File
readStream.pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('output_stream.txt.gz'))
    .on('finish', () => {
        console.log('File Compressed Successfully');
    });

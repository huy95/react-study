const fs = require('fs')
const hello = 'Hello word'
const http = require('http')


// const textIn = fs.readFileSync('./txt/start.txt', 'utf-8')
// console.log(textIn)

// const final = "this is what we know about the ${textIn}.\nCrated on ${Date.now()}";
// fs.writeFileSync('./txt/final.txt', final);
// console.log('file written!')

// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//     console.log(data);
// })

// console.log('readFile')

//SERVER
const server = http.createServer(async (req, res) => {
    const path = req.url;

    if (path === '/' || path === 'overview') {
        res.end('this is overview')
    } else if (path === '/product') {
        res.end('this is product')
    } else if (path === '/api') {
        fs.readFile('./dev-data/data.json', 'utf-8', (err, data) => {
            // const productData = JSON.parse(data);
            // console.log(productData)
        })
        fs.readFile('./dev-data/data.json', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
        
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
            console.log(data);
        });

    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        })
        res.end("<h1>Page not found</h1>")
    }
   
})

server.listen(8000, '127.0.0.1', () => {
    console.log('listening to requests on port', "127.0.0.1:8000")
})
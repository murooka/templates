const connect = require('connect');
const http = require('http')
const static = require('serve-static')
const livereload = require('livereload');

const port = 3000;

{
    console.log(`listen on http://localhost:${port}`);

    const server = connect();
    server.use(static(__dirname + '/../public', {'index': ['index.html']}));
    server.listen(port);
}

{
    const server = livereload.createServer();
    server.watch(__dirname + "/../public");
}

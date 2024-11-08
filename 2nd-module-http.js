import http from 'http';

// Create an HTTP server
const server = http.createServer((request, response) => {
    // Check the request URL and respond accordingly
    if (request.url === '/') {
        // Home route: Respond with a 200 status and welcome message
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('Hello. Welcome to the Homepage');
        response.end();
    } else if (request.url === '/about') {
        // About route: Respond with a 200 status and about message
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('Hello. This is the About page');
        response.end();
    } else {
        // Any other route: Respond with a 404 status and a not found message
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.write(`
            <h1>Oops</h1>
            <p>Page not found</p>
            <a href="/">Back to Homepage</a>
        `);
        response.end();
    }
});

// Define the port the server will listen on
const PORT = 3000;

// Start the server and log a message to the console
server.listen(PORT, () => {
    console.log(`Server is up at http://localhost:${PORT}`);
});

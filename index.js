// Entry point for the application

const server = require('./server');

// Start the server to listen for incoming requests on a specific port.
// Additional setup can be configured here.
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
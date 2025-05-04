const { execSync } = require('child_process');
const path = require('path');

console.log('Starting web server...');

try {
  // Get the path to the serve executable
  const servePath = path.join(__dirname, 'node_modules', '.bin', 'serve');
  
  // Execute the serve command
  const output = execSync(`"${servePath}" .`, { stdio: 'inherit' });
  
  console.log('Server started successfully');
} catch (error) {
  console.error('Failed to start server:', error.message);
}

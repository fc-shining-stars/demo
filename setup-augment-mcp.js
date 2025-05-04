// Setup script for Augment MCP Integration
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Check if Node.js and npm are available
try {
  console.log('Checking Node.js and npm installation...');
  const nodeVersion = execSync('node --version').toString().trim();
  const npmVersion = execSync('npm --version').toString().trim();
  
  console.log(`Node.js version: ${nodeVersion}`);
  console.log(`npm version: ${npmVersion}`);
  
  // Install MCP Sequential Thinking
  console.log('Installing MCP Sequential Thinking...');
  execSync('npm install --no-save @modelcontextprotocol/server-sequential-thinking', {
    stdio: 'inherit'
  });
  
  console.log('MCP Sequential Thinking installed successfully');
  
  // Verify Augment configuration
  const augmentConfigPath = path.join(__dirname, '.augment', 'config.json');
  if (fs.existsSync(augmentConfigPath)) {
    console.log('Augment configuration found');
  } else {
    console.error('Augment configuration not found. Please make sure .augment/config.json exists.');
  }
  
  console.log('Setup completed successfully');
} catch (error) {
  console.error('Setup failed:', error.message);
  console.log('Please make sure Node.js and npm are installed and in your PATH');
  process.exit(1);
}

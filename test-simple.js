/**
 * Simple test script
 */

console.log('Testing simple script...');

try {
  // Test basic functionality
  console.log('This is a test');
  
  // Try to import a module
  const fs = require('fs');
  console.log('Successfully imported fs module');
  
  // List files in the current directory
  const files = fs.readdirSync('.');
  console.log('Files in current directory:', files);
  
  console.log('All tests passed successfully!');
} catch (error) {
  console.error('Error in test script:', error);
}

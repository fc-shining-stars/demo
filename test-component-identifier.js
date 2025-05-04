/**
 * Test script for component identifier
 */

console.log('Testing component identifier...');

try {
  // Import design system config
  console.log('Attempting to import DesignSystemConfig...');
  const DesignSystemConfig = require('./js/design-system-config');
  console.log('DesignSystemConfig imported successfully');
  
  // Import component identifier
  console.log('Attempting to import ComponentIdentifier...');
  const ComponentIdentifier = require('./js/component-identifier');
  console.log('ComponentIdentifier imported successfully');
  
  // Test ComponentIdentifier
  console.log('\nTesting ComponentIdentifier:');
  const componentIdentifier = new ComponentIdentifier(DesignSystemConfig);
  console.log('- ComponentIdentifier instantiated successfully');
  
  console.log('\nAll tests passed successfully!');
} catch (error) {
  console.error('Error testing component identifier:', error);
}

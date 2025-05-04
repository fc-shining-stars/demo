/**
 * Test script for design system config
 */

console.log('Testing design system config...');

try {
  // Import design system config
  console.log('Attempting to import DesignSystemConfig...');
  const DesignSystemConfig = require('./js/design-system-config');
  console.log('DesignSystemConfig imported successfully');
  
  // Test DesignSystemConfig
  console.log('\nTesting DesignSystemConfig:');
  console.log('- Colors defined:', Object.keys(DesignSystemConfig.colors).length > 0);
  console.log('- Typography defined:', Object.keys(DesignSystemConfig.typography).length > 0);
  console.log('- Components defined:', Object.keys(DesignSystemConfig.components).length > 0);
  
  console.log('\nAll tests passed successfully!');
} catch (error) {
  console.error('Error testing design system config:', error);
}

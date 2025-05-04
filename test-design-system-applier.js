/**
 * Test script for design system applier
 */

console.log('Testing design system applier...');

try {
  // Import design system config
  console.log('Attempting to import DesignSystemConfig...');
  const DesignSystemConfig = require('./js/design-system-config');
  console.log('DesignSystemConfig imported successfully');
  
  // Import component identifier
  console.log('Attempting to import ComponentIdentifier...');
  const ComponentIdentifier = require('./js/component-identifier');
  console.log('ComponentIdentifier imported successfully');
  
  // Import design system applier
  console.log('Attempting to import DesignSystemApplier...');
  const DesignSystemApplier = require('./js/design-system-applier');
  console.log('DesignSystemApplier imported successfully');
  
  // Test DesignSystemApplier
  console.log('\nTesting DesignSystemApplier:');
  const designSystemApplier = new DesignSystemApplier(DesignSystemConfig);
  console.log('- DesignSystemApplier instantiated successfully');
  
  console.log('\nAll tests passed successfully!');
} catch (error) {
  console.error('Error testing design system applier:', error);
}

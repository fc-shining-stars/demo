/**
 * Test script with mocked browser APIs
 */

console.log('Testing with mocked browser APIs...');

// Mock browser APIs
global.window = {
  getComputedStyle: () => ({
    color: 'rgb(0, 0, 0)',
    backgroundColor: 'rgb(255, 255, 255)',
    fontSize: '16px',
    fontWeight: '400'
  })
};

global.document = {
  documentElement: {
    getAttribute: () => 'light'
  }
};

try {
  // Import design system config
  console.log('Attempting to import DesignSystemConfig...');
  const DesignSystemConfig = require('./js/design-system-config');
  console.log('DesignSystemConfig imported successfully');
  
  // Import component identifier
  console.log('Attempting to import ComponentIdentifier...');
  const ComponentIdentifier = require('./js/component-identifier');
  console.log('ComponentIdentifier imported successfully');
  
  // Create a mock element
  const mockElement = {
    tagName: 'BUTTON',
    className: 'btn btn-primary',
    style: {},
    matches: (selector) => selector.includes('btn') || selector.includes('button'),
    getAttribute: () => null,
    parentElement: null
  };
  
  // Test ComponentIdentifier
  console.log('\nTesting ComponentIdentifier:');
  const componentIdentifier = new ComponentIdentifier(DesignSystemConfig);
  console.log('- ComponentIdentifier instantiated successfully');
  
  // Import design system applier
  console.log('\nAttempting to import DesignSystemApplier...');
  const DesignSystemApplier = require('./js/design-system-applier');
  console.log('DesignSystemApplier imported successfully');
  
  // Test DesignSystemApplier
  console.log('\nTesting DesignSystemApplier:');
  const designSystemApplier = new DesignSystemApplier(DesignSystemConfig);
  console.log('- DesignSystemApplier instantiated successfully');
  
  // Import UI/UX description parser
  console.log('\nAttempting to import UIUXDescriptionParser...');
  const UIUXDescriptionParser = require('./js/uiux-description-parser');
  console.log('UIUXDescriptionParser imported successfully');
  
  // Test UIUXDescriptionParser
  console.log('\nTesting UIUXDescriptionParser:');
  const uiuxParser = new UIUXDescriptionParser(DesignSystemConfig);
  console.log('- UIUXDescriptionParser instantiated successfully');
  
  console.log('\nAll tests passed successfully!');
} catch (error) {
  console.error('Error testing with mocked browser APIs:', error);
}

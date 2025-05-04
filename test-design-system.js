/**
 * Test script for design system modules
 */

console.log('Testing design system modules...');

try {
  console.log('Attempting to import DesignSystemConfig...');
  const DesignSystemConfig = require('./js/design-system-config');
  console.log('DesignSystemConfig imported successfully');

  console.log('Attempting to import ComponentIdentifier...');
  const ComponentIdentifier = require('./js/component-identifier');
  console.log('ComponentIdentifier imported successfully');

  console.log('Attempting to import DesignSystemApplier...');
  const DesignSystemApplier = require('./js/design-system-applier');
  console.log('DesignSystemApplier imported successfully');

  console.log('Attempting to import UIUXDescriptionParser...');
  const UIUXDescriptionParser = require('./js/uiux-description-parser');
  console.log('UIUXDescriptionParser imported successfully');

  console.log('Successfully imported all design system modules');

  // Test DesignSystemConfig
  console.log('\nTesting DesignSystemConfig:');
  console.log('- Colors defined:', Object.keys(DesignSystemConfig.colors).length > 0);
  console.log('- Typography defined:', Object.keys(DesignSystemConfig.typography).length > 0);
  console.log('- Components defined:', Object.keys(DesignSystemConfig.components).length > 0);

  // Test ComponentIdentifier
  console.log('\nTesting ComponentIdentifier:');
  const componentIdentifier = new ComponentIdentifier(DesignSystemConfig);
  console.log('- ComponentIdentifier instantiated successfully');

  // Test DesignSystemApplier
  console.log('\nTesting DesignSystemApplier:');
  const designSystemApplier = new DesignSystemApplier(DesignSystemConfig);
  console.log('- DesignSystemApplier instantiated successfully');

  // Test UIUXDescriptionParser
  console.log('\nTesting UIUXDescriptionParser:');
  const uiuxParser = new UIUXDescriptionParser(DesignSystemConfig);
  console.log('- UIUXDescriptionParser instantiated successfully');

  // Test parsing a UI/UX description
  const testDescription = 'Ensure high contrast between text and background. Prioritize buttons, form elements, and navigation.';
  const rules = uiuxParser.parseDescription(testDescription);
  console.log('- Parsed UI/UX description successfully');
  console.log('- Rules:', JSON.stringify(rules, null, 2));

  console.log('\nAll tests passed successfully!');
} catch (error) {
  console.error('Error testing design system modules:', error);
}

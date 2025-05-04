# Adding MCP Sequential Thinking to Augment Settings

This guide will help you add the Model Context Protocol (MCP) Sequential Thinking server to your Augment settings.

## Prerequisites

- Augment installed and configured
- Node.js and npm installed on your system
- Basic familiarity with configuration files

## Method 1: Using the Configuration Files (Recommended)

The easiest way to set up MCP with Augment is to use the configuration files provided in this repository:

1. Make sure the `.augment` directory and its contents are in your project root
2. Run the setup script:
   ```
   node setup-augment-mcp.js
   ```
3. Restart Augment

## Method 2: Manual Configuration through Augment UI

If you prefer to configure MCP through the Augment UI:

1. Open Augment
2. Click on the Settings icon (gear) in the bottom left corner
3. Navigate to the "Integrations" tab
4. Click "Add Integration"
5. Select "Custom Integration"
6. Fill in the following details:
   - Name: MCP Sequential Thinking
   - Type: External Process
   - Command: npx
   - Arguments: -y @modelcontextprotocol/server-sequential-thinking
   - Auto Start: Enabled
7. Click "Save"
8. Navigate to the "Advanced" tab
9. Add the following custom settings:
   ```json
   {
     "useSequentialThinking": true,
     "sequentialThinkingSteps": 3
   }
   ```
10. Click "Save"
11. Restart Augment

## Verifying the Installation

To verify that MCP Sequential Thinking is working correctly:

1. Open Augment
2. Type `/think What is the best way to implement a sorting algorithm?`
3. You should see Augment respond with a step-by-step reasoning process

## Troubleshooting

If you encounter issues:

1. Check the Augment logs for any error messages
2. Verify that Node.js and npm are installed and in your PATH
3. Try running `npx -y @modelcontextprotocol/server-sequential-thinking` manually to verify it works
4. Make sure the configuration files are in the correct locations

## Additional Resources

- [MCP Documentation](https://modelcontextprotocol.github.io/)
- [Augment Extensions Documentation](https://augment.dev/docs/extensions)
- [Node.js Download](https://nodejs.org/)

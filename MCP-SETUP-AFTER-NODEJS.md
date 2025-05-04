# Setting Up MCP Sequential Thinking After Node.js Installation

Once you have successfully installed Node.js and npm following the instructions in `NODEJS-INSTALLATION-GUIDE.md`, follow these steps to set up MCP Sequential Thinking for Augment.

## Step 1: Install MCP Sequential Thinking Package

Open a new Command Prompt or PowerShell window and run:

```
npm install -g @modelcontextprotocol/server-sequential-thinking
```

This will install the MCP Sequential Thinking server globally on your system.

## Step 2: Verify MCP Installation

Run the following command to verify that MCP Sequential Thinking is installed correctly:

```
npx @modelcontextprotocol/server-sequential-thinking --help
```

You should see the help information for the MCP Sequential Thinking server.

## Step 3: Configure Augment to Use MCP

1. Make sure the `.augment` directory and its contents are in your project root
2. Open Augment
3. Click on the Settings icon (gear) in the bottom left corner
4. Navigate to the "Integrations" tab
5. Click "Add Integration"
6. Select "Custom Integration"
7. Fill in the following details:
   - Name: MCP Sequential Thinking
   - Type: External Process
   - Command: npx
   - Arguments: @modelcontextprotocol/server-sequential-thinking
   - Auto Start: Enabled
8. Click "Save"
9. Restart Augment

## Step 4: Test MCP Sequential Thinking

To test that MCP Sequential Thinking is working correctly:

1. Open Augment
2. Type `/think What is the best way to implement a sorting algorithm?`
3. You should see Augment respond with a step-by-step reasoning process

## Troubleshooting

If you encounter issues:

1. Make sure Node.js and npm are installed correctly
2. Try running the MCP server manually:
   ```
   npx @modelcontextprotocol/server-sequential-thinking
   ```
3. Check the Augment logs for any error messages
4. Make sure the configuration files are in the correct locations

## Additional Resources

- [MCP Documentation](https://modelcontextprotocol.github.io/)
- [Augment Extensions Documentation](https://augment.dev/docs/extensions)
- [Node.js Documentation](https://nodejs.org/en/docs/)

# Node.js and npm Installation Guide

This guide provides instructions for installing Node.js and npm on your system.

## Windows Installation

### Method 1: Using the Official Installer (Recommended)

1. **Download the installer**:
   - Visit [Node.js official website](https://nodejs.org/)
   - Download the LTS (Long Term Support) version
   - Choose the Windows Installer (.msi) for your system (64-bit recommended)

2. **Run the installer**:
   - Double-click the downloaded .msi file
   - Follow the installation wizard
   - Accept the license agreement
   - Choose the installation location (default is recommended)
   - Select features to install (default is recommended)
   - Click "Install"

3. **Verify installation**:
   - Open a new Command Prompt or PowerShell window
   - Run `node --version` to verify Node.js installation
   - Run `npm --version` to verify npm installation

### Method 2: Using Chocolatey Package Manager

If you have Chocolatey installed:

1. Open an Administrator Command Prompt
2. Run: `choco install nodejs-lts`
3. Verify with `node --version` and `npm --version`

### Method 3: Using Windows Subsystem for Linux (WSL)

If you're using WSL:

1. Open your WSL terminal
2. Update package lists: `sudo apt update`
3. Install Node.js: `sudo apt install nodejs`
4. Install npm: `sudo apt install npm`
5. Verify with `node --version` and `npm --version`

## macOS Installation

### Using Homebrew (Recommended)

1. Install Homebrew if not already installed:
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. Install Node.js and npm:
   ```
   brew install node
   ```

3. Verify installation:
   ```
   node --version
   npm --version
   ```

### Using the Official Installer

1. Download the macOS Installer from [Node.js website](https://nodejs.org/)
2. Run the installer package
3. Follow the installation instructions
4. Verify with `node --version` and `npm --version`

## Linux Installation

### Using Package Manager (Ubuntu/Debian)

```bash
# Update package lists
sudo apt update

# Install Node.js and npm
sudo apt install nodejs npm

# Verify installation
node --version
npm --version
```

### Using Package Manager (Fedora/RHEL/CentOS)

```bash
# Install Node.js and npm
sudo dnf install nodejs

# Verify installation
node --version
npm --version
```

### Using NVM (Node Version Manager)

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# Reload shell configuration
source ~/.bashrc  # or source ~/.zshrc if using zsh

# Install latest LTS version of Node.js
nvm install --lts

# Verify installation
node --version
npm --version
```

## Troubleshooting

### Common Issues

1. **Command not found after installation**:
   - Close and reopen your terminal/command prompt
   - Check if Node.js is in your PATH
   - Try restarting your computer

2. **Permission errors during npm global installs**:
   - On Windows: Run Command Prompt as Administrator
   - On macOS/Linux: Use `sudo npm install -g [package]` or [fix npm permissions](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)

3. **Old version installed**:
   - Use a version manager like nvm (Node Version Manager)
   - Or uninstall and reinstall the latest version

### Getting Help

- Official Node.js documentation: https://nodejs.org/en/docs/
- npm documentation: https://docs.npmjs.com/
- Node.js GitHub repository: https://github.com/nodejs/node

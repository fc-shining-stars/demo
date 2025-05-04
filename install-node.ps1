# PowerShell script to install Node.js
Write-Host "Downloading Node.js installer..."
$nodeUrl = "https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi"
$installerPath = "$env:TEMP\node-installer.msi"

# Download the installer
Invoke-WebRequest -Uri $nodeUrl -OutFile $installerPath

# Install Node.js
Write-Host "Installing Node.js..."
Start-Process -FilePath "msiexec.exe" -ArgumentList "/i", $installerPath, "/quiet", "/norestart" -Wait

# Verify installation
Write-Host "Verifying installation..."
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")

try {
    $nodeVersion = & "C:\Program Files\nodejs\node.exe" --version
    $npmVersion = & "C:\Program Files\nodejs\npm.cmd" --version
    
    Write-Host "Node.js installed successfully: $nodeVersion"
    Write-Host "npm installed successfully: $npmVersion"
} catch {
    Write-Host "Failed to verify Node.js installation: $_"
}

# Clean up
Remove-Item $installerPath -Force
Write-Host "Installation completed"

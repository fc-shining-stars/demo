@echo off
echo Downloading Node.js installer...
powershell -Command "Invoke-WebRequest -Uri 'https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi' -OutFile 'node-installer.msi'"

echo Installing Node.js...
msiexec /i node-installer.msi /qn

echo Waiting for installation to complete...
timeout /t 60

echo Verifying installation...
set PATH=%PATH%;C:\Program Files\nodejs\
node --version
npm --version

echo Installation completed

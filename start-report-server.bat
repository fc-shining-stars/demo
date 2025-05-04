@echo off
echo Starting Report Server...
echo Reports will be saved to %~dp0reports directory

:: Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
  echo Node.js is not installed. Please install Node.js to use the report server.
  echo You can download it from https://nodejs.org/
  pause
  exit /b 1
)

:: Check if required packages are installed
if not exist "node_modules\express" (
  echo Installing required packages...
  npm install express multer cors
)

:: Create reports directory if it doesn't exist
if not exist "reports" mkdir reports

:: Start the server
node server/save-report.js

pause

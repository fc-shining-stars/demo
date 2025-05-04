@echo off
echo Starting Automated Contrast Fixer...
echo This will automatically detect and fix contrast issues in the website.

:: Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
  echo Node.js is not installed. Please install Node.js to use the automated contrast fixer.
  echo You can download it from https://nodejs.org/
  pause
  exit /b 1
)

:: Check if required packages are installed
if not exist "node_modules\puppeteer" (
  echo Installing required packages...
  npm install puppeteer
)

:: Create reports directory if it doesn't exist
if not exist "reports" mkdir reports

:: Create css directory if it doesn't exist
if not exist "css" mkdir css

:: Run the automated contrast fixer
node automation/auto-contrast-fixer.js

echo.
echo Automated contrast fixing complete!
echo Check the reports directory for detailed reports.
echo The auto-contrast-fixes.css file has been created/updated with the necessary fixes.
echo.
echo Press any key to exit...
pause > nul

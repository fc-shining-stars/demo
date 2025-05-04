@echo off
echo Generating CSS Fixes...
echo.

:: Create css directory if it doesn't exist
if not exist "css" mkdir css

:: Run the CSS generation script
node automation/generate-css-fixes.js

echo.
echo CSS generation complete!
echo Check the css directory for the generated fixes.
echo.
echo Press any key to exit...
pause > nul

@echo off
echo Verifying Contrast Fixes...
echo.

:: Create reports directory if it doesn't exist
if not exist "reports" mkdir reports

:: Create logs/screenshots directory if it doesn't exist
if not exist "logs\screenshots" mkdir logs\screenshots

:: Run the verification script
node automation/verify-contrast-fixes.js

echo.
echo Contrast verification complete!
echo Check the reports directory for detailed reports.
echo.
echo Press any key to exit...
pause > nul

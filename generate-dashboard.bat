@echo off
echo Generating Contrast Fixing Dashboard...
echo.

:: Create dashboard directory if it doesn't exist
if not exist "dashboard" mkdir dashboard

:: Run the dashboard generator
node automation/generate-dashboard.js

echo.
echo Dashboard generation complete!
echo Opening dashboard in browser...
echo.

:: Open the dashboard in the default browser
start "" "dashboard\index.html"

echo Press any key to exit...
pause > nul

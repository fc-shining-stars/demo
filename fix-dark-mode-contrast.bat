@echo off
echo Running Dark Mode Contrast Fixes...
echo.

:: Create reports directory if it doesn't exist
if not exist "reports" mkdir reports

:: Create logs/screenshots directory if it doesn't exist
if not exist "logs\screenshots" mkdir logs\screenshots

:: Run the dark mode contrast fixer
node automation/apply-dark-mode-fixes.js

echo.
echo Dark mode contrast fixing complete!
echo Check the reports directory for detailed reports.
echo.
echo Press any key to exit...
pause > nul

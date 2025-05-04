@echo off
echo Running A/B Testing for Contrast Fixes...
echo.

:: Create directories if they don't exist
if not exist "reports" mkdir reports
if not exist "logs\screenshots\ab-tests" mkdir logs\screenshots\ab-tests
if not exist "css\ab-tests" mkdir css\ab-tests

:: Run the A/B testing script
node automation/ab-test-contrast-fixes.js

echo.
echo A/B Testing complete!
echo Check the reports directory for detailed results.
echo.
echo Press any key to exit...
pause > nul

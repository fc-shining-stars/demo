@echo off
echo Analyzing Problem Components...
echo.

:: Create reports directory if it doesn't exist
if not exist "reports" mkdir reports

:: Run the analysis script
node automation/analyze-problem-components.js

echo.
echo Component analysis complete!
echo Check the reports directory for detailed reports.
echo.
echo Press any key to exit...
pause > nul

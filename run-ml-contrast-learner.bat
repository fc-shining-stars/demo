@echo off
echo Running Machine Learning Contrast Learner...
echo.

:: Create directories if they don't exist
if not exist "automation\ml-models" mkdir automation\ml-models
if not exist "css" mkdir css

:: Run the ML contrast learner
node automation/ml-contrast-learner.js

echo.
echo ML contrast learning complete!
echo Check the css directory for the generated fixes.
echo.
echo Press any key to exit...
pause > nul

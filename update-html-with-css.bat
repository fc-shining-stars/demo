@echo off
echo Updating HTML files with CSS link...
echo.

:: Run the update script
node automation/update-html-with-css.js

echo.
echo HTML updates complete!
echo.
echo Press any key to exit...
pause > nul

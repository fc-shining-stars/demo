@echo off
echo FC Shining Stars - Contrast Fixing Suite
echo =======================================
echo.

:: Step 1: Update HTML files with CSS link
echo Step 1: Updating HTML files with CSS link...
call update-html-with-css.bat
echo.

:: Step 2: Apply dark mode contrast fixes
echo Step 2: Applying dark mode contrast fixes...
call fix-dark-mode-contrast.bat
echo.

:: Step 3: Verify contrast fixes
echo Step 3: Verifying contrast fixes...
call verify-contrast-fixes.bat
echo.

:: Step 4: Analyze problem components
echo Step 4: Analyzing problem components...
call analyze-components.bat
echo.

:: Step 5: Generate component-specific CSS fixes
echo Step 5: Generating component-specific CSS fixes...
call generate-css-fixes.bat
echo.

:: Step 6: Update HTML files with new CSS links
echo Step 6: Updating HTML files with new CSS links...
call update-html-with-css.bat
echo.

:: Step 7: Final verification
echo Step 7: Final verification...
call verify-contrast-fixes.bat
echo.

echo All steps completed!
echo Check the reports directory for detailed reports.
echo.
echo Press any key to exit...
pause > nul

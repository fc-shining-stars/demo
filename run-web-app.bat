@echo off
echo Starting FC Shining Stars web application...
cd %~dp0
"C:\Program Files\nodejs\node.exe" "%~dp0\node_modules\serve\build\main.js" --listen 3000 .

@echo off
echo FC Shining Stars Component Generator
echo Usage: generate-component.bat [name] [type] [description] [outputDir]
echo Example: generate-component.bat Button vanilla "A reusable button component" ./components

"C:\Program Files\nodejs\node.exe" automation/ai-coding-assistant.js generate-component %*

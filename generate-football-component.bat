@echo off
echo FC Shining Stars Football Component Generator
echo Usage: generate-football-component.bat [name] [type] [description] [outputDir] [category]
echo Example: generate-football-component.bat PlayerCard vanilla "A card displaying player information" ./components Player

"C:\Program Files\nodejs\node.exe" automation/website-component-generator.js generate %*

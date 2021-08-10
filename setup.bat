@echo off
echo Installing dependencies.. 
npm i axios discord.js dotenv gamedig minecraft-server-status minecraft-server-util nodemon
set /p id="Enter Bot Token: "
echo Writing
echo token=%id%> .env
echo npm run devStart> start.bat
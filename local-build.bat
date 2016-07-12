@echo off
echo Starting SUL.js local build...
echo ==============================
echo [1/3] Gulp - JSHint
call gulp hint
echo [!] Press any key to continue or close the window
pause
echo [2/3] Gulp - Build
call gulp build
echo [3/3] Pushing changes to GitHub...
git status
git add .
set /p commit="Enter commit description: "
git commit -m "%commit%"
git push origin master
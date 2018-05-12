SET dir=C:\SeleniumGridHub
ECHO %dir%
IF EXIST "%dir%\selenium-server-standalone.jar" (
    ECHO Selenium jar is exist at location : %dir%\selenium-server-standalone.jar
) ELSE (
    mkdir %dir%
    bitsadmin.exe /transfer "Download SeleniumGrid" https://selenium-release.storage.googleapis.com/3.11/selenium-server-standalone-3.11.0.jar %dir%\selenium-server-standalone.jar
)

ECHO %dir% Directory is Created & All utilities are configured
start cmd.exe /k "cd /d %dir% && java -jar selenium-server-standalone.jar -role hub -maxSession 100"

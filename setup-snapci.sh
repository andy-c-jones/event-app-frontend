download-android
echo y | android update sdk --no-ui --filter platform-tool
echo y | android update sdk --no-ui --filter tool > /dev/null
echo y | android update sdk --no-ui --filter android-22
echo y | android update sdk --no-ui --filter build-tools-20.0.0 --all > /dev/null

# expo-test2

React Native with Expo
Creating a React Native project with Expo (https://docs.expo.io/)
Note - After creating project using expo init, removed the .git that comes with expo so I could track project add to GitHub repo.

Emulators
For emulators used the following:
iOS - on iphone, downloaded Expo Go and created Expo account
Android - downloaded Android Studio and configured Android Virtual Device

Firebase
Installed firebase package.
Created firebase project with webapp.
Adding connection to firebase. environment variables stored in .env.local file.

Environment Variables
Used react-native-dotenv (https://www.npmjs.com/package/react-native-dotenv) to hide Firebase configuration variables in .env file. .env file was added to .gitignore.
Also needed to install https://github.com/brysgo/babel-plugin-inline-dotenv
This article has additional steps to get the .env working: https://heartbeat.fritz.ai/how-to-build-an-email-authentication-app-with-firebase-firestore-and-react-native-a18a8ba78574#570a

Resources:
Expo - https://docs.expo.io/
Expo Go for iPhone
Android Studio
Firebase Console

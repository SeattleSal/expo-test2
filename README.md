# expo-test2

## React Native with Expo
Creating a React Native project with [Expo](https://docs.expo.io/)
Note - After creating project using expo init, removed the .git that comes with expo so I could track project add to GitHub repo.

## Emulators
For emulators used the following:
* iOS - on iphone, downloaded Expo Go and created Expo account
* Android - downloaded Android Studio and configured Android Virtual Device

## Firebase
Installed [firebase](https://github.com/firebase/firebase-js-sdk) package.
In Firebase console, created firebase project with webapp.

## Environment Variables
Environment variables (firebase config values) are stored in a environment.js file and use Expo Release Channels (https://alxmrtnz.com/thoughts/2019/03/12/environment-variables-and-workflow-in-expo.html). More info on release channels: https://docs.expo.io/distribution/release-channels/

Note - tried to use [react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv) to hide Firebase configuration variables in .env file. .env file was added to .gitignore. and also installed [babel-plugin-inline-dotenv](https://github.com/brysgo/babel-plugin-inline-dotenv) but kept getting errors in the emulators. If you want to use a .env instead, this article has additional steps in the setting up variables section to get the .env working: https://heartbeat.fritz.ai/how-to-build-an-email-authentication-app-with-firebase-firestore-and-react-native-a18a8ba78574#570a

## Navigation
Expo recommends using React Navigation (instead of React Router for React projects or React Native Router for React Native CLI projects - see https://docs.expo.io/guides/routing-and-navigation/)
For this project I installed React Navigation (https://reactnavigation.org/docs/getting-started/) and dependencies. I had to separately install missed dependencies.

I added two types of navigation:
Stack Navigation
Bottom Tab Navigation - requires additional npm package npm install @react-navigation/bottom-tabs
next up - nested navigation!

## Resources:
Expo - https://docs.expo.io/
Expo Go for iPhone
Android Studio
Firebase Console

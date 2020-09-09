  react-native init manager

  created with Yarn

  Run instructions for iOS:
    • cd "/Users/matthiashaefeli/Documents/projects/udemy/manager" && npx react-native run-ios
    - or -
    • Open manager/ios/manager.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button

  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "/Users/matthiashaefeli/Documents/projects/udemy/manager" && npx react-native run-android

  Run instructions for Windows and macOS:
    • See https://aka.ms/ReactNative for the latest up-to-date instructions.
    

## Navigation error
On chapter 387 we install react-native-router-flux. If you install like it is shown in the video you will have an error.
error: Error: Unable to resolve module `react/lib/ReactComponentWithRenderMixin` from .........

this is the solution to that error.

1 Uninstall react-native-router-flux
2 Remove node modules => rm -rf node_modules
3 yarn install
4 yarn install react-native-screens
5 yarn install react-native-gesture-handler
6 yarn install react-native-reanimated
7 yarn install react-native-router-flux
8 cd ios
9 pod install
10 cd ..

In the Router.js change the first Scene to Stack:

```
<Router>
  <Stack key='root'>
    <Scene key='login' component={LoginForm} title='Please Login'/>
  </Stack>
</Router>
```

    

import { registerRootComponent } from "expo";
import App from "./App";
import Amplify from "aws-amplify-react-native";
import config from "./src/config";

console.disableYellowBox = true;

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
});

registerRootComponent(App);

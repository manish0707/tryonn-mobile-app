import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AppStackParamsList = {
  Home: undefined;
};

export type AuthStackParamsList = {
  Login: undefined;
};

export type RootStackParamsList = {
  AppStack: NavigatorScreenParams<AppStackParamsList>;
  AuthStack: NavigatorScreenParams<AuthStackParamsList>;
};

export type Navigation = NativeStackNavigationProp<RootStackParamsList>;

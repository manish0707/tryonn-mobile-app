import React from 'react';
import {View} from 'react-native';
import {AppText} from './components/core/AppText';
import BaseButton from './components/ui/Button/BaseButton';
import VariantButton from './components/ui/Button/VariantButton';
import Icon from './components/ui/Icon';
import {Icons} from './assets/icons';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import MainNavigator from './navigation/MainNavigator';
import ThemeProvider from './context/ThemeContext';
// import Home from './screens/App/Home';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      {/* <Text>Home Screen</Text> */}

      <AppText variant="h1">Header 1</AppText>
      <AppText variant="h2">Header 2</AppText>
      <AppText variant="h3">Header 3</AppText>
      <AppText variant="h4">Header 4</AppText>
      <AppText variant="h4Medium">Header 4</AppText>

      <AppText variant="body1">Body 1</AppText>
      <AppText variant="body1Medium">Body 1</AppText>
      <AppText variant="body1SemiBold">Body 1</AppText>

      <AppText variant="body2">Body 2</AppText>
      <AppText variant="body2Medium">Body 2</AppText>
      <AppText variant="body2SemiBold">Body 2</AppText>

      <AppText variant="body3">Body 3</AppText>
      <AppText variant="body3Medium">Body 3</AppText>
      <AppText variant="body3SemiBold">Body 3</AppText>

      <View style={{padding: 10}}>
        <BaseButton>
          <AppText>Button</AppText>
        </BaseButton>

        <View style={{marginVertical: 10}} />

        <VariantButton variant="dark">Button</VariantButton>

        <View style={{marginVertical: 10}} />

        <VariantButton variant="light" onPress={() => console.log('first')}>
          Button
        </VariantButton>

        <View style={{marginVertical: 10}} />

        <VariantButton variant="disabled">Button</VariantButton>

        <Icon source={Icons.arrowRight} />
      </View>
      {/* <Button title="Go to Details" onPress={() => navigation.navigate('Details')} /> */}
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainNavigator />

        {/* <HomeScreen /> */}
      </ThemeProvider>
    </Provider>
  );
}

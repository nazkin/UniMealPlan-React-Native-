import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import MealsNavStack from './navigation/AppNavigator';
import {enableScreens} from 'react-native-screens'
const fetchFonts = ()=>{
  return Font.loadAsync({
      'open-sans': require('./assets/fonts/Quicksand-Regular.otf'),
      'open-sans-light': require('./assets/fonts/Quicksand-Light.otf'),
      'open-sans-bold': require('./assets/fonts/Quicksand-Bold.otf')
  }) 
}
enableScreens();
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return <AppLoading startAsync = {fetchFonts} onFinish={()=>setFontLoaded(true)}/>
  }

  return (
          <MealsNavStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

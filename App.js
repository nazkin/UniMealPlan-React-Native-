import React, {useState} from 'react';
import { } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import MealsNavStack from './navigation/AppNavigator';
import {enableScreens} from 'react-native-screens';
import mealsReducer from './store/reducers/mealsReducer';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

enableScreens();

//Connecting Redux to our application
const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer)
//********************

const fetchFonts = ()=>{
  return Font.loadAsync({
      'open-sans': require('./assets/fonts/Quicksand-Regular.otf'),
      'open-sans-light': require('./assets/fonts/Quicksand-Light.otf'),
      'open-sans-bold': require('./assets/fonts/Quicksand-Bold.otf')
  }) 
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return <AppLoading startAsync = {fetchFonts} onFinish={()=>setFontLoaded(true)}/>
  }

  return (
    <Provider store={store}>
          <MealsNavStack />
    </Provider>
  );
}



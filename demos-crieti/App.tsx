import { StatusBar } from "expo-status-bar";

// import ViewEffect from "./src/screens/ViewEffect";
// import ViewImages from "./src/screens/ViewImages";
// import ViewPicker from "./src/screens/ViewPicker";
// import ViewState from "./src/screens/ViewState";
// import ViewTasks from "./src/screens/ViewTasks";
// import ViewQuiz from "./src/screens/ViewQuiz";
// import ViewQuizResults from "./src/screens/ViewQuizResults";
// import ViewFranUsers from "./src/screens/ViewFranUsers";

import ViewLogin from "./src/screens/ViewLogin";
import ViewUsers from "./src/screens/ViewUsers";
import ViewNav1 from "./src/screens/ViewNav1";
import ViewCompras from "./src/screens/ViewCompras"; 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, SafeAreaView } from "react-native";

import { AveriaLibre_300Light, AveriaLibre_400Regular, AveriaLibre_700Bold } from '@expo-google-fonts/averia-libre'

import {
  RobotoSlab_300Light,
  RobotoSlab_400Regular,
  RobotoSlab_700Bold,
  RobotoSlab_900Black
} from '@expo-google-fonts/roboto-slab'
import { useFonts } from 'expo-font'; //1

import { AppProvider } from "./src/context/AppContext";
import ViewSkeleton from "./src/screens/ViewSkeleton";
import ViewNewLogin from "./src/screens/ViewNewLogin";

import axios from 'axios';
import config from './src/config/config';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./src/assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
    RobotoSlab_300Light,
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
    RobotoSlab_900Black,
    AveriaLibre_300Light,
    AveriaLibre_400Regular,
    AveriaLibre_700Bold
  }); // 2

  if (fontsLoaded) { //3
    return (
      <AppProvider>
        <>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="ViewLogin"
              screenOptions={{ headerShown: false }} >
              <Stack.Screen name="ViewNav1" component={ViewNav1} />
              <Stack.Screen name="ViewUsers" component={ViewUsers} />
              <Stack.Screen name="ViewLogin" component={ViewLogin} /> 
              <Stack.Screen name="ViewCompras" component={ViewCompras} /> 
              
              {/* <Stack.Screen name="ViewFranUsers" component={ViewFranUsers} /> 
               <Stack.Screen name="ViewNewLogin" component={ViewNewLogin} />
              <Stack.Screen name="ViewSkeleton" component={ViewSkeleton} />
              <Stack.Screen name="ViewState" component={ViewState} />
              <Stack.Screen name="ViewEffect" component={ViewEffect} />
              <Stack.Screen name="ViewImages" component={ViewImages} />
              <Stack.Screen name="ViewPicker" component={ViewPicker} />
              <Stack.Screen name="ViewTasks" component={ViewTasks} />
              <Stack.Screen name="ViewQuiz" component={ViewQuiz} />
              <Stack.Screen name="ViewQuizResults" component={ViewQuizResults} /> */}
            </Stack.Navigator>
          </NavigationContainer>

          <StatusBar
            translucent={false}
            backgroundColor="#fff"
            style="auto" />
        </>
      </AppProvider>
    );
  } else {
    return (
      <>
        <ActivityIndicator size="large" color="#000" />

        <StatusBar
          translucent={false}
          backgroundColor="#fff"
          style="auto" />
      </>
    )
  }
}
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { persistStore } from 'redux-persist';
import { createStore } from 'redux';
import { PersistGate } from 'redux-persist/integration/react'
import reducers from './src/ReduxFloder/Reducer';
import { Provider } from 'react-redux';
import SplashScreen from './src/Screens/SplashScreen'
import OnboardingStep1 from './src/Screens/OnboardingStep1'
import OnboardingStep2 from './src/Screens/OnboardingStep2'
import OnboardingStep3 from './src/Screens/OnboardingStep3'
import OnboardingStep4 from './src/Screens/OnboardingSrep4'
import OnboardingStep5 from './src/Screens/OnboardingStep5'
import OnboardingStep6 from './src/Screens/OnboardingStep6'
import Dashboard from './src/Screens/Dashboard'
import UserProfile from './src/Screens/UserProfile'
import Fav from './src/Screens/Fav'
import CustomCalender from './src/Screens/CustomCalender'
import MyCalender from './src/Screens/Component/MyCalender';
import Reading from './src/Screens/Reading';
import Loading from './src/Screens/Loading';
import { MenuProvider } from 'react-native-popup-menu';
import Compatibility from './src/Screens/Compatibility';
import Loader from './src/Screens/Loader';
import Login from './src/Screens/Login';
import LoginOtp from './src/Screens/LoginOtp';
import Otheruser from './src/Screens/Component/Otheruser';
import CompatibilityCheck from './src/Screens/CompatibilityCheck';
import NameReading from './src/Screens/NameReading';
import Compatibility1 from './src/Screens/Compatibility1';
import Compatibility2 from './src/Screens/Compatibility2';
import Compatibility3 from './src/Screens/Compatibility3';
import BusinessCompatibilityCheck from './src/Screens/BusinessCompatibilityCheck';
import VehicleCompatibilityCheck from './src/Screens/VehicleCompatibilityCheck';
import HouseCompatibilityCheck from './src/Screens/HouseCompatibilityCheck';
import Compatibility4 from './src/Screens/Compatibility4';
import NameCompatibilityCheck from './src/Screens/NameCompatibilityCheck';
import Compatibility5 from './src/Screens/Compatibility5';
import SpouseCompatibilityCheck from './src/Screens/SpouseCompatibilityCheck';
import NameReading1 from './src/Screens/NameReading1';
import Possesions from './src/Screens/Possesions';
import Menu from './src/Screens/Menu';
import EditName from './src/Screens/EditName';
import Element from './src/Screens/Element';
import Traveling from './src/Screens/Traveling';
import CheckPossibilities from './src/Screens/CheckPossibilities';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AskQuestion from './src/Screens/AskQuestion';
import Video from './src/Screens/Video';
import EditProfile from './src/Screens/EditProfile';
import DatauploadfromeditProfile from './src/Screens/DatauploadfromeditProfile';

const store = createStore(reducers);
const persistor = persistStore(store)
const Stack = createStackNavigator();


const App = () => {
  return (
    <SafeAreaProvider>

      <Provider store={store}>
        <MenuProvider>

          <PersistGate persistor={persistor}>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="SplashScreen"
                screenOptions={{
                  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}>
                <Stack.Screen
                  name="SplashScreen"
                  component={SplashScreen}
                  options={{ title: 'SplashScreen', headerShown: false }}
                />
                <Stack.Screen
                  name="OnboardingStep1"
                  component={OnboardingStep1}
                  options={{ title: 'OnboardingStep1', headerShown: false }}
                />
                <Stack.Screen
                  name="OnboardingStep2"
                  component={OnboardingStep2}
                  options={{ title: 'OnboardingStep2', headerShown: false }}
                />
                <Stack.Screen
                  name="OnboardingStep3"
                  component={OnboardingStep3}
                  options={{ title: 'OnboardingStep3', headerShown: false }}
                />
                <Stack.Screen
                  name="OnboardingStep4"
                  component={OnboardingStep4}
                  options={{ title: 'OnboardingStep4', headerShown: false }}
                />
                <Stack.Screen
                  name="OnboardingStep5"
                  component={OnboardingStep5}
                  options={{ title: 'OnboardingStep5', headerShown: false }}
                />
                <Stack.Screen
                  name="OnboardingStep6"
                  component={OnboardingStep6}
                  options={{ title: 'OnboardingStep6', headerShown: false }}
                />
                <Stack.Screen
                  name="UserProfile"
                  component={UserProfile}
                  options={{ title: 'UserProfile', headerShown: false }}
                />
                <Stack.Screen
                  name="Dashboard"
                  component={Dashboard}
                  options={{ title: 'Dashboard', headerShown: false }}
                />
                <Stack.Screen
                  name="CustomCalender"
                  component={CustomCalender}
                  options={{ title: 'CustomCalender', headerShown: false }}
                />
                <Stack.Screen
                  name="MyCalender"
                  component={MyCalender}
                  options={{ title: 'MyCalender', headerShown: false }}
                />
                <Stack.Screen
                  name="Fav"
                  component={Fav}
                  options={{ title: 'Fav', headerShown: false }}
                />
                <Stack.Screen
                  name="Reading"
                  component={Reading}
                  options={{ title: 'Reading', headerShown: false }}
                />
                <Stack.Screen
                  name="Loading"
                  component={Loading}
                  options={{ title: 'Loading', headerShown: false }}
                />
                <Stack.Screen
                  name="Compatibility"
                  component={Compatibility}
                  options={{ title: 'Compatibility', headerShown: false }}
                />
                <Stack.Screen
                  name="Loader"
                  component={Loader}
                  options={{ title: 'Loader', headerShown: false }}
                />
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{ title: 'Login', headerShown: false }}
                />
                <Stack.Screen
                  name="LoginOtp"
                  component={LoginOtp}
                  options={{ title: 'LoginOtp', headerShown: false }}
                />
                <Stack.Screen
                  name="Otheruser"
                  component={Otheruser}
                  options={{ title: 'Otheruser', headerShown: false }}
                />
                <Stack.Screen
                  name="CompatibilityCheck"
                  component={CompatibilityCheck}
                  options={{ title: 'CompatibilityCheck', headerShown: false }}
                />
                <Stack.Screen
                  name="NameReading"
                  component={NameReading}
                  options={{ title: 'NameReading', headerShown: false }}
                />
                <Stack.Screen
                  name="Compatibility1"
                  component={Compatibility1}
                  options={{ title: 'Compatibility1', headerShown: false }}
                />
                <Stack.Screen
                  name="Compatibility2"
                  component={Compatibility2}
                  options={{ title: 'Compatibility2', headerShown: false }}
                />
                <Stack.Screen
                  name="Compatibility3"
                  component={Compatibility3}
                  options={{ title: 'Compatibility3', headerShown: false }}
                />
                <Stack.Screen
                  name="BusinessCompatibilityCheck"
                  component={BusinessCompatibilityCheck}
                  options={{ title: 'BusinessCompatibilityCheck', headerShown: false }}
                />
                <Stack.Screen
                  name="VehicleCompatibilityCheck"
                  component={VehicleCompatibilityCheck}
                  options={{ title: 'VehicleCompatibilityCheck', headerShown: false }}
                />
                <Stack.Screen
                  name="HouseCompatibilityCheck"
                  component={HouseCompatibilityCheck}
                  options={{ title: 'HouseCompatibilityCheck', headerShown: false }}
                />
                <Stack.Screen
                  name="Compatibility4"
                  component={Compatibility4}
                  options={{ title: 'Compatibility4', headerShown: false }}
                />
                <Stack.Screen
                  name="NameCompatibilityCheck"
                  component={NameCompatibilityCheck}
                  options={{ title: 'NameCompatibilityCheck', headerShown: false }}
                />
                <Stack.Screen
                  name="Compatibility5"
                  component={Compatibility5}
                  options={{ title: 'Compatibility5', headerShown: false }}
                />
                <Stack.Screen
                  name="SpouseCompatibilityCheck"
                  component={SpouseCompatibilityCheck}
                  options={{ title: 'SpouseCompatibilityCheck', headerShown: false }}
                />
                <Stack.Screen
                  name="NameReading1"
                  component={NameReading1}
                  options={{ title: 'NameReading1', headerShown: false }}
                />
                <Stack.Screen
                  name="Possesions"
                  component={Possesions}
                  options={{ title: 'Possesions', headerShown: false }}
                />
                <Stack.Screen
                  name="Menu"
                  component={Menu}
                  options={{ title: 'Menu', headerShown: false }}
                />
                <Stack.Screen
                  name="EditName"
                  component={EditName}
                  options={{ title: 'EditName', headerShown: false }}
                />
                <Stack.Screen
                  name="Element"
                  component={Element}
                  options={{ title: 'Element', headerShown: false }}
                />
                <Stack.Screen
                  name="Traveling"
                  component={Traveling}
                  options={{ title: 'Traveling', headerShown: false }}
                />
                <Stack.Screen
                  name="CheckPossibilities"
                  component={CheckPossibilities}
                  options={{ title: 'CheckPossibilities', headerShown: false }}
                />
                <Stack.Screen
                  name="AskQuestion"
                  component={AskQuestion}
                  options={{ title: 'AskQuestion', headerShown: false }}
                />
                <Stack.Screen
                  name="Video"
                  component={Video}
                  options={{ title: 'Video', headerShown: false }}
                />
                <Stack.Screen
                  name="EditProfile"
                  component={EditProfile}
                  options={{ title: 'EditProfile', headerShown: false }}
                />
                <Stack.Screen
                  name="DatauploadfromeditProfile"
                  component={DatauploadfromeditProfile}
                  options={{ title: 'DatauploadfromeditProfile', headerShown: false }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </PersistGate>
        </MenuProvider>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App
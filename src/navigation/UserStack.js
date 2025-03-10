import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserTab from "./UserTab";
import ConversationScreen from "../screens/ConversationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AddFriendScreen from "../screens/AddFriendScreen";
import DiscoverCard from "../components/DiscoverCard";
import SearchScreen from "../screens/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import FriendStory from "../screens/FriendStory";
import AstrologyScreen from "../screens/AstrologyScreen";
import MemoryScreen from "../screens/MemoryScreen";
import EventScreen from "../screens/EventScreen"; //New component by Sona and Christian
import CampaignStoryIndiv from "../components/GiveFundComponents/CampaignStoryIndiv";
import GiveScreen from '../screens/GiveFundScreens/GiveScreen'
import GiveCoin from '../screens/GiveFundScreens/GiveCoin'
import ProcessingScreen from '../screens/GiveFundScreens/ProcessingScreen'
import ConfirmationScreen from "../screens/GiveFundScreens/ConfirmationScreen";
import NonprofitScreen from '../screens/GiveFundScreens/NonProfitScreen'
import VideoScreen from '../screens/GiveFundScreens/VideoScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="UserTab" component={UserTab} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FriendStory"
          component={FriendStory}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="AddFriend"
          component={AddFriendScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Conversation"
          component={ConversationScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="DiscoverCard"
          component={DiscoverCard}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="MemoryScreen"
          component={MemoryScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="NonprofitScreen"
          component={NonprofitScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CampaignStoryIndiv"
          component={CampaignStoryIndiv}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="VideoScreen"
          component={VideoScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="GiveScreen"
          component={GiveScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="GiveCoin"
          component={GiveCoin}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ProcessingScreen"
          component={ProcessingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConfirmationScreen"
          component={ConfirmationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Astrology"
          component={AstrologyScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Event"
          component={EventScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

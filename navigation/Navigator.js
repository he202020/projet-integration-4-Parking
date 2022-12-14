import {StyleSheet} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import ParkingScreen from "./screens/ParkingScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Map from "./screens/Map"
import SearchBar from "./screens/SearchBar";



const Tab = createBottomTabNavigator();

export default function Navigator() {

    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Accueil') {
                        iconName = 'home';
                    }
                    else {
                        iconName = 'parking';
                    }
                    if (focused) {
                        color = '#1ccc5b';
                        size = 30;
                    }
                    else {
                        color = '#eedddd';
                        size = 25;
                    }
                    return <FontAwesome5 name={iconName} color={color} size={size} />
                },
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60,
                    backgroundColor: '#151515',
                }
            })}
        >
            <Tab.Screen name="Accueil" component={HomeScreen} options={styles} />
            <Tab.Screen name="Liste des parkings" component={ParkingScreen} options={styles} />
            <Tab.Screen name = "Map" component={Map} />
            <Tab.Screen name = "SearchBar" component={SearchBar} />


        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#151515',
        height: 125
    },
    headerTitleStyle: {
        color: '#eedddd',
        fontWeight: 'bold'
    }
});
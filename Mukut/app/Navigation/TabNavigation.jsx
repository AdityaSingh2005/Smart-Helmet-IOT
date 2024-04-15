import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const TabNavigation = ({navigation}) => {
  return (
    <View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <FontAwesome5 name="home" size={24} color="black" />
            <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <FontAwesome name="user" size={24} color="black" />
            <Text>Profile</Text>
        </TouchableOpacity>
    </View>
  );
};

export default TabNavigation;
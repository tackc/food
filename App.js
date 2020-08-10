import { createStackNavigator, createAppContainer } from react-navigation;
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator({
  Search: SearchScreen
});
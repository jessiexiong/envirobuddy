import { createAppContainer, createStackNavigator } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen'



//createStackNavigator returns a navigation container which is a react component
const MealsNavigator = createStackNavigator({
    //Categories is a pointer to the screen
    Categories: CategoriesScreen,
    //can also add more
    CategoryMeals: CategoryMealScreen,
    MealDetail: MealDetailScreen,
    

});

export default createAppContainer(MealsNavigator);
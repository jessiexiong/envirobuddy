import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavouritesScreen from '../screens/FavouritesScreen';
import * as React from 'react';



//createStackNavigator returns a navigation container which is a react component
const MealsNavigator = createStackNavigator({
    //Categories is a pointer to the screen (also name)
    'Category Screen': CategoriesScreen,
    //can also add more
    'Category Meals':{ 
        screen: CategoryMealScreen
    },
    MealDetail: MealDetailScreen,
    

});

export default createAppContainer(MealsNavigator);

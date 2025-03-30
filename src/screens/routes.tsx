import { Image }       from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from 'styled-components';

import { Labor }       from './labor/index';
import { Costs }       from './costs/index';
import { Products }    from './products/index';
import { Ingredients } from './ingredients/index';

import cheeseburgerImage from '../assets/images/cheeseburguer.png';
import ingredientsImage  from '../assets/images/ingredients.png';
import coinsImage        from '../assets/images/coins.png';
import laborImage        from '../assets/images/chef.png';


const Tab = createBottomTabNavigator();

export function Routes(){

    const theme = useTheme();

    console.log(theme);
    const menuSelectedColor = theme.colors.secondary;

    return(
        <Tab.Navigator
            screenOptions={{
                tabBarLabel: "",
                tabBarStyle: {
                    backgroundColor: '#ffffff',
                },
            }}
        >
            <Tab.Screen
                name="products"
                component={Products}
                options={{
                    title : "Produtos",
                    tabBarIcon: () => (
                      <Image
                        source={cheeseburgerImage}
                        style={{ width: 40, height: 40 }}
                      />
                    ),
                    tabBarActiveBackgroundColor: menuSelectedColor
                }}
                
            />

            <Tab.Screen
                name="ingredients"
                
                component={Ingredients}
                options={{
                    title : "Ingredientes",
                    tabBarIcon: () => (
                      <Image
                        source={ingredientsImage}
                        style={{ width: 40, height: 40 }}
                      />
                    ),
                    tabBarActiveBackgroundColor: menuSelectedColor

                }}
            />

            <Tab.Screen
                name="labor"
                component={Labor}
                options={{
                    title : "Mão de obra",
                    tabBarIcon: () => (
                      <Image
                        source={laborImage}
                        style={{ width: 40, height: 40 }}
                      />
                    ),
                    tabBarActiveBackgroundColor: menuSelectedColor

                }}
            />

            <Tab.Screen
                name="Custos Indiretos"
                component={Costs}
                options={{
                    tabBarIcon: () => (
                      <Image
                        source={coinsImage}
                        style={{ width: 40, height: 40 }}
                      />
                    ),
                    tabBarActiveBackgroundColor: menuSelectedColor

                }}
            />
        </Tab.Navigator>
    )
}
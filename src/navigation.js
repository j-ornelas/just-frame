import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { GamesList, CharacterSelect, Character } from './components/GameStack';

const GameStack = createStackNavigator({
    GamesList: {
        screen: GamesList,
        navigationOptions: ({ navigation }) => ({
            title: 'Games',
            drawerLabel: 'GamesList',
            // headerRight: (
            //     <TouchableOpacity onPress={() => navigation.navigate('GamesList')}>
            //         <Icon
            //             style={{ paddingRight: 5 }}
            //             name="menu"
            //         />
            //     </TouchableOpacity>
            // )
        })
    },
    CharacterSelect: {
        screen: CharacterSelect,
        navigationOptions: ({ navigation }) => ({
            title: 'Character Select',
            // headerRight: (
            //     <TouchableOpacity onPress={() => navigation.navigate('GamesList')}>
            //         <Icon
            //             style={{ paddingRight: 5 }}
            //             name="menu"
            //             navigation={navigation}
            //         />
            //     </TouchableOpacity>
            // )
        })
    },
    Character: {
        screen: Character,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.characterName.toUpperCase()
        })
    }
}, {
    initialRouteName: 'GamesList',
});

const RootStack = createStackNavigator({
    // TODO: add login, calculator stacks
    main: { screen: GameStack }
}, {
    headerMode: 'none',
    initialRouteName: 'main'
});


export default RootStack;

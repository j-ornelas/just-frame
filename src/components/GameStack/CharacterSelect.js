import React from 'react';
import {
    StyleSheet, Text, View,
    TouchableOpacity, ScrollView
} from 'react-native';
import { connect } from 'react-redux';

import Header from '../Header/Header';

const styles = StyleSheet.create({
    listContainer: {
        marginTop: 200,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItem: {
        marginBottom: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: 50,
        borderColor: 'red',
        borderWidth: 5
    }
});

const mapStateToProps = (state) => {
    const { selectedGame, allGamesList } = state.gamesListState;
    return { selectedGame, allGamesList };
};

const CharacterSelect = (props) => {
    const { characters } = props.selectedGame;
    console.log(props)
    return (
        <ScrollView>
            <View style={styles.listContainer}>
                {Object.keys(characters).map(characterName => (
                    <TouchableOpacity
                        style={styles.listItem}
                        key={characterName}
                    >
                        <Text>
                            {characterName.toUpperCase()}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

export default connect(mapStateToProps, {})(CharacterSelect);

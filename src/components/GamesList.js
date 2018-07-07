import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import data from '../../frameData';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const GamesList = () => (
    <View style={styles.container}>
        {data.games.map(game => (
            <TouchableOpacity>
                <Text>
                    {game.title}
                </Text>
            </TouchableOpacity>
        ))}
    </View>
);

export default GamesList;

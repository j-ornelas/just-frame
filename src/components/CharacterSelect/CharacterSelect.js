import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

import data from '../../../frameData';


const styles = StyleSheet.create({
    listContainer: {
        // TODO: remove this padding after header is added
        paddingTop: 100,
        flex: 1,
        borderColor: 'blue',
        borderWidth: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: 'red',
        borderWidth: 1,
        width: '100%',
        height: 150,
    },
    marquee: {
        flex: 1,
        width: '100%',
    }
});

const CharacterSelect = () => (
    <ScrollView>
        <View style={styles.listContainer}>
            {data.games.map(game => (
                <TouchableOpacity
                    style={styles.listItem}
                    key={game.title}
                >
                    <Text>
                        {game.title}
                    </Text>
                    <Image
                        style={styles.marquee}
                        source={marquees[game.id]}
                    />
                </TouchableOpacity>
            ))}
        </View>
    </ScrollView>
);

export default CharacterSelect;

import React from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

import { selectGame } from '../../redux/actions';

import Header from '../Header/Header';

const thirdstrike = require('../../../assets/thirdstrike.png');
const worldwarrior = require('../../../assets/worldwarrior.jpg');
const alpha3 = require('../../../assets/alpha3.jpg');
const superturbo = require('../../../assets/superturbo.jpg');

const marquees = {
    1: superturbo,
    2: thirdstrike,
    3: worldwarrior,
    4: alpha3
};

const styles = StyleSheet.create({
    listContainer: {
        marginTop: 20,
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
        height: 150,
    },
    marquee: {
        flex: 1,
        width: '100%',
    }
});

const GamesList = props => (
    <View>
        <Header
            headerText="GAMES"
        />
        <ScrollView>
            <View style={styles.listContainer}>
                {props.allGamesList.games.map(game => (
                    <TouchableOpacity
                        onPress={() => props.selectGame(game.id)}
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
    </View>
);

const mapStateToProps = (state) => {
    console.log('STATE', state);
    const { selectedGame, allGamesList } = state.gamesListState;
    return { selectedGame, allGamesList };
};

// const mapActionsToProps = () => ({
//     selectGame(id) {
//         return (selectGame(id))
//       }
// });

export default connect(mapStateToProps, { selectGame })(GamesList);

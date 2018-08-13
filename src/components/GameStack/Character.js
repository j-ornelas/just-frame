import React from 'react';
import {
    StyleSheet, Text, View,
    TouchableOpacity, ScrollView, Dimensions
} from 'react-native';
import { connect } from 'react-redux';

import Moves from './Moves';

const styles = StyleSheet.create({
    rowTitleContainer: {
      display: 'flex',
      flexDirection: 'row'
    },
    rowTitle: {
      flex: 1,
      borderWidth: 0.3,
      borderColor: 'black',
      justifyContent: 'center',
      alignItems: 'center'
    }
});

const mapStateToProps = (state) => {
    const { selectedCharacter } = state.gamesListState;
    return { selectedCharacter };
};

const Character = (props) => {
  console.log('CHARACTER PROPS', props);
  const { height, width } = Dimensions.get('window')
  const { selectedCharacter } = props;
  return (
    <View style={{ height }}>
      <View style={styles.rowTitleContainer}>
        <View style={styles.rowTitle}><Text>Name</Text></View>
        <View style={styles.rowTitle}><Text>Startup</Text></View>
        <View style={styles.rowTitle}><Text>Active</Text></View>
        <View style={styles.rowTitle}><Text>Recovery</Text></View>
        <View style={styles.rowTitle}><Text>On hit</Text></View>
        <View style={styles.rowTitle}><Text>On Block</Text></View>
      </View>
      <ScrollView>
        {Object.keys(selectedCharacter.moves).map(type => (
          <Moves
            moves={selectedCharacter.moves[type]}
            type={type}
            key={type}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default connect(mapStateToProps, {})(Character);

import React from 'react';
import {
    StyleSheet, Text, View,
    TouchableOpacity, ScrollView
} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  titleContainer: {
    backgroundColor: 'yellow'
  },
  rowTitleContainer: {
    flex: 1,
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

const Moves = (props) => {
  const { type, moves } = props;
  console.log('MOVE Props', type);
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{type.toUpperCase()}</Text>
      </View>
      {Object.keys(moves).map(move => (
        <View style={styles.rowTitleContainer} key={move}>
          <View style={styles.rowTitle}><Text>{moves[move].name}</Text></View>
          <View style={styles.rowTitle}><Text>{moves[move].startup}</Text></View>
          <View style={styles.rowTitle}><Text>{moves[move].active}</Text></View>
          <View style={styles.rowTitle}><Text>{moves[move].recovery}</Text></View>
          <View style={styles.rowTitle}><Text>{moves[move]['on hit']}</Text></View>
          <View style={styles.rowTitle}><Text>{moves[move]['on block']}</Text></View>
        </View>
      ))}
    </View>
  );
};

export default Moves;

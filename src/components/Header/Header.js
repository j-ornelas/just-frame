import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 79,
        paddingTop: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 30
    }
});

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    const { headerText } = props;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>
                {headerText}
            </Text>
        </View>
    );
};

export default Header;

import React from 'react';
import { Text, View } from 'react-native';

const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    height: 60,
    paddingTop: 15,
    backgroundColor: '#f8F8F8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };

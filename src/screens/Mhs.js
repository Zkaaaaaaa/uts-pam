import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { gStyle } from '../constants';

const Stats = () => {
  const theme = 'dark';

  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >
      <Text style={gStyle.text[theme]}>Ini Halaman Profile Mahasiswa</Text>
    </ScrollView>
  );
};

Stats.navigationOptions = {
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'Profile Mahasiswa'
};

export default Stats;

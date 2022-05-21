import React from 'react';
import {SafeAreaView, StatusBar, View, useColorScheme} from 'react-native';
import {Home} from './pages/Home';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={backgroundStyle}>
      <Home>
        <StatusBar />
      </Home>
    </View>
  );
};

export default App;

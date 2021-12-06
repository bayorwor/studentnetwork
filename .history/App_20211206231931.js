import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <View>
      <WebView
        source={{
          uri: 'https://www.google.com',
        }}
      />
    </View>
  );
};

export default App;

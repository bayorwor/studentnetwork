import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{
          uri: 'https://micro.shbgh.com',
        }}
      />
    </View>
  );
};

export default App;

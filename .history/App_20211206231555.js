import React from 'react';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <div>
      <WebView
        source={{
          uri: 'https://www.google.com',
        }}
      />
    </div>
  );
};

export default App;

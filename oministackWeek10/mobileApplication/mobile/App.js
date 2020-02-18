import React from 'react';
import { StatusBar, YellowBox } from 'react-native'; //Component

import Router from './src/routes';

YellowBox.ignoreWarning([
	'Unrecognized WebSocket'
]);

export default function App() {
  return (

    //Header of app
    <> //Fragment
      <Router/>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7"/>
    </>
  );
}

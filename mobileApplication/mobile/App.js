import React from 'react';
import { StatusBar } from 'react-native'; //Component

import Router from './src/routes';

export default function App() {
  return (

    //Header of app
    <> //Fragment
      <Router/>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7"/>
    </>
  );
}

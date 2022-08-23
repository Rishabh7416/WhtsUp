import React from 'react';
import {Provider} from 'react-redux';
import Store from './mobile/src/redux/store';
import { Route } from './mobile/routes/route';
import {SafeAreaView} from 'react-native';
import Abc from './mobile/src/Abc';
import Practice from './Practice';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store= {Store}>
        <Route/>
        {/* <Practice/> */}
      </Provider>
    </SafeAreaView>
  );
}

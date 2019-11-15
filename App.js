import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {compose, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Home from './components/pages/Home';
import {Provider} from 'react-redux';
import dataWatcher from './store/sagas';
import rootReducer from './store/reducers';

const SagaMiddleWare = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(SagaMiddleWare)),
);

SagaMiddleWare.run(dataWatcher);

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <SafeAreaView style={styles.safeArea} />
        <Home />
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  safeArea: {
    backgroundColor: '#ddd',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

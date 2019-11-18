import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {compose, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Home from './components/pages/Home';
import {Provider} from 'react-redux';
import dataWatcher from './store/sagas';
import rootReducer from './store/reducers';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const SagaMiddleWare = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(applyMiddleware(SagaMiddleWare)),
);
SagaMiddleWare.run(dataWatcher);

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Home',
  },
);
const AppContainer = createAppContainer(AppNavigator);

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <SafeAreaView style={styles.safeArea} />
        {/*<Home />*/}
        <AppContainer
          style={{
            backgroundColor: 'black',
          }}
        />
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ddd',
  },
});

export default App;

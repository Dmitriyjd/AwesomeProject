import React, {PureComponent} from 'react';
import {View, ScrollView, TouchableHighlight, Image} from 'react-native';
import PropTypes from 'prop-types';
import Header from '../../Header';
import LargeTile from '../../common/tiles/LargeTile';
import styles from './styles';

class DetailsPage extends PureComponent {
  render() {
    console.log('Details screen navigation: ', this.props.navigation);
    return (
      <View style={styles.container}>
        <Header text="Product details" backButton="true" />
        <ScrollView contentContainerStyle={styles.content}>
          <LargeTile />
        </ScrollView>
      </View>
    );
  }
}

DetailsPage.propTypes = {
  productDetails: PropTypes.shape({}),
  getProductDetailsRequest: PropTypes.func.isRequired,
};

export default DetailsPage;

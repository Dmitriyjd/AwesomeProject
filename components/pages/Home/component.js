import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import Tile from '../../common/tile';

class Home extends PureComponent {
  componentDidMount() {
    this.props.getProductsList();
  }

  renderProductsArray = () => {
    this.props.products.map(product => (
      <Tile
        id={product.id}
        img={product.img}
        name={product.name}
        price={product.price}
        size="large"
      />
    ));
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40}}>Hello world!</Text>
        {this.renderProductsArray}
        <Tile
          size="large"
          img="https://image.shutterstock.com/z/stock-photo-close-up-of-man-in-blank-t-shirt-140861086.jpg"
        />
      </View>
    );
  }
}

Home.defaultProps = {
  products: [{}],
};

Home.propTypes = {
  getProductsList: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
};

export default Home;

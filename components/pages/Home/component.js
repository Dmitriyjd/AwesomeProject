import React, {PureComponent} from 'react';
import {ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import SearchInput from '../../common/inputs/Search';
import MediumTile from '../../common/tiles/MediumTile';
import styles from './styles.js';

class Home extends PureComponent {
  state = {
    searchParam: '',
  };
  componentDidMount() {
    this.props.getProductsList();
  }

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  renderProductsArray() {
    if (!this.state.searchParam.length) {
      return this.props.products.map(product =>
        this.renderProductTile(product),
      );
    } else {
      let sortedArray = this.props.products.filter(product => {
        return product.name.includes(this.state.searchParam);
      });
      return sortedArray.map(product => this.renderProductTile(product));
    }
  }

  handleChange = text => {
    this.setState(() => {
      return {
        searchParam: text,
      };
    });
  };

  renderProductTile = product => (
    <MediumTile
      key={product.id}
      id={product.id}
      img={product.img}
      name={product.name}
      price={product.price}
    />
  );

  render() {
    console.log('Home state: ', this.state);
    console.log('Navigation: ', this.props.navigation);
    return (
      <>
        <SearchInput onChangeText={this.handleChange} />
        <ScrollView contentContainerStyle={styles.container}>
          {this.renderProductsArray()}
        </ScrollView>
      </>
    );
  }
}

Home.defaultProps = {
  products: [],
};

Home.propTypes = {
  getProductsList: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.string,
    }),
  ).isRequired,
};

export default Home;

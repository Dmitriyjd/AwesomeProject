import React, {PureComponent} from 'react';
import {ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import SearchInput from '../../common/inputs/Search';
import MediumTile from '../../common/tiles/MediumTile';
import Header from '../../Header';
import styles from './styles.js';

class Home extends PureComponent {
  state = {
    searchParam: '',
  };
  componentDidMount() {
    this.props.getProductsListRequest();
  }

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

  onChangeLocation = itemId => {
    console.log('change location to Details screen');
    this.props.navigation.navigate('Details', {
      itemId,
    });
  };

  handleChange = text => {
    this.setState(() => {
      return {
        searchParam: text,
      };
    });
  };

  renderProductTile = ({id, img, name, price}) => (
    <MediumTile
      key={id}
      id={id}
      img={img}
      name={name}
      price={price}
      onPress={this.onChangeLocation}
    />
  );

  render() {
    console.log('Home state: ', this.state);
    console.log('Home navigation: ', this.props.navigation);
    console.log('Location: ', this.props.navigation.state.routeName);
    return (
      <>
        <Header text="Home" />
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
  getProductsListRequest: PropTypes.func.isRequired,
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

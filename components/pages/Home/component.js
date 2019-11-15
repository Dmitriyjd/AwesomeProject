import React, {PureComponent} from 'react';
import {ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import SearchInput from '../../common/inputs/Search';
import MediumTile from '../../common/tiles/MediumTile';

class Home extends PureComponent {
  state = {
    searchParam: '',
  };
  componentDidMount() {
    this.props.getProductsList();
  }

  renderProductsArray() {
    if (this.state.searchParam === '') {
      return this.props.products.map(product =>
        this.renderProductTile(product),
      );
    } else {
      const sortedArray = this.props.products.filter(product => {
        product.name.includes(this.state.searchParam);
      });
      return sortedArray.map(product => this.renderProductTile(product));
    }
  }

  handleChange = text => {
    console.log(text);
  };

  renderProductTile = product => (
    <MediumTile
      key={product.id}
      id={product.id}
      img={product.img}
      name={product.name}
      price={product.price}
      size="large"
    />
  );

  render() {
    return (
      <>
        <SearchInput onChange={this.handleChange} />
        <ScrollView
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
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
    PropTypes.shape({})
  ).isRequired,
};

export default Home;

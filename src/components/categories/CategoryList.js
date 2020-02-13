import React, { Component } from 'react';
import { connect } from 'react-redux';

class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>Category</h3>
        <h5>
          Secili Kategori:{' '}
          {JSON.stringify(this.props.currentCategory) //.categoryName
          }{' '}
        </h5>
        <h5>Secili Kategori: {this.props.currentCategory.categoryName}</h5>
      </div>
    );
  }
}
//asagidaki fonksiyonla state icindeki changeCategoryReducer, props'a baglaniyor
function mapsStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
  };
}
export default connect(mapsStateToProps)(CategoryList);

import React, { Component } from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteProductRequest, fetchProductRequest } from "./../../actions/index";

class ProductListPage extends Component {

  componentDidMount() {
    this.props.onFetchProducts();
  }

  showProductItem = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            onDelete={this.onDelete}
            key={index}
            product={product}
            index={index}
          />
        );
      });
    }
    return result;
  };


  onDelete = (id) => {
    this.props.onDeleteProduct(id)
  };
  render() {
    var { products } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link
              to="/product/add"
              type="button"
              className="btn btn-primary  mb-10"
            >
               Thêm sản phẩm
            </Link>
            <ProductList>{this.showProductItem(products)}</ProductList>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchProducts: () => {
      dispatch(fetchProductRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(deleteProductRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);

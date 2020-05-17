import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addProductRequest,
  fetchProductByIdRequest,
  updateProductRequest,
} from "./../../actions/index";

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      status: false,
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var { id } = match.params;
      this.props.onFetchProductById(id);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.productEditing) {
      var { productEditing } = nextProps;
      this.setState({
        id: productEditing.id,
        name: productEditing.name,
        price: productEditing.price,
        status: productEditing.status,
      });
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSave = (e) => {
    e.preventDefault();
    var { id, name, price, status } = this.state;
    var { history } = this.props;
    var product = {
      id,
      name,
      price,
      status,
    };
    if (id) {
      this.props.onUpdateProduct(product).then(() => {
        history.push("/product-list");
      });
    } else {
      this.props
        .onAddProduct({
          name,
          price,
          status,
        })
        .then((response) => {
          // history.goBack();
          history.push("/product-list");
        });
    }
  };
  
  render() {
    const { name, price, status } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form onSubmit={this.onSave}>
              <legend>Form title</legend>

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Product name"
                  onChange={this.onChange}
                  value={name}
                />
              </div>

              <div className="form-group">
                <label>Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  placeholder="Product price"
                  value={price}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label>status</label>
              </div>

              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="status"
                    value={status}
                    onChange={this.onChange}
                    checked={status}
                  />
                  còn hàng
                </label>
              </div>

              <button type="submit" className="btn btn-success mr-10">
                Save
              </button>

              <Link to={"/product-list"} className="btn btn-danger">
                Back
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    productEditing: state.productEditing,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (data) => dispatch(addProductRequest(data)),
    onFetchProductById: (id) => dispatch(fetchProductByIdRequest(id)),
    onUpdateProduct: (product) => dispatch(updateProductRequest(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);

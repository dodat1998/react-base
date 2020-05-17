import React, { Component } from "react";
import './ProductList.css'

class ProductList extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Danh sách sảm phẩm</h3>
          </div>
          <div className="panel-body">
            <table className="table table-bordered table-hover text-center">
              <thead>
                <tr>
                  <th className="text-center">STT</th>
                  <th className="text-center">Mã Sp</th>
                  <th className="text-center">Tên Sp</th>
                  <th className="text-center">Giá</th>
                  <th className="text-center">Trạng thái</th>
                  <th className="text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
              {this.props.children}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;

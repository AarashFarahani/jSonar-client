import React from "react";

class OrderDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      orderDetails: this.props.orderDetails,
    };
  }

  render() {
    const { orderDetails } = this.state;

    return (
      <React.Fragment>
        <div className="row mb-4">
          <div className="col">
            <address>
              <strong>{orderDetails.product.productName}</strong>
              <br />
              <small>{orderDetails.product.productCode}</small>
            </address>
          </div>

          <div className="col">
            <address>
              <strong>Quantity Ordered</strong>
              <br />
              <small>{orderDetails.quantityOrdered}</small>
            </address>
          </div>

          <div className="col">
            <address>
              <strong>Price Each</strong>
              <br />
              <small>{orderDetails.priceEach}</small>
            </address>
          </div>

          <div className="col">
            <address>
              <strong>Buy Price</strong>
              <br />
              <small>{orderDetails.product.buyPrice}</small>
            </address>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <address>
              <strong>Scale</strong>
              <br />
              <small>{orderDetails.product.productScale}</small>
            </address>
          </div>

          <div className="col">
            <address>
              <strong>Vendor</strong>
              <br />
              <small>{orderDetails.product.productVendor}</small>
            </address>
          </div>

          <div className="col">
            <address>
              <strong>Quantity In Stock</strong>
              <br />
              <small>{orderDetails.product.quantityInStock}</small>
            </address>
          </div>

          <div className="col">
            <address>
              <strong>MSRP</strong>
              <br />
              <small>{orderDetails.product.MSRP}</small>
            </address>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <address>
              <strong>Description</strong>
              <br />
              <small>{orderDetails.product.description}</small>
            </address>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OrderDetails;

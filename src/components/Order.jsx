import React from "react";
import Request from "../api/Request";
import Collapse from "react-bootstrap/Collapse";
import OrderDetails from "./OrderDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";

class Order extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      order: this.props.order,
      orderDetails: [],
    };
  }

  setOpen(os, orderNumber) {
    if (this.state.orderDetails.length === 0) {
      Request.get(`/orderDetails/${orderNumber}`)
        .then((res) => this.setState({ orderDetails: res.data }))
        .catch((e) => console.log(e));
    }

    this.setState({ open: os });
  }

  render() {
    const { order, open } = this.state;

    return (
      <div>
        <div className="card border-dark mb-3">
          <div className="card-header">
            <div className="row">
              <div className="col">
                <address>
                  <strong>Order Date:</strong>
                  <br />
                  <small>{order.orderDate}</small>
                </address>
              </div>

              <div className="col">
                <address>
                  <strong>Order number:</strong>
                  <br />
                  <small>{order.orderNumber}</small>
                </address>
              </div>
            </div>
          </div>

          <div className="card-body">
            <h6 className="card-title">
              <div className="row">
                <div className="col">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Required Date:</strong>
                    </li>
                    <li className="list-group-item">
                      <small>{order.requiredDate}</small>
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Shipped Date:</strong>
                    </li>
                    <li className="list-group-item">
                      <small>{order.shippedDate}</small>
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Status:</strong>
                    </li>
                    <li className="list-group-item">
                      <small>{order.status}</small>
                    </li>
                  </ul>
                </div>
              </div>
            </h6>

            <p className="card-text mb-2 text-muted">{order.comment}</p>

            <p className="card-text text-center">
              <small className="text-muted">
                <a
                  onClick={() => this.setOpen(!open, order.orderNumber)}
                  aria-controls="order-details"
                  aria-expanded={open}
                  style={{ cursor: "pointer" }}
                >
                  {open ? (
                    <FontAwesomeIcon icon={fa.faAngleDoubleUp} size="2x" />
                  ) : (
                    <FontAwesomeIcon icon={fa.faAngleDoubleDown} size="2x" />
                  )}
                </a>
              </small>
            </p>
          </div>

          <Collapse in={open}>
            <div id="order-details" className="container-fluid">
              {this.state.orderDetails.map((item, index) => (
                <>
                  <OrderDetails
                    className="mb-4"
                    key={index}
                    orderDetails={item}
                  ></OrderDetails>
                  <hr />
                </>
              ))}
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default Order;

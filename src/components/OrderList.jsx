import React from "react";
import Request from "../api/Request";
import Order from "./Order";

class OrderList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      customer: this.props.customer,
      items: [],
    };
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    Request.get(`/customerOrders/${params.customerNumber}`)
      .then((res) => this.setState({ items: res.data }))
      .catch((e) => console.log(e));
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        {items.map((item, index) => (
          <Order key={index} order={item}></Order>
        ))}
      </div>
    );
  }
}

export default OrderList;

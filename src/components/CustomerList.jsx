import React from "react";
import Request from "../api/Request";
import { FilteringState, IntegratedFiltering } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
} from "@devexpress/dx-react-grid-bootstrap4";
import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";
import { Modal } from "react-bootstrap";

class CustomerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      orders: [],
      items: [],
    };
  }

  componentDidMount() {
    Request.get("/customers")
      .then((res) => this.setState({ items: res.data }))
      .catch((e) => console.log(e));
  }

  setShow(show, customer) {
    if (show) {
      Request.get(`/customerOrders/${customer.customerNumber}`)
        .then((res) => this.setState({ orders: res.data }))
        .catch((e) => console.log(e));
    } else this.setState({ orders: [] });
  }

  render() {
    const { show, items } = this.state;

    const columns = [
      { name: "customerNumber", title: "Customer No" },
      { name: "customerName", title: "Customer Name" },
      { name: "contactLastName", title: "Contact Last Name" },
      { name: "contactFirstName", title: "Contact First Name" },
      { name: "phone", title: "Phone" },
      { name: "addressLine1", title: "Address Line 1" },
      { name: "addressLine2", title: "Address Line 2" },
      { name: "city", title: "City" },
      { name: "state", title: "State" },
      { name: "postalCode", title: "Postal Code" },
      { name: "country", title: "Country" },
      { name: "creditLimit", title: "Credit Limit" },
    ];

    const tableRow = ({ row, ...restProps }) => (
      <Table.Row
        {...restProps}
        // onClick={() => this.props.history.push(`/orders/${row.customerNumber}`)}
        onClick={() => this.setShow(true, row)}
        style={{
          cursor: "pointer",
        }}
      />
    );

    return (
      <div>
        <Grid rows={items} columns={columns}>
          <FilteringState defaultFilters={[]} />
          <IntegratedFiltering />
          <Table rowComponent={tableRow} />
          <TableHeaderRow />
          <TableFilterRow />
        </Grid>

        <Modal
          show={show}
          onHide={() => this.setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="order-list-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="order-list-modal">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!
            </p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default CustomerList;

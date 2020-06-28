import React from "react";
import Request from "../api/Request";
import { FilteringState, IntegratedFiltering } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
  VirtualTable,
  TableColumnResizing,
} from "@devexpress/dx-react-grid-bootstrap4";
import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";
import { Modal } from "react-bootstrap";
import Order from "./Order";

class CustomerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columnWidths: [],
      dimensions: {},
      show: false,
      selectedCustomer: {},
      orders: [],
      items: [],
    };
  }

  componentDidMount() {
    const columnWidths = [
      { columnName: "customerNumber", width: 150 },
      { columnName: "customerName", width: 240 },
      { columnName: "contactLastName", width: 180 },
      { columnName: "contactFirstName", width: 180 },
      { columnName: "phone", width: 180 },
      { columnName: "addressLine1", width: 340 },
      { columnName: "addressLine2", width: 340 },
      { columnName: "city", width: 180 },
      { columnName: "state", width: 150 },
      { columnName: "postalCode", width: 150 },
      { columnName: "country", width: 180 },
      { columnName: "creditLimit", width: 150 },
    ];

    this.setState({
      columnWidths,
    });

    Request.get("/customers")
      .then((res) => this.setState({ items: res.data }))
      .catch((e) => console.log(e));
  }

  setShow(show, customer) {
    if (show) {
      Request.get(`/customerOrders/${customer.customerNumber}`)
        .then((res) =>
          this.setState({
            orders: res.data,
            selectedCustomer: customer,
            show: true,
          })
        )
        .catch((e) => console.log(e));
    } else this.setState({ orders: [], show: false });
  }

  setColumnWidths(columnWidths) {
    // this.setState({ columnWidths });
  }

  render() {
    const { show, items, columnWidths } = this.state;

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
          <VirtualTable rowComponent={tableRow} />
          <TableColumnResizing
            columnWidths={columnWidths}
            onColumnWidthsChange={this.setColumnWidths(columnWidths)}
          />
          <TableHeaderRow />
          <TableFilterRow />
        </Grid>

        <Modal
          show={show}
          onHide={() => this.setShow(false)}
          centered={true}
          size="lg"
          aria-labelledby="order-list-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="order-list-modal">
              <span>
                {this.state.selectedCustomer.customerNumber}.{" "}
                {this.state.selectedCustomer.customerName}
              </span>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {this.state.orders.map((item, index) => (
              <Order key={index} order={item}></Order>
            ))}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default CustomerList;

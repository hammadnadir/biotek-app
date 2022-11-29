import React from "react";
import { Button,  Container } from "react-bootstrap";
import "./styles.scss";

function InventoryData() {
  return (
    <div className="inventory_page">
      <div className="inventory_data">
        <div className="data_head">
          <Container>
            <p>Raw inventory stock in Hand</p>
            <Button>Stock Ledger</Button>
          </Container>
        </div>
        <div className="main_inventory">
          <div className="bottom_data">
            <Container>
              <h4>Pattern</h4>
              <div className="three_btns">
                <Button>Board</Button>
                <Button>PATTERN</Button>
                <Button>Sheet</Button>
              </div>
            </Container>
          </div>
          {/* <Container>
           <Row className="main_head">
               <Col xs={1} className="head"><p>ID</p></Col>
               <Col xs={3} className="head"><p>Name</p></Col>
               <Col xs={3} className="head"><p>Product Type</p></Col>
               <Col xs={5} className="head"><p>Stock In Hand<span>(Sheet)</span></p></Col>
           </Row>
           <Row>
           <Col xs={1} className="head"><p>ID</p></Col>
               <Col xs={3} className="head"><p>Name</p></Col>
               <Col xs={3} className="head"><p>Product Type</p></Col>
               <Col xs={5} className="head"><p>Stock In Hand<span>(Sheet)</span></p></Col>
           </Row>
          </Container> */}

          <Container className="main-table">
          <table className="table table-sm table-striped">
            <thead className="table-head">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Product Type</th>
                <th scope="col">Stock in hand <span className="span-sheet">(sheet)</span></th>
              </tr>
            </thead>

            <tbody className="tbl-inventory">
              <tr>
              <th scope="row">747</th>
                <td>20x 26 Bleach Board 350</td>
                <td>sheet</td>
                <td>80 sheets</td>
              </tr>
              <tr>
                <th scope="row">747</th>
                <td>20x 26 Bleach Board 350</td>
                <td>sheet</td>
                <td>80 sheets</td>
              </tr>
              <tr>
                <th scope="row">747</th>
                <td>20x 26 Bleach Board 350</td>
                <td>sheet</td>
                <td>80 sheets</td>
              </tr>
              <tr>
                <th scope="row">747</th>
                <td>20x 26 Bleach Board 350</td>
                <td>sheet</td>
                <td>80 sheets</td>
              </tr>
              <tr>
                <th scope="row">747</th>
                <td>20x 26 Bleach Board 350</td>
                <td>sheet</td>
                <td>80 sheets</td>
              </tr>
              <tr>
                <th scope="row">747</th>
                <td>20x 26 Bleach Board 350</td>
                <td>sheet</td>
                <td>80 sheets</td>
              </tr>
              <tr>
                <th scope="row">747</th>
                <td>20x 26 Bleach Board 350</td>
                <td>sheet</td>
                <td>80 sheets</td>
              </tr>
              <tr>
                <th scope="row">747</th>
                <td>20x 26 Bleach Board 350</td>
                <td>sheet</td>
                <td>80 sheets</td>
              </tr>
              <tr>
                <th scope="row">747</th>
                <td>20x 26 Bleach Board 350</td>
                <td>sheet</td>
                <td>80 sheets</td>
              </tr>
              <tr>
                <th scope="row">747</th>
                <td>20x 26 Bleach Board 350</td>
                <td>sheet</td>
                <td>80 sheets</td>
              </tr>
              <tr>
                <th scope="row">747</th>
                <td>20x 26 Bleach Board 350</td>
                <td>sheet</td>
                <td>80 sheets</td>
              </tr>
             
            </tbody>
          </table>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default InventoryData;

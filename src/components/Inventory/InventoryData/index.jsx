import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
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
          <Container>
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
          </Container>
        </div>
      </div>
    </div>
  );
}

export default InventoryData;

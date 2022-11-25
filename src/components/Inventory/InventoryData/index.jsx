import React from "react";
import { Button, Container } from "react-bootstrap";
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
      </div>
    </div>
  );
}

export default InventoryData;

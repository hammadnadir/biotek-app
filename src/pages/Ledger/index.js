import React from "react";
import { Footer } from "../../components/common";
import LeadgerNav from "../../components/Ledger/LedgerNav"
import LedgerData from "../../components/Ledger/LedgerData"

function Ledger() {
  return (
    <div>
      <LeadgerNav />
      <LedgerData />
      <Footer />
    </div>
  );
}

export default Ledger;

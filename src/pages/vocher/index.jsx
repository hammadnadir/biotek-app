import React from "react";
import { Footer } from "../../components/common";
import { VoucherData, VoucherHeader } from "../../components/Vouchers";

function Voucher() {
  return (
    <div>
      <VoucherHeader />
      <VoucherData />
      <Footer />
    </div>
  );
}

export default Voucher;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Footer } from "../../components/common";
import { VoucherData, VoucherHeader } from "../../components/Vouchers";
import { getVoucherRequest } from "../../redux/voucher";
import { getCurrentUser } from "../../utils";

function Voucher() {
  const dispatch = useDispatch();

  const user = getCurrentUser();

  useEffect(() => {
    dispatch(getVoucherRequest());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <VoucherHeader />
      <VoucherData />
      <Footer />
    </div>
  );
}

export default Voucher;

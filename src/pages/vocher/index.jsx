import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Footer } from "../../components/common";
import { VoucherData, VoucherHeader } from "../../components/Vouchers";
import { getVoucherRequest } from "../../redux/voucher";
import { getCurrentUser } from "../../utils";

function Voucher() {
  const dispatch = useDispatch();

  const user = getCurrentUser();

  console.log("voucher111",user.data.session_id)

  useEffect(() => {
    dispatch(getVoucherRequest());
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

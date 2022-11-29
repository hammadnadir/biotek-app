import React from "react";
import { Footer } from "../../components/common";
import { VoucherData, VoucherHeader } from "../../components/Vouchers";

function Voucher() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getVoucherRequest());
  // }, []);

  return (
    <div>
      <VoucherHeader />
      <VoucherData />
      <Footer />
    </div>
  );
}

export default Voucher;

import React from "react";
import { Footer } from "../../components/common";
import { MessageData, MessageNav } from "../../components/Messages";

function Notification() {
  return (
    <div>
      <MessageNav />
      <MessageData />
      <Footer />
    </div>
  );
}

export default Notification;

import React from "react";
import { Footer } from "../../components/common";
import { MessageNav } from "../../components/Messages";
import MessageChat from "../../components/personalMessage/MessageChat";

function PersonalChat() {
  return (
    <div>
      <MessageNav />
      <MessageChat />
      {/* <Footer /> */}
    </div>
  );
}

export default PersonalChat;

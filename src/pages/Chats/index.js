import React from "react";
import { ChatsData, ChatsNav } from "../../components/Chats";
import { Footer } from "../../components/common";

function Chats() {
  return (
    <div>
      <ChatsNav />
      <ChatsData />
      <Footer />
    </div>
  );
}

export default Chats;

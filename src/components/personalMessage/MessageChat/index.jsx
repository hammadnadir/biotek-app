import React from "react";
import { Container } from "react-bootstrap";
import { ellipse } from "../../../assets";
import "./styles.scss";

function MessageChat() {
  return (
    <div className="main_chat_page">
      <Container>
        <div className="main_chats">
          <div className="chat_message">
            <img src={ellipse} alt="ellipse" />
            <div className="chat">
              <p>Hi</p>
            </div>
            <small>9:00 PM</small>
          </div>
          <div className="reply_chat">
            <div className="chat">
              <p>Hi</p>
            </div>
            <small >9:05 PM</small>
          </div>
        </div>
        <div className="main_chats">
          <div className="chat_message">
            <img src={ellipse} alt="ellipse" />
            <div className="chat">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <small>9:30 PM</small>
          </div>
          <div className="reply_chat">
            <div className="chat">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, officia amet quis dolore numquam suscipit fugit</p>
            </div>
            <small >10:00 PM</small>
          </div>
        </div>
        <div className="main_chats">
          <div className="chat_message">
            <img src={ellipse} alt="ellipse" />
            <div className="chat">
              <p>okay bye </p>
            </div>
            <small>10:10 PM</small>
          </div>
          <div className="reply_chat">
            <div className="chat">
              <p>okay bubbye, see you soon</p>
            </div>
            <small >10:25 PM</small>
          </div>
        </div>
      </Container>

      <div className="footer">
        <input type="text" placeholder="Type Message Here........" />
        <a href="">
          <i class="bi bi-arrow-right-circle-fill"></i>
        </a>
      </div>
    </div>

  )
}

export default MessageChat;
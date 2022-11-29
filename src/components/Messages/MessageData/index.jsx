import React from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { expense, notify } from "../../../assets";
import "./styles.scss";

function MessageData() {
  const [show, setShow] = useState(true);
  return (
    <div className="message_data">
      <Container>
        <div>
          <div>
            {show && (
              <div className="message_main">
                <img src={notify} alt="notification-img" />
                <div className="main_headings">
                  <h1>No New Notification Yet.!</h1>
                  <h2>Add New Expense to get Notification</h2>
                  <Button>
                    <i className="bi bi-plus" onClick={() => setShow(false)} />{" "}
                    Add Now
                  </Button>
                </div>
              </div>
            )}
            {!show && (
              <div className="all_chats">
                <div>
                  <h2>Today</h2>
                  <div className="main_cards">
                    <div className="cards_data">
                      <div className="inner_card">
                        <div className="chat_img">
                          <img src={expense} alt="" />
                        </div>
                        <p>New Expense has Been added to the list.</p>
                      </div>
                      <small>22:40 PM</small>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MessageData;

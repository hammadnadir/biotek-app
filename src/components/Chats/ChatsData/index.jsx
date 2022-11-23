import React from "react";
import { Container } from "react-bootstrap";
import { book } from "../../../assets";
import "./styles.scss";

function ChatsData() {
  const chats = [
    {
      image: book,
      name: "Ali Hassan",
      quantity: "1",
      message: "Hi , how is my expense list going.?",
      time: "2:49 PM",
    },
    {
      image: book,
      name: "Ali Hassan",
      quantity: "10",
      message: "Hi , how is my expense list going.?",
      time: "2:49 PM",
    },
    {
      image: book,
      name: "Ali Hassan",
      quantity: "10",
      message: "Hi , how is my expense list going.?",
      time: "2:49 PM",
    },
    {
      image: book,
      name: "Ali Hassan",
      quantity: "10",
      message: "Hi , how is my expense list going.?",
      time: "2:49 PM",
    },
    {
      image: book,
      name: "Ali Hassan",
      quantity: "10",
      message: "Hi , how is my expense list going.?",
      time: "2:49 PM",
    },
    {
      image: book,
      name: "Ali Hassan",
      quantity: "10",
      message: "Hi , how is my expense list going.?",
      time: "2:49 PM",
    },
    {
      image: book,
      name: "Ali Hassan",
      quantity: "10",
      message: "Hi , how is my expense list going.?",
      time: "2:49 PM",
    },
    {
      image: book,
      name: "Ali Hassan",
      quantity: "10",
      message: "Hi , how is my expense list going.?",
      time: "2:49 PM",
    },
  ];
  return (
    <div className="chats_data">
      <Container>
        <div className="chats_main">
          <h1>All Messages</h1>
          {chats.map((item, index) => {
            return (
              <div className="chat_card" key={index}>
                <div className="card_sub_data">
                  <div className="image_section">
                    <img src={item.image} alt="person" />
                  </div>
                  <div className="lists_data">
                    <div className="name_section">
                      <p>{item.name}</p>
                      <span>{item.quantity}</span>
                    </div>
                    <p className="text">{item.message}</p>
                  </div>
                </div>
                <div className="time_zone">
                  <small>{item.time}</small>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default ChatsData;

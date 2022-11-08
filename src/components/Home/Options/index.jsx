import React from "react";
import { Container } from "react-bootstrap";
import "./styles.scss";
import { cards, cardsNew } from "../../../data";
import { aaa } from "../../../assets";
import { storage } from "../../../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { v4 } from "uuid";
import { useEffect } from "react";

function Options() {
  const [imagesupload, setImagesupload] = useState("");
  const [imagesList, setImagesList] = useState([]);

  const imageListRef = ref(storage, "images/");

  const uploadPic = () => {
    if (imagesupload) {
      const imageRef = ref(storage, `images/${imagesupload.name + v4()}`);
      uploadBytes(imageRef, imagesupload).then((snapshot) => {
        // alert("Image Uploaded");
        getDownloadURL(snapshot.ref).then((url)=>{
          setImagesList([...imagesList,url])            
        })
      });
    }
  };
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      // console.log(response)
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImagesList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="options-page">
      <Container>
        <input
          type="file"
          onChange={(e) => setImagesupload(e.target.files[0])}
        />
        <button onClick={uploadPic}>upload</button>
        {imagesList.map((item) => {
          return <img src={item} />;
        })}
        {/* <div className="options-data">
          {cards.map((item, index) => {
            return (
              <div className="main-inner-data" key={index}>
                <div className="cards"><img src={aaa} alt="logo"/></div>
                <p>data</p>
              </div>
            );
          })}
        </div>
        <div className="recent-data">
          <h1>Recent Links</h1>
          <div className="options-new-data">
            {cardsNew.map((item, index) => {
              return (
                <div className="main-inner-data" key={index}>
                  <div className="cards"><img src={aaa} alt="logo"/></div>
                  <p>data</p>
                </div>
              );
            })}
          </div>
        </div> */}
      </Container>
    </div>
  );
}

export default Options;

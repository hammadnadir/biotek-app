import React from 'react';
import { Container } from 'react-bootstrap';
import { aaa } from '../../../assets';
import "./styles.scss"

function MenuData() {

  const cardData=[
    {
      id: 1,
      paragraph: "Print 247",
      image: aaa,
    },
    {
      id: 1,
      paragraph: "Print 247",
      image: aaa,
    },
    {
      id: 1,
      paragraph: "Print 247",
      image: aaa,
    },
    {
      id: 1,
      paragraph: "Print 247",
      image: aaa,
    }
  ]
  return (
    <div className='submenu_page'>
      <Container>
        <div className='more_data'>
          {
            cardData.map((data)=>{
              <div className='menu-card'>
              <img src={data.image} alt="card-img"/>
              <p>{data.paragraph}</p>
            </div>
            })
          }
        
        </div>
      </Container>
    </div>
  )
}

export default MenuData
import React from 'react'
import { useState } from 'react';
import { Footer, Header } from '../../components/common'
import { Options } from '../../components/Home'

function Home() {

  const [val, setVal] = useState("");

  return (
    <div>
        <Header val={val} setVal={setVal}/>
        <Options val={val} setVal={setVal}/>
        <Footer />
    </div>
  )
}

export default Home
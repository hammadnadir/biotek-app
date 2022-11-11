import React,{useRef} from 'react';
import "./styles.scss"

function TextFieldNew({label ,...props}) {
    const reference=useRef()
    const handleClick=()=>{
    reference.current.focus();
    }

  return (
    <div className="text-field-new">
        <label className='label-field' onClick={handleClick}>{label}</label>
        <input type="text" ref={reference} className='input-field' {...props}/>
    </div>
  )
}

export default TextFieldNew
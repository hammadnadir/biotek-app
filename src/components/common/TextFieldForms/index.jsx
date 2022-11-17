import React,{useRef} from 'react';
import "./styles.scss"

function TextFieldForm({label ,...props}) {
    const reference=useRef()
    const handleClick=()=>{
    reference.current.focus();
    }

  return (
    <div className="text-field">
        {/* <label className='label-field' onClick={handleClick}>{label}</label> */}
        <input type="text" ref={reference} className='input-field' {...props}/>
    </div>
  )
}

export default TextFieldForm
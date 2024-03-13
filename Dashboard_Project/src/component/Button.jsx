import React from 'react'

const Button = ({color, bgColor,text, borderRadius}) => {
  return (
    <div>
      <button style={{marginTop:"10px", color:color , backgroundColor:bgColor ,padding:"8px", borderRadius:borderRadius , fontSize:
    "18px" }}>{text}</button>
    </div>
  )
}

export default Button

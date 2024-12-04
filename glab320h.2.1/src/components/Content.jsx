import React from 'react'

const Content = (props) => {
  return (
    <div>
      <p style={{color: props.color}}>{props.text}</p>
    </div>   
  )
}

export default Content

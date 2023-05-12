import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'50px'}}> {
    props.alert && <div className="alert alert-primary" role="alert">
    <strong>{props.alert.msg}</strong>- {props.alert.type}. 
  </div> }
  </div>
  )
}

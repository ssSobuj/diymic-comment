/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from "react"
import "./CommentInput.css"

export default function CommentInput({comments, setComments}) {

const [name, setName] = useState("")
const [comment,setComment] = useState("")

const submit = (e)=>{
  e.preventDefault();
  const inputDetail = {
    name,
    comment
  }

  if(inputDetail.name.trim()=== "" || inputDetail.comment.trim()===""){
    setName("")
    setComment("")
    return alert("pleas write some value")

  }else{  
    setComments([...comments, inputDetail])
    setName("")
    setComment("")
  }

}
const enterInput = (e)=>{
  if(e.key === "Enter"){
    setName()
    setComment()
  }
}



  return (
    <>
        <div className="main-container">          
           <div className="input-box">
              <h3>Name</h3>
              <input
              maxLength={45}
              className="input-name"
              onChange={(e)=>setName(e.target.value)}
              value={name}
              onKeyDown={enterInput}
              type="text"/><br />
              <h3>Comment</h3>
              <textarea
              rows={5}
              cols={35}
              maxLength={150}
              onKeyDown={enterInput}
              value={comment}
              onChange={(e)=>setComment(e.target.value)}
              className="text-area"             
              /> <br />
              <button
              onClick={submit}
              type='submit'>
              Submit</button>   
            </div>       
        </div>
    </>
  )
}

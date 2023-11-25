/* eslint-disable no-unused-vars */
import { useState } from 'react'
import CommentInput from '../CommentInput/CommentInput'
import CommentShow from '../CommentShow/CommentShow'
import './Comments.css'



export default function Comments() {
  const [comments,setComments] = useState([])



  
  return (
    <>
      <div className='main-sec'>
        <div className='container'>
        <CommentInput comments={comments} setComments={setComments} />
        <hr/>
        <CommentShow comments={comments} />
        </div>
      </div>
    </>
  )
}

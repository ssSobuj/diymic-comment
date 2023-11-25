/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import "./CommentShow.css";

export default function CommentShow({comments}) {

  return (
    <>
      <div className="main-show">
        <div className="udate-coment">
        <div className="div-name"><b>Name: </b><h5>Sobuj Hridoy</h5></div>
              <div className="div-input">
                <b>Comment:</b> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, fugiat. </p>
              </div>
        </div>

        {

          comments.map((value,index)=>(
          <div key={index} className="udate-coment">
            <hr/>
            <div className="div-name"><b>Name: </b><h5>{value.name}</h5></div>
            <div className="div-input">
              <b>Comment:</b> <p>{value.comment}</p>
            </div>            
          </div>
          ))
        }  
     
      </div>
    </>
  );
}

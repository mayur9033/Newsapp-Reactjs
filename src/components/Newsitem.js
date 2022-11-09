import React from 'react'

const Newsitem = (props) => {

  
    let {title ,description,imageUrl,newsUrl,author,date,source} = props
    return (
      <div className='my-3'>
      <div   className="card">
        <div style={{display:'flex',justifyContent:'end',position:'absolute',right:'0'}}>
        <span  className="badge rounded-pill bg-danger" style={{left:'90%',zindex:'1'}}>
       {source}
      </span>
        </div>
      
      <img src={!imageUrl?"https://img.etimg.com/thumb/msid-94808465,width-1070,height-580,imgsize-19522,overlay-etmarkets/photo.jpg":imageUrl}   className="card-img-top" alt="..." />
      <div   className="card-body">
        <h5   className="card-title">{title}...  </h5>
        <p   className="card-text">{description}...</p>
        <p className="card-text"><small  className="text-muted">By {!author?"unknown":author} on {date}</small></p>
        <a href={newsUrl}  target="blank" className="btn btn-dark btn-sm">Read More</a>
      </div>
    </div>
      </div>
    )
  }


export default Newsitem

import React, { Component } from 'react'

export class newsitam extends Component {
   
  render() {
  let  {title,description,imageUrl,newsUrl,date,author,source}=this.props;
    return (
        <div className="card my-3 " style={{width:"18rem", height:"auto"}} >
        <div  style={{display:"flex", justifyContent:'flex-end',position:'absolute',right:"0"}}>
        <span className="badge rounded-pill bg-danger">
{source}  </span>
        </div>
        <img src={imageUrl? imageUrl:"https://th.bing.com/th/id/OIP.VGq80TxfZu30FMI4wlKVEAAAAA?pid=ImgDet&w=300&h=300&rs=1"} className="card-img-top" style={{width:"100%", height:"10rem"}} alt=""/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className='card-text'><b><small className='text-danger'>By {author?author:"Unknown"} <br/> {new Date(date).toGMTString()}</small></b></p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    )
  }
}

export default newsitam

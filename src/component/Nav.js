import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Nav extends Component {
  light = () => {
    document.body.style.backgroundColor = "lightblue";
    document.body.style.color = "black";

  };
  dark = () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

  };
  render(){ 
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" >
          News Hub
          </Link>
          <div>
            <button  onClick={this.dark} className="btn btn-secondary  mx-1" style={{width:"25px",height:"35px",backgroundColor:"lightblack" }}>
          </button>
          <button  onClick={this.light} className="btn btn-info  mx-2" style={{width:"25px" ,height:"35px",backgroundColor:"lightskyblue"}}>
          </button>
        </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
           
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <Link className="nav-link  btn btn-primary" aria-current="page" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  btn btn-primary" aria-current="page" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  btn btn-primary" aria-current="page" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  btn btn-primary" aria-current="page" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  btn btn-primary" aria-current="page" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  btn btn-primary" aria-current="page" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  btn btn-primary" aria-current="page" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link  btn btn-info mx-5 " aria-current="page" href="https://psgpraveen.netlify.app/">
                Handcrafted ❤ by PsgPraveen
                </a>
              </li>
             
            </ul>
           
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;

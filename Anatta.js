
import React, { Component } from 'react';
import { render } from 'react-dom';
import "./style.css";

class Anatta extends React.Component{
  render(){
    return (
    <div>
      <div className="header">
        <p className="header-txt">FREE US SHIPPING & RETURN</p>
      </div>
      <div className="navbar">
        <a href="#">MEN</a>
        <a href="#">WOMEN</a>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        <i className="glyphicon glyphicon-user userIcon"></i>
        <i className="fa fa-shopping-cart userIcon cartIcon"></i>
      </div>
      <div className="row">
    <div className="side">
      <h5>MEN</h5>
      <div className="main-content">
        <span className="product-name">Nike T-Shirt</span>
        <span className="price">$79 USD</span>
      </div>
      <div className="main-content">
      <div className="sub-content">
        <p>Round neck</p>
      </div>
        <div>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="star-rating">
           <span className="fa fa-star checked"></span>
           <span className="fa fa-star checked"></span>
           <span className="fa fa-star checked"></span>
           <span className="fa fa-star"></span>
           <span className="fa fa-star"></span>
           <span>154 reviews</span>
        </div>
        </div>
      </div>
    </div>
  </div>
    </div>
    )
  }
}

export default Anatta;


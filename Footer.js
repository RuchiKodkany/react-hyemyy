import React, { Component } from 'react';
import { render } from 'react-dom';
import "./style.css";

class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
        <div className="men-info">
          <ul><b>MEN</b></ul>
          <ul>OCA Low</ul>
          <ul>OCA High</ul>
          <ul>Catiba Low</ul>
          <ul>Catiba High</ul>
        </div>
        <div className="women-info">
          <ul><b>WOMEN</b></ul>
          <ul>OCA Low</ul>
          <ul>OCA High</ul>
          <ul>Catiba Low</ul>
          <ul>Catiba High</ul>
        </div>
        <div className="women-info">
          <ul><b>SUPPORT</b></ul>
          <ul>FAQ</ul>
          <ul>Returns</ul>
          <ul>Live Chat</ul>
        </div>
        <div className="women-info">
          <ul><b>ABOUT</b></ul>
          <ul>Mission</ul>
          <ul>Vision</ul>
          <ul>Future</ul>
        </div>
        <div className="women-info">
          <ul><b>POP UP STORES</b></ul>
          <ul>Find near you</ul>
          <ul>Register</ul>
          <div className="find-clothes">
            <ul>Find your clothes here</ul>
            <input type="text" className="text-line" placeholder="Find your clothes here"/>
            <i class="fa fa-search"></i>
          </div>
        </div>
        <div className="women-info">
          <ul><b>NEWSLETTER</b></ul>
          <ul>Enter email</ul>
          <input type="text" className="text-line" placeholder="Enter email"/>
        </div>
      </div>
    )
  }
}
export default Footer;
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
// import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className="row justify-content-around g-0 p-5 bg-white my-colour-1" >
        <div className="col-sm-3 bg-white">
          <div className="bg-white my-border-none" >
            <div className="card-body">
              <p className="card-text"><i className="fas fa-globe"></i> SinghHolidays@2021</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 bg-white">
          <div className="bg-white my-border-none" >
            <div className="card-body">
              <p className="card-text"><i className="fas fa-envelope"></i> Info@singhholidays.com</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 bg-white">
          <div className="bg-white my-border-none">
            <div className="card-body">
              <p className="card-text"><i className="fas fa-phone-square"></i> +995 550 000186 | +995 550 000786</p>
            </div>
          </div>
        </div>
        <div className="col-sm-2 bg-white">
          <div className="bg-white my-border-none">
            <div className="card-body">
              <p className="card-text">
              <a className="nav-item mx-2 my-colour-1" href="https://www.instagram.com/singhholidays2015/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a className="nav-item mx-2 my-colour-1" href="https://www.facebook.com/SINGHOLIDAYS"  target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a className="nav-item mx-2 my-colour-1" href="https://www.youtube.com/channel/UCSg_BzJDmHJUb9vgr-_I0LQ" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Footer;
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mt-2 mb-1" href="#">
            <img src="/R2.png" width="50" height="50" className="d-inline-block mr-4 " alt=""></img>
            AkinTec / SWAPi
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Events</a>
                </li>
                <li className="nav-item mr-2">
                    <a className="nav-link" href="#">Blog</a>
                </li>    
                <li className="nav-item mt-2">
                    <a href="#"><i className="fa fa-fw fa-search"></i></a>  
                </li>                            
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;
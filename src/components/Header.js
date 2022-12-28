import React from 'react';
export default function Header(){

	return (
		<header id="header" className="fixed-top">
    <div className="container-fluid d-flex justify-content-between align-items-center">
      <h1 className="logo me-auto me-lg-0"><a href="index.html">UmerCSE</a></h1>
      {/* <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="" href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          {/* <li><a href="#portfolio">Portfolio</a></li> */}
          <li><a href="mailto:umercse@hotmail.com" className='btn-about'>Hire Me</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <div className="header-social-links">
        <a href="skype:muhammad_umer_sheikh1994" className="skype px-2"><h3><i className="bi bi-skype"></i></h3></a>
        <a href="https://www.linkedin.com/in/cseumer" className="linkedin px-2"><h3><i className="bi bi-linkedin"></i></h3></a>
        <a href="https://www.github.com/umercse" className="github px-2"><h3><i className="bi bi-github"></i></h3></a>
      </div>
    </div>
  </header>
);
}

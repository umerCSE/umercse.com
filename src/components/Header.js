import React from 'react';
export default function Header(){

	return (
		<header id="header" className="fixed-top">
    <div className="container-fluid d-flex justify-content-between align-items-center">
      <h1 className="logo me-auto me-lg-0">
      <a href="index.html" className="logo">
        <img src="assets/img/favicon.png" alt="UmerCSE" className="img-fluid" />
        <span className='px-2'>Umer Sheikh</span>
        </a>
      </h1>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="" href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#facts">Facts</a></li>
          <li><a href="#testimonials">Recommendations</a></li>
          {/* <li><a href="#portfolio">Portfolio</a></li> */}
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <div className="header-social-links">
        <a href="https://wa.me/+923359835006" className="whatsapp px-2"><h3><i class="bi bi-whatsapp"></i> +923359835006</h3></a>
        <a href="mailto:hire@umercse.com" className="email px-2"><h3><i class="bi bi-envelope-at-fill"></i> hire@umercse.com</h3></a>
        <a href="skype:muhammad_umer_sheikh1994" className="skype px-2"><h3><i className="bi bi-skype"></i> Skype</h3></a>
        <a href="https://www.linkedin.com/in/cseumer" className="linkedin px-2"><h3><i className="bi bi-linkedin"></i> LinkedIn</h3></a>
        <a href="https://www.github.com/umercse" className="github px-2"><h3><i className="bi bi-github"></i> GitHub</h3></a>
      </div>
    </div>
  </header>
);
}

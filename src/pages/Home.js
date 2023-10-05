import React from 'react';
import SinglePage from './templates/SinglePage';
export default function App(){

	return (
		<SinglePage>
        <section id="hero" className="d-flex align-items-center ">
            <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
            <h1>Umer Sheikh</h1>
            <h2><small><i class="bi bi-pin-map-fill pr-2 text-primary"></i>Lahore, Pakistan</small></h2>
            <h2>Open Source developer, skilled with Laravel &amp; VueJS, having hands-on Cloud Administration</h2>
            <a href="mailto:hire@umercse.com" className="btn-about">Hire Me</a>
            </div>
        </section>
        <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="assets/img/umercse_casual_outdoor.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Software Engineer / PHP &amp; JS Developer</h3>
            <h4 className='text-left lead'>I am a young enthusiastic IT professional having around 5 years of work experience in industry. 
            I have good command over <strong>Laravel, React JS</strong> as well as Core PHP, Vanilla JavaScript &amp; other open-source technologies.</h4>
            <h4 className='text-left lead'>Along with programming capabilities, I have a very strong knowledge of Software Engineering, i.e. Web Application Development and Third party APIs Integration.</h4>
            <h3>Interpersonal Skills</h3>
            <h4 className='text-left lead'>I am very energetic in my field and always love to help and focus on solutions and like to work on technically challenging goals.</h4>
            <h3>Industrial Experience</h3>
            <h4 className='text-left lead'>Already I have been working in a diverse range of <strong>Business Domains</strong>:<br></br> including <strong>Customer Relation Management, Project Management, Social Networking, Real Estate Booking, Sports, Human Resource Management, E-Commerce &amp; Event Management</strong> <br></br>from Analysis, Design and creating of development plans to solving any kind of development based problem.</h4>
            <h3>More Details</h3>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-rounded-right"></i> <strong>Degree:</strong> BS Software Engineering</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>LinkedIn:</strong><a href='https://www.linkedin.com/in/cseumer'> @cseumer</a></li>
                  <li><i className="bi bi-rounded-right"></i> <strong>City:</strong> Lahore, Pakistan </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-rounded-right"></i> <strong>Email:</strong> umercse@hotmail.com</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Phone:</strong> +92 335 983 5006</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Available for work:</strong> Yes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* <!-- ======= Skills Section ======= --> */}
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Skills</h2>
          <p>I enjoy building software from scratch, develop software architecture, optimize code and revamping UI. I am good with PHP and have hands-on database design and JavaScript.</p>
        </div>

        <div className="row skills-content">

        <div className="col-md-3 col-1">
            
        </div>

          <div className="col-md-6">
            <div className="progress">
              <span className="skill">Backend Developement (Laravel &amp; MySql)<i className="val">Very Good</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">Software Architecture (OOP, DSA, Core PHP, Vanilla JS, REST APIs, Sockets)<i className="val">Good</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">Cloud Administration (AWS, DigitalOcean, Azure, GCP)<i className="val">Above Average</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">Frontend Development (VueJS &amp; ReactJS)<i className="val">Above Average</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">Frontend Design (HTML, CSS JS &amp; JQuery)<i className="val">Average</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}}></div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-1">
            
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Skills Section --> */}

        <section className="resume" id="resume">
        <div className="container" data-aos="fade-up">
            
        <div className="section-title">
          <h2>Resume</h2>
        </div>
        <center>
          <small className="d-block py-2">
            <a className="btn-about text-left" href="https://docs.google.com/document/d/1LWMsTaJIMFmZuciMXtkS2klvBpYkdG92/edit?usp=sharing&ouid=111821119675624252718&rtpof=true&sd=true" target={"_blank"}><i class="bi bi-cloud-arrow-down-fill"></i> Download </a> from Google Drive
          </small>
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vSPhpgKP9vBgDdq7zPMApRVqw7-E_UgAO4weDhZIHOhUI3fzvEPBpIdyfK-8H6pUg/pub?embedded=true" style={{textAlign: "center", height: "auto", minHeight : "70vh", minWidth : "67%", maxWidth: "98vw", border: "5px solid black"}}></iframe>
          <small className="d-block py-2">
            <a className="btn-about text-left" href="https://docs.google.com/document/d/1LWMsTaJIMFmZuciMXtkS2klvBpYkdG92/edit?usp=sharing&ouid=111821119675624252718&rtpof=true&sd=true" target={"_blank"}><i class="bi bi-cloud-arrow-down-fill"></i> Download </a> from Google Drive
          </small>
        </center>
        </div>
        </section>


    {/* <!-- ======= Facts Section ======= --> */}
    <section id="facts" className="facts">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Facts</h2>
          <p>In addition to working with software houses. I also worked for with my clients from Pakistan, Germany and Netherlands directly. Here are approximate figures.</p>
        </div>

        <div className="row counters">

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="23" data-purecounter-duration="1" className="purecounter"></span>
            <p>Clients</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="16" data-purecounter-duration="2" className="purecounter"></span>
            <p>Projects</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="3" className="purecounter"></span>
            <p>Worked Solo</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="8" data-purecounter-duration="4" className="purecounter"></span>
            <p>Worked in Managed Teams</p>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Facts Section --> */}

    {/* <!-- ======= Testimonials Section ======= --> */}
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Recommendations</h2>
          <p>Recommended by many on LinkedIn, some are following:</p>
        </div>

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                <h3>Safia Anwar</h3>
                <h4>QA Lead @ Dynamologic</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Umer has a very proactive attitude and I really appreciate his ability to go deep and foresee scenarios that other developers might not even consider. He looks at the problem from all perspectives and has excellent analytical and problem solving skills. He is hardworking, dedicated and a great team player.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                <h3>Osama Rana</h3>
                <h4>Team Lead @ Dynamologic</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Umer is amazing at his work and does whatever is required to achieve his Goals. He knows his way around people, has a great attitude towards work and is always ready to help his colleagues.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                <h3>Abdul Haseeb</h3>
                <h4>CTO @ LastingSales</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Umer is a very dedicated and hardworking person I've met. His skills as backend developer were very impressive. He's the right person to contact if you're looking for an experienced Full Stack Engineer and some fun. Great guy!
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                <h3>Abdul Haseeb</h3>
                <h4>Software Engineer @ Dynamologic</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Muhammad Umer Sheikh excels at what he does! He gets things done, gets along well with others, and is terrific with clients. He also goes above and beyond to support his colleagues. He ensures that everyone is focused on the core objective and on the same page.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                <h3>Muhammad Bilal</h3>
                <h4>Software Engineer @ Dynamologic</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Umer is a very talented developer. He has great problem solving skills, always meet the deadlines and works honestly. He always finds the best approach to solve the problems.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>
        </SinglePage>
	);
}

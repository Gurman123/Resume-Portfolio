import React from 'react'

export const About = ({data}) => {
    if(data) {
        var name = data.name;
        var profilepic = "images/" + data.image;
        var bio = data.bio;
        var street = data.address.street;
        var city = data.address.city;
        var state = data.address.state;
        var zip = data.address.zip;
        var phone = data.phone;
        var email = data.email;
        var resumedownload = data.resumedownload;
        var project1 = data.project_Work.project1;
        var project2 = data.project_Work.project2;
        var project3 = data.project_Work.project3;
        var project4 = data.project_Work.project4;
        var project5 = data.project_Work.project5;
        var project6 = data.project_Work.project6;
        var project7 = data.project_Work.project7;

    }
    return (
        <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Gurman's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2 style={{textAlign: "left", justifyContent:"normal"}}>About Me</h2>

          <p style={{textAlign: "left"}}>{bio}
          <span>
              <h6 style={{textAlign: "left",color:"white"}}>Following are my projects I have worked on :</h6>
          <dl style={{textAlign: "left"}}>
              <dd>{project1}</dd>
              <dd>{project2}</dd>
              <dd>{project3}</dd>
              <dd>{project4}</dd>
              <dd>{project5}</dd>
              <dd>{project6}</dd>
              <dd>{project7}</dd>
          </dl>
          </span>
          </p>
         
          <div className="row">
            <div className="columns contact-details">
              <h2 style={{textAlign: "left"}}>Contact Details</h2>
              <p style={{textAlign: "left"}} className="address">
                <span >{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumedownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

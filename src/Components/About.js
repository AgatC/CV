import React, { Component } from 'react';

class About extends Component {
  render() {

    if (this.props.data) {
      var name = this.props.data.name;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="https://i.postimg.cc/QdF4hjn0/29598008-10214177125234465-6047036958388772377-n.jpg" alt="Agathe Cazals" />
          </div>
          <div className="nine columns main-col">
            <h2>Mon profil</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Me contacter</h2>
                <p className="address">
                  <span>{name}</span><br />
                  <span>{street}<br />
                    {zip}, {city}
                  </span><br />
                  <span>{phone}</span><br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default About;

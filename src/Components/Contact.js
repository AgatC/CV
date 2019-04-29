import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

        <div className="row section-head">

          <div className="two columns header-col">

            <h1><span>Me contacter</span></h1>

          </div>

          <div className="ten columns">

            <p className="lead">{message}</p>

          </div>

        </div>

        <div className="row">
          <div className="eight columns">
            <div className="four columns footer-widgets">
              <div className="widget widget_contact">
                <p className="address">
                  {name}<br />
                  {street} <br />
                  {city}, {state} {zip}<br />
                  <span>{phone}</span><br />
                  <span>agathe.cazals@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
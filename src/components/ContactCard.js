import React from 'react'
import user from '../images/user.jpg'

const ContactCard = ({ contact }) => {
  console.log(contact);
  return (
    <div className="item" key={contact.id}>
      <img src={user} alt="uder dp" className="ui avatar image" />
      <div className="content">
        <div className="header">{contact.name}</div>
        <div>{contact.email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
      />
    </div>
  );
};

export default ContactCard
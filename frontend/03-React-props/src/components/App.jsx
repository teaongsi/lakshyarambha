import React from "react";
import Card from "./Card.jsx";
import { contacts } from "../contacts.js";
import Avatar from "./Avatar.jsx";


function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

export default function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Avatar img="https://yt3.googleusercontent.com/JDPwhh73GWjQDySQyOGgbF6xof2nf_5zJ3_djjI-kqcuqUiznHCElC5uB5l8xzvJg_u_QIWi=s900-c-k-c0x00ffffff-no-rj" />


      {contacts.map(createCard)}
      
       {/* <Card name={contacts[0].name} img={contacts[0].imgURL} phone={contacts[0].phone} email={contacts[0].email}  />

      <Card name={contacts[1].name} img={contacts[1].imgURL} phone={contacts[1].phone} email={contacts[1].email}  />

      <Card name={contacts[2].name} img={contacts[2].imgURL} phone={contacts[2].phone} email={contacts[2].email}  /> */}
    </div>
  );
}

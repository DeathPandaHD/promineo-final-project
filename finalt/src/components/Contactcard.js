import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import Container from "react-bootstrap/esm/Container";
import user from "../assests/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <Container>
      <div>
        <br />

        <div className="d-flex p-2">
          <img className="" src={user} alt="user" width="20" height="20"></img>
          <h4>{name}</h4>
        </div>
        <div className="">{email}</div>
        <i style={{ cursor: "pointer" }}>
          <BsFillTrashFill
            div
            className=""
            style={{ color: "red", margintop: "7px" }}
            onClick={() => props.clickHandler(id)}
          />
        </i>
        <div></div>
      </div>
    </Container>
  );
};

export default ContactCard;

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import Contactlist from "./components/ContactList";
import Container from "react-bootstrap/Container";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <div>
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <Contactlist contacts={contacts} getContactId={removeContactHandler} />
      </div>
    </Container>
  );
}

export default App;

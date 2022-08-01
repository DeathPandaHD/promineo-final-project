import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" && this.state.email === "") {
      alert("All fields are needed!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <Container fluid>
        <div className="ui main">
          <br />
          <h2>Add Contact</h2>
          <Form onSubmit={this.add}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default AddContact;

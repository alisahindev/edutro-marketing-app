import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { readLocalStorage } from "../../helpers";

class QuestionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        phoneNumber: "",
        description: "",
        title: "",
      },
    };
  }

  handleChange = ({ currentTarget: input }) => {
    const values = { ...this.state.values };
    values[input.id] = input.value;
    this.setState({ values });
  };

  handleSubmit = () => {
    const values = { ...this.state.values };
    const userData = readLocalStorage("userData");
    values.email = userData.email;
    values.userId = userData.id;
    const { onSubmit } = this.props;
    onSubmit(values);
  };

  render() {
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form /* onSubmit={this.handleSubmit} */>
          <Modal.Body>
            <Form.Group controlId="title">
              <Form.Label>Konu</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="title"
                placeholder="hangi konuda soru sormak istersiniz?..."
              />
            </Form.Group>

            <Form.Group controlId="phoneNumber">
              <Form.Label>İletişim Numarası</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="text"
                placeholder="Tarafınıza daha hızlı dönüş yapılması için tel. numarası bırakabilirsiniz..."
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Mesajınız</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                placeholder="sorunuzu yazınız..."
                as="textarea"
                rows="3"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Vazgeç</Button>
            <Button onClick={this.handleSubmit}>Gönder</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default QuestionModal;

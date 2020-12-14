import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Row, Col } from "reactstrap";

class ApplyModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form>
          <Modal.Body>
            <Form.Group controlId="text">
              <Form.Label>İsim</Form.Label>
              <Form.Control
                type="email"
                placeholder="İsim"
              />
            </Form.Group>

            <Form.Group controlId="text">
              <Form.Label>Soyisim</Form.Label>
              <Form.Control
                type="text"
                placeholder="Soyisim"
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>E-Posta</Form.Label>
              <Form.Control
                placeholder="İletişim E-Posta"
                type="text"
              />
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Telefon Numaranız</Form.Label>
              <Form.Control
                placeholder="İletişim Telefon"
                type="text"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Vazgeç</Button>
            <Button type="submit" onClick={this.props.onHide}>
              Gönder
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default ApplyModal;

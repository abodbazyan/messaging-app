import React, { useRef } from "react"
import { Container, Form, Button } from "react-bootstrap"
import { v4 as uuidv4 } from "uuid"

export default function Login({ onIdSubmit }) {
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    onIdSubmit(idRef.current.value)
  }

  function createNewId() {
    onIdSubmit(uuidv4())
  }

  return (
    <Container
      className="d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your ID:</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="mt-2" style={{ marginRight: ".5rem" }}>
          Login
        </Button>
        <Button variant="secondary" className="mt-2" onClick={createNewId}>
          Create a new ID
        </Button>
      </Form>
    </Container>
  )
}

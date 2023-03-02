import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "../App.css";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



export function Update() {
    return (

        <Container className='h' >

            <Card className="text-left h">
                <Card.Body>
                    <Card.Title className='text-center h '>Perbarui To-Do List</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Judul</Form.Label>
                            <Form.Control type="judul"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Catatan</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button href="#">simpan</Button> <Button href="#">kembali</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>

    )

}
export default Update;
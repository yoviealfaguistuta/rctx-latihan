import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "../App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";



function Create() {
   return (
        <Container className='h' >

            <Card className="text-left h">
                <Card.Body>
                    <Card.Title className='text-center h '>Create To-Do List</Card.Title>
                    <Form onSubmit={postUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Judul</Form.Label>
                    <Form.Control type="judul"></Form.Control>
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Catatan</Form.Label>
                    <Form.Control type="catatan"></Form.Control>
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Button variant="info" type='submit'>simpan</Button>
            </Form>
                </Card.Body>
            </Card>

            
        </Container>

    )
}

export default Create;

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';



function Create() {
    return (
      <Container className=''>
        <Card className="text-left h">
            <Card.Body>
            <section>
                <Form>
                    <Card.Header className='text-center text'>PERBARUI KEGIATAN</Card.Header>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text2'>Judul</Form.Label>
                        <Form.Control type="judul"/>
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <button type="button" className='button1'>Kembali</button>
                    <button type="button" className='button2'>Simpan</button>
                </Form>
                </section>
                </Card.Body>
        </Card>
     </Container>

    );
}

export default Create;
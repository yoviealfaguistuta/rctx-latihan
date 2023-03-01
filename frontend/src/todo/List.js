import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "../App.css";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export function List() {
    return (
        <Container classname="containe">
            <h3 className='text-center h '>Aplikasi To-Do List</h3>
            <Button variant="link" size="sm">tambah</Button>
            <p></p>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        {['Info',].map((variant) => (
                            <Card
                                bg={variant.toLowerCase()}
                                key={variant}
                                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                
                                className="mb-2">
                                <Card.Body>
                                    <Card.Title>{variant} Judul </Card.Title>
                                    <Card.Text>
                                    To Do List merupakan daftar tugas atau hal yang ingin kamu kerjakan agar bisa diselesaikan dalam waktu tertentu.
                                    </Card.Text>
                                    <Button variant="light" href="#">detail</Button> <Button variant="light" href="#">edit</Button> <Button variant="light" href="#">hapus</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                ))}
            </Row>


        </Container>

    );
}
export default List;
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../index.css';



function Create() {
    const [tittle, setTittle] = React.useState();

    let navigate = useNavigate();

    const createItem = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/tambah-items/1', {
            tittle: tittle,
        }).then(function (response) {
            return navigate("/");

        }).catch(function (error) {

        }).finally(function () {

        });
    }

    return (
        <Container className=''>
            <Card className="text-left h">
                <Card.Body>
                    <section>
                        <Form onSubmit={createItem} action="">
                            <Card.Header className='text-center text'>TAMBAH KEGIATAN</Card.Header>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='text2'>Judul</Form.Label>
                                <Form.Control type="judul" placeholder="Enter judul" value={tittle} onChange={(e) => setTittle(e.target.value)} />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                            <div className='row'>
                                <div className='col-6 text-left'>
                                    <Link to={'/item/list'} className='btn btn-success mb-5' variant='success'>Kembali</Link>
                                </div>
                                <div className='col-6 text-right'><Button type="submit">Simpan</Button></div>
                            </div>
                        </Form>
                    </section>
                </Card.Body>
            </Card>
        </Container>

    );
}

export default Create;
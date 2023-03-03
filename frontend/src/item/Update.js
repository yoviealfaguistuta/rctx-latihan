import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../index.css';



function Update() {
    const [tittle, setTittle] = React.useState();

    const { id } = useParams();
    let navigate = useNavigate();

    React.useEffect(() => {
        getDetailUser();
    }, []);

    const getDetailUser = () => {
        // axios.get('http://127.0.0.1:8000/api/detail-items/' + id).then(function (response) {
            axios.get('http://127.0.0.1:8000/api/detail-items/1').then(function (response) {

            setTittle(response.data.tittle);

        }).catch(function (error) {
        }).finally(function () {

        });
    }

    const updateItem = (e) => {
        e.preventDefault();
        // axios.post('http://127.0.0.1:8000/api/update-items/' + id, {
        axios.post('http://127.0.0.1:8000/api/update-items/1', {

            tittle: tittle,
        }).then(function (response) {
            return navigate("/");

        }).catch(function (error) {

        }).finally(function () {

        });
    }
    return (
        <Container className='h'>
            <Card className="text-left h">
                <Card.Body>
                    <section>
                        <Form onSubmit={updateItem} >
                            <Card.Header className='text-center text'>PERBARUI KEGIATAN</Card.Header>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='text2'>Judul</Form.Label>
                                <Form.Control type="judul" placeholder="Enter judul" value={tittle} onChange={(e) => setTittle(e.target.value)} />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                            <div className='row'>
                                <div className='col-6 text-left'>
                                <Link to={'/item/list'} className='btn btn-success mb-5' variant='success'>Kembali</Link>
                                </div>
                            <div className='col-6 text-right'><Button  type="submit" className='button1'>Simpan</Button></div>
                            </div>
                        </Form>
                    </section>
                </Card.Body>
            </Card>
        </Container>

    )
};
export default Update;
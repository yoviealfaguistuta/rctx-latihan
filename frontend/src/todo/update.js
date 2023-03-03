import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "../App.css";
import React, {useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate,useParams } from 'react-router-dom';




export function Update() {
    const [tittle, setTittle] = React.useState();
    const [description, setDescription] = React.useState();

    const { id } = useParams();
    let navigate = useNavigate();
    
    React.useEffect(() => {
        getdetailtodo();
    }, []);

    const getdetailtodo = () => {
        axios.get('http://127.0.0.1:8000/api/detail-todos/'+id).then(function (response) {
            
            setTittle(response.data.tittle);
            setDescription(response.data.description);
        }).catch(function (error) {
        }).finally(function () {
            
        });
    }

    const updateTodo = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/update-todos/'+id, {
            tittle: tittle,
            description: description,
        }).then(function (response) {
            return navigate("/");
            
        }).catch(function (error) {

        }).finally(function () {

        });
    }

return (

     <Container className='h' >
       
        <Card className="text-left h">
        <section> 
                        <Card.Title className='text-center h '>Tambah To-Do List</Card.Title>
                    <Card.Body><form onSubmit={updateTodo} action="">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Judul</Form.Label>
                                <Form.Control type="judul" value={tittle} onChange={(e) => setTittle(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Catatan</Form.Label>
                            <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>
                        <Button type="submit">simpan</Button>
                        <Button className='btn btn-secondary w-100' href="/">Kembali</Button>
                    </form></Card.Body>
                </section>
            </Card>
    </Container>


    )

}
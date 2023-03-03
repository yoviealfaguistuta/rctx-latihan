import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../index2.css';
import axios from "axios";



export function List() {
  const [Todo, setTodo] = useState([]);

  useEffect(() => {
    getTodo();
  }, []);

  function getTodo() {
    axios
      .get('http://127.0.0.1:8000/api/todos')
      .then(function (response) {
        console.log('response :>> ', response.data);
        setTodo(response.data);

        // kode yang ada disini bakal di jalanin kalo berhasil dapet sesuatu
      })
      .catch(function (error) {
        //  yang ada disini bakal di jalanin kalo tidak berhasil dapet sesuatu
      })
      .finally(function () {
        // kode yang ada disini bakal di jalanin kalo dia berhasil atau tidak berhasil dapet sesuatu
      });
  }

  const deleteTodo = (id) => {
    axios.delete('http://127.0.0.1:8000/api/hapus-todos/' + id).then(function (response) {
      getTodo();
    }).catch(function (error) {

    }).finally(function () {

    });
  }

  // Todo.map((tittle, description) => {

  return (
    <section>
      <Container classname="containe">
        <h3 className='text-center h '>Aplikasi To-Do List</h3>
        <Button variant="link" size="sm" href="/create">tambah</Button>
        {
          Todo.map((item, index) => {
            return (

              <Col>
                {['Info',].map((variant) => (
                  <Card bg={variant.toLowerCase()} key=""
                    className="mb-2">
                    <Card.Body>
                      <Card.Title>{item.tittle}</Card.Title>
                      <Card.Text>
                        {item.description}
                      </Card.Text>
                      <Button variant="primary w-100 " href={'/item/list/' + item.id}>detail</Button> 
                      <Button variant=" dark w-100" href={'/update/' + item.id}>edit</Button>
                      <Button onClick={() => deleteTodo(item.id)} variant="light w-" >hapus</Button>
                    </Card.Body>
                  </Card>
                ))}
              </Col>
            )
          })
        }


      </Container>
    </section>
  );

}
export default List;
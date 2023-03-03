import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Container  from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import '../index.css';
import { Card } from 'react-bootstrap';

function List() {
    const [DataItem, setUserData] = useState([]);

	useEffect(() => {
		getItem();
	}, []);

	function getItem() {
		axios.get('http://127.0.0.1:8000/api/items/1')
			.then(function (response) {
				console.log('response :>> ', response.data);
				setUserData(response.data)

				// kode yang ada disini bakal di jalanin kalo berhasil dapet sesuatu
			}).catch(function (error) {
				//  yang ada disini bakal di jalanin kalo tidak berhasil dapet sesuatu
			}).finally(function () {
				// kode yang ada disini bakal di jalanin kalo dia berhasil atau tidak berhasil dapet sesuatu
			});
	}

	function deleteItem() {
		axios.get('http://127.0.0.1:8000/api/hapus-items/1')
			.then(function (response) {
				getItem();
			}).catch(function (error) {

			}).finally(function () {

			});
		}

    return(
		<section className='Section2'>
        <Container className='mt-5'>

			<div className="container-header-content">
				<div className='row'>
				<div className='col-4'>
					<Link to={'/item/create'} className='btn btn-success mb-5' variant='success'>Kembali</Link>
					</div>
					<div className='col-4 text-right'>
						<h1 className='text-right mb-0' >DETAIL KEGIATAN</h1>
					</div>
					<div className='col-4 text-right'>
					<Link to={'/item/create'} className='btn btn-success mb-5' variant='success'>+Tambah</Link>
					</div>
				</div>
			</div>
			<Card>
			<Table bordered>
				<thead>
					<tr>
						<th>Judul</th>
					</tr>
				</thead>
				<tbody>

					{
						DataItem.map((item,index) => {
							return (
								<tr>
									<h5>{item.tittle}</h5>
									<td>
										<Link to={'/item/update'} className='btn btn-link'>Perbarui</Link>
										<Button onClick={() => deleteItem (item.id)} variant="success">Hapus</Button>
										
									</td>
								</tr>
							)
						})
					}
					
				</tbody>
			</Table>
			</Card>
		</Container>
		</section>
		
    
    );
}
export default List;
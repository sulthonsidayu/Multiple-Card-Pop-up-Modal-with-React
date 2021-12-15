import React from 'react';
import './Modal.css'

const Modal = ({trigger, tutup, datas}) => {
    return (
        <>
            {trigger ? 
                <div className='modal'>
                    <div className="modal-content">
                        <span className="close" onClick={()=>{tutup(false)}}>&times;</span>
                        {datas.map(data =>(
                            <div className="kartu" key = {data.id}>
                                <h2>KARTU ANGGOTA PETUALANGAN</h2>
                                <table className='Tabel'>
                                    <tbody>
                                        <tr>
                                            <td>Nama</td>
                                            <td>: {data.nama}</td>
                                        </tr>
                                        <tr>
                                            <td>TTL</td>
                                            <td>: {data.ttl}</td>
                                        </tr>
                                        <tr>
                                        <td>Jenis Kelamin</td>
                                        <td>: {data.jeniskelamin}</td>
                                        </tr>
                                        <tr>
                                            <td>Status</td>
                                            <td>: {data.status}</td>
                                        </tr>
                                        <tr>
                                            <td>Hobi</td>
                                            <td>: {data.hobi}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="foto">
                                    <img 
                                        src={data.foto}
                                        alt="foto profil"
                                        width="160"
                                        height="230"
                                        style={{borderRadius:'1rem', borderStyle: 'solid', borderColor: 'black'}}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            : null}
        </>
    );
}

export default Modal;
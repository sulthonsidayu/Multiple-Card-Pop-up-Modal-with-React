import {useState} from 'react';
import Modal from './Modal';
import './App.css';

function App() {
  const [nama, setNama] = useState('');
  const [ttl, setTtl] = useState('');
  const [jeniskelamin, setJeniskelamin] = useState('');
  const [status, setStatus] = useState('Belum Menikah');
  const [hobi, setHobi] = useState('');
  const [foto, setFoto] = useState('');

  const[datas,setDatas] = useState([]);
  
  const [modal, setModal] = useState(false);
  
  const handleImage = (event) => {
    setFoto(URL.createObjectURL(event.target.files[0]));
  }
  

  const handleSimpan = (event) => {
    event.preventDefault()
    setDatas([...datas, {id: datas.length, nama: nama, ttl:ttl, jeniskelamin:jeniskelamin, status:status, hobi:hobi, foto:foto}])
    setNama('');
    setTtl('');
    setJeniskelamin('');
    setStatus('Belum Menikah');
    setHobi('');
    setFoto('');
  }
  
  const handleCetak = (event) => {
    event.preventDefault();
    console.log(datas);
    setModal(true);

  }

  const handleReset = (event) => {
    event.preventDefault();
    setDatas([]);
  }

  return (
    <div className="App">
      <form>
        <h2 className = 'LabelJudul'>Isi Profil Anda:</h2>
        <br/>
        <br/>

        <label className ="Label">Nama Lengkap:</label><br/>
        <input
          type="text"
          name="nama"
          className='KotakInput'
          value={nama}
          onChange={(e)=>setNama(e.target.value)}
        />
        <br/>

        <label className ="Label">Tempat & Tanggal Lahir:</label>
        <br/>
        <input
          type="text"
          name="tanggallahir"
          className='KotakInput'
          value={ttl}
          onChange={(e)=>setTtl(e.target.value)}
        />
        <br/>

        <label className ="Label">Jenis Kelamin:</label>
        <br/>
        <div
          className='JenisKelamin'
          value={jeniskelamin}
          onChange={(e)=>setJeniskelamin(e.target.value)}
        >
            <input
              type="radio"
              name="jeniskelamin"
              value="Laki-laki"
            />
            <label className='LabelKelamin'>Laki-laki</label>
            <br/>
            <br/>
            <input
              type="radio"
              name="jeniskelamin"
              value="Perempuan"/>
            <label className='LabelKelamin'>Perempuan</label>
        </div>

        <label className ="Label">Status:</label>
        <br/>
        <select
          name="status"
          className='Status'
          value={status}
          onChange={(e)=>setStatus(e.target.value)}
        >
            
            <option value="Belum Menikah">Belum Menikah</option>
            <option value="Sudah Menikah">Sudah Menikah</option>
        </select>
        <br/>

        <label className ="Label">Hobi:</label><br/>
        <input
          type="text"
          name="hobi"
          className='KotakInput'
          value={hobi}
          onChange={(e)=>setHobi(e.target.value)}
        />
        <br/>
            
        <label className ="Label">Pilih Foto Profil:</label><br/>
        <input
          type="file"
          accept="image/*" 
          name="gambar"
          className='FotoProfil'
          onChange={handleImage}
        />
        <br/>
        <br/>
        <button className='Simpan' onClick={handleSimpan}>Simpan</button><br/>
        <button className='Cetak' onClick={handleCetak}>Cetak</button><br/>
        <button className='Reset' onClick={handleReset}>Reset</button>
      </form>

      {/*Open Modal*/}
      <Modal
        trigger = {modal}
        tutup = {setModal}
        datas = {datas}
      />
      
    </div>
  );
}

export default App;

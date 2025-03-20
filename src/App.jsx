import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from './tabel';
import {Container} from "react-bootstrap"
import Example from './popup'
function App() {
  // const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);
    const [status, setStatus] = useState (false);
    const[tempData, setTempData] = useState({});
  
    const handleClose = () => setShow(false);
    const handleShow = (rowData) => {
      if(rowData){
        setTempData (rowData);
      }else{
        setTempData({
          name: null,
          emailid:null,
          location:null,
          phoneNo:null,
          qualification:null
        })

      }
      
      setShow(true);
    } 
  

  return (
    <>
        <Container fluid className='p-4'/>
         <Example ref={status} setRef={setStatus} boxShow ={show} boxClose={handleClose} fieldData={tempData}/>
        <TableComponent boxClick = {handleShow} update={status} setUpdated={setStatus} />
        <Container/>

    </>
  )
}

export default App

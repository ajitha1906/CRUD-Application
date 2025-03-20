
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
function TableComponent(bcd) {
  const[tableData,setTableData]= useState(null);
  useEffect(()=>{
    
    fetch('https://67d7edad9d5e3a10152ca0b1.mockapi.io/students/Details', {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(tasks => {
      setTableData(tasks);
      // Do something with the list of tasks
    }).catch(error => {
      console.log(error);
      // handle error
    })
  },[bcd.update])
  console.log(tableData)
  const deleteUser = id =>{

    
fetch(`https://67d7edad9d5e3a10152ca0b1.mockapi.io/students/Details/${id}`, {
  method: 'DELETE',
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // Do something with deleted task
}).catch(error => {
  // handle error
})

  }
  
  return (
    <>
    <button variant={"warning"} className='fs-5 mb-3' onClick={()=>bcd.boxClick()}> Add Data </button>
    <Table striped bordered hover variant='dark' >
      <thead className='text-centaer'>

        <tr className='fs-1'>
          <th>sno</th>
          <th>Name</th>
          <th>EmailId</th>
          <th>PhoneNo</th>
          <th>Qualification</th>
          <th>location</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody className='text-center'>
      {tableData?.map((item,index)=>{
            return(
              <>
               <tr className='fs-2'>
          <td>{index+1}</td>
          <td>{item.name}</td>
          <td>{item.emailId}</td>
          <td>{item.phoneNO}</td>
          <td>{item.qualification}</td>
          <td>{item.location}</td>
          <td><Button onClick={()=>bcd.boxClick(item)} variant="success me-3">Edit</Button>
          <Button variant='danger' onClick={()=> deleteUser(item.id)}>Edit</Button>
      </td>
      </tr>
          </>
            )

        })}
        {/* <tr className='fs-2'>
          <td>1</td>
          <td>Lola Lind</td>
          <td>Aditiya Wuckert94@hotmail</td>
          <td>218-399-4429</td>
          <th>qualification 1</th>
          <th>Maldern</th>
          <th><Button variant="success me-3">Edit</Button>
          <Button variant='danger'>Edit</Button>
          </th>

        </tr> */}
        </tbody>
    </Table>
    </>
  );
}

export default TableComponent;
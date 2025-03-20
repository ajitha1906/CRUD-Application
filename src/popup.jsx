import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example(abc) {
   console.log(abc.fieldData,"###")
   const updatedData=()=>{
       
fetch(`https://67d7edad9d5e3a10152ca0b1.mockapi.io/students/Details/${abc.fieldData.id}`, {
  method: 'PUT', // or PATCH
  headers: {'content-type':'application/json'},
  body: JSON.stringify(abc.fieldData)
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  abc.setRef(!abc.ref)
}).catch(error => {
  // handle error
})
abc.boxClose();
   }

   const createUser= () =>{
       const newTask = {
         content: 'Check out mockapi.io',
         completed: false,
       };
       
       fetch('https://67d7edad9d5e3a10152ca0b1.mockapi.io/students/Details', {
         method: 'POST',
         headers: {'content-type':'application/json'},
         // Send your data in the request body as JSON
         body: JSON.stringify(newTask)
       }).then(res => {
         if (res.ok) {
             return res.json();
         }
         // handle error
       }).then(task => {
         alert ("User added successfully..!");
         bcd.setUpdate(!bcd.update)
         // do something with the new task
       }).catch(error => {
         // handle error
       })
       abc.boxClose();
     }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={abc.boxShow} onHide={abc.boxClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
                defaultValue={abc.fieldData.name}
                onChange={(e)=>abc.setfieldData({...Data.fieldData,name: e.target.value})}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                defaultValue={abc.fieldData.emailId}
                onChange={(e)=>abc.setfieldData({...Data.fieldData,name: e.target.value})}

   
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>phoneNO</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
                defaultValue={abc.fieldData.phoneNo}
   
              />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>qualifiction</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
                defaultValue={abc.fieldData.qualification}
   
              />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>location</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
                defaultValue={abc.fieldData.qualification}
              />
            </Form.Group>
      
      
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={abc.boxClose}>
            Close
          </Button>
          {abc.fieldData.id?<Button variant="primary" onClick={updatedData}>Save Changes</Button>:
            <Button variant='success' onClick={createUser}>
              Create
            </Button>
          }
         </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
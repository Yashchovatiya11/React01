import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdAdminPanelSettings } from "react-icons/md";


function Offcanv({ name, ...props }) {

     const [show, setShow] = useState(true);

     const handleClose = () => setShow(false);
     const toggleShow = () => setShow((s) => !s);

     return (

          <>
               <div className='mx-auto'>
                    <Button variant="primary" onClick={toggleShow} className="me-2">
                         {name}
                    </Button>
               </div>
               <div>

                    <Offcanvas show={show} onHide={handleClose} {...props} className="w-25">
                         <Offcanvas.Header closeButton>
                              <Offcanvas.Title> <span><MdAdminPanelSettings className='fs-3'/></span> AdminLTE 3</Offcanvas.Title>
                         </Offcanvas.Header>
                         <Offcanvas.Body>
                              Some text as placeholder. In real life you can have the elements you
                              have chosen. Like, text, images, lists, etc.
                         </Offcanvas.Body>
                    </Offcanvas>
               </div>
          </>
     );
}

export default Offcanv

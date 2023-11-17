import React, { useState } from 'react'
import { Modal, Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Room = ({ room,formattedStartDate,formattedEndDate }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className='row bs'>
        <div className='col-md-4'>
          <img src={room.imageurl} className='smallimg' alt={room.name} />
        </div>

        <div className='col-md-7'>
          <b>{room.name}</b>
          <b>maxcount:{room.maxcount}</b>
          <b>phonenumber:{room.phonenumber}</b>
          <b>type:{room.type}</b>
          <b>{room.description}</b>
          <div style={{ textAlign: 'right' }}>
          <Link to={`/book/${room._id}/${formattedStartDate}/${formattedEndDate}`}>
              <button className='btn btn-primary m-2'>Book now</button>
            </Link>
            <button className='btn btn-primary' onClick={handleShow}>
              View details
            </button>
          </div>
        </div>


        <Modal show={show} onHide={handleClose} size='lg'>
          <Modal.Header >
            <Modal.Title>{room.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel>
              {room.imageurl.map(url => {
                return <Carousel.Item>
                  <img
                    className='d-block w-100 bigimg'
                    src={url}
                  />
                </Carousel.Item>
              })}
            </Carousel>
            <p>{room.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default Room
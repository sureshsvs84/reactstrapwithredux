import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

 const SlideModal =(props)=>{
     return(
        <Modal isOpen={props.isModalOpen} toggle={props.toggleModal}
                       className={'modal-slide ' + props.className}>
                  <ModalHeader toggle={props.toggleModal}>Modal title</ModalHeader>
                  <ModalBody>
                  {props.children}
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={props.toggleModal}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={props.toggleModal}>Cancel</Button>
                  </ModalFooter>
        </Modal>
    )
}
export default SlideModal;
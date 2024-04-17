import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaUpload } from "react-icons/fa6";
import UploadTitleicon from '../../../assets/icon/UploadTitleicon';
import './uplaodModal.scss'
import AddIcon from '../../../assets/icon/AddIcon';
import DeleteIcon from '../../../assets/icon/DeleteIcon';

const UploadModal = (props) => {
    return (
        <div className='add-product-wrapper'>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='d-flex align-items-center gap-3'>
                        <div className='modal-upload-icons-styling'><UploadTitleicon /></div>Upload your File
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className='upload-drag-drop-wrapper'>
                    <div className='upload-files'>
                        <div className='upload-icon-wrapper'>
                            <FaUpload />
                        </div>
                        <p className='upload-text'>Drag & Drop Your File (Use Only Excel Files*)</p>
                        <p className='upload-click'>Or click</p>
                        <Button><AddIcon/>&nbsp;&nbsp;Upload File</Button>
                    </div>
                </div>
                {/* <hr/> */}
                <div className='upload-files-list'>
                    <p className='files-list-text'>Uploaded your File :</p>
                    <div className='files-list'>
                        <span>1. Malcoin Dowley Meeting</span>
                        <span>File size : 2mb</span>
                        <button className='list-delete-button'><DeleteIcon/></button>
                    </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button >Upload</Button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default UploadModal;
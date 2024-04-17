import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaSearch } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import './filterComponent.scss'
import ScrapingIcon from '../../assets/icon/ScrapingIcon';
import UploadIcon from '../../assets/icon/UploadIcon';
import UploadModal from '../modals/UploadModal';
const FilterComponents = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className='bg-white p-4 rounded-2 mb-3 filter-component-main-wrapper'>
            <div className='d-flex align-items-end justify-content-between'>
                <div className='d-flex align-items-center gap-2'>
                    <div>
                        <label>
                            Brand
                        </label>
                        <DropdownButton
                            id="dropdown-button-dark-example2"
                            variant="secondary"
                            title="Choose Brands"
                            className="mt-2 filter-dropdown-brand"
                            data-bs-theme="dark"
                        >
                            <Dropdown.Item href="#/action-1" active>
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div>
                        <label>
                            Category
                        </label>
                        <DropdownButton
                            id="dropdown-button-dark-example2"
                            variant="secondary"
                            title="Choose Category"
                            className="mt-2 filter-dropdown-brand"
                            data-bs-theme="dark"
                        >
                            <Dropdown.Item href="#/action-1" active>
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div>
                        <label>
                            Make
                        </label>
                        <DropdownButton
                            id="dropdown-button-dark-example2"
                            variant="secondary"
                            title="Choose Make"
                            className="mt-2 filter-dropdown-brand"
                            data-bs-theme="dark"
                        >
                            <Dropdown.Item href="#/action-1" active>
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className='search-button-wrapper'>
                        <Button variant="secondary"><FaSearch /></Button>
                    </div>
                </div>
                <div className='d-flex align-items-center gap-3 loading-buttons'>
                    <OverlayTrigger
                        overlay={
                            <Tooltip>
                                Download Excel File
                            </Tooltip>
                        }
                    >
                        <Button variant="primary" className='fs-5'><FaDownload /></Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        overlay={
                            <Tooltip>
                                Scrape Log
                            </Tooltip>
                        }
                    >
                       <Button variant="primary" className='fs-5'><ScrapingIcon /></Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        overlay={
                            <Tooltip>
                                Upload Excel File
                            </Tooltip>
                        }
                    >
                        <Button variant="primary" className='fs-5' onClick={() => setModalShow(true)}><UploadIcon /></Button>
                    </OverlayTrigger>
                    {/* <Button variant="primary" className='fs-5'><ScrapingIcon /></Button>
                    <Button variant="primary" className='fs-5' onClick={() => setModalShow(true)}><UploadIcon /></Button> */}
                    <UploadModal show={modalShow}
                        onHide={() => setModalShow(false)} />
                </div>
            </div>
        </div>
    )
}

export default FilterComponents
import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import './pagination.scss'

const PaginationBar = () => {
    return (
        <div className='d-flex align-items-center justify-content-between'>
            <div>
                <p className='fw-bold'>Showing result 1 to 8 of 45</p>
            </div>
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item >{2}</Pagination.Item>
                <Pagination.Item >{3}</Pagination.Item>
                <Pagination.Item >{4}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </div>
    )
}

export default PaginationBar
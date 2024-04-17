import React from 'react'
import Table from 'react-bootstrap/Table';
import './tableComponent.scss'
import Form from 'react-bootstrap/Form';
import UpArrow from '../../../assets/icon/UpArrow';
import DownArrow from '../../../assets/icon/DownArrow';
import { LuLink } from "react-icons/lu";
import ScrapeAction from '../../../assets/icon/ScrapeAction';
import EditAction from '../../../assets/icon/EditAction';
import DeleteAction from '../../../assets/icon/DeleteAction';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
function TableComponent(props) {
    return (
        <>
        {props?.TableData ?
        <Table responsive>
            <thead>
                <tr>
                    {props?.isCheckBox ?
                    <th>
                        <Form.Check
                            inline
                            name="group1"
                            type={'checkbox'}
                            id={'1'}
                        />
                    </th> : '' }
                    {Object.keys( props?.TableData[0] )?.map((key, index) => {
                        const excludedFields = props?.ExcludeFields;
                        if (!excludedFields?.includes(key)) {
                            return (
                                <th key={index}>
                                    <div className='sorting-icons'>
                                        {key.toUpperCase().replace('_', ' ')}
                                        <div><UpArrow />
                                            <DownArrow /></div>
                                    </div>
                                </th>
                            )
                        }
                    })}
                    {props?.IsAction === true ? 
                    <th>
                        ACTION
                    </th>: '' }
                </tr>
            </thead>
            <tbody>
                {props?.TableData
                    .map((item, index) => {
                        // Define an array of fields to exclude
                        const excludedFields = props?.ExcludeFields; // Add the fields you want to exclude
                        const filterFields = props?.FilterFields;
                        return (
                            <tr key={index}>
                                {props?.isCheckBox ? 
                                <td>
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type={'checkbox'}
                                        id={'1'}
                                    />
                                </td> : '' }

                                {Object.entries(item)?.map(([key, value], idx) => {
                                    // Check if the current field is not in the excludedFields array
                                    if (!excludedFields?.includes(key) && typeof (value) !== 'object') {
                                        if (filterFields?.includes(key) && typeof (value) !== 'object') {
                                            return (
                                                <td key={idx} className=''>
                                                    <OverlayTrigger overlay={<Tooltip >{value}</Tooltip>}>
                                                        <div className='url-links'>
                                                            <LuLink />
                                                        </div>
                                                    </OverlayTrigger>
                                                </td>
                                            )
                                        }
                                        return (
                                            <OverlayTrigger overlay={<Tooltip >{value}</Tooltip>}>
                                                <td key={idx}>
                                                    {value.length > 15 ? value.substring(0, 20) + "..." : value}
                                                </td>
                                            </OverlayTrigger>
                                        )
                                    } if (typeof (value) === 'object' && !excludedFields?.includes(key)) {
                                        return (
                                            <td key={idx} >
                                                {Object.entries(value).map(([key, value]) => {
                                                    return (
                                                        <div style={{ display: 'inline-block', marginRight: '2px' }}>
                                                            <OverlayTrigger overlay={<Tooltip >{value}</Tooltip>}>
                                                                <div className='url-links-2'>
                                                                    {key.charAt(0).toUpperCase()}
                                                                </div>
                                                            </OverlayTrigger>
                                                        </div>
                                                    );
                                                })}

                                            </td>
                                        )
                                    }

                                    return null; // If the field is excluded, return null
                                })}
                                {props?.IsAction === true ?
                                <td className=''>
                                    <div style={{ display: 'inline-block', marginRight: '8px' }}>
                                        <OverlayTrigger overlay={<Tooltip >{'Scraping'}</Tooltip>}>
                                            <div className='data-actions'>
                                                <ScrapeAction />
                                            </div>
                                        </OverlayTrigger>
                                    </div>

                                    <div style={{ display: 'inline-block', marginRight: '8px' }} onClick={()=>props?.setEditId(item)}>
                                        <OverlayTrigger overlay={<Tooltip >{'Edit'}</Tooltip>}>
                                            <div className='data-actions'>
                                                <EditAction />
                                            </div>
                                        </OverlayTrigger>
                                    </div>
                                    <div style={{ display: 'inline-block', marginRight: '8px' }}>
                                        <OverlayTrigger overlay={<Tooltip >{'Delete'}</Tooltip>}>
                                            <div className='data-actions'>
                                                <DeleteAction />
                                            </div>
                                        </OverlayTrigger>
                                    </div>
                                </td> : '' }
                            </tr>
                        )
                    })}
            </tbody>
        </Table> : <div className='d-flex justify-content-center'>
        <div className='not-found-data'>
           <img src='/assets/images/data-empty.jpg' alt='data-empty'/>
            </div></div>}
        </>
    )
}

export default TableComponent;
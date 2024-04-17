import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import './tableComponent.scss'
import UpArrow from '../../assets/icon/UpArrow';
import DownArrow from '../../assets/icon/DownArrow';

function TableComponent() {
    return (
        <div className='table-component-main-wrapper'>
            <Table responsive>
                <thead>
                    <tr>
                        <th>
                            <Form.Check
                                inline
                                label=""
                                name="group1"
                                type={'checkbox'}
                                id={`inline-${'checkbox'}-1`}
                            />
                        </th>
                        {Array.from({ length: 7 }).map((_, index) => (
                            <th key={index}><div className='sorting-table'>
                                Table heading <div className='sorting-icons'>
                                    <UpArrow /><DownArrow /></div></div></th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>  <Form.Check
                            inline
                            label=""
                            name="group1"
                            type={'checkbox'}
                            id={`inline-${'checkbox'}-1`}
                        /></td>
                        {Array.from({ length: 7 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>  <Form.Check
                            inline
                            label=""
                            name="group1"
                            type={'checkbox'}
                            id={`inline-${'checkbox'}-1`}
                        /></td>
                        {Array.from({ length: 7 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>  <Form.Check
                            inline
                            label=""
                            name="group1"
                            type={'checkbox'}
                            id={`inline-${'checkbox'}-1`}
                        /></td>
                        {Array.from({ length: 7 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default TableComponent;
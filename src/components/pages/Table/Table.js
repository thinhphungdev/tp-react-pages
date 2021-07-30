import React, { useEffect, useMemo } from 'react';
import axios from 'axios';

import { useTable, usePagination } from 'react-table';
import { COLUMNS } from './columns.js';
import { API_URL } from '../../../config.js';
import { useSelector, useDispatch } from 'react-redux';

import { setTableData } from '../../../store/tableSlice.js';
import Button from '../../UI/Button.js';

const Table = (props) => {
    const tableData = useSelector(state => state.table.data);
    const dispatch = useDispatch();

    useEffect(() => {
        const getTableData = async () => {
            const response = await axios.get(API_URL);
            
            if (response.status === 200) {
                dispatch(setTableData(response.data))
            } else throw new Error()
        }

        try {
            getTableData();
        } catch (err) {
            console.error(err)
        }
    }, [dispatch])

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => tableData, [tableData]);

    const tableInstance = useTable({
        columns,
        data,
        initialState: { pageSize: 5 }
    }, usePagination);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        state,
        prepareRow,
    } = tableInstance

    const {pageIndex} = state;

    return (
          <div className="wrapper"> 

            <Button onClick={() => props.openModal()} className="table-btn">Add New Employee</Button>

            <table className="styled-table" {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>
                                            {
                                                column.render('Header')}
                                        </th>
                                    ))}
                            </tr>
                        ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell => {
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {// Render the cell contents
                                                        cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <div className="pagination">
                <button disabled={!canPreviousPage} onClick={() => previousPage()}> {'<'} Prev </button>

                <span>
                     Page  {' '}
                     <strong>
                        {pageIndex + 1} of {pageOptions.length} 
                     </strong>
                     {' '}
                 </span>

                <button disabled={!canNextPage} onClick={() => nextPage()}>Next {'>'} </button>
            </div>
        </div>    
    )
}

export default React.memo(Table);

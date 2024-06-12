import { useMemo } from 'react'
import { useTable, usePagination, useGlobalFilter } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import { GlobalFilter } from './GlobalFilter'
import { ButtonComponent } from './GlobalFilter'
import './table.css'

export const BasicTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])  
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        pageOptions,
        state,
        setGlobalFilter,
        canNextPage,
        canPreviousPage,
        prepareRow } = useTable({
            columns,
            data
        },
            useGlobalFilter,
            usePagination,
        )
        
     const{globalFilter}=state
    const {pageIndex}=state
    return (
        <>
       <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
       <ButtonComponent page={page} columns={columns} globalFilter={globalFilter} />

       {/* <ButtonComponent/> */}
      
        <table{...getTableProps()}>
            <thead >
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                         </tr>
                    ))}
            </thead>
            <tbody {...getTableBodyProps}>
                {  page.map(row => {
                        prepareRow(row)

                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {
                                        return <td{...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                            </tr>
                        )
                    })}
            </tbody>
        </table>
        <div>
        <span className='space'>
         Page{'  '}
         <strong>
         {pageIndex+1}       of    {pageOptions.length}
         </strong>{'   '}
        </span>
        <button className='button1' style={{borderRadius:'1rem'}} onClick={()=>previousPage()} disabled={!canPreviousPage}>PREVIOUS</button>
        <button className='button1'  style={{borderRadius:'1rem'}} onClick={()=>nextPage()}disabled={!canNextPage}> NEXT</button>
        </div>
        </>
    )
}


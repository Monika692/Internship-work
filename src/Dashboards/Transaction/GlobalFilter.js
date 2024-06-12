import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JsPDF from 'jspdf';
import 'jspdf-autotable';
import MOCK_DATA from './MOCK_DATA.json'
import { BasicTable } from './BasicTable';


/*  Payment button */
export const ButtonComponent = ({ page, columns, globalFilter }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Replace "/Billing.js" with the actual path of the destination page
    navigate('./Billing.js');
  };
  const handleExport = () => {
    const filteredData = page.filter(row => {
      // Check if the row matches the global filter value
      return Object.values(row.original).some(
        value => String(value).toLowerCase().includes(globalFilter.toLowerCase())
      );
    });

    const report = new JsPDF('portrait', 'pt', 'a4');

    // Generate the table content
    const tableContent = [];

    // Add table headers
    const headers = columns.map(column => column.Header);
    tableContent.push(headers);

    // Add table rows
    filteredData.forEach(row => {
      const rowData = row.cells.map(cell => cell.value);
      tableContent.push(rowData);
    });

    // Set the y position for the table
    const tableY = 40;

    // Generate the table using autoTable plugin
    report.autoTable({
      startY: tableY,
      head: [headers],
      body: tableContent,
      theme: 'plain',
      styles: { fontSize: 10, cellPadding: 8, lineColor: 200 },
      didDrawPage: () => {
        // Add a page break after the table if necessary
        if (report.autoTable.previous.finalY > report.internal.pageSize.height - 30) {
          report.addPage();
        }
      },
    });

    // Save the PDF file
    report.save('data.pdf');
  };
  
    return (
      <div className='div'>
        <h1>TRANSACTION</h1>
        <button className='button' onClick={handleClick}>CREATE PAYMENT</button>
        <button className='button4' onClick={handleExport} type="button">EXPORT DETAILS</button>
      </div>
    );
}

  /* SEARCH BAR */
  export const GlobalFilter = ({ filter, setFilter }) => {
    return (
      <>
        <span>
          <input
            className='example' value={filter || ''}
            placeholder='Search...'
            onChange={e => setFilter(e.target.value)} />
        </span>
      </>
    )
  }


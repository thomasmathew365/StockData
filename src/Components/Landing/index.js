import React, { useEffect, useState } from 'react';
import fetchMonthlyData from '../../Actions/fetchMonthlyData';
import { useTable } from 'react-table';

//  YLZUAWZUSRWKBI9C

function Landing() {
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await fetchMonthlyData();
      setPriceData(response);
      // ...
    }
    fetchData();
  }, []);

  return <div>{priceData && <StockTable priceData={priceData} />}</div>;
}

function StockTable({ priceData }) {
  const { columns, data } = priceData;

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Landing;

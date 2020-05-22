import React, { useState, useEffect } from 'react';

import './App.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function App() {
  const [pizzalist, setPizzalist] = useState([]);

  useEffect(() => fetchData(), []);
  const fetchData = () => {

    fetch("https://harjoitusprojekti.herokuapp.com/restpizzat")
      .then(response => response.json())
      .then(data => setPizzalist(data))
      console.log(pizzalist)
  }
  return (
    <div className="App">
      <header className="App-header">
        {
          pizzalist.map((pizzalist, index) =>
            <Table style={{ width: 600 }}>
              <TableBody>
                <TableRow key={index}>
                  <TableCell>
                    {pizzalist.nimi}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          )
        }
      </header>
    </div>
  );
}

export default App;

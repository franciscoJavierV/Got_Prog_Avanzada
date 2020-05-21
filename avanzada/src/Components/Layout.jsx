import React from 'react';
import '../Style/Components/Layout.css'

function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <div className="container">
         <h1>Titulo lora</h1>
        <p>text open sans</p>      
        {props.children}     
      </div>
    </React.Fragment>
  );
}

export default Layout;
import React from 'react'
import Header from '../Components/Header.jsx'
import Welcome from '../Components/Welcome.jsx'
import MenuButtons from '../Components/MenuButtons.jsx'
import '../Style/Pages/Home.css'

function Home (){
    return (
        <React.Fragment>
            <Header/>   
            <div className="Home">   
                 
                <MenuButtons/> 
                <Welcome/>
            </div>                   
           
            </React.Fragment>
       
            
        
    );
}
export default Home;
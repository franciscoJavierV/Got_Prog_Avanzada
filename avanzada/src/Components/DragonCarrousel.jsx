import React from 'react';
import Dragones from './Dragones'
import '../Style/Components/DragonesCarousel.css'
import Drogon from '../Images/Drogon.jpg'
import VIserionD from '../Images/ViserionD.jpg'
import Rhaegal from '../Images/Rhaegal.jpg'

const drogon = {
    name :"Drogon",
    fuerza :"200",
    edad : 7,
    color : 'Negro',
    personas_comidas : '100´+',
    comida_favorita : 'Personas',
}
const viserion = {
    name :"Viserion",
    fuerza :"150",
    edad : 7,
    color : 'Amarillo',
    personas_comidas : '123',
    comida_favorita : 'Lanza de caminante',
}

const rhaegal = {
    name :"Rhaegal",
    fuerza :"175",
    edad : 7,
    color : 'Verde',
    personas_comidas : '190',
    comida_favorita : 'Quentyl Martel',
}
const DragonCarrousel = () =>(
    <div className="dragon__carousel">
    <div className="dragon__carousel__item">
        <div className="dragon1">
            <Dragones imagen={Drogon} name = {drogon.name}  edad={drogon.edad} fuerza ={drogon.fuerza} color = {drogon.color}comidas={drogon.personas_comidas} comida={drogon.comida_favorita}/>
        </div> 
        <div className="dragon2">
            <Dragones imagen={VIserionD} name = {viserion.name}  edad={viserion.edad} fuerza ={viserion.fuerza} color = {viserion.color}comidas={viserion.personas_comidas} comida={viserion.comida_favorita}/>
        </div>  
        <div className="dragon3">
            <Dragones imagen={Rhaegal} name = {rhaegal.name}  edad={rhaegal.edad} fuerza ={rhaegal.fuerza} color = {rhaegal.color}comidas={rhaegal.personas_comidas} comida={rhaegal.comida_favorita}/>
        </div>              
    </div>
    </div>

);

export default DragonCarrousel;
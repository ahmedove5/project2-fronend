import React from 'react'
import CardData from './CardData';
import a1 from "./Images/1.jpg"
import a2 from "./Images/2.jpg"
import a3 from "./Images/3.jpg"
import a4 from "./Images/4.jpg"
import a5 from "./Images/5.png"
import a6 from "./Images/6.jpg"

function cards(){
    return(
        <div className='row'>
            <CardData
         info=  {   { Image:a1,name:"Resturent 1", position:"Madinah"} }
         
   
            />
              <CardData
         info=  {   { Image:a2,name:"Resturent 2", position:"Makkah"} }
         
   
            />
                    <CardData
         info=  {   { Image:a3,name:"Resturent 3", position:"Jeddah"} }
         
   
            />
                    <CardData
         info=  {   { Image:a4,name:"Resturent 4", position:"Riyadh"} }
         
   
            />
                    <CardData
         info=  {   { Image:a5,name:"Resturent 5", position:"Njran"} }
         
   
            />
                    <CardData
         info=  {   { Image:a6,name:"Resturent 6", position:"Khobar"} }
         
   
            />
        </div>
        
    )
}




export default cards;
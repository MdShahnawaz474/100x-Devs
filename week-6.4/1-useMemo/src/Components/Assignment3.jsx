import { useMemo, useState } from "react";


export const Assignment3 =()=>{
    const [items, setItems]= useState([
        {name:"Chocolate", value:190},
        {name:"Chips", value:30},
        {name:"Tickets", value:190},
        {name:"Petrol", value:80},
        {name:"Food", value:50}

    ])

    const totalValue = useMemo(()=>{
        let totalValue =0;

        for(let i = 0 ; i< items.length; i++){
               totalValue = totalValue + items[i].value 
      
          }
          return totalValue
    },[items])

   

    return <div>
        <ul>
            {items.map((item, index)=>(
                <li key={index}>{item.name} - Price ${item.value}</li>
            ))}</ul>
            <p>${totalValue}</p>
        
    </div>
}

 
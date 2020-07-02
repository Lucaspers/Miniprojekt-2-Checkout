import React from "react";
import { ProductConsumer } from "../../context/context";


export default function ShippmentGroup() {
  
  
  return (

      <ProductConsumer>
        {value => {
          const { freeShipping, postNord, dHL, exPress } = value;
          
          return (

              <form>
              <input onClick={() => freeShipping()}type="radio" name="shipping" value="free" defaultChecked={true} /><p style={{fontSize: "12px"}}>Fri Frakt inom 5 dagar</p>
              <input onClick={() => postNord()} type="radio" name="shipping" value="PostNord" /><p style={{fontSize: "12px"}}>PostNord- 45 Kr. fräkt inom 48 timmar</p>
              <input onClick={() => dHL()} type="radio" name="shipping" value="DHL" /><p style={{fontSize: "12px"}}>DHL- 80 Kr. fräkt inom 24 timmar</p>
              <input onClick={() => exPress()} type="radio" name="shipping" value="express" /><p style={{fontSize: "12px"}}>Express Delivery- 120 Kr. fräkt inom 12 timmar</p>
              </form>

  );
  }}
      </ProductConsumer>
      
      );
}

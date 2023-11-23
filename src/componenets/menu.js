import React from 'react';
import logo from './meta.png'
export function Menu(){



    return(
      <>
          <div className={"head"}><img src={logo} alt={"logo"} height={50} width={50}/></div>
          <div className={"head"}>About Us</div>
          <div className={"head"}>Header</div>
          <div className={"head"}>Options</div>

      </>
    );


}
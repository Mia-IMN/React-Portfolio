import React from 'react'
import * as FaIcons from 'react-icons/fa';
import Socialicons from './Socialicons';

const Address = () => {
    return (
        <div>
           <h3>ADDRESS</h3> 
        <p>2nd Avenue, Block 7, <br /> Aggrey Estate <br />Port Harcourt <br />Rivers State </p>
        <div className="phone first">
        <FaIcons.FaPhone color="skyblue" />  
        <p>(234) 810 4071 737</p>
        </div>
        <div className="phone">
            <FaIcons.FaEnvelope color="skyblue"/>
            <p>mira.ikechukwu15@gmail.com</p>
        </div>
        <h3 className="follow_me">FOLLOW ME</h3>
        <Socialicons  />
        </div>
    )
}

export default Address

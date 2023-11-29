import * as Images from '../images'; 
import React, { useState, useEffect } from 'react';

const Overview = () => {
    return ( 
        <div className='overview'>
            <div className='slider-frame'>
                <div className='slide-images'>
                    <img src={Images.Image2}/> 
                </div>
            </div>
        </div>
     );
}
 
export default Overview;
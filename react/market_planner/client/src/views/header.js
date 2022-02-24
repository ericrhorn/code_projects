import React, { useEffect, useState } from "react";
import "../style.css";
import "../images/Reflection-Wall-Street.png";




const Header = () => {


    return(
        <div class = "header" 
            style={{ 
                backgroundImage: `url("https://cdn.britannica.com/40/152340-138-8BE56478/Reflection-Wall-Street.jpg?w=800&h=450&c=crop")`, 
                backgroundRepeat: 'no-repeat',
                }}>
        </div>
        )
}

export default Header;
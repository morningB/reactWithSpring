// 해더 파일

import React from "react";
import {Link} from "react-router-dom";


const Header = () =>{
    return (
        <header>
            &#91;<Link to="/">홈</Link>&#93;
               
             &#160;	&#160;	&#160;	&#160;	&#160;  
             &#91;<Link to="/board">게시판</Link>&#93;
             
             &#160;	&#160;	&#160;	&#160;	&#160;  
             &#91;<Link to="/acess">로그인</Link>&#93;
             
            <hr/>
        </header>
    );
};

export default Header;
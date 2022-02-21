// import React, {PureComponent} from "react";
// import PropTypes from 'prop-types';

// export class SWShipsItem extends PureComponent{
    
//     render(){
//         const {name, uid, url} = this.props;
//         return(
//             <li key={uid}
//                 className=""
//                 style={{listStyleType: "none", marginBottom:20,backgroundColor:`rgb(150, 173, 144)`,padding:10}}>
//                 <h1>{name}</h1>
//                 <div>{uid}</div>
//                 <a 
//                     href={url}
//                     style={{color:'black',fontWeight:'bold'}}
//                     >LINK</a>
//             </li>
//         );
//     }
// }

// SWShipsItem.propTypes = {
//     name:PropTypes.string.isRequired,
//     uid:PropTypes.string.isRequired,
//     url:PropTypes.string.isRequired,
// }

import React from "react";
import PropTypes from 'prop-types';

export function SWShipsItem(props) {
    const {name, uid, url} = props;
        return(
            <li key={uid}
                className=""
                style={{listStyleType: "none", marginBottom:20,backgroundColor:`rgb(150, 173, 144)`,padding:10}}>
                <h1>{name}</h1>
                <div>{uid}</div>
                <a 
                    href={url}
                    style={{color:'black',fontWeight:'bold'}}
                    >LINK</a>
            </li>
        );
}

SWShipsItem.propTypes = {
    name:PropTypes.string.isRequired,
    uid:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
}
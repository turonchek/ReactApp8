// import React, {PureComponent} from "react";
// import { SWShipsItem } from "../SWShipsItem/SWShipsItem";
// import PropTypes from 'prop-types';

// export class SWShipsList extends PureComponent {
//     render(){
//         const {data,status, error}=this.props;
//         return <div>
//             {status === `loading` || status === `initial` ? (
//                     <div>Loading...</div>
//                 ) : (
//                     <div className="">
//                         {error === null ? (

//                             <ul className="card-body">
//                                 {data.map((item) => (
//                                     <SWShipsItem 
//                                         key={item.uid} 
//                                         {...item}/>
//                                 ))}
//                             </ul>
//                         ) : (
//                             <span style={{color:`red`}}>{error}</span>
//                         )}
//                     </div>
//                 )}
//         </div>
//     }
// }

// SWShipsList.propTypes ={
//     data:PropTypes.arrayOf(
//         PropTypes.shape({
//             name:PropTypes.string,
//             uid:PropTypes.string,
//             url:PropTypes.string,
//         })
//     ),
//     status:PropTypes.string.isRequired,
//     error:PropTypes.string,
// }

import React from "react";
// import { SWShipsItem } from "../SWShipsItem/SWShipsItem";
import { SWShipsItem } from "../SWShipsItem/SWShipsItem";
import PropTypes from 'prop-types';

export function SWShipsList(props){
    const {data,status, error}=props;
        return <div>
            {status === `loading` || status === `initial` ? (
                    <div>Loading...</div>
                ) : (
                    <div className="">
                        {error === null ? (
                            <ul className="card-body">
                                {data.map((item) => (
                                    <SWShipsItem 
                                        key={item.uid} 
                                        {...item}/>
                                ))}
                            </ul>
                        ) : (
                            <span style={{color:`red`}}>{error}</span>
                        )}
                    </div>
                )}
        </div>
}

SWShipsList.propTypes ={
    data:PropTypes.arrayOf(
        PropTypes.shape({
            name:PropTypes.string,
            uid:PropTypes.string,
            url:PropTypes.string,
        })
    ),
    status:PropTypes.string.isRequired,
    error:PropTypes.string,
}
import React,{useCallback, useEffect, useState} from "react";
import { Pagination } from "../Pagination/Pagination";
import { SWShipsList } from "../SWShipsList/SWShipsList";

export function SWShipsPage() {

    const [status,setStatus] = useState(`initial`);
    const [error,setError] = useState(null);
    const [data,setData] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);

    const handlePageClick = useCallback((data)=>{
        let currentPage=1+data.selected;
        setCurrentPage(currentPage);
    },[currentPage]) 

    
    useEffect(() => {
        let mountState = {
            isMount:true,
        };
        setStatus(`loading`);
        setError(null);
        setData([]);
        fetch(`https://www.swapi.tech/api/planets?page=${currentPage}&limit=10`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if(mountState.isMount){
                    setData(data);
                    setError(null);
                    setStatus(`success`);
                }
            })
            .catch((error) => {
                if(mountState.isMount){
                    setError(error.message);
                    setData(null);
                    setStatus(`error`);
                }
            });

            return ()=>{
                mountState.isMount = false;
            }
    }, [currentPage])

        return(
            <div>
                {/* {JSON.stringify(data.results)} */}
                <SWShipsList 
                    data={data.results}
                    status={status}
                    error={error}
                    />
                {status===`success` && <Pagination 
                                            handlePageClick={handlePageClick}
                                            pageCount={data.total_pages}
                                            currentPage={currentPage}
                                        />
                }
            </div>
        );
}
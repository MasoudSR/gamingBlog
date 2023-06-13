import React from 'react';
import { TailSpin } from "react-loader-spinner"

const Loading = () => {
    return (
        <div style={{width:"100%" , height:"calc(100vh - 240px)",display:"flex" , justifyContent:"center" , marginTop:"50px"}}>
            <TailSpin
                height="100"
                width="100"
                color="#6a73c2"
                radius='1'
                ariaLabel="loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loading;
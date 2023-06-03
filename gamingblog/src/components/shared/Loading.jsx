import React from 'react';
import { MutatingDots } from "react-loader-spinner"

const Loading = () => {
    return (
        <div style={{width:"100%" , height:"92vh",display:"flex" , justifyContent:"center"}}>
            <MutatingDots
                height="100"
                width="100"
                color="#2a37af"
                secondaryColor='#2d368a'
                radius='12.5'
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loading;
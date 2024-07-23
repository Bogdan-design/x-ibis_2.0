import React from 'react';

const Animation = ({ src,width = "430px",height = "420px" }: { src: string,width?:string,height?:string }) => {
    return (
        <div style={{
            zIndex: -10,
            width: "249px",
            height: "235px",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <video width={width} height={height} autoPlay loop muted style={{maxWidth: '220%', maxHeight: '220%'}}>
                <source src={src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Animation;
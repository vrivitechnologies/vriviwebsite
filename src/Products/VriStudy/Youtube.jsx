import React from "react";

const Youtube = () => {
    return (
        <>
        <div className="relative ">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-video w-[90vw] max-w-[860px]">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Jp4A18QQz64?si=Bd3lLoFRYTj022wc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
        
        </>
    );
};

export default Youtube;

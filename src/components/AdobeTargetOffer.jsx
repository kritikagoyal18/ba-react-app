import React, { useEffect } from 'react';

const AdobeTargetOffer = () => {
    useEffect(() => {
        // Ensure Adobe Target is available
        if (!window.adobe || !window.adobe.target) {
            console.error("Adobe Target is not initialized.");
            return;
        }else{
          console.error("Adobe Target is initialized.");
        }

        // Function to fetch and render the offer
        const fetchAndRenderOffer = () => {
            window.adobe.target.getOffer({
                mbox: "target-global-mbox", // Replace with your mbox name
                params: { key1: "value1", key2: "value2" }, // Optional custom parameters
                success: (offer) => {
                    window.adobe.target.applyOffer({
                        mbox: "target-global-mbox",
                        offer: offer,
                    });
                },
                error: (status, error) => {
                    console.error("Failed to fetch offer:", status, error);
                },
            });
        };

        // Fetch and render the offer when the component mounts
        fetchAndRenderOffer();
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    return <div id="target-global-mbox">Loading offer...</div>;
};

export default AdobeTargetOffer;

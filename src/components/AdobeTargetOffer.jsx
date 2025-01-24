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
            console.log("fetching offer");

            window.adobe.target.getOffer({
                "mbox": "target-global-mbox",
                "params": {
                   "a": 1,
                   "b": 2,
                   "profile.age": 27,
                   "profile.gender": "male"
                },
                "success": function(offer) {
                    window.adobe.target.applyOffer( {
                         "mbox": "target-global-mbox",
                         "offer": offer
                      } );
                },
                "error": function(status, error) {
                    console.error("Failed to fetch offer:", status, error);
                }
              });
        };

        // Fetch and render the offer when the component mounts
        setTimeout(fetchAndRenderOffer, 2000);
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    return <div id="target-global-mbox">Loading offer...</div>;
};

export default AdobeTargetOffer;

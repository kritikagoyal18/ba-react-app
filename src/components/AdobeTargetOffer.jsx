import React, { useEffect } from 'react';

const AdobeTargetOffer = () => {
    useEffect(() => {
        
            // Function to fetch and render the offer
            const fetchAndRenderOffer = () => {
                console.log("fetching offer");
                
                // Ensure Adobe Target is available
                if (!window.adobe || !window.adobe.target) {
                    console.error("Adobe Target is not initialized.");
                    return;
                } else{
                  console.log("Adobe Target is initialized.");
                }
                
                window.adobe.target.getOffers({
                  request: {
                    prefetch: {
                      mboxes: [
                          {
                                index: 0,
                                name: "reactapp-mbox"
                          }
                      ]
                    }
                  }
                })
                .then(response => {
                  // get all mboxes from response
                  const item = response?.prefetch?.mboxes?.[0]?.options?.[0]?.content?.data?.offersByPath?.item;

                  if (item) {
                        const descriptionHtml = item.description?.html || "No description HTML found";
                        const imagePath = item.imagePath?._path || "No image path found";
                        const prattle = item.preTitle || "No prattle found";
                        const title = item.title || "No title found";
                        const ctaButtonText = item.ctaButtonText || "No Button Label found";
                        const shortDescriptionHtml = item.shortDescription?.html || "No short description HTML found";
                    
                        // Log the extracted values
                        console.log("Description (HTML):", descriptionHtml);
                        console.log("Image Path:", imagePath);
                        console.log("Prattle:", prattle);
                        console.log("Title:", title);
                        console.log("CTAButtonText:", ctaButtonText);
                        console.log("Short Description (HTML):", shortDescriptionHtml);

                       // document.getElementById("reactapp-mbox").innerHTML = "<img src="+'https://publish-p148716-e1519766.adobeaemcloud.com/'+imagePath+" />";
                        const offerHtml = `
                        <div style="
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            padding: 20px;
                            background-color: #f9f9f9;
                            border: 1px solid #ddd;
                            border-radius: 8px;
                            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                            margin-bottom: 20px;">
                            <div style="flex: 1; max-width: 300px; margin-right: 20px;">
                                <img 
                                    src="+'https://publish-p148716-e1519766.adobeaemcloud.com/'+imagePath+" 
                                    alt="${title}" 
                                    style="width: 100%; border-radius: 8px;" 
                                />
                            </div>
                            <div style="flex: 2;">
                                <p style="font-style: italic; color: #666; margin-bottom: 10px;">
                                    ${prattle}
                                </p>
                                <h1 style="font-size: 24px; font-weight: bold; color: #333; margin-bottom: 10px;">
                                    ${title}
                                </h1>
                                <div style="margin-bottom: 10px; color: #555; line-height: 1.5;">
                                    ${descriptionHtml}
                                </div>
                                <div style="margin-bottom: 20px; color: #555; line-height: 1.5;">
                                    ${shortDescriptionHtml}
                                </div>
                                <button 
                                    style="
                                        padding: 10px 20px;
                                        background-color: #007bff;
                                        color: #fff;
                                        border: none;
                                        border-radius: 4px;
                                        font-size: 16px;
                                        cursor: pointer;
                                        text-transform: uppercase;">
                                    ${ctaButtonText}
                                </button>
                            </div>
                        </div>
                    `;

                    // Set the HTML inside the div
                    const mboxDiv = document.getElementById('reactapp-mbox');
                    if (mboxDiv) {
                        mboxDiv.innerHTML = offerHtml;
                    } 
                  }else {
                        console.error("Could not find the required item in the JSON response.");
                }

                    /*
                  const mboxes = response.prefetch.mboxes;
                  let count = 1;
                
                  mboxes.forEach(el => {
                    window.adobe.target.applyOffers({
                      selector: "#reactapp-mbox",
                      response: {
                        prefetch: {
                          mboxes: [el]
                        }
                      }
                    });
                  });*/
                });
                
                /*
                window.adobe.target.getOffer({
                    "mbox": "target-global-mbox",
                    "params": {
                       "a": 1,
                       "b": 2,
                       "profile.age": 27,
                       "profile.gender": "male"
                    },
                    "success": function(offer) {
    
                        console.log("Offer recieved", offer);
                        
                        window.adobe.target.applyOffer( {
                             "mbox": "target-global-mbox",
                             "offer": offer
                        } );
                        
    
                    },
                    "error": function(status, error) {
                        console.error("Failed to fetch offer:", status, error);
                    }
                });
                */
            };  
            // Fetch and render the offer when the component mounts
            setTimeout(fetchAndRenderOffer, 2000);
  
    }, []); // Empty dependency array ensures this runs only once when the component mounts
 
    return <div id="reactapp-mbox">Loading offer...</div>;
};

export default AdobeTargetOffer;

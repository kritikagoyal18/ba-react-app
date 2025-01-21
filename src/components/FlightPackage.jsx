import React from "react";
import Title from "./base/Title";
import Image from "./base/Image";
import Text from "./base/Text";
import ContentFragment from "./base/ContentFragment";
import "./FlightPackage.scss";

const { REACT_APP_HOST_URI } = process.env;


const FlightPackage = ({ cf, navigate }) => {
  const packageImage = cf?.packageImage?._path;
  const packageTitle = cf?.packageTitle;
  const packageId = cf?.packageId;
  const packagePrice = cf?.packagePrice;
  const highlight = cf?.highlight;
  const bagsInfo = cf?.bagsInfo;
  const seatsInfo = cf?.seatsInfo;
  const refundInfo = cf?.refundInfo;
  const moreInformation = cf?.moreInformation;

  return (
    <ContentFragment
      cf={cf}
    >       
      <div className="item-tile">
          <div>
              <div style={{
                margin: '20px'
              }}>
                <div className="flex flex-col" style={{
                    minHeight: '445px'
                }}>
                    <span>
                      <div>
                          {packageImage && (
                            <Image src={packageImage} alt={`${packageTitle} illustration`} prop="packageImage" />
                          )}

                          <div>
                            <Title heading="h3" prop="packageTitle" className="color-dark">
                              {packageTitle}
                            </Title>
                          </div>
                          <div style={{ marginBottom: '10px' }}>
                              <Text
                                content={packagePrice}
                                prop="packagePrice"
                                className="font-size-large price-text"
                              />
                            <p className="price-pretext">per adult</p>
                          </div>
                      </div>
                      {bagsInfo && (                          
                            <div class="flex flex-col mb-15">
                              <h4> Bags</h4>
                              <Text
                                    content={bagsInfo}
                                    prop="bagsInfo"
                                    className="font-size-large info-text"
                              />
                            </div>
                        )}
                        {seatsInfo && ( 
                          <div class="flex flex-col mb-15">
                            <h4>Seats</h4>
                            <Text
                                  content={seatsInfo}
                                  prop="seatsInfo"
                                  className="font-size-large info-text"
                            />
                          </div>
                        )}
                        {refundInfo && ( 
                          <div class="flex flex-col mb-15">
                            <h4>Changes and refunds</h4>
                            <Text
                                  content={refundInfo}
                                  prop="refundInfo"
                                  className="font-size-large info-text"
                            />
                          </div>
                        )}
                        {moreInformation && ( 
                          <div class="flex flex-col mb-15">
                            <Text
                                  content={moreInformation}
                                  prop="moreInformation"
                                  className="font-size-large info-text"
                            />
                          </div>
                        )}
                    </span>
                </div>
                <div><button className="button">Select</button></div>
              </div>
          </div>
        </div>
    </ContentFragment>
  );
};

export default FlightPackage;

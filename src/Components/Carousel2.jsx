import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} controls={false} onSelect={handleSelect}  interval={5000} >
      <Carousel.Item>
      <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: "1175px" ,position: "relative", left: "0px", top: "0px", zIndex: "1000", opacity: "1"}}>
                
                <div>
                  <div
                    className="slick-slide"
                    aria-hidden="true"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="slide-wrap">
                      <div className="main-content">
                        <div className="quotes">“</div>
                        <h2 className="u-block-title">
                         
                          CleverTap is an easy-to-use and intuitive tool to
                          engage with customers. We are also very happy and
                          impressed with the support the Customer success team
                          provided.”
                        </h2>
                        <div className="author_desigt">
                          <div className="c-customerTestimonialSlider__name">
                            Maybelle Cheah &nbsp;|&nbsp;
                          </div>
                          <span className="verticle-line-divider"></span>
                          <div className="c-customerTestimonialSlider__post">
                         
                            Customer Analytics Team Lead, Boost
                          </div>
                          <img 
                            className="u-MT20 ls-is-cached lazyloaded"
                            style={{ maxWidth: "25%" , marginTop:"40px"}}
                            alt="Boost"
                            src="https://d35fo82fjcw0y8.cloudfront.net/2022/02/22114811/Boost-logo_maroon%402x.png"
                          ></img>
                        </div>
                        <a
                          className="c-btn c-btn-arrow u-MT90 u-MB30 "
                          href="/case-study/boost-personalization-increase-retention-5x/"
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex="-1"
                          style={{marginTop:"70px"}}
                        >

                          Read More
                          <span className="btn-overlay"></span>
                        </a>
                      </div>
                      <div className="logo-line-top" >
                        <img
                          className=" lazyloaded"
                          alt=""
                          src="https://info.clevertap.com/hubfs/Testimonial-Img_Boost@2x.webp"
                        ></img>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
  
      </Carousel.Item>
      <Carousel.Item>
        
      <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: "1175px" ,position: "relative", left: "0px", top: "0px", zIndex: "1000", opacity: "1"}}>
                
                <div>
                  <div
                    className="slick-slide"
                    aria-hidden="true"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="slide-wrap">
                      <div className="main-content">
                        <div className="quotes">“</div>
                        <h2 className="u-block-title">
                    
                        The big problem that CleverTap helped to solve was understanding the performance of our campaigns.”
                        </h2>
                        <div className="author_desigt">
                        <div className="c-customerTestimonialSlider__name">Rory Geoghegan &nbsp;|&nbsp;</div>
                          <span className="verticle-line-divider"></span>
                          <div className="c-customerTestimonialSlider__post"> Head of Product, YouNow </div>
                          <img 
                            className="u-MT20 ls-is-cached lazyloaded"
                            style={{ maxWidth: "25%" , marginTop:"40px"}}
                            alt="Boost"
                            src="https://d35fo82fjcw0y8.cloudfront.net/2022/02/22114800/younow-logo_maroon%402x.png"
                          ></img>
                        </div>
                        <a
                          className="c-btn c-btn-arrow u-MT90 u-MB30 "
                          href="/case-study/boost-personalization-increase-retention-5x/"
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex="-1"
                          style={{marginTop:"70px"}}
                        >

                          Read More
                          <span className="btn-overlay"></span>
                        </a>
                      </div>
                      <div className="logo-line-top" >
                        <img
                          className=" lazyloaded"
                          alt=""
                          src="https://info.clevertap.com/hubfs/Testimonial-Img_YouNow@2x.webp"
                        ></img>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
      </Carousel.Item>
      <Carousel.Item>
        
      <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: "1175px" ,position: "relative", left: "0px", top: "0px", zIndex: "1000", opacity: "1"}}>
                
                <div>
                  <div
                    className="slick-slide"
                    aria-hidden="true"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="slide-wrap">
                      <div className="main-content">
                        <div className="quotes">“</div>
                        <h2 className="u-block-title">
                    
                        With CleverTap, we don’t have to keep switching between platforms. Our campaign analytics are a single refresh away. We can easily create a funnel or analyze a cohort using the dashboard.”
                        </h2>
                        <div className="author_desigt"><div className="c-customerTestimonialSlider__name">Asiyeh Attar &nbsp;|&nbsp;</div>
                        
                          <span className="verticle-line-divider"></span><div className="c-customerTestimonialSlider__post"> Product Manager, Edenred UAE </div>

                          <img 
                            className="u-MT20 ls-is-cached lazyloaded"
                            style={{ maxWidth: "25%" , marginTop:"40px"}}
                            alt="Boost"
                            src="https://d35fo82fjcw0y8.cloudfront.net/2022/02/23235301/edenred-logo_maroon%402x.png"
                          ></img>
                        </div>
                        <a
                          className="c-btn c-btn-arrow u-MT90 u-MB30 "
                          href="/case-study/boost-personalization-increase-retention-5x/"
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex="-1"
                          style={{marginTop:"70px"}}
                        >

                          Read More
                          <span className="btn-overlay"></span>
                        </a>
                      </div>
                      <div className="logo-line-top" >
                        <img
                          className=" lazyloaded"
                          alt=""
                          src="https://info.clevertap.com/hubfs/Testimonial-Img_Edenred@2x.webp"
                        ></img>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
      </Carousel.Item><Carousel.Item>
        
      <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: "1175px" ,position: "relative", left: "0px", top: "0px", zIndex: "1000", opacity: "1"}}>
                
                <div>
                  <div
                    className="slick-slide"
                    aria-hidden="true"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="slide-wrap">
                      <div className="main-content">
                        <div className="quotes">“</div>
                        <h2 className="u-block-title">
                    
                     CleverTap is a powerful engagement tool which delivers a lot more than most CRM tools in the market in terms of analytics and building effective journeys.”
                        </h2>
                        <div className="author_desigt"><div className="c-customerTestimonialSlider__name">Denis Mikheev &nbsp;|&nbsp;</div>

                          <span className="verticle-line-divider"></span><div className="c-customerTestimonialSlider__post"> CRM & Direct Communication Manager, Paysend </div>

                          <img 
                            className="u-MT20 ls-is-cached lazyloaded"
                            style={{ maxWidth: "25%" , marginTop:"40px"}}
                            alt="Boost"
                            src="https://d35fo82fjcw0y8.cloudfront.net/2022/02/22114806/Paysend-logo_maroon%402x.png"
                          ></img>
                        </div>
                        <a
                          className="c-btn c-btn-arrow u-MT90 u-MB30 "
                          href="/case-study/boost-personalization-increase-retention-5x/"
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex="-1"
                          style={{marginTop:"70px"}}
                        >

                          Read More
                          <span className="btn-overlay"></span>
                        </a>
                      </div>
                      <div className="logo-line-top" >
                        <img
                          className=" lazyloaded"
                          alt=""
                          src="https://info.clevertap.com/hubfs/Testimonial-Img_Paysend@2x.webp"
                        ></img>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
      </Carousel.Item><Carousel.Item>
        
      <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: "1175px" ,position: "relative", left: "0px", top: "0px", zIndex: "1000", opacity: "1"}}>
                
                <div>
                  <div
                    className="slick-slide"
                    aria-hidden="true"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="slide-wrap">
                      <div className="main-content">
                        <div className="quotes">“</div>
                        <h2 className="u-block-title">CleverTap has played an integral role in accelerating our marketing automation, helping us optimize and personalize our user journeys leading to increased customer engagement.”

                        </h2>
                        <div className="author_desigt"><div className="c-customerTestimonialSlider__name">Sahil Bhojwani &nbsp;|&nbsp;</div>

                          <span className="verticle-line-divider"></span><div className="c-customerTestimonialSlider__post"> CRM Lead, Namshi </div>
                   
                          <img 
                            className="u-MT20 ls-is-cached lazyloaded"
                            style={{ maxWidth: "25%" , marginTop:"40px"}}
                            alt="Boost"
                            src="https://d35fo82fjcw0y8.cloudfront.net/2022/03/30002218/Namshi-Logo_maroon%402x.png"
                          ></img>
                        </div>
                        <a
                          className="c-btn c-btn-arrow u-MT90 u-MB30 "
                          href="/case-study/boost-personalization-increase-retention-5x/"
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex="-1"
                          style={{marginTop:"70px"}}
                        >

                          Read More
                          <span className="btn-overlay"></span>
                        </a>
                      </div>
                      <div className="logo-line-top" >
                        <img
                          className=" lazyloaded"
                          alt=""
                          src="https://info.clevertap.com/hubfs/Testimonial-Img_Namshi@2x.webp"
                        ></img>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;

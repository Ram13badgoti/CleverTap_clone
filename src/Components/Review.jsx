import Carousel2 from "./Carousel2"


const Review = () => {
  return (
    <>
      <div className="pricing-page-2021 new-testimonisl-lsyout2021">
        <div className="u-greyBg full-width-slider u-TopBottomSpace">
          <div className="site wrapper">
            <div className="slider slider-startup-pricing slick-initialized slick-slider">
              <button
                className="slick-prev slick-arrow"
                aria-label="Previous"
                type="button"
              >
                Previous
              </button>
              
              
              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{ opacity: "1", width: "5875px" }}>

<Carousel2></Carousel2>
                   
                </div>
                
              </div>
             
              <button className="slick-next slick-arrow" aria-label="next" type="button">
            Next
              </button>
            </div>
   
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;

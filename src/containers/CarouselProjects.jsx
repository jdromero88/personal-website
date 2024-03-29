import React from 'react'
// import Swiper core and required components
import SwiperCore, { Autoplay, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper components
SwiperCore.use([Autoplay, Pagination, Scrollbar, A11y]);

class CarouselProjects extends React.Component {
  render(){
    return(
      <Swiper
        autoplay={{ delay: 6000 }}
        speed={800}
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // autoHeight={true}
      >
        <SwiperSlide>
          <div className="columns mt-6 pb-6">
            <div className="column is-three-quarters">
              <iframe id="japan-edp-map"
                title="Enhancing Democratic Partnership in the Indo-Pacific Region"
                width="100%"
                height="420px"
                src="https://csis-ilab.github.io/js-viz/japan-edp-map/">
              </iframe>
            </div>
            <div className="column">
              <h1 className="title">Enhancing Democratic Partnership Map</h1>
              <p className="subtitle is-6 mt-3">
                This map was devoped with <a href="https://carto.com/" target="_blank" rel="noreferrer">Carto</a> and
                the basemap was created with <a href="https://www.mapbox.com/" target="_blank" rel="noreferrer">mapbox</a>.
                For the <a href='https://www.csis.org/programs/japan-chair' target="_blank" rel="noreferrer">Japan Chair </a>
                 at the Center for Strategic and International Studies.
              </p>
              <p className="subtitle is-6 mt-3">
                <a target="_blank" rel="noopener noreferrer" href="https://www.csis.org/analysis/enhancing-democratic-partnership-indo-pacific-region">Publication <i className="fas fa-external-link-alt"></i></a>
              </p>
              <p className="subtitle is-6">
                Developed with:
              </p>
              <div className="tags">
                <span className="tag is-success">Carto</span><span className="tag is-success">Mapbox</span><span className="tag is-success">Leaflet</span>
                <span className="tag is-success"><i className="far fa-heart"></i></span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="columns mt-6 pb-6">
            <div className="column is-three-quarters">
              <iframe id="https://csis-ilab.github.io/js-viz/du-energy-usage/"
                title="Electricity Generation from Wind & Solar"
                width="100%"
                height="420px"
                src="https://csis-ilab.github.io/js-viz/du-energy-usage/">
              </iframe>
            </div>
            <div className="column">
              <h1 className="title">Electricity Generation from Wind & Solar</h1>
              <p className="subtitle is-6 mt-3">
                This bubble chart was created with <a href="https://www.highcharts.com/" target="_blank" rel="noreferrer">Highcharts</a>.
              </p>
              <p className="subtitle is-6 mt-3">
              </p>
              <p className="subtitle is-6">
                Developed with:
              </p>
              <div className="tags">
                <span className="tag is-success">Highcharts</span><span className="tag is-success">HTML</span><span className="tag is-success">CSS</span>
                <span className="tag is-success"><i className="far fa-heart"></i></span>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    )
  }
}

export default CarouselProjects

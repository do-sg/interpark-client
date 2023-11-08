import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/tour.css";
import "../styles/common.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function Tour() {
  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  // js 코드 자리
  const swiperRef = useRef();

  // 외부 데이터 연동 (axios 활용)
  const axiosGetData = () => {
    axios
      .get("tour.json")
      .then(function (res) {
        console.log(res.data);
        makeTourSlide(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // 외부 데이터 연동 (fetch 활용)
  const fetchGetData = () => {
    fetch("tour.json")
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        // 자료를 출력하자.
        makeTourSlide(result);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  let [tourHtml, setTourHtml] = useState([]);

  const makeTourSlide = (_data) => {
    const tourRes = _data;

    let tourArray = [];
    for (let i = 0; i < tourRes.total; i++) {
      tourArray[i] = tourRes["tour_" + (i + 1)];
    }
    setTourHtml(tourArray);
  };

  useEffect(() => {
    axiosGetData();
    return () => {};
  }, []);

  return (
    <section className="tour">
      <div className="tour-inner">
        <div className="tour-header">
          <h2 className="tour-title">투어 특가</h2>
          <span className="tour-txt">해외여행은 인터파크다</span>
        </div>
        <div className="tour-main">
          <div className="tour-cate">
            <ul className="tour-list">
              <li>
                <button className="tour-cate-bt .tour-cate-bt-active">
                  망설이면 품절
                </button>
              </li>
              <li>
                <button className="tour-cate-bt">패키지</button>
              </li>
              <li>
                <button className="tour-cate-bt">국내숙소</button>
              </li>
              <li>
                <button className="tour-cate-bt">해외숙소</button>
              </li>
            </ul>
          </div>
          <div className="tour-slide-wrap">
            <Swiper
              slidesPerView={3}
              spaceBetween={26}
              slidesPerGroup={3}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".tour-slide-wrap .slide-next-bt",
                prevEl: ".tour-slide-wrap .slide-prev-bt",
              }}
              className="tour-slide"
            >
              {tourHtml.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="tour-slide-item">
                      <a href={item.url} className="tour-link">
                        <div className="tour-img">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="tour-info">
                          <ul className="tour-good-list">
                            <li>
                              <span className="tour-good-info-desc">
                                <em>{item.desc}</em>
                                <p>{item.title}</p>
                                <b>{numberWithCommas(item.price)}</b>
                                원~
                              </span>
                            </li>
                          </ul>
                        </div>
                        <button className="tour-plus">{item.special}</button>
                      </a>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <button className="slide-prev-bt">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
            <button className="slide-next-bt">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="tour-footer">
          <a href="#" className="tour-footer-bt">
            투어 홈 바로가기
          </a>
        </div>
      </div>
    </section>
  );
}
export default Tour;

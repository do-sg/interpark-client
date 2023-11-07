import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/tour.css";
import "../styles/common.css";
import { useRef } from "react";

function Tour() {
  // js 코드 자리
  const swiperRef = useRef();

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
              <SwiperSlide>
                <div className="tour-slide-item">
                  <a href="#" className="tour-link">
                    <div className="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div className="tour-info">
                      <ul className="tour-good-list">
                        <li>
                          <span className="tour-good-info-desc">
                            <em>노보리베츠, 도야 온천호텔, 도야호 유람선</em>
                            <p>
                              [북해도 4일]노보리베츠 온천+도야+후라노+비에이
                            </p>
                            <b>1,099,000</b>
                            원~
                          </span>
                        </li>
                      </ul>
                    </div>
                    <button className="tour-plus">홍콩</button>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tour-slide-item">
                  <a href="#" className="tour-link">
                    <div className="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div className="tour-info">
                      <ul className="tour-good-list">
                        <li>
                          <span className="tour-good-info-desc">
                            <em>노보리베츠, 도야 온천호텔, 도야호 유람선</em>
                            <p>
                              [북해도 4일]노보리베츠 온천+도야+후라노+비에이
                            </p>
                            <b>1,099,000</b>
                            원~
                          </span>
                        </li>
                      </ul>
                    </div>
                    <button className="tour-plus">홍콩</button>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tour-slide-item">
                  <a href="#" className="tour-link">
                    <div className="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div className="tour-info">
                      <ul className="tour-good-list">
                        <li>
                          <span className="tour-good-info-desc">
                            <em>노보리베츠, 도야 온천호텔, 도야호 유람선</em>
                            <p>
                              [북해도 4일]노보리베츠 온천+도야+후라노+비에이
                            </p>
                            <b>1,099,000</b>
                            원~
                          </span>
                        </li>
                      </ul>
                    </div>
                    <button className="tour-plus">홍콩</button>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tour-slide-item">
                  <a href="#" className="tour-link">
                    <div className="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div className="tour-info">
                      <ul className="tour-good-list">
                        <li>
                          <span className="tour-good-info-desc">
                            <em>노보리베츠, 도야 온천호텔, 도야호 유람선</em>
                            <p>
                              [북해도 4일]노보리베츠 온천+도야+후라노+비에이
                            </p>
                            <b>1,099,000</b>
                            원~
                          </span>
                        </li>
                      </ul>
                    </div>
                    <button className="tour-plus">홍콩</button>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tour-slide-item">
                  <a href="#" className="tour-link">
                    <div className="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div className="tour-info">
                      <ul className="tour-good-list">
                        <li>
                          <span className="tour-good-info-desc">
                            <em>노보리베츠, 도야 온천호텔, 도야호 유람선</em>
                            <p>
                              [북해도 4일]노보리베츠 온천+도야+후라노+비에이
                            </p>
                            <b>1,099,000</b>
                            원~
                          </span>
                        </li>
                      </ul>
                    </div>
                    <button className="tour-plus">홍콩</button>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tour-slide-item">
                  <a href="#" className="tour-link">
                    <div className="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div className="tour-info">
                      <ul className="tour-good-list">
                        <li>
                          <span className="tour-good-info-desc">
                            <em>노보리베츠, 도야 온천호텔, 도야호 유람선</em>
                            <p>
                              [북해도 4일]노보리베츠 온천+도야+후라노+비에이
                            </p>
                            <b>1,099,000</b>
                            원~
                          </span>
                        </li>
                      </ul>
                    </div>
                    <button className="tour-plus">홍콩</button>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tour-slide-item">
                  <a href="#" className="tour-link">
                    <div className="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div className="tour-info">
                      <ul className="tour-good-list">
                        <li>
                          <span className="tour-good-info-desc">
                            <em>노보리베츠, 도야 온천호텔, 도야호 유람선</em>
                            <p>
                              [북해도 4일]노보리베츠 온천+도야+후라노+비에이
                            </p>
                            <b>1,099,000</b>
                            원~
                          </span>
                        </li>
                      </ul>
                    </div>
                    <button className="tour-plus">홍콩</button>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tour-slide-item">
                  <a href="#" className="tour-link">
                    <div className="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div className="tour-info">
                      <ul className="tour-good-list">
                        <li>
                          <span className="tour-good-info-desc">
                            <em>노보리베츠, 도야 온천호텔, 도야호 유람선</em>
                            <p>
                              [북해도 4일]노보리베츠 온천+도야+후라노+비에이
                            </p>
                            <b>1,099,000</b>
                            원~
                          </span>
                        </li>
                      </ul>
                    </div>
                    <button className="tour-plus">홍콩</button>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tour-slide-item">
                  <a href="#" className="tour-link">
                    <div className="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div className="tour-info">
                      <ul className="tour-good-list">
                        <li>
                          <span className="tour-good-info-desc">
                            <em>노보리베츠, 도야 온천호텔, 도야호 유람선</em>
                            <p>
                              [북해도 4일]노보리베츠 온천+도야+후라노+비에이
                            </p>
                            <b>1,099,000</b>
                            원~
                          </span>
                        </li>
                      </ul>
                    </div>
                    <button className="tour-plus">홍콩</button>
                  </a>
                </div>
              </SwiperSlide>
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

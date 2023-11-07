import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/ticket.css";
import "../styles/common.css";
import { useRef } from "react";

function Ticket() {
  const swiperRef = useRef();

  return (
    <section className="ticket">
      <div className="ticket-inner">
        <div className="ticket-header">
          <h2 className="ticket-title">티켓 랭킹</h2>
          <span className="ticket-txt">오늘 뭐볼까? 지금 HOT한 공연</span>
        </div>
        <div className="ticket-main">
          <div className="ticket-cate">
            <ul className="ticket-list">
              <li>
                <button className="ticket-cate-bt">뮤지컬</button>
              </li>
              <li>
                <button className="ticket-cate-bt">콘서트</button>
              </li>
              <li>
                <button className="ticket-cate-bt">스포츠</button>
              </li>
              <li>
                <button className="ticket-cate-bt">전시/행사</button>
              </li>
              <li>
                <button className="ticket-cate-bt">클래식/무용</button>
              </li>
              <li>
                <button className="ticket-cate-bt">아동/가족</button>
              </li>
              <li>
                <button className="ticket-cate-bt">연극</button>
              </li>
              <li>
                <button className="ticket-cate-bt">레저/캠핑</button>
              </li>
            </ul>
          </div>
          <div className="ticket-slide-wrap">
            <Swiper
              slidesPerView={4}
              spaceBetween={28}
              slidesPerGroup={4}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".ticket-slide-wrap .slide-next-bt",
                prevEl: ".ticket-slide-wrap .slide-prev-bt",
              }}
              className="ticket-slide"
            >
              <SwiperSlide>
                <div className="ticket-slide-item">
                  <a href="#" className="ticket-link">
                    <div className="ticket-img">
                      <img src="images/tk1.gif" alt="" />
                    </div>
                    <div>
                      <span className="ticket-rank">1</span>
                    </div>
                    <div className="ticket-info">
                      <ul className="ticket-good-list">
                        <li>
                          <span className="ticket-info-desc">
                            태양의서커스 [루치아]
                            <b>잠실종합운동장 내 빅탑</b>
                            <p>2023.10.25 - 2023.12.31</p>
                          </span>
                        </li>
                        <li>
                          <p className="ticket-seat">좌석우위</p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ticket-slide-item">
                  <a href="#" className="ticket-link">
                    <div className="ticket-img">
                      <img src="images/tk1.gif" alt="" />
                    </div>
                    <div>
                      <span className="ticket-rank">1</span>
                    </div>
                    <div className="ticket-info">
                      <ul className="ticket-good-list">
                        <li>
                          <span className="ticket-info-desc">
                            태양의서커스 [루치아]
                            <b>잠실종합운동장 내 빅탑</b>
                            <p>2023.10.25 - 2023.12.31</p>
                          </span>
                        </li>
                        <li>
                          <p className="ticket-seat">좌석우위</p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ticket-slide-item">
                  <a href="#" className="ticket-link">
                    <div className="ticket-img">
                      <img src="images/tk1.gif" alt="" />
                    </div>
                    <div>
                      <span className="ticket-rank">1</span>
                    </div>
                    <div className="ticket-info">
                      <ul className="ticket-good-list">
                        <li>
                          <span className="ticket-info-desc">
                            태양의서커스 [루치아]
                            <b>잠실종합운동장 내 빅탑</b>
                            <p>2023.10.25 - 2023.12.31</p>
                          </span>
                        </li>
                        <li>
                          <p className="ticket-seat">좌석우위</p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ticket-slide-item">
                  <a href="#" className="ticket-link">
                    <div className="ticket-img">
                      <img src="images/tk1.gif" alt="" />
                    </div>
                    <div>
                      <span className="ticket-rank">1</span>
                    </div>
                    <div className="ticket-info">
                      <ul className="ticket-good-list">
                        <li>
                          <span className="ticket-info-desc">
                            태양의서커스 [루치아]
                            <b>잠실종합운동장 내 빅탑</b>
                            <p>2023.10.25 - 2023.12.31</p>
                          </span>
                        </li>
                        <li>
                          <p className="ticket-seat">좌석우위</p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ticket-slide-item">
                  <a href="#" className="ticket-link">
                    <div className="ticket-img">
                      <img src="images/tk1.gif" alt="" />
                    </div>
                    <div>
                      <span className="ticket-rank">1</span>
                    </div>
                    <div className="ticket-info">
                      <ul className="ticket-good-list">
                        <li>
                          <span className="ticket-info-desc">
                            태양의서커스 [루치아]
                            <b>잠실종합운동장 내 빅탑</b>
                            <p>2023.10.25 - 2023.12.31</p>
                          </span>
                        </li>
                        <li>
                          <p className="ticket-seat">좌석우위</p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ticket-slide-item">
                  <a href="#" className="ticket-link">
                    <div className="ticket-img">
                      <img src="images/tk1.gif" alt="" />
                    </div>
                    <div>
                      <span className="ticket-rank">1</span>
                    </div>
                    <div className="ticket-info">
                      <ul className="ticket-good-list">
                        <li>
                          <span className="ticket-info-desc">
                            태양의서커스 [루치아]
                            <b>잠실종합운동장 내 빅탑</b>
                            <p>2023.10.25 - 2023.12.31</p>
                          </span>
                        </li>
                        <li>
                          <p className="ticket-seat">좌석우위</p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ticket-slide-item">
                  <a href="#" className="ticket-link">
                    <div className="ticket-img">
                      <img src="images/tk1.gif" alt="" />
                    </div>
                    <div>
                      <span className="ticket-rank">1</span>
                    </div>
                    <div className="ticket-info">
                      <ul className="ticket-good-list">
                        <li>
                          <span className="ticket-info-desc">
                            태양의서커스 [루치아]
                            <b>잠실종합운동장 내 빅탑</b>
                            <p>2023.10.25 - 2023.12.31</p>
                          </span>
                        </li>
                        <li>
                          <p className="ticket-seat">좌석우위</p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ticket-slide-item">
                  <a href="#" className="ticket-link">
                    <div className="ticket-img">
                      <img src="images/tk1.gif" alt="" />
                    </div>
                    <div>
                      <span className="ticket-rank">1</span>
                    </div>
                    <div className="ticket-info">
                      <ul className="ticket-good-list">
                        <li>
                          <span className="ticket-info-desc">
                            태양의서커스 [루치아]
                            <b>잠실종합운동장 내 빅탑</b>
                            <p>2023.10.25 - 2023.12.31</p>
                          </span>
                        </li>
                        <li>
                          <p className="ticket-seat">좌석우위</p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ticket-slide-item">
                  <a href="#" className="ticket-link">
                    <div className="ticket-img">
                      <img src="images/tk1.gif" alt="" />
                    </div>
                    <div>
                      <span className="ticket-rank">1</span>
                    </div>
                    <div className="ticket-info">
                      <ul className="ticket-good-list">
                        <li>
                          <span className="ticket-info-desc">
                            태양의서커스 [루치아]
                            <b>잠실종합운동장 내 빅탑</b>
                            <p>2023.10.25 - 2023.12.31</p>
                          </span>
                        </li>
                        <li>
                          <p className="ticket-seat">좌석우위</p>
                        </li>
                      </ul>
                    </div>
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

        <div className="ticket-footer">
          <a href="#" className="ticket-footer-bt">
            티켓 홈 바로가기
          </a>
        </div>
      </div>
    </section>
  );
}

export default Ticket;

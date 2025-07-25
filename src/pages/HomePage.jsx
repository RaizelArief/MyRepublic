import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/MyRepublic.webp";
import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import CardPaket from "../components/CardComponent";
import FaqComponent from "../components/FaqComponent";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { paketInternet, dataSwiper } from "../data";

const Homepage = () => {
  let navigate = useNavigate();
  const paketSectionRef = useRef(null);

  const scrollToPaket = () => {
    paketSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="homepage ">
      <header className=" p-10 mt-9">
        <Container>
          <Row className="header-box">
            <Col md={6}>
              <h1>
                Temukan <span>Paket Sesuai Seleramu</span>
                <br />
                Bersama Kami
              </h1>
              <p>
                Banyak <strong>PAKET</strong> yang harganya{" "}
                <strong>TERJANGKAU</strong> dan sinyalnya lebih bagus.
              </p>
              <p>
                Kami hadir di wilayah Ciputat, Depok, Pamulang,
                <br /> sekitar Tangsel dan Jaksel.
              </p>

              <div className="d-flex flex-wrap gap-2 mt-4">
                <button
                  onClick={scrollToPaket}
                  className="btn btn-danger btn-lg rounded-3"
                >
                  Lihat Paket
                </button>
                <button
                  onClick={() => navigate("/kelas")}
                  className="btn btn-outline-light btn-lg rounded-3"
                >
                  Lihat Promo
                </button>
              </div>
            </Col>
            {/* Image */}
            <Col>
              <img
                src={HeroImage}
                alt=""
                className="animate__animated animate__fadeInUp"
              />
            </Col>
          </Row>
        </Container>
      </header>

      {/* PAKET */}
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Paket Terbaru</h1>
              <p className="text-center ">Lihat banyaknya paket yang beragam</p>
              <section ref={paketSectionRef} className="kelas mb-20">
                <Container>
                  <Row className="g-4">
                    {paketInternet.map((paket) => (
                      <Col key={paket.id} xs={12} sm={6} lg={4}>
                        <CardPaket paket={paket} />
                      </Col>
                    ))}
                  </Row>
                </Container>
              </section>
            </Col>
          </Row>

          <Row>
            <Col className="d-flex justify-content-center mb-10">
              <button
                className="btn btn-primary d-flex align-items-center gap-2 rounded-5"
                onClick={() => navigate("/kelas")}
              >
                Lihat Semua Paket <FaChevronRight />
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Testimonial</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm ">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* <SwiperSlide>Slide 1</SwiperSlide> */}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* SESSION FAQ */}
      <FaqComponent></FaqComponent>
      {/*SESSION FAQ  */}
    </div>
  );
};

export default Homepage;

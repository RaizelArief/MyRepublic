import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeroImage from "../assets/img/MyRepublic.webp";
const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-between">
          {/* Col 1 */}
          <Col lg="5">
            <img
              src={HeroImage}
              alt=""
              className="w-30 d-flex justify-between "
            />
            <p className="font font-bold">Kami Hadir Di daerah Pamulang, Depok, Maupun Ciputat hubungi saja Admin Kami di bawah ini </p>
            <p className=" desc">
              Sebagai provider internet terbaik dengan koneksi ultra cepat kini
              hadir dengan berbagai paket internet yang sesuai dengan kebutuhan
              kamu.
            </p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 896-6160-0044</p>
              </Link>
            </div>

            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">raizeluve@gmail.com</p>
              </Link>
            </div>
          </Col>
          {/* Col 2 */}
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5 ">
            <h5 className="fw-bold text-3xl">Ini adalah menu</h5>
            <Link to="/">Home</Link>
            <Link to="kelas">Kelas</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="syarat">Syarat & Ketentuan</Link>
          </Col>
          {/* Col 3 */}
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3 ">Subscribe untuk info menarik</h5>
            <div className="subscribe">
              <input type="text" placeholder="Subscribe....." />
              <button className="btn btn-primary rounded-end rounded-0">
                Subscribe
              </button>
            </div>
            <div className="social mt-3">
              <a
                href="https://www.facebook.com/MyRepublicIndonesia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.youtube.com/@MyRepublicIndonesia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                href="https://x.com/ID_MyRepublic"
                target="_blank"
                rel="noopener noreferrer"
              >
                
                <i className="fa-brands fa-x"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/myrepublc-id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold ">Indian</span>, All Right Reserverd
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;

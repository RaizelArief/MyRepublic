import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { rawPaket, kelas, internetPackages } from "../data";
import CardPaket from "../components/CardComponent";

export default function KelasPage() {
  const [filter, setFilter] = useState("kelas");

  let tampilPaket = [];

  switch (filter) {
    case "kelas":
      tampilPaket = kelas;
      break;
    case "internet":
      tampilPaket = internetPackages;
      break;
    case "tv":
      tampilPaket = rawPaket;
      break;
    default:
      tampilPaket = [];
  }

  tampilPaket = tampilPaket.map((p) => ({
    ...p,
    nama: p.nama || p.name || "Tanpa Nama",
    speed: p.speed || p.kecepatan || "", // tambahkan ini
    originalSpeed: p.originalSpeed || p.kecepatanAwal || "", // tambahkan ini
    features: [
      `${p.originalSpeed} ➜ ${p.speed}`,
      ...(p.features || p.keunggulan || p.bonus || []),
    ],
    price: Number(p.price || p.harga || 0),
    image: p.image || p.gambar || "/img/default.png",
  }));

  return (
    <section className="kelas mt-36 mb-30">
      <Container>
        {/* Tombol filter */}
        <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
          <Button
            variant={filter === "tv" ? "primary" : "outline-primary"}
            onClick={() => setFilter("tv")}
          >
            Paket Internet
          </Button>
          <Button
            variant={filter === "internet" ? "primary" : "outline-primary"}
            onClick={() => setFilter("internet")}
          >
            Paket Internet & TV
          </Button>
          <Button
            variant={filter === "kelas" ? "primary" : "outline-primary"}
            onClick={() => setFilter("kelas")}
          >
            Paket Internet & Streaming
          </Button>
        </div>

        {/* Daftar card */}
        <Row className="g-4 mb-5">
          {tampilPaket.map((paket, idx) => (
            <Col key={idx} xs={12} sm={6} lg={4}>
              <CardPaket paket={paket} />
            </Col>
          ))}
        </Row>
        {/* Syarat */}
        <Row className="mt-7">
          <Col>
            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h5 className="fw-bold mb-3">Syarat dan Ketentuan</h5>
              <ul style={{ paddingLeft: "20px", marginBottom: 0 }}>
                <li>
                  Promo berlaku untuk pelanggan baru yang berlangganan pada
                  tanggal 1 - 31 Juli 2025
                </li>
                <li>Promo berlaku untuk paket Internet Only dan Combo TV</li>
                <li>Promo berlaku selama 12 bulan berlangganan</li>
                <li>
                  Promo gratis speed upgrade berlaku selama 3 bulan berlangganan
                </li>
                <li>
                  Khusus untuk pelajar/pendidik akan mendapatkan gratis speed
                  upgrade 6 bulan dengan wajib melampirkan bukti kartu pelajar/
                  kartu pendidik
                </li>
                <li>Harga tertera diatas sudah termasuk PPN 11%</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

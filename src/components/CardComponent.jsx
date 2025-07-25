import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaBolt, FaPlayCircle, FaTv, FaVideo } from "react-icons/fa";

export default function CardPaket({ paket }) {
  const nomorWa = "6289661600044"; // Ganti dengan nomor WA kamu (tanpa +)
  const pesan = `Halo, saya tertarik dengan paket ${paket.name}`;
  const linkWa = `https://wa.me/${nomorWa}?text=${encodeURIComponent(pesan)}`;

  const allFeatures = [
    ...(paket.bonus || []),
    ...(paket.features || []),
    ...(paket.keunggulan || []),
  ];

  // Hilangkan duplikat
  const uniqueFeatures = [...new Set(allFeatures.map((item) => item.trim()))];

  if (!uniqueFeatures.length) return null;

  if (!Array.isArray(allFeatures) || allFeatures.length === 0) return null;

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={paket.image} />
      <Card.Body className="d-flex flex-column">
        {/* Judul Paket */}
        <Card.Title className="fw-bold">{paket.name}</Card.Title>

        {/* Kecepatan Internet */}
        {(paket.originalSpeed || paket.speed) && (
          <div className="mb-2 text-muted small">
            {paket.originalSpeed && (
              <>
                <s>{paket.originalSpeed}</s> →{" "}
              </>
            )}
            <strong>{paket.speed}</strong>
          </div>
        )}

        {/* Harga */}
        <h4 className="text-primary">
          Rp {paket.price.toLocaleString("id-ID")} / Bulan
        </h4>

        {/* Fitur Bonus */}
        <ul className="list-unstyled flex-grow-1 mb-3">
          {uniqueFeatures.map((item, i) => {
            let icon;
            const text = item.toLowerCase();

            if (text.includes("vidio"))
              icon = <FaPlayCircle className="me-2 text-danger" />;
            else if (text.includes("wetv"))
              icon = <FaTv className="me-2 text-info" />;
            else if (text.includes("genflix"))
              icon = <FaVideo className="me-2 text-warning" />;
            else icon = <FaBolt className="me-2 text-warning" />;

            const cleanText = item.replace(/^🟣|🟡|🟠/, "").trim();

            return (
              <li key={i} className="d-flex align-items-start mb-1">
                {icon}
                <span>{cleanText}</span>
              </li>
            );
          })}
        </ul>

        {/* Tombol WhatsApp */}
        <Button
          variant="success"
          href={linkWa}
          target="_blank"
          rel="noopener noreferrer"
        >
          {paket.buyText || "Daftar"}
        </Button>
      </Card.Body>
    </Card>
  );
}

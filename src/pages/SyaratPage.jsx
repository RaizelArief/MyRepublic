import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SyaratPage = () => {
  return (
    <div className="syarat-ketentuan-page mb-30 mt-36">
      <div className="syarat-ketentuan">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-4">Syarat & Ketentuan MyRepublic</h1>
              <div style={{ lineHeight: '1.8' }}>
                <h5 className="fw-bold mt-4">1. Ketentuan Berlangganan</h5>
                <ul>
                  <li>- Pelanggan wajib melakukan pendaftaran dan verifikasi data pribadi (KTP, Bukti Alamat, dsb.) sesuai kebijakan.</li>
                  <li>- Pelanggan bertanggung jawab atas keakuratan data; perubahan status atau alamat harus dilaporkan ke customer service.</li>
                </ul>

                <h5 className="fw-bold mt-6">2. Pembayaran dan Tagihan</h5>
                <ul>
                  <li>- Pembayaran dilakukan melalui metode yang tersedia: transfer bank, kartu kredit, e-wallet, atau autodebet.</li>
                  <li>- Tagihan muncul tiap awal periode; keterlambatan pembayaran lebih dari 7 hari dapat mengakibatkan suspend layanan.</li>
                </ul>

                <h5 className="fw-bold mt-4">3. Instalasi dan Konektivitas</h5>
                <ul>
                  <li>- Instalasi jaringan dilakukan dalam waktu 1–3 hari kerja setelah pembayaran konfirmasi dan verifikasi area.</li>
                  <li>- Quality of Service (QoS) dijaga sesuai paket—jika terjadi gangguan, pelanggan ditanggung free troubleshooting oleh tim teknis.</li>
                </ul>

                <h5 className="fw-bold mt-4">4. Paket dan Kecepatan Internet</h5>
                <ul>
                  <li>- Semua paket bersifat unlimited, tanpa batasan kuota (FUP).</li>
                  <li>- Kecepatan internet dapat dipengaruhi kondisi jaringan, lokasi, dan perangkat pelanggan.</li>
                </ul>

                <h5 className="fw-bold mt-4">5. Perubahan Paket</h5>
                <ul>
                  <li>- Upgrade atau downgrade paket dapat dilakukan setelah minimal 1 bulan berlangganan.</li>
                  <li>- Perubahan paket akan mulai diterapkan pada periode tagihan berikutnya.</li>
                </ul>

                <h5 className="fw-bold mt-4">6. Pembatalan & Pengembalian</h5>
                <ul>
                  <li>- Pelanggan dapat membatalkan langganan setelah periode minimal 1 bulan.</li>
                  <li>- Tidak ada pengembalian dana (refund) untuk kelebihan jumlah pembayaran per periode.</li>
                </ul>

                <h5 className="fw-bold mt-4">7. Privasi & Data Pelanggan</h5>
                <ul>
                  <li>- MyRepublic menjamin kerahasiaan data pelanggan sesuai GDPR/UU ITE.</li>
                  <li>- Data hanya dapat diakses oleh pihak terkait dan tidak dipublikasikan tanpa izin pelanggan.</li>
                </ul>

                <h5 className="fw-bold mt-4">8. SLA & Layanan Pelanggan</h5>
                <ul>
                  <li>- Customer Service tersedia 24/7 di nomor +62 896‑6160‑0044 via telepon, chat, dan email.</li>
                  <li>- Tim teknis akan merespon gangguan koneksi dalam maksimal 4–6 jam kerja setelah laporan diterima.</li>
                </ul>

                <h5 className="fw-bold mt-4">9. Tanggung Jawab & Force Majeure</h5>
                <ul>
                  <li>- MyRepublic tidak bertanggung jawab atas gangguan akibat bencana alam, pemeliharaan pihak ketiga, atau penggunaan ilegal oleh pengguna.</li>
                  <li>- Penggunaan yang melanggar hukum (unduhan konten berbayar ilegal, spam, dll.) adalah tanggung jawab pelanggan penuh.</li>
                </ul>

                <h5 className="fw-bold mt-4">10. Perubahan Syarat</h5>
                <ul>
                  <li>- MyRepublic dapat memperbarui syarat & ketentuan ini. Perubahan akan diumumkan minimal 14 hari sebelum berlaku.</li>
                  <li>- Dengan melanjutkan penggunaan layanan, pelanggan dianggap menyetujui syarat terbaru.</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SyaratPage;

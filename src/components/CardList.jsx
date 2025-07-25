// CardList.jsx
import React from "react";
import CardPaket from "./CardPaket";

export default function CardList({ paketList }) {
  return (
    <div className="row">
      {paketList.map((paket, index) => (
        <div key={`${paket.name}-${index}`} className="col-md-4 mb-4">
          <CardPaket paket={paket} />
        </div>
      ))}
    </div>
  );
}

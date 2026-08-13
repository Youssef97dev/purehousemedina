import React from "react";
import Image from "next/image";

import Link from "next/link";

const message =
  "Hello Pure House Marrakech, I would like to know more about your availability and stay options.";

const whatsappUrl = `https://wa.me/212682225235?text=${encodeURIComponent(
  message
)}`;

const ButtonWtsp = () => {
  return (
    <Link href={whatsappUrl}>
      <Image
        src="/whatsapp.png"
        alt="whatsapp pure house medina"
        width={100}
        height={100}
        className="object-cover w-12"
      />
    </Link>
  );
};

export default ButtonWtsp;

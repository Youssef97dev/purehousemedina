import React from "react";
import Image from "next/image";

import Link from "next/link";

const ButtonWtsp = () => {
  return (
    <Link href="https://wa.me/212682225235">
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

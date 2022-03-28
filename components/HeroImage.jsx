import Image from "next/image";
import React from "react";

const HeroImage = () => {
  return (
    <div className="w-full block">
      <Image
        src="https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        layout="fill"
      />
    </div>
  );
};

export default HeroImage;

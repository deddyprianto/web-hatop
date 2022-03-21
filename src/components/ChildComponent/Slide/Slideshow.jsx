import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import Ceo from "Assets/CEO.jpg";
const slideImages = [
  {
    caption:
      "Hatop adalah organisasi baru yang pernah saya kenal dan saya akan serius membantu masyarakat dalam digitalisasi",
    user: "Deddy Prianto, ",
    jabatan: "Project Manager at HATOP",
  },
  {
    caption:
      "Organisasi Hatop adalah organisasi terbaik yang pernah saya temukan, karena saya banyak belajar dari sana bukan hanya teknologi melainkan banyak hal lain nya",
    user: "Prayoga S,",
    jabatan: "CEO at HATOP",
  },

  {
    caption:
      "Best Of The Year ,Hatop adalah organisasi baru yang pernah saya kenal dan saya akan serius membantu masyarakat dalam digitalisasi ",
    user: "Glad Martin,",
    jabatan: "Head Engineering at HATOP",
  },
  {
    caption:
      "Best Of The Year ,Hatop adalah organisasi baru yang pernah saya kenal dan saya akan serius membantu masyarakat dalam digitalisasi ",
    user: "Devan Nst,",
    jabatan: "Head Administration at HATOP",
  },
  {
    caption:
      "Best Of The Year ,Hatop adalah organisasi baru yang pernah saya kenal dan saya akan serius membantu masyarakat dalam digitalisasi ",
    user: "Reza A,",
    jabatan: "Ast Adm/Android Dev at HATOP",
  },
  {
    caption:
      "Best Of The Year ,Hatop adalah organisasi baru yang pernah saya kenal dan saya akan serius membantu masyarakat dalam digitalisasi ",
    user: "Sanrio N,",
    jabatan: "Head Marketing/ UI/UX at HATOP",
  },
  {
    caption:
      "Best Of The Year ,Hatop adalah organisasi baru yang pernah saya kenal dan saya akan serius membantu masyarakat dalam digitalisasi ",
    user: "Okky W,",
    jabatan: "Ast Marketing/Android Dev at HATOP",
  },
  {
    caption:
      "Best Of The Year ,Hatop adalah organisasi baru yang pernah saya kenal dan saya akan serius membantu masyarakat dalam digitalisasi ",
    user: "Fauzan A,",
    jabatan: "Ast Engineering/ UI/UX at HATOP",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide indicators={true}>
        {slideImages.map((slideImage, index) => (
          <div className="w-full flex justify-center items-center" key={index}>
            <div className="w-1/2 text-gray-100 flex flex-col justify-center items-center">
              <Image
                src={Ceo}
                width={100}
                height={100}
                className="rounded-full"
                alt="CEO"
              />
              <h1 className="lg:text-xl text-sm text-center mt-10">
                {slideImage.caption}
              </h1>
              <p className="italic text-lg lg:text-lg mt-8 text-center">
                {slideImage.user}
              </p>
              <p className="italic text-sm lg:text-lg text-center">
                {slideImage.jabatan}
              </p>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Slideshow;

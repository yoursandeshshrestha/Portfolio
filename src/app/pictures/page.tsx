import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import pictureOne from "../../../public/images/picture-one.jpeg";
import pictureTwo from "../../../public/images/picture-two.jpeg";
import pictureThree from "../../../public/images/picture-three.jpeg";
import pictureFour from "../../../public/images/picture-four.jpeg";
import pictureFive from "../../../public/images/picture-five.jpeg";
import pictureSix from "../../../public/images/picture-six.jpeg";

export default function Pictures() {
  return (
    <div className="">
      {/* Bento Grid with Images */}
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            header={
              <div className="w-full h-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/bento:scale-105"
                />
              </div>
            }
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

// Example items with images
const items = [
  {
    image: pictureOne, // Replace with your actual image paths
    className: "md:col-span-2",
    alt: "sandesh-shrestha",
  },
  {
    image: pictureTwo, // Replace with your actual image paths
    className: "md:col-span-1",
    alt: "sandesh-shrestha",
  },
  {
    image: pictureThree, // Replace with your actual image paths
    className: "md:col-span-1",
    alt: "sandesh-shrestha",
  },
  {
    image: pictureFour, // Replace with your actual image paths
    className: "md:col-span-2",
    alt: "sandesh-shrestha",
  },
  {
    image: pictureFive, // Replace with your actual image paths
    className: "md:col-span-2",
    alt: "sandesh-shrestha",
  },
  {
    image: pictureSix, // Replace with your actual image paths
    className: "md:col-span-1",
    alt: "sandesh-shrestha",
  },
];

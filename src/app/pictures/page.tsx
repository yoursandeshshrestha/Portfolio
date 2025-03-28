import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import pictureOne from "../../../public/images/picture-one.jpeg";

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
                  alt={item.image.src}
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
  },
  {
    image: pictureOne, // Replace with your actual image paths
    className: "md:col-span-1",
  },
  {
    image: pictureOne, // Replace with your actual image paths
    className: "md:col-span-1",
  },
  {
    image: pictureOne, // Replace with your actual image paths
    className: "md:col-span-2",
  },
  {
    image: pictureOne, // Replace with your actual image paths
    className: "md:col-span-2",
  },
  {
    image: pictureOne, // Replace with your actual image paths
    className: "md:col-span-1",
  },
];

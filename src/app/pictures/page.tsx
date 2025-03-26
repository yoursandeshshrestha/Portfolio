import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import pictureOne from "../../../public/images/picture-one.jpeg";

export default function Pictures() {
  return (
    <div className="space-y-16">
      {/* Bento Grid with Images */}
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            description={item.description}
            header={
              <div className="w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.description}
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
    description: "Explore the birth of groundbreaking ideas and inventions.",
    image: pictureOne, // Replace with your actual image paths
    className: "md:col-span-2",
  },
  {
    description: "Dive into the transformative power of technology.",
    image: pictureOne, // Replace with your actual image paths
    className: "md:col-span-1",
  },
  {
    description: "Discover the beauty of thoughtful and functional design.",
    image: pictureOne, // Replace with your actual image paths
    className: "md:col-span-1",
  },
  {
    description:
      "Understand the impact of effective communication in our lives.",
    image: pictureOne, // Replace with your actual image paths
    className: "md:col-span-2",
  },
  {
    description:
      "Understand the impact of effective communication in our lives.",
    image: pictureOne, // Replace with your actual image paths
    className: "md:col-span-2",
  },
  {
    description: "Discover the beauty of thoughtful and functional design.",
    image: pictureOne, // Replace with your actual image paths
    className: "md:col-span-1",
  },
];

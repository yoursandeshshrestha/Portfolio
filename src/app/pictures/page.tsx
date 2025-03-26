import { myPicture } from "@/data/mypicture";
import Image from "next/image";

export default function Pictures() {
  return (
    <div className="columns-[200px] gap-4">
      {myPicture.map((picture) => (
        <Image
          key={picture.id}
          src={picture.image}
          alt={picture.alt}
        />
      ))}
    </div>
  );
}

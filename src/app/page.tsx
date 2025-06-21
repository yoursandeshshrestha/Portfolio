"use client";

import { Header } from "@/components/Header";
import { SocialLinks } from "@/components/SocialLinks";
import { Achievements } from "@/components/Achievements";
import { Experience } from "@/components/Experience";
  
export default function Home() {
  return (
    <div>
      <Header />
      <SocialLinks />
      <Achievements />
      <Experience />
    </div>
  );
}

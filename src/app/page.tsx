"use client";

import { useEffect } from "react";
import { Hero } from "@/src/sections/hero/Hero";
import RecentProjects from "@/src/sections/hero/RecentProjects";
import RecentArticles from "@/src/sections/hero/RecentArticles";
import WorkExperience from "@/src/components/WorkExperience";

export default function Home() {
  useEffect(() => {
    // Reset scroll position when component mounts
    if (typeof window !== "undefined") {
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    }
  }, []);

  return (
    <div className="space-y-8">
      <Hero />
      <WorkExperience />
      <RecentProjects />
      <RecentArticles />
    </div>
  );
}

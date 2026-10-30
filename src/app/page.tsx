import { Hero } from "@/components/sections/hero";
import { Ticker } from "@/components/sections/ticker";
import { ProductCategories } from "@/components/sections/product-categories";
import { FeaturedSweets } from "@/components/sections/featured-sweets";
import { BakeryShowcase } from "@/components/sections/bakery-showcase";
import { About } from "@/components/sections/about";
import { Gallery } from "@/components/sections/gallery";
import { Reviews } from "@/components/sections/reviews";
import { VisitUs } from "@/components/sections/visit-us";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <ProductCategories />
      <FeaturedSweets />
      <BakeryShowcase />
      <About />
      <Gallery />
      <Reviews />
      <VisitUs />
    </>
  );
}

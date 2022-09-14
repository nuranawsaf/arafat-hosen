import Link from "next/link";
import About from "../components/about/About";
import Category from "../components/home/category/Category";
import Banner from "../components/home/header/Banner";
import Outdoor from "../components/home/outdoor/Outdoor";
import Work from "../components/home/work/Work";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Work/>
      <Category/>
      <Outdoor/>
    </div>
  );
}

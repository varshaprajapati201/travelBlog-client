import Header from "../../shared/Header";
import { Footer } from "../../shared/uu";
import { BlogSection } from "./components/Blogs/Blogs";
import { Hero } from "./components/Hero/Hero";
import { Intro } from "./components/Intro/Intro";

export const Home=()=>{
    return (
        <>
            <Header fixed="top"/>
  <div><Hero /></div>
  <div><Intro /></div>
  <BlogSection />   
<div><Footer /></div>
        </>
    );
}
import React from "react";
import HomeCard from "../../components/Cards/HomeCard";
import BlogSlider from "../../components/Slider/BlogSlider";
import PscBlogs from "./PscBlogs.json";

const GalleryBlog = () => {
  return (
    <>
      <BlogSlider />

      <section className="section  section bg-primary pb-2 overflow-hidden z-2">
        <div className="container boxShadowIn_0">
          <div className="row pt-4">
            {PscBlogs.GalleryBlogs.map((val) => (
              <HomeCard
                key={val.id}
                title={val.title}
                img={val.img}
                disc={val.disc}
                url={val.url}
              />
            ))}
            {PscBlogs.GalleryBlogs.map((val) => (
              <HomeCard
                key={val.id}
                title={val.title}
                img={val.img}
                disc={val.disc}
                url={val.url}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryBlog;

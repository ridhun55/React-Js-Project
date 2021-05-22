import React from "react";
import HomeCard from "../../components/Cards/HomeCard";

const HomeData = [
  {
    title: "PSC Blogs & Notes",
    img: "images/ec.png",
    disc:
      "Lorem ipsum dolor sit amet, illum ius ex, eu eos dolorum meliore inimicus, his ei veniam audiam..",
    url: "#",
  },
  {
   title: "PSC Objectives",
   img: "images/ec.png",
   disc:
     "Lorem ipsum dolor sit amet, illum ius ex, eu eos dolorum meliore inimicus, his ei veniam audiam..",
   url: "#",
 },
 {
   title: "PSC Maths Tricks",
   img: "images/ec.png",
   disc:
     "Lorem ipsum dolor sit amet, illum ius ex, eu eos dolorum meliore inimicus, his ei veniam audiam..",
   url: "#",
 },
 {
   title: "PSC Languages",
   img: "images/ec.png",
   disc:
     "Lorem ipsum dolor sit amet, illum ius ex, eu eos dolorum meliore inimicus, his ei veniam audiam..",
   url: "#",
 },
 {
   title: "PSC Syllabus",
   img: "images/ec.png",
   disc:
     "Lorem ipsum dolor sit amet, illum ius ex, eu eos dolorum meliore inimicus, his ei veniam audiam..",
   url: "#",
 },
 {
   title: "PSC New Notifications",
   img: "images/ec.png",
   disc:
     "Lorem ipsum dolor sit amet, illum ius ex, eu eos dolorum meliore inimicus, his ei veniam audiam..",
   url: "#",
 },
 {
   title: "PSC Previous Questions",
   img: "images/ec.png",
   disc:
     "Lorem ipsum dolor sit amet, illum ius ex, eu eos dolorum meliore inimicus, his ei veniam audiam..",
   url: "#",
 },
];

const Category = () => {
  return (
    <section id="Category" className="section pb-4">
      <div className="container">
        <div className="row">
          <div className="col-12 card boxShadowIn_0 text-center border-light pt-3 pb-0">
            <div className="row">
              {HomeData.map((val) => (
                <HomeCard title={val.title} img={val.img} disc={val.disc} url={val.url}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;

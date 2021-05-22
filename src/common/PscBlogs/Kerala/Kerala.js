import React from 'react'
import ListCard from "../../../components/Cards/ListCard";

const KeralaData = [
  {
     id : 1,
    title: "Kerala Blog 1",
    img: "images/ec.png",
    disc:"Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, Alice is a freelance web designer and developer based in London",
    url: "#",
  },
  {
     id : 2,
    title: "Kerala Blog 2",
    img: "images/ec.png",
    disc:"Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, Alice is a freelance web designer and developer based in London",
    url: "#",
  },
]

const Kerala = () => {
   return (
      <section id="KeralaBlog" className="section pb-4">
      <div className="container ">
        <div className="row">
          <div className="col-12 pt-3 pb-0">
            <div className="row ">
            {KeralaData.map((val) => (
                <ListCard key={val.id} title={val.title} img={val.img} disc={val.disc} url={val.url}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
   )
}

export default Kerala

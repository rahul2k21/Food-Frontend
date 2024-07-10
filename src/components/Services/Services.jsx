import React from "react";
import Img1 from "../../assets/images2.jfif";
import Img2 from "../../assets/images1.jfif";
import Img3 from "../../assets/images2.jfif";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: "Malabar Biryani",
    description:
      "Thalassery chicken biryani also known as malabar chicken biryani is one of the most popular foods from kerala cuisine made with jeerakasala rice & spices.!",
  },

  {
    id: 2,
    img: Img2,
    name: "Alu Dum Biryani",
    description:
      "Dum biryani is a slow cooked, layered rice dish and normal biryani is a kacchi biryani or pakki biryani. In normal biryani, the meat and rice are cooked separately before being combined. In terms of taste!",
  },

  {
    id: 3,
    img: Img3,
    name: "Ambur Biryani",
    description:
      "Ambur biryani is a delightful one-pot meal with succulent pieces of meat cooked to perfection along with the aromatic jeera samba rice, mint leaves, coriander leaves and whole spices.!",
  },
];

function Services() {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header Section   */}

          <div className="text-center mb-20 max-w-[400] mx-auto">
            <p className="text-md bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Services
            </p>
            <h1 className="text-3xl font-bold mb-3">Top Recipes of the day</h1>
            <p className="text-sm text-gray-400">
              {" "}
              You know how bacon is all the rage these days? Bacon dipped in
              chocolate, bacon topped donuts, bacon beurre blanc and so and
              sweet.
            </p>
          </div>

          {/* Card Section   */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
              {ServicesData.map(({ id, img, name, description }) => {
                return (
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="300"
                    key={id}
                    className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary  hover:text-white duration-300   shadow-xl"
                  >
                    <div className="h-[100px] mb-5">
                      .{" "}
                      <img
                        src={img}
                        alt=""
                        className="max-w-[200px] 
                         mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h1 className="text-xl font-bold dark:text-white mt-12 ">
                        {name}
                      </h1>
                      <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

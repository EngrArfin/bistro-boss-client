import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import chefimg from "../../../assets/home/slide1.jpg";

const Chef = () => {
  return (
    <div>
      <div className="">
        <div className="grid h-20 flex-grow lg:flex-row card bg-neutral rounded-box place-items-center text-white">
          Call Us: +88 0192345678910
        </div>
      </div>
      <SectionTitle
        subHeading="---Should Try---"
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="flex gap-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={chefimg} alt="" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 mt-4">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={chefimg} alt="" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-neutral border-0 border-b-4 mt-4">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={chefimg} alt="" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 mt-4">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;

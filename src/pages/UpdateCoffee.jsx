import { Link, useLoaderData, useNavigate } from "react-router-dom";
import addCoffeeBg from "../assets/addCoffee.png";
import { FaArrowLeft } from "react-icons/fa";
import { useRef } from "react";
import toast from "react-hot-toast";

const UpdateCoffee = () => {
  const formRef = useRef();
  const loadedCoffee = useLoaderData();
  const navigate = useNavigate();
  // console.log(loadedCoffee);

  const handleUpdate = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const chef = formData.get("chef");
    const supplier = formData.get("supplier");
    const taste = formData.get("taste");
    const category = formData.get("category");
    const details = formData.get("details");
    const photo = formData.get("photo");
    const coffe = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
      status: true,
    };
    // console.log(coffe);
    fetch(
      `https://coffee-house-black-three.vercel.app/coffee/${loadedCoffee?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(coffe),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        if (result.modifiedCount > 0) {
          toast.success(`${name} Coffee Updated Successfull!`);
          formRef.current.reset();
          navigate("/");
        }
      });
  };
  return (
    <section
      className="text-[#331A15] relative  bg-cover w-full h-screen"
      style={{ backgroundImage: `url('${addCoffeeBg}')` }}
    >
      <div className="absolute bg-black/10 w-full h-full"></div>
      <Link
        to="/"
        className="flex items-center max-w-[1320px] mx-auto pt-5 relative gap-2 text-lg merienda"
      >
        <FaArrowLeft /> Back to Home
      </Link>
      <div className="max-w-[1320px] px-10 mx-auto flex flex-col gap-8 mt-10">
        {/* Title */}
        <div className="relative text-center max-w-[932px] px-10 mx-auto">
          <h1 className="text-2xl my-2 merienda font-bold">Update Coffee</h1>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleUpdate}
          className="relative px-30 grid grid-cols-1 md:grid-cols-2 gap-2 gap-y-4"
        >
          {/* Name */}
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="bg-white p-3 rounded-lg w-full"
              type="text"
              name="name"
              defaultValue={loadedCoffee?.name}
              placeholder="Enter coffee name"
            />
          </div>

          {/* Chef */}
          <div>
            <label htmlFor="chef">Chef</label>
            <br />
            <input
              className="bg-white p-3 rounded-lg w-full"
              type="text"
              name="chef"
              defaultValue={loadedCoffee?.chef}
              placeholder="Enter coffee chef"
            />
          </div>

          {/* Supplier */}
          <div>
            <label htmlFor="supplier">Supplier</label>
            <br />
            <input
              className="bg-white p-3 rounded-lg w-full"
              type="text"
              name="supplier"
              defaultValue={loadedCoffee?.supplier}
              placeholder="Enter coffee supplier"
            />
          </div>

          {/* Tase */}
          <div>
            <label htmlFor="taste">Taste</label>
            <br />
            <input
              className="bg-white p-3 rounded-lg w-full"
              type="text"
              name="taste"
              defaultValue={loadedCoffee?.taste}
              placeholder="Enter coffee tase"
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="bg-white p-3 rounded-lg w-full"
              type="text"
              name="category"
              defaultValue={loadedCoffee?.category}
              placeholder="Enter coffee category"
            />
          </div>

          {/* Details */}
          <div>
            <label htmlFor="details">Details</label>
            <br />
            <input
              className="bg-white p-3 rounded-lg w-full"
              type="text"
              name="details"
              defaultValue={loadedCoffee?.details}
              placeholder="Enter coffee details"
            />
          </div>

          {/* Photo */}
          <div className="col-span-2">
            <label htmlFor="photo">Photo URL</label>
            <br />
            <input
              className="bg-white p-3 rounded-lg w-full"
              type="text"
              name="photo"
              defaultValue={loadedCoffee?.photo}
              placeholder="Enter photo URL"
            />
          </div>
          {/* <div className="flex gap-2 items-center text-lg">
            <input
              type="checkbox"
              defaultChecked
              name="check"
              className="checkbox checkbox-neutral"
            />
            <label htmlFor="status">Available?</label>
          </div> */}
          <input
            className="btn col-span-2 mt-2 text-[#331A15] hover:shadow-2xl bg-[#D2B48C] border border-[#331A15] merienda"
            type="submit"
            value="Add Coffe"
          />
        </form>
      </div>
    </section>
  );
};

export default UpdateCoffee;

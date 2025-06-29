import { Link } from "react-router-dom";
import pop_bg from "../assets/popular/popularBg.png";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { VscCoffee } from "react-icons/vsc";
import { useState } from "react";
import Swal from "sweetalert2";
import { filter } from "./../../node_modules/rxjs/dist/esm5/internal/operators/filter";

// const products = [
//   {
//     id: 1,
//     name: "Americano Coffee",
//     chef: "Mr. Matin Paul",
//     price: "$5.99",
//     image: popular1, // Replace with actual paths
//   },
//   {
//     id: 2,
//     name: "Black Coffee",
//     chef: "Mr. Nibra Sweeden",
//     price: "$6.49",
//     image: popular2,
//   },
//   {
//     id: 3,
//     name: "Expresso Coffee",
//     chef: "Mrs. Morisha",
//     price: "$6.99",
//     image: popular3,
//   },
//   {
//     id: 4,
//     name: "Cappucino Coffee",
//     chef: "Mr. Moruti",
//     price: "$7.49",
//     image: popular4,
//   },
//   {
//     id: 5,
//     name: "Mocchiato",
//     chef: "Mr. Moruti",
//     price: "$7.49",
//     image: popular5,
//   },
//   {
//     id: 6,
//     name: "Decaf Coffee",
//     chef: "Mr. Moruti",
//     price: "$7.49",
//     image: popular6,
//   },
// ];

const PopularProducts = ({ Coffee }) => {
  const [allCoffee, setAllCoffee] = useState(Coffee);
  // console.log(allCoffee);
  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            // console.log(result);
            if (result.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = allCoffee.filter((coffee) => coffee._id !== id);
              setAllCoffee(remaining);
            }
          });
      }
    });
  };
  return (
    <section
      className="py-20 w-full h-screen bg-cover overflow-auto text-center "
      style={{
        backgroundImage: `url('${pop_bg}')`,
      }}
    >
      <p>--- Sip & Savor ---</p>
      <h2 className="text-4xl font-bold mb-4 merienda">Our Popular Products</h2>

      <Link
        to="/add-coffee"
        className="btn mb-10 bg-[#E3B577]  border-2 text-[#FFFFFF] border-[#331A15] merienda"
      >
        Add Coffee <VscCoffee className="text-black font-bold text-lg" />
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 max-w-6xl mx-auto px-4">
        {allCoffee.map((coffee) => (
          <div
            key={coffee._id}
            className="flex items-center  bg-[#ECEAE3]/50 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={coffee?.photo}
              alt={coffee?.name}
              className="w-46 h-60 p-1 object-cover m-7"
            />

            {/* <==Details==> */}
            <div className="p-4 text-left text-lg">
              <h3 className="">
                Name: <span className="text-gray-500">{coffee?.name}</span>
              </h3>
              <p>
                Chef: <span className="text-gray-500">{coffee?.chef}</span>
              </p>
              <p className="">
                Status:{" "}
                {coffee?.status ? (
                  <span className="text-green-500">Available</span>
                ) : (
                  <span className="text-red-500">Not Available</span>
                )}
              </p>
            </div>

            {/* <==Icons==> */}
            <div className="flex flex-col gap-4 text-white">
              <button className="bg-[#D2B48C] p-2.5 rounded-lg hover:text-gray-400">
                <FaEye />
              </button>
              <Link
                to={`/update/${coffee?._id}`}
                className="bg-[#3C393B] p-2.5 rounded-lg hover:text-gray-400"
              >
                <MdEdit />
              </Link>
              <button
                onClick={(id) => handleDelete(coffee?._id)}
                className="bg-[#EA4744] p-2.5 rounded-lg hover:text-gray-400"
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;

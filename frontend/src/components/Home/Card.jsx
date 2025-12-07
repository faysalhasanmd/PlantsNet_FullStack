import { Link } from "react-router";

const Card = ({ singlePlant }) => {
  const { _id, name, image, price, quantity, category } = singlePlant || {};

  return (
    <Link
      to={`/plant/${_id}`}
      className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Image Section */}
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Optional tag or badge */}
        <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded">
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
          {name}
        </h2>
        <p className="text-gray-500 text-sm">Quantity: {quantity}</p>
        <p className="text-gray-800 font-medium text-md">
          Price: <span className="text-green-600">${price}</span>
        </p>
      </div>
    </Link>
  );
};

export default Card;

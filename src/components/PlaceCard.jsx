// eslint-disable-next-line react/prop-types
const PlaceCard = ({ title, image, description }) => {
  return (
    <div className="flex-none bg-white p-4 rounded-lg shadow-lg w-72 transform transition duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <h2 className="mt-4 text-xl font-bold text-blue-600">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default PlaceCard;

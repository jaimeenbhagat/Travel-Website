/* eslint-disable react/prop-types */
import PlaceCard from './PlaceCard';

const PlacesSection = ({ title, places }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mt-8 text-center">{title}</h2>
      <div className="overflow-x-auto">
        <div className="flex space-x-6 mt-8">
          {places.map((place, index) => (
            <PlaceCard key={index} title={place.title} image={place.image} description={place.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacesSection;

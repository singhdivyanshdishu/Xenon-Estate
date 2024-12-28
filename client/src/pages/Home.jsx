import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div className="bg-lightBlue min-h-screen">

      {/* Top Section */}
      <div className="flex flex-col gap-6 p-12 px-4 max-w-6xl mx-auto text-center">
      <h1 className="text-slate-700 font-extrabold text-4xl sm:text-6xl leading-tight">
  Discover Your Dream Home with <span className="font-bold text-blue-500">Xenon Estate</span> at Ease
</h1>



        <p className="text-gray-500 text-sm sm:text-base mb-8">
          <span className="font-bold">Xenon Estate</span> provides a handpicked collection of properties tailored to your lifestyle.
          Whether you're buying, renting, or exploring the best offers, we’ve got it all covered.
        </p>
        <Link
          to={'/search'}
          className="bg-blue-500 text-white text-sm sm:text-lg py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Start Your Search Today
        </Link>
      </div>

      {/* Swiper: Featured Listings */}
      <Swiper navigation className="my-12">
        {offerListings && offerListings.length > 0 && offerListings.map((listing) => (
          <SwiperSlide key={listing._id}>
            <div
              style={{
                background: `url(https://via.placeholder.com/1200x600?text=Featured+Listing) center no-repeat`,
                backgroundSize: 'cover',
              }}
              className="h-[500px] w-full rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center h-full bg-black bg-opacity-30 text-white text-lg font-bold">
                {listing.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Listings: Offer, Rent, Sale */}
      <div className="max-w-6xl mx-auto p-6 space-y-16">
        
        {/* Recent Offers */}
        {offerListings && offerListings.length > 0 && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-slate-600">Exclusive Offers</h2>
              <Link className="text-sm text-blue-800 hover:underline" to="/search?offer=true">
                View All Offers
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {/* Recent Rentals */}
        {rentListings && rentListings.length > 0 && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-slate-600">Homes for Rent</h2>
              <Link className="text-sm text-blue-800 hover:underline" to="/search?type=rent">
                Explore More Rentals
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {/* Recent Sales */}
        {saleListings && saleListings.length > 0 && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-slate-600">Properties for Sale</h2>
              <Link className="text-sm text-blue-800 hover:underline" to="/search?type=sale">
                Browse Properties for Sale
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

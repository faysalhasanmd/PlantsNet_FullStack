import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const SwpSlider = () => {
  const { data: plants = [], isLoading } = useQuery({
    queryKey: ["plants"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/plants");
      return res.json();
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      {/* Slider Section */}
      <div className="w-full mx-auto mb-5">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={false}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          speed={1500}
          effect="fade"
        >
          {plants.map((item) => (
            <SwiperSlide key={item._id}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full object-cover h-[330px] rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Marquee Section */}
      <div className=" rounded-xl overflow-hidden">
        <marquee
          className="text-lg font-semibold text-green-700"
          scrollamount="6"
        >
          <div className="w-full overflow-hidden bg-amber-100 py-3 rounded-xl">
            <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
              {plants.map((item) => (
                <span
                  key={item._id}
                  className="mx-6 text-green-700 font-semibold text-lg flex items-center"
                >
                  🌿 {item.name}
                </span>
              ))}
              {plants.map((item) => (
                <span
                  key={item._id + "-dup"}
                  className="mx-6 text-green-700 font-semibold text-lg flex items-center"
                >
                  🌿 {item.name}
                </span>
              ))}
            </div>
          </div>
        </marquee>
      </div>
    </>
  );
};

export default SwpSlider;

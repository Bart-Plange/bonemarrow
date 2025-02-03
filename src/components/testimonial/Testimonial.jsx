import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    feedback: "The team provided excellent care during my transplant. I felt safe and well taken care of.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "James Anderson",
    feedback: "Professional staff and advanced treatment options. I highly recommend their services.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Emily Carter",
    feedback: "A life-saving experience! The doctors are truly compassionate and skilled.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900">
          What Our Patients Say
        </h2>
        <p className="text-gray-600 text-center mt-4">
          Real stories from patients who received world-class care.
        </p>

        {/* Swiper Slider */}
        <div className="mt-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 mx-auto rounded-full"
                  />
                  <h3 className="text-lg font-semibold text-blue-900 mt-4">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;

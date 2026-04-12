import React from "react";
import { Link } from "react-router-dom";
const features = [
  { title: "Professional coaches each with at least 5 years of experience.", icon: "✶" },
  { title: "The medical professional's office", icon: "+" },
  { title: "4 sports zones", icon: "4" },
  { title: "A bar serving wholesome drinks.", icon: "☕" },
  { title: "Wi-Fi Free", icon: "📶" },
  { title: "Tanning bed", icon: "☀" },
  { title: "Fitness trackers and smart analysis.", icon: "⌚" },
  { title: "Various kinds of massage", icon: "✋" },
];

const slides = [
  {
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
    label: "Power zone",
  },
  {
    img: "https://images.unsplash.com/photo-1558611848-73f7eb4001ab",
    label: "Cardio zone",
  },
  {
    img: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e",
    label: "Strength zone",
  },
];

export default function TitanLanding() {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans">
     
      {/* Hero */}
      <section className="px-4 md:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Be healthier.<br />
              Be stronger.<br />
              Be confident.
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button className="w-full sm:w-auto bg-lime-400 text-black px-6 py-3 rounded-full font-semibold">
                Try for free
              </button>
              <button className="w-full sm:w-auto bg-gray-800 px-6 py-3 rounded-full text-gray-300">
                More about Titan
              </button>
            </div>

            <div className="bg-white text-black mt-8 p-4 rounded-xl w-full max-w-xs mx-auto md:mx-0">
              <p className="font-bold text-center md:text-left">
                10,000+ satisfied clients
              </p>
              <p className="text-xs mt-2 text-gray-600 text-center md:text-left">
                They arrive with different goals, yet they all find the support.
              </p>
            </div>
          </div>

          <div className="relative order-first md:order-none">
            <img
              src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e"
              alt="hero"
              className="rounded-2xl w-full h-[260px] sm:h-[320px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 px-4 py-2 rounded-lg text-xs sm:text-sm text-center md:text-left">
              Your muscles grow while you sleep.
            </div>
          </div>

        </div>
      </section>

      {/* Slider Section */}
      <section className="bg-white text-black rounded-t-3xl px-4 md:px-10 py-16">

        <div className="text-center md:text-left max-w-md mx-auto md:mx-0">
          <span className="border px-4 py-1 rounded-full text-sm">
            Sport center
          </span>

          <h3 className="text-xl sm:text-2xl font-bold mt-4">
            Welcome to the Titan Fitness Center
          </h3>

          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Where people work on strengthening both body and mind.
          </p>

          <button className="mt-4 bg-black text-white px-5 py-2 rounded-full">
            More
          </button>
        </div>

        <div className="mt-8 overflow-x-auto snap-x snap-mandatory">
          <div className="flex gap-4 min-w-max">

            {slides.map((item, i) => (
              <div
                key={i}
                className="w-[85%] sm:w-64 h-72 sm:h-80 flex-shrink-0 snap-center relative"
              >
                <img
                  src={item.img}
                  alt=""
                  className="rounded-2xl w-full h-full object-cover"
                />

                <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs">
                  {item.label}
                </span>

                <div className="absolute bottom-3 left-3 right-3 bg-black/40 text-white text-xs p-2 rounded-lg">
                  Space for working with free weights
                </div>
              </div>
            ))}

          </div>
        </div>

      </section>

      {/* Features */}
      <section className="px-4 md:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

          {features.map((item, i) => (
            <div
              key={i}
              className="relative bg-[#1a1a1a] p-6 rounded-2xl h-40 flex items-end overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center text-white/5 text-[120px] font-bold">
                {item.icon}
              </div>

              <p className="relative z-10 text-sm text-gray-300">
                {item.title}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#1a1a1a] rounded-2xl flex items-center justify-center h-48">
            <span className="text-lime-400 text-7xl font-bold">.T</span>
          </div>
          <div className="md:col-span-2 bg-[#1a1a1a] rounded-2xl h-48"></div>
        </div>

      </section>

    </div>
  );
}
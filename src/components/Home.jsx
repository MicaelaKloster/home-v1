/* jshint ignore: start */
import React from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

const carBrands = [
  { name: "Audi", image: "/img/auto-audi.png" },
  { name: "Ferrari", image: "/img/auto-ferrari.png" },
  { name: "Tesla", image: "/img/auto-tesla.png" },
];

const brandLogos = [
  { name: "Honda", logo: "/img/logo-honda.png" },
  { name: "Toyota", logo: "/img/logo-toyota.png" },
  { name: "Tesla", logo: "/img/logo-tesla.png" },
  { name: "Ferrari", logo: "/img/logo-ferrari.png" },
  { name: "Audi", logo: "/img/logo-audi.png" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-backgroundWhite font-roboto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <Typography variant="h1" color="blueText" className="mb-2">
              Find Your Dream
            </Typography>
            <Typography variant="h1" color="redText" className="font-bold">
              CAR
            </Typography>
            <Button
              color="blue"
              size="lg"
              ripple="light"
              className="mt-4 bg-blueText hover:bg-blueText/80"
            >
              Order Now
            </Button>
          </div>
          <div className="w-full md:w-2/3 relative">
            <Carousel
              className="rounded-xl"
              autoplay={true}
              autoplayDelay={5000}
              loop={true}
            >
              {carBrands.map((brand, index) => (
                <div key={index} className="relative h-full w-full">
                  <img
                    src={brand.image}
                    alt={`${brand.name} car`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
                    <Typography
                      variant="h1"
                      color="white"
                      className="text-grayText opacity-50 text-9xl font-bold"
                    >
                      {brand.name.toUpperCase()}
                    </Typography>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        
        <div className="mt-12">
          <Typography variant="h3" color="grayText" className="mb-6 text-center">
            Brands
          </Typography>
          <div className="flex justify-between items-center flex-wrap">
            {brandLogos.map((brand, index) => (
              <motion.img
                key={index}
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="w-16 h-16 object-contain mx-2 my-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
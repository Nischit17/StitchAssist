import React from "react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to StitchAssist
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Your ultimate tailoring companion. We provide high-quality tailoring
          supplies, tools, and resources to help you create beautiful garments.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg">Shop Now</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>

      {/* This is just placeholder content to test scrolling for the footer animation */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-sm">
              <div className="bg-gray-200 w-full h-48 rounded-md mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">
                Product {index + 1}
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧵</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
            <p className="text-gray-600">
              We source only the highest quality materials for all your
              tailoring needs.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✂️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
            <p className="text-gray-600">
              Our team of experienced tailors is always ready to help with your
              projects.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📦</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p className="text-gray-600">
              We deliver your orders quickly and safely to your doorstep.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

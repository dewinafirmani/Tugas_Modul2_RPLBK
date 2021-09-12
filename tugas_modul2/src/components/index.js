/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import React from "react";
const callouts = [
    {
      name: 'Book',
      description: 'Data Science from Scratch',
      imagesrc: 'https://miro.medium.com/max/191/0*laEcBrmhzXYgJWVz',
      imagealt: 'tes',
      href: '#',
    },
    {
      name: 'Book',
      description: 'Introduction to Machine Learning with Python',
      imagesrc: 'https://miro.medium.com/max/191/0*JH_lpR3hW0OnQQW9',
      imagealt: 'tes',
      href: '#',
    },
    {
      name: 'Book',
      description: 'Python for Data Analysis',
      imagesrc: 'https://miro.medium.com/max/191/0*KMXNY_ZB9KSbRxZk',
      imagealt: 'tes',
      href: '#',
    },
  ]
  
  export default function Example(props) {
      const { nama, nim } = props;
    return (
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900">Collections</h2>
  
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-full bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-1 sm:aspect-h-1 sm:h-90 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imagesrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
            <span className="block text-indigo-600">{nama}</span>
            <span className="block text-indigo-600">{nim}</span>
            </h2>
        </div>
      </div>
    )
  }
  
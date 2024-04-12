import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="bg-blue-400 rounded-lg p-8 mb-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-neutral-100 mb-6">Unlock Your Potential</h1>
          <p className="text-lg text-neutral-100 mb-4">Discover your true capabilities with our personalized learning experience. From academic excellence to professional growth, we are here to guide you every step of the way. Join us today and embark on a journey towards success!</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mb-8">
        <div className="md:w-1/2 p-4">
          <p className="text-center rounded-lg bg-blue-500 text-neutral-100 lg:text-xl xl:text-2xl 2xl:text-3xl p-6 md:p-8">Flexible Learning, Tailored to You: Step into a world where learning meets your schedule seamlessly. Our hybrid and predominantly remote approach ensures that your educational journey fits snugly into your busy life, offering convenience without compromise.</p>
        </div>
        <div className="md:w-1/2 p-4">
          <img src='/1.jpg' alt='College students gathering for coffee' 
            className="w-full h-auto lg:-h-full object-fill md:h-64 lg:h-96 rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mb-8">
        <div className="md:w-1/2 p-4">
          <img src='/new1.jpg' alt='Chemistry student prepping tools for experiment' 
            className="w-full h-auto lg:-h-full object-fill md:h-64 lg:h-96 rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <p className="text-center rounded-lg bg-green-500 text-neutral-100 lg:text-xl xl:text-2xl 2xl:text-3xl p-6 md:p-8">Unlock Your Potential in S.T.E.M: Dive into the wonders of Science, Technology, Engineering, and Mathematics with our immersive S.T.E.M. curriculum. From the intricacies of coding to the marvels of physics, we ignite curiosity and foster innovation, empowering you to thrive in the digital age.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mb-8">
        <div className="md:w-1/2 p-4">
          <p className="text-center rounded-lg bg-yellow-500 text-neutral-100 lg:text-xl xl:text-2xl 2xl:text-3xl p-6 md:p-8">Beyond Tutoring: Elevate Your Academic Journey: It's not just about the grades; it's about mastering the art of learning. Our academic coaching goes beyond the textbook, guiding you towards effective study habits, critical thinking skills, and a mindset primed for success.</p>
        </div>
        <div className="md:w-1/2 p-4">
          <img src='/3.jpg' alt='A mentor giving a speech to a group' 
            className="w-full h-auto lg:-h-full object-fill md:h-64 lg:h-96 rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mb-8">
        <div className="md:w-1/2 p-4">
          <img src='/new2.jpg' alt='A group of people in a meeting room discussing business strategies' 
            className="w-full h-auto lg:-h-full object-fill md:h-64 lg:h-96 rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <p className="text-center rounded-lg bg-red-500 text-neutral-100 lg:text-xl xl:text-2xl 2xl:text-3xl p-6 md:p-8">Craft Your Future with Confidence: Your resume is more than just a piece of paper; it's a reflection of your journey and aspirations. Our expert resume-building services polish your achievements, highlighting your unique strengths and propelling you towards your dreams.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

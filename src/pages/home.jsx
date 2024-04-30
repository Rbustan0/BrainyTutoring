import React from 'react';

const Home = () => {
  const sections = [
    {
      title: "Flexible Learning",
      description: "Tailored to You: Step into a world where learning meets your schedule seamlessly. Our hybrid and predominantly remote approach ensures that your educational journey fits snugly into your busy life, offering convenience without compromise.",
      imageUrl: "/1.jpg",
      alt: "College students gathering for coffee",
      className: "bg-orange-400"
    },
    {
      title: "Discover Your Potential in S.T.E.M",
      description: "Dive into the wonders of Science, Technology, Engineering, and Mathematics with our immersive S.T.E.M. curriculum. From the intricacies of coding to the marvels of physics, we ignite curiosity and foster innovation, empowering you to thrive in the digital age.",
      imageUrl: "/new1.jpg",
      alt: "Chemistry student prepping tools for experiment",
      className: "bg-green-400"
    },
    {
      title: "Beyond Tutoring",
      description: "Elevate Your Academic Journey: It's not just about the grades; it's about mastering the art of learning. Our academic coaching goes beyond the textbook, guiding you towards effective study habits, critical thinking skills, and a mindset primed for success.",
      imageUrl: "/3.jpg",
      alt: "A mentor giving a speech to a group",
      className: "bg-yellow-400"
    },
    {
      title: "Craft Your Future with Confidence",
      description: "Your resume is more than just a piece of paper; it's a reflection of your journey and aspirations. Our expert resume-building services polish your achievements, highlighting your unique strengths and propelling you towards your dreams.",
      imageUrl: "/new2.jpg",
      alt: "A group of people in a meeting room discussing business strategies",
      className: "bg-red-400"
    }
  ];

  return (
    <div className="container mx-auto mt-4">
      <div className="bg-blue-400 rounded-lg p-8 mb-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-100 mb-6">Unlock Your Potential</h1>
          <p className="text-base lg:text-lg text-neutral-100 mb-4">Discover your true capabilities with our personalized learning experience. From academic excellence to professional growth, we are here to guide you every step of the way. Join us today and embark on a journey towards success!</p>
        </div>
      </div>
      {sections.map((section, index) => (
        <div key={index} className="rounded-lg p-2 mb-2">
          <div className="flex flex-col md:flex-row justify-center items-center mb-2">
            <div className="md:w-1/2 p-4 flex justify-center">
              <img src={section.imageUrl} alt={section.alt} 
                className="lazyload w-full md:w-10/12 h-auto lg:-h-full object-cover md:h-64 lg:h-96 rounded-lg"
                loading="lazy"
              />
            </div>
            <div className={`${section.className} rounded-lg md:w-1/2 p-4 md:ml-2`}>
              <div className="text-center">
                <h1 className="text-2xl lg:text-4xl font-bold text-neutral-100 mb-6">{section.title}</h1>
                <p className="text-sm lg:text-lg text-neutral-100 mb-4">{section.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

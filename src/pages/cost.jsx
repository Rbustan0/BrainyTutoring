import React from 'react';

const Cost = () => {
  const costPackageList = [
    {
      title: "Free Assessment",
      price: "$0",
      description: "Sign up today for a free student assessment:",
      features: [
        "Evaluation of student outcomes",
        "Guideline for curriculum development",
        "Insight for tutoring recommendations",
        "Access to secure accreditation",
        "Ensure student success"
      ],
      buttonText: "Learn more"
    },
    {
      title: "Monthly",
      price: "$30/mo",
      description: "Includes everything in our Free package plus:",
      features: [
        "4 hours of tutoring balance",
        "48 hour notice tutoring appointments",
        "Obtain session notes",
        "Access to tutoring discord server",
        "1 subject limit"
      ],
      buttonText: "Learn more"
    },
    {
      title: "Yearly",
      price: "$300/yr",
      description: "Includes everything in our Bronze package plus:",
      features: [
        "65 hours of tutoring balance",
        "24 hour notice tutoring appointments",
        "Obtain educational recommendations",
        "Advanced tutoring insight*",
        "2 subject limit"
      ],
      buttonText: "Learn more"
    },
    {
      title: "Membership",
      price: "$15/mo",
      description: "Unique membership experience includes:",
      features: [
        "50% more tutoring hours",
        "Drop-in tutoring sessions",
        "Free monthly assessment consults",
        "Workshop invitations",
        "Access to support chat"
      ],
      buttonText: "Learn more"
    }
  ];

  return (
    <div className='container mx-auto mt-4'>
      <div className="p-4">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {costPackageList.map((costPackage, index) => (
            <li key={index} className="bg-white shadow-xl p-6 relative lg:rounded-lg">
              <h2 className="bg-blue-500 rounded-t-sm text-center text-lg font-bold text-white">{costPackage.title}</h2>
              <div className="bg-blue-800 rounded-b-sm text-center text-3xl font-bold text-white mb-4">{costPackage.price}</div>
              <p className="text-sm italic font-semibold text-center mb-4 pb-2 border-b-4 border-blue-400">{costPackage.description}</p>
              <ul className="text-sm mb-4">
                {costPackage.features.map((feature, index) => (
                  <li key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>{feature}</li>
                ))}
              </ul>
              <div className="flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {costPackage.buttonText}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cost;

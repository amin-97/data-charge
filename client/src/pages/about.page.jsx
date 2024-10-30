import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
        About Data Charge
      </h1>

      {/* <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 dark:text-white p-8 rounded-lg shadow-sm"> */}
      <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
        Our Mission
      </h2>
      <p className="text-xl text-black dark:text-white mb-6 italic">
        "To empower organizations with cutting-edge technology insights and
        strategic consulting services, bridging the gap between innovation and
        practical implementation in an ever-evolving digital landscape."
      </p>

      <div className="space-y-8 mt-8">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">
            Core Values
          </h3>
          <ul className="space-y-3 text-black dark:text-gray-300">
            <li className="flex items-start">
              <span className="font-semibold mr-2">Innovation Excellence:</span>
              <span>Staying at the forefront of technological advancement</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Practical Wisdom:</span>
              <span>
                Converting complex technical concepts into actionable strategies
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">
                Educational Leadership:
              </span>
              <span>Sharing knowledge through clear, insightful content</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Client Success:</span>
              <span>Prioritizing measurable client outcomes</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">
            Our Vision
          </h3>
          <p className="text-black dark:text-gray-300 mb-4">
            "To be the premier destination for organizations seeking to
            understand, adapt, and thrive in an increasingly technology-driven
            world."
          </p>
        </div>
      </div>
      {/* </div> */}

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
            Consulting Services
          </h3>
          <ul className="space-y-2 text-black dark:text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">•</span>
              Digital Transformation Strategy
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              Technology Implementation
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              Data Analytics Solutions
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              Tech Stack Optimization
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
            Digital Content
          </h3>
          <ul className="space-y-2 text-black dark:text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">•</span>
              Tech Trend Analysis
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              Industry Insights
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              Innovation Reports
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              Expert Commentary
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          Our Approach
        </h2>
        <p className="text-black dark:text-gray-300 leading-relaxed mb-4">
          We believe in delivering actionable insights that combine deep
          technical knowledge with practical business acumen. Our team of
          experts stays at the forefront of technological developments to
          provide our clients with informed perspectives and strategic guidance.
        </p>
        <p className="text-black dark:text-gray-300 leading-relaxed">
          Through our dual focus on consulting services and digital content
          creation, we help organizations navigate the complexities of modern
          technology while staying ahead of industry trends and innovations.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
        Why Choose Data Charge?
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <h4 className="font-semibold mb-2 text-black dark:text-white">
            Expertise
          </h4>
          <p className="text-sm text-black dark:text-gray-300">
            Deep understanding of technology trends and business impacts
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-black dark:text-white">
            Innovation
          </h4>
          <p className="text-sm text-black dark:text-gray-300">
            Forward-thinking solutions for modern challenges
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-black dark:text-white">
            Results
          </h4>
          <p className="text-sm text-black dark:text-gray-300">
            Proven track record of successful implementations
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

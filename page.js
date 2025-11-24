"use client";

import { useEffect, useState } from "react";

export default function Resume() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section with Animated Profile Image */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Animated Profile Image */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 animate-spin-slow opacity-75 blur-sm"></div>
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-lg transform transition-all duration-500 hover:scale-110">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-300 to-purple-400 flex items-center justify-center text-white text-4xl md:text-5xl font-bold">
                    E
                  </div>
                </div>
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 animate-pulse ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}></div>
              </div>

              {/* Name and Title */}
              <div className="flex-1 text-center md:text-left text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 transform transition-all duration-500 hover:scale-105">
                  Esther
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 font-light">
                  Engineering Student
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    📧 john.doe@email.com
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    📱 +1 (555) 123-4567
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    📍 New York, NY
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* About Section */}
            <section className={`transform transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded"></span>
                About
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Electronics and Communication Engineering student with a strong foundation in programming and database management. 
                Proficient in Java and SQL, with a passion for developing efficient software solutions. 
                Eager to apply technical skills and continue learning in a professional environment.
              </p>
            </section>

            {/* Skills Section */}
            <section className={`transform transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded"></span>
                Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Java Skill */}
                <div className="group p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                      ☕
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Java</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                      <span>Proficiency</span>
                      <span className="font-semibold">Expert</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full transition-all duration-1000 ease-out" style={{ width: isLoaded ? '90%' : '0%' }}></div>
                    </div>
                    <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Spring Framework</li>
                      <li>• Hibernate/JPA</li>
                      <li>• RESTful APIs</li>
                      <li>• Multithreading</li>
                    </ul>
                  </div>
                </div>

                {/* SQL Skill */}
                <div className="group p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                      🗄️
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">SQL</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                      <span>Proficiency</span>
                      <span className="font-semibold">Advanced</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full transition-all duration-1000 ease-out delay-200" style={{ width: isLoaded ? '85%' : '0%' }}></div>
                    </div>
                    <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Database Design</li>
                      <li>• Query Optimization</li>
                      <li>• Stored Procedures</li>
                      <li>• Data Modeling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className={`transform transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded"></span>
                Education
              </h2>
              <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl border-l-4 border-purple-600">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">Bachelor of Engineering - Electronics and Communication Engineering (ECE)</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">St. Mother Theresa Engineering College</p>
                <div className="mt-3 flex items-center gap-4">
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-700 dark:text-purple-300 font-semibold">
                    CGPA: 7.0
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

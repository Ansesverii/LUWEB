import React from 'react';
import { Link } from 'react-router-dom';
import { authors } from '@/data';

const Faculty = () => {
  // Get faculty member from authors data
  const facultyMember = authors.find(author => author.isFaculty);

  if (!facultyMember) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-600">No faculty information available.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="font-serif text-4xl font-bold mb-2">Faculty</h1>
        <p className="text-gray-600">
          Our distinguished faculty member contributes valuable insights and expertise to LU Chronicles.
        </p>
      </header>

      <div className="flex flex-col items-center">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow-xl border border-gray-200 rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
            <div className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <img 
                    src={facultyMember.image} 
                    alt={facultyMember.name} 
                    className="w-48 h-48 rounded-full object-cover ring-4 ring-gray-100 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-luChronicles-black text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Faculty Head
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900">
                  <Link to={`/author/${facultyMember.username}`} className="hover:text-luChronicles-black transition-colors">
                    {facultyMember.name}
                  </Link>
                </h3>
                <p className="text-lg text-gray-700 mt-2 font-medium">{facultyMember.designation}</p>
                <p className="text-sm text-gray-600 mt-1">{facultyMember.department}</p>
                <div className="mt-6 text-gray-700 leading-relaxed">
                  {facultyMember.bio}
                </div>
                <div className="mt-6">
                  {facultyMember.categories && (
                    <div className="flex flex-wrap gap-2 justify-center">
                      {facultyMember.categories.map(category => (
                        <span 
                          key={category} 
                          className="inline-block px-3 py-1 bg-gray-100 text-sm rounded-full shadow-sm hover:shadow-md transition-shadow"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <Link 
                  to={`/author/${facultyMember.username}`}
                  className="inline-flex items-center mt-6 text-sm font-medium text-luChronicles-black hover:text-luChronicles-black/80 transition-colors"
                >
                  View Profile
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-xl border border-gray-200 rounded-xl p-8 mt-12">
        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Faculty Contributions</h3>
        <p className="text-gray-700 leading-relaxed">
          Our faculty member contributes to LU Chronicles through opinion pieces, research highlights, and expert commentary.
          If you're a faculty member interested in contributing, please contact our editorial team.
        </p>
        <div className="mt-6">
          <Link 
            to="/contact"
            className="inline-flex items-center text-sm font-medium text-luChronicles-black hover:text-luChronicles-black/80 transition-colors"
          >
            Contact Editorial Team
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faculty;

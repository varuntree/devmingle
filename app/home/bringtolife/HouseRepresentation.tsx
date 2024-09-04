import React from 'react';
import { UseFormWatch } from 'react-hook-form';
import { ideaFormData } from './page';

interface HouseRepresentationProps {
  watch: UseFormWatch<ideaFormData>;
}

const HouseRepresentation: React.FC<HouseRepresentationProps> = ({ watch }) => {
  const ideaTitle = watch('ideaTitle');
  const ideaDescription = watch('ideaDescription');
  const ideaCategory = watch('ideaCategory');
  const possibleTechStack = watch('possibleTechStack');
  const links = watch('links');
  const visibility = watch('visibility');

  const titleLength = ideaTitle?.length || 0;
  const descriptionLength = ideaDescription?.length || 0;
  const categoryLength = ideaCategory?.length || 0;

  return (
    <div className="relative w-80 h-80 mx-auto rounded-lg overflow-hidden border border-gray-300">
      {/* Glassy Background */}
      <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-md rounded-lg"></div>
      
      {/* Sky */}
      <div className={`absolute inset-0 ${visibility === 'public' ? 'bg-blue-200' : 'bg-indigo-900'} transition-colors duration-1000`}></div>
      
      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-green-400 rounded-b-full">
        {/* Flowers */}
        {Array.from({ length: Math.min(titleLength, 10) }).map((_, index) => (
          <div key={index} className={`absolute bottom-4 left-${index * 10} w-4 h-4 ${index % 2 === 0 ? 'bg-pink-400' : 'bg-purple-400'} rounded-full`}>
            <div className="absolute bottom-4 left-1/2 w-1 h-6 bg-green-600"></div>
          </div>
        ))}
      </div>
      
      {/* House Base */}
      {titleLength > 0 && (
        <div className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-48 ${titleLength > 10 ? 'bg-yellow-300' : 'bg-yellow-200'} rounded-lg shadow-lg transition-all duration-500 ease-in-out`}>
          {/* Door */}
          {descriptionLength > 0 && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-24 bg-orange-600 rounded-t-lg">
              {descriptionLength > 5 && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-8 bg-yellow-600 rounded-full"></div>
              )}
            </div>
          )}
          {/* Door Knob */}
          {descriptionLength > 0 && (
            <div className="absolute bottom-12 right-28 w-2 h-2 bg-yellow-600 rounded-full"></div>
          )}
          {/* House Number */}
          {titleLength > 15 && (
            <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded">
              <span className="text-xs font-bold">{titleLength}</span>
            </div>
          )}
        </div>
      )}
      
      {/* Roof */}
      {descriptionLength > 0 && (
        <div className="absolute bottom-68 left-1/2 transform -translate-x-1/2 w-72 h-32 overflow-hidden transition-all duration-500 ease-in-out">
          <div className={`absolute bottom-0 left-0 right-0 h-0 border-l-[144px] border-r-[144px] border-b-[128px] border-l-transparent border-r-transparent ${descriptionLength > 50 ? 'border-b-red-700' : 'border-b-red-600'}`}></div>
          {/* Roof Windows */}
          {descriptionLength > 100 && (
            <>
              <div className="absolute top-8 left-1/4 w-8 h-8 bg-blue-300 rounded-full border-2 border-white"></div>
              <div className="absolute top-8 right-1/4 w-8 h-8 bg-blue-300 rounded-full border-2 border-white"></div>
            </>
          )}
        </div>
      )}
      
      {/* Windows */}
      {categoryLength > 0 && (
        <>
          <div className="absolute bottom-44 left-24 w-12 h-12 bg-blue-300 rounded-lg border-4 border-white transition-all duration-500 ease-in-out">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="border-r border-b border-white"></div>
              <div className="border-b border-white"></div>
              <div className="border-r border-white"></div>
              <div></div>
            </div>
          </div>
          <div className="absolute bottom-44 right-24 w-12 h-12 bg-blue-300 rounded-lg border-4 border-white transition-all duration-500 ease-in-out">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="border-r border-b border-white"></div>
              <div className="border-b border-white"></div>
              <div className="border-r border-white"></div>
              <div></div>
            </div>
          </div>
        </>
      )}
      
      {/* Chimney */}
      {links && links.length > 0 && (
        <div className="absolute bottom-80 right-20 w-8 h-16 bg-gray-600 rounded-t-lg transition-all duration-500 ease-in-out">
          {/* Smoke */}
          {Array.from({ length: Math.min(links.length, 5) }).map((_, index) => (
            <div key={index} className={`absolute -top-${8 + index * 4} left-1/2 transform -translate-x-1/2 animate-float animation-delay-${index * 300}`}>
              <div className={`w-${6 - index} h-${6 - index} bg-gray-200 rounded-full opacity-${75 - index * 10}`}></div>
            </div>
          ))}
        </div>
      )}
      
      {/* Sun/Moon */}
      {visibility && (
        <div className={`absolute top-4 right-4 w-16 h-16 ${visibility === 'public' ? 'bg-yellow-400 animate-pulse' : 'bg-gray-200'} rounded-full shadow-lg transition-all duration-1000`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-12 h-12 ${visibility === 'public' ? 'bg-yellow-300' : 'bg-gray-300'} rounded-full`}></div>
          </div>
        </div>
      )}
      
      {/* Trees */}
      {possibleTechStack && possibleTechStack.length > 0 && (
        <>
          {Array.from({ length: Math.min(possibleTechStack.length, 3) }).map((_, index) => (
            <div key={index} className={`absolute bottom-20 ${index === 0 ? 'left-4' : index === 1 ? 'left-20' : 'right-4'} transition-all duration-500 ease-in-out`}>
              <div className="w-8 h-24 bg-brown-600 rounded-lg"></div>
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-green-600 rounded-full"></div>
              <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-green-500 rounded-full"></div>
              <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-400 rounded-full"></div>
            </div>
          ))}
        </>
      )}
      
      {/* Welcome Sign */}
      {ideaTitle && (
        <div className="absolute bottom-24 right-8 transition-all duration-500 ease-in-out">
          <div className="w-1 h-16 bg-yellow-600"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-12 bg-yellow-400 rounded-lg shadow-md flex items-center justify-center">
            <p className="text-white font-bold text-sm text-center">
              {ideaTitle.length > 10 ? ideaTitle.substring(0, 10) + '...' : ideaTitle}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HouseRepresentation;
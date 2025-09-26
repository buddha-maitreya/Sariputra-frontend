import React from 'react';
import { getUnsplashAttribution } from '../utils/unsplashImages';

const AttributedImage = ({ 
  src, 
  alt, 
  className = "", 
  unsplashKey = null, 
  fukinaCredit = false,
  customCredit = null 
}) => {
  // Determine the image source and attribution
  let imageUrl = src;
  let attribution = null;

  if (unsplashKey) {
    const unsplashData = getUnsplashAttribution(unsplashKey);
    if (unsplashData) {
      imageUrl = unsplashData.url;
      attribution = {
        type: 'unsplash',
        text: unsplashData.attribution,
        photographerUrl: unsplashData.photographerUrl,
        unsplashUrl: unsplashData.unsplashUrl
      };
    }
  } else if (fukinaCredit) {
    attribution = {
      type: 'fukina',
      text: 'Image created by Fukina - AI Image Generation'
    };
  } else if (customCredit) {
    attribution = {
      type: 'custom',
      text: customCredit
    };
  }

  return (
    <div className="image-container">
      <img
        src={imageUrl}
        alt={alt}
        className={className}
      />
      {attribution && (
        <div className="text-center">
          {attribution.type === 'unsplash' ? (
            <p className="text-xs text-gray-500 py-2 italic">
              Photo by{' '}
              <a 
                href={attribution.photographerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                {attribution.text.split(' on Unsplash')[0].replace('Photo by ', '')}
              </a>
              {' '}on{' '}
              <a 
                href={attribution.unsplashUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Unsplash
              </a>
            </p>
          ) : (
            <p className="text-xs text-gray-500 py-2 italic">
              {attribution.text}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AttributedImage;
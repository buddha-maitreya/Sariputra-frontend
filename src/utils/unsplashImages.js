// Unsplash image configuration
// This file centralizes Unsplash images with proper attribution

export const unsplashImages = {
  // Meditation & Spirituality
  meditation: {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    photographer: 'Jared Rice',
    photographerUrl: 'https://unsplash.com/@jareddrice'
  },
  wisdom: {
    url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    photographer: 'Aaron Burden',
    photographerUrl: 'https://unsplash.com/@aaronburden'
  },
  nature: {
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    photographer: 'Casey Horner',
    photographerUrl: 'https://unsplash.com/@mischievous_penguins'
  },
  lotus: {
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2125&q=80',
    photographer: 'Filip Urban',
    photographerUrl: 'https://unsplash.com/@yngprophet'
  },
  zen_stones: {
    url: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    photographer: 'Jeremy Bishop',
    photographerUrl: 'https://unsplash.com/@jeremybishop'
  },
  forest_path: {
    url: 'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    photographer: 'Fabrice Villard',
    photographerUrl: 'https://unsplash.com/@fabulu75'
  },
  mountains: {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    photographer: 'Jared Rice',
    photographerUrl: 'https://unsplash.com/@jareddrice'
  },
  water_reflection: {
    url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    photographer: 'Ales Krivec',
    photographerUrl: 'https://unsplash.com/@aleskrivec'
  }
};

// Helper function to create proper attribution
export const getUnsplashAttribution = (imageKey) => {
  const image = unsplashImages[imageKey];
  if (!image) return null;
  
  return {
    url: image.url,
    attribution: `Photo by ${image.photographer} on Unsplash`,
    photographerUrl: image.photographerUrl,
    unsplashUrl: 'https://unsplash.com'
  };
};
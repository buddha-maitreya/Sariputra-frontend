import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './analytics';

// Custom hook to track page views automatically
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view whenever the route changes
    trackPageView(location.pathname + location.search);
  }, [location]);
};

// Custom hook to track time spent on page
export const useTimeTracking = (pageName) => {
  const startTime = Date.now();

  useEffect(() => {
    return () => {
      // Calculate time spent when component unmounts
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 5) { // Only track if user spent more than 5 seconds
        window.gtag && window.gtag('event', 'time_on_page', {
          event_category: 'engagement',
          event_label: pageName,
          value: timeSpent
        });
      }
    };
  }, [pageName, startTime]);
};

// Custom hook to track scroll depth
export const useScrollTracking = () => {
  useEffect(() => {
    let maxScroll = 0;
    const trackedPercentages = new Set();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;
      }

      // Track at 25%, 50%, 75%, and 90% scroll depths
      const milestones = [25, 50, 75, 90];
      milestones.forEach(milestone => {
        if (scrollPercentage >= milestone && !trackedPercentages.has(milestone)) {
          trackedPercentages.add(milestone);
          window.gtag && window.gtag('event', 'scroll_depth', {
            event_category: 'engagement',
            event_label: `${milestone}%`,
            value: milestone
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Track final scroll depth when component unmounts
      if (maxScroll > 0) {
        window.gtag && window.gtag('event', 'max_scroll_depth', {
          event_category: 'engagement',
          value: maxScroll
        });
      }
    };
  }, []);
};

export default {
  usePageTracking,
  useTimeTracking,
  useScrollTracking
};
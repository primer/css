import React from 'react'
export default function PageLayoutBehavior() {

  const pageLayoutSelector = '.PageLayout.PageLayout--responsive-separateRegions';
  const primaryRegionSelector = 'PageLayout--responsive-primary';

  const detectPageLayoutHash = () => {

    const pageLayout = document.querySelector(pageLayoutSelector);
    
    let dest;
    if (location.hash === '') {
      dest = pageLayout.getAttribute('data-primary-region');
    } else if (location.hash === '#pane') {
      dest = 'pane';
    } else if (location.hash === '#content') {
      dest = 'content';
    } else {
      return;
    }

    pageLayout.setAttribute('data-current-region', dest);

    if (dest === 'pane') {
      pageLayout.classList.replace(primaryRegionSelector + '-content', primaryRegionSelector + '-pane');
    } else {
      pageLayout.classList.replace(primaryRegionSelector + '-pane', primaryRegionSelector + '-content');
    }
  };

  window.addEventListener("hashchange", () => {
    detectPageLayoutHash();
  });
  
  document.addEventListener('DOMContentLoaded', (event) => {
    const pageLayout = document.querySelector(pageLayoutSelector);
    const primaryRegion = pageLayout.classList.contains(primaryRegionSelector + '-pane') ? 'pane' : 'content';

    if (pageLayout.getAttribute('data-primary-region') === null) {
      pageLayout.setAttribute('data-primary-region', primaryRegion);
    }

    detectPageLayoutHash();
  });
}

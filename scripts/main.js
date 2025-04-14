const labelElements = document.querySelectorAll('.faq__question');
const sectionElements = document.querySelectorAll('section');

const handleLabelKeydown = labelElement => {
  labelElement.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      labelElement.click();
    }
  });
};
labelElements.forEach(handleLabelKeydown);

const observerElements = sectionElements => {
  const options = { threshold: 0.3 };

  const callback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  sectionElements.forEach(sectionElement => {
    observer.observe(sectionElement);
  });
};

observerElements(sectionElements);

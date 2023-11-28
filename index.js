// document.addEventListener('DOMContentLoaded', function () {
//   // Get all elements with the 'fade-in' class
//   const fadeElements = document.querySelectorAll('.fade-in');

//   // Function to check if an element is in the viewport
//   function isInViewport(element) {
//       const rect = element.getBoundingClientRect();
//       return (
//           rect.top >= 0 &&
//           rect.left >= 0 &&
//           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//           rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//       );
//   }

//   // Function to handle the scroll event
//   function handleScroll() {
//       fadeElements.forEach(element => {
//           if (isInViewport(element)) {
//               element.classList.add('visible');
//           }
//       });
//   }

//   // Initial check on page load
//   handleScroll();

//   // Listen for scroll events
//   window.addEventListener('scroll', handleScroll);
// });

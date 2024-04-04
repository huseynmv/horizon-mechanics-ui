
document.addEventListener("DOMContentLoaded", function() {
    var closeBtn = document.querySelector(".menu_close__btn");
    var openBtn = document.querySelector(".mobile_menu");
    var menu = document.getElementById("side_menu");
  
    if (!closeBtn || !openBtn || !menu) {
      console.error("One or more required elements not found.");
      return;
    }
  
    var menuWidth = menu.offsetWidth;
    var isOpen = false; // Menu is initially closed
    var duration = 500; // Duration in milliseconds
    var frames = Math.ceil(duration / (1000 / 60)); // Calculate number of frames based on 60 frames per second
    var increment = menuWidth / frames;
  
    // Initially hide the menu off-screen
    menu.style.left = -menuWidth + "px";
  
    // Function to open the mobile menu
    function openMenu() {
        if (!isOpen) {
          var currentPosition = -menuWidth;
      
          function animate() {
            currentPosition += increment;
            if (currentPosition >= 0) {
              menu.style.left = "0px";
              isOpen = true;
              document.body.style.overflow = "hidden"; // Disable scrolling on the main page
            } else {
              menu.style.left = currentPosition + "px";
              requestAnimationFrame(animate);
            }
          }
      
          animate();
        }
      }
      
      function closeMenu() {
        if (isOpen) {
          var currentPosition = 0;
      
          function animate() {
            currentPosition -= increment;
            if (currentPosition <= -menuWidth) {
              menu.style.left = -menuWidth + "px";
              isOpen = false;
              document.body.style.overflow = ""; // Enable scrolling on the main page
            } else {
              menu.style.left = currentPosition + "px";
              requestAnimationFrame(animate);
            }
          }
      
          animate();
        }
      }
  
    // Add event listener to the open button
    openBtn.addEventListener("click", openMenu);
  
    // Add event listener to the close button
    closeBtn.addEventListener("click", closeMenu);
  
    // Add event listener to close menu when a link is clicked
    menu.addEventListener("click", function(event) {
        if (event.target.tagName === "A" || event.target.tagName === "P" || event.target.tagName === "IMG") {
          closeMenu();
        }
      });
  });
  


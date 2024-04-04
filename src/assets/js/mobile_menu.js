// document.addEventListener("DOMContentLoaded", function() {
//     var closeBtn = document.getElementsByClassName("menu_close__btn")[0];
//     var openBtn = document.getElementsByClassName("mobile_menu")[0];
//     var menu = document.getElementById("mobile_menu");
  
//     if (!closeBtn || !openBtn || !menu) {
//       console.error("One or more required elements not found.");
//       return;
//     }
  
//     // Function to open the mobile menu
//     function openMenu() {
//       menu.style.display = "block";
//     }
  
//     // Function to close the mobile menu
//     function closeMenu() {
//       menu.style.display = "none";
//     }
  
//     // Add event listener to the open button
//     openBtn.addEventListener("click", openMenu);
  
//     // Add event listener to the close button
//     closeBtn.addEventListener("click", closeMenu);
//   });
  

// document.addEventListener("DOMContentLoaded", function() {
//     var closeBtn = document.querySelector(".mobile_menu__close");
//     var openBtn = document.querySelector(".mobile_menu");
//     var menu = document.getElementById("mobile_menu");
  
//     if (!closeBtn || !openBtn || !menu) {
//       console.error("One or more required elements not found.");
//       return;
//     }
  
//     var menuWidth = menu.offsetWidth;
//     var isOpen = true;
  
//     // Function to open the mobile menu
//     function openMenu() {
//       if (!isOpen) {
//         var currentPosition = -menuWidth;
//         var interval = setInterval(function() {
//           currentPosition += 10;
//           if (currentPosition >= 0) {
//             clearInterval(interval);
//             isOpen = true;
//           }
//           menu.style.left = currentPosition + "px";
//         }, 10);
//       }
//     }
  
//     // Function to close the mobile menu
//     function closeMenu() {
//       if (isOpen) {
//         var currentPosition = 0;
//         var interval = setInterval(function() {
//           currentPosition -= 10;
//           if (currentPosition <= -menuWidth) {
//             clearInterval(interval);
//             isOpen = false;
//           }
//           menu.style.left = currentPosition + "px";
//         }, 10);
//       }
//     }
  
//     // Add event listener to the open button
//     openBtn.addEventListener("click", openMenu);
  
//     // Add event listener to the close button
//     closeBtn.addEventListener("click", closeMenu);
//   });

// document.addEventListener("DOMContentLoaded", function() {
//   var closeBtn = document.querySelector(".mobile_menu__close");
//   var openBtn = document.querySelector(".mobile_menu");
//   var menu = document.getElementById("mobile_menu");

//   if (!closeBtn || !openBtn || !menu) {
//     console.error("One or more required elements not found.");
//     return;
//   }

//   var menuWidth = menu.offsetWidth;
//   var isOpen = true;

//   // Function to open the mobile menu
//   function openMenu() {
//     if (!isOpen) {
//       var currentPosition = -menuWidth;

//       function animate() {
//         currentPosition += 10;
//         if (currentPosition >= 0) {
//           menu.style.left = "0px";
//           isOpen = true;
//         } else {
//           menu.style.left = currentPosition + "px";
//           requestAnimationFrame(animate);
//         }
//       }

//       animate();
//     }
//   }

//   // Function to close the mobile menu
//   function closeMenu() {
//     if (isOpen) {
//       var currentPosition = 0;

//       function animate() {
//         currentPosition -= 10;
//         if (currentPosition <= -menuWidth) {
//           menu.style.left = -menuWidth + "px";
//           isOpen = false;
//         } else {
//           menu.style.left = currentPosition + "px";
//           requestAnimationFrame(animate);
//         }
//       }

//       animate();
//     }
//   }

//   // Add event listener to the open button
//   openBtn.addEventListener("click", openMenu);

//   // Add event listener to the close button
//   closeBtn.addEventListener("click", closeMenu);
// });
// document.addEventListener("DOMContentLoaded", function() {
//     var closeBtn = document.querySelector(".mobile_menu__close");
//     var openBtn = document.querySelector(".mobile_menu");
//     var menu = document.getElementById("mobile_menu");
  
//     if (!closeBtn || !openBtn || !menu) {
//       console.error("One or more required elements not found.");
//       return;
//     }
  
//     var menuWidth = menu.offsetWidth;
//     var isOpen = true;
//     var duration = 400; // Duration in milliseconds
//     var frames = Math.ceil(duration / (1000 / 60)); // Calculate number of frames based on 60 frames per second
//     var increment = menuWidth / frames;
  
//     // Function to open the mobile menu
//     function openMenu() {
//       if (!isOpen) {
//         var currentPosition = -menuWidth;
  
//         function animate() {
//           currentPosition += increment;
//           if (currentPosition >= 0) {
//             menu.style.left = "0px";
//             isOpen = true;
//           } else {
//             menu.style.left = currentPosition + "px";
//             requestAnimationFrame(animate);
//           }
//         }
  
//         animate();
//       }
//     }
  
//     // Function to close the mobile menu
//     function closeMenu() {
//       if (isOpen) {
//         var currentPosition = 0;
  
//         function animate() {
//           currentPosition -= increment;
//           if (currentPosition <= -menuWidth) {
//             menu.style.left = -menuWidth + "px";
//             isOpen = false;
//           } else {
//             menu.style.left = currentPosition + "px";
//             requestAnimationFrame(animate);
//           }
//         }
  
//         animate();
//       }
//     }
  
//     // Add event listener to the open button
//     openBtn.addEventListener("click", openMenu);
  
//     // Add event listener to the close button
//     closeBtn.addEventListener("click", closeMenu);
//   });
  
// document.addEventListener("DOMContentLoaded", function() {
//     var closeBtn = document.querySelector(".menu_close__btn");
//     var openBtn = document.querySelector(".mobile_menu");
//     var menu = document.getElementById("mobile_menu");
  
//     if (!closeBtn || !openBtn || !menu) {
//       console.error("One or more required elements not found.");
//       return;
//     }
  
//     var menuWidth = menu.offsetWidth;
//     var isOpen = false; // Menu is initially closed
//     var duration = 500; // Duration in milliseconds
//     var frames = Math.ceil(duration / (1000 / 60)); // Calculate number of frames based on 60 frames per second
//     var increment = menuWidth / frames;
  
//     // Initially hide the menu off-screen
//     menu.style.left = -menuWidth + "px";
  
//     // Function to open the mobile menu
//     function openMenu() {
//       if (!isOpen) {
//         var currentPosition = -menuWidth;
  
//         function animate() {
//           currentPosition += increment;
//           if (currentPosition >= 0) {
//             menu.style.left = "0px";
//             isOpen = true;
//           } else {
//             menu.style.left = currentPosition + "px";
//             requestAnimationFrame(animate);
//           }
//         }
  
//         animate();
//       }
//     }
  
//     // Function to close the mobile menu
//     function closeMenu() {
//       if (isOpen) {
//         var currentPosition = 0;
  
//         function animate() {
//           currentPosition -= increment;
//           if (currentPosition <= -menuWidth) {
//             menu.style.left = -menuWidth + "px";
//             isOpen = false;
//           } else {
//             menu.style.left = currentPosition + "px";
//             requestAnimationFrame(animate);
//           }
//         }
  
//         animate();
//       }
//     }
  
//     // Add event listener to the open button
//     openBtn.addEventListener("click", openMenu);
  
//     // Add event listener to the close button
//     closeBtn.addEventListener("click", closeMenu);
//   });
document.addEventListener("DOMContentLoaded", function() {
    var closeBtn = document.querySelector(".menu_close__btn");
    var openBtn = document.querySelector(".mobile_menu");
    var menu = document.getElementById("mobile_menu");
  
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
          } else {
            menu.style.left = currentPosition + "px";
            requestAnimationFrame(animate);
          }
        }
  
        animate();
      }
    }
  
    // Function to close the mobile menu
    function closeMenu() {
      if (isOpen) {
        var currentPosition = 0;
  
        function animate() {
          currentPosition -= increment;
          if (currentPosition <= -menuWidth) {
            menu.style.left = -menuWidth + "px";
            isOpen = false;
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
        if (event.target.tagName === "A" || event.target.tagName === "P") {
          closeMenu();
        }
      });
  });
  

// document.addEventListener("DOMContentLoaded", function() {
//     var closeBtn = document.querySelector("menu_close__btn");
//     var openBtn = document.querySelector("mobile_menu");
//     var menu = document.getElementById("mobile_menu");
  
//     if (!closeBtn || !openBtn || !menu) {
//       console.error("One or more required elements not found.");
//       return;
//     }
  
//     // Initially hide the menu by setting its display property to "none"
//     menu.style.display = "none";
  
//     var menuWidth = menu.offsetWidth;
//     var isOpen = false; // Menu is initially closed
//     var duration = 400; // Duration in milliseconds
//     var frames = Math.ceil(duration / (1000 / 60)); // Calculate number of frames based on 60 frames per second
//     var increment = menuWidth / frames;
  
//     // Function to open the mobile menu
//     function openMenu() {
//       if (!isOpen) {
//         var currentPosition = -menuWidth;
  
//         function animate() {
//           currentPosition += increment;
//           if (currentPosition >= 0) {
//             menu.style.left = "0px";
//             isOpen = true;
//           } else {
//             menu.style.left = currentPosition + "px";
//             requestAnimationFrame(animate);
//           }
//         }
  
//         animate();
//       }
//     }
  
//     // Function to close the mobile menu
//     function closeMenu() {
//       if (isOpen) {
//         var currentPosition = 0;
  
//         function animate() {
//           currentPosition -= increment;
//           if (currentPosition <= -menuWidth) {
//             menu.style.left = -menuWidth + "px";
//             isOpen = false;
//           } else {
//             menu.style.left = currentPosition + "px";
//             requestAnimationFrame(animate);
//           }
//         }
  
//         animate();
//       }
//     }
  
//     // Add event listener to the open button
//     openBtn.addEventListener("click", openMenu);
  
//     // Add event listener to the close button
//     closeBtn.addEventListener("click", closeMenu);
  
//     // Add event listener to close menu when a link is clicked
//     menu.addEventListener("click", function(event) {
//       if (event.target.tagName === "A") {
//         closeMenu();
//       }
//     });
//   });
  

  
 $(document).ready(function () {
      $("#ios-slider").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        center: true,
        stagePadding: 50, /* Adjust this value to control padding on all sides */
        responsive: {
          0: { 
            items: 1, 
            stagePadding: 20 
          },
          768: { 
            items: 2,
            stagePadding: 40 
          },
          1024: { 
            items: 3,
            stagePadding: 50
          }
        }
      });
    });

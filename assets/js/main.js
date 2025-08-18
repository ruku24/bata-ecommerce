     function increaseQuantity() {
                            var quantityInput = document.getElementById('quantity');
                            var currentValue = parseInt(quantityInput.value);
                            quantityInput.value = currentValue + 1;
                        }
                        function decreaseQuantity() {
                            var quantityInput = document.getElementById('quantity');
                            var currentValue = parseInt(quantityInput.value);
                            if (currentValue > 1) {
                                quantityInput.value = currentValue - 1;
                            }   
                        }

                        


                        // owl carousel 
                              $(document).ready(function(){
          $(".owl-carousel").owlCarousel();
         });

        $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})
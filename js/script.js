

    $(document).ready(function() {

        $('.header__burger,.close').click(function(event) {
          $('.header__burger,.left__menu').toggleClass('active');
           $('body').toggleClass('lock');
        });
       
        $('a.scrollto').on('click', function(){
           $('.header__burger,.left__menu').removeClass('active');
           $('body').removeClass('lock');
         })
  
    var enabled = document.querySelector('.enabled');
    
         $('.plan2').click(function(event) {
            $('.plan2').addClass('enab');
            $('.plan__right').addClass('enbl');
            enabled.style.transform = 'translateX(65px)';
             $('.plan__left ').removeClass('enbl');
             $('.plan1').removeClass('enab');
          });
          $('.plan1').click(function(event) {
            $('.plan1').addClass('enab');
            $('.plan__left').addClass('enbl');
            enabled.style.transform = 'translateX(-65px)';
             $('.plan__right').removeClass('enbl');
             $('.plan2').removeClass('enab');
          });
         






    $('a.scrollto').click(function() {
        var elementClick = $(this).attr('href')
        var destination = $(elementClick).offset().top;
        jQuery('html:not(:animated),body:not(:animated)').animate({
           scrollTop: destination
        }, 800);
        return false;
      })
       
      const mediaQuery = window.matchMedia('(min-width: 1023px)')
      if (mediaQuery.matches) {
        VanillaTilt.init(document.querySelectorAll(".interface__li"), 
        {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 1,
        });
      }


    $(window).scroll(function(){

        let wScroll = $(this).scrollTop();

        // Activate menu
        if (wScroll > 20) {
            $('.header__top,.header__header').addClass('scroll');
        }
        else {
            $('.header__top,.header__header').removeClass('scroll');
        };



    
            $('.slider').slick({
                arrows:true,
                dots:true,
                slidesToShow:1,
                autoplay:true,
                speed:1000,
                autoplaySpeed:2000,
                // centerMode: true,
                responsive:[
                    {
                        breakpoint: 768,
                        settings: {
                       
                        }
                    },
                    {
                        breakpoint: 550,
                        settings: {
                            slidesToShow:1
                        }
                    }
                ]
            });

        

    });
    });
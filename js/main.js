const burger = document.querySelector('.burger'),
      nav = document.querySelector('.nav-list'),
      line1 = document.querySelector('.bar-1'),
      line2 = document.querySelector('.bar-2'),
      line3 = document.querySelector('.bar-3'),
      modalBtn = document.querySelector('.modalBtn'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('.modalClose'),
      landingRight = document.querySelector('.b--landing__inner-right'),
      landingTxt = document.querySelector('.landingTxt'),
      landingBtn = document.querySelector('.landingBtn'),
      findMore = document.querySelectorAll('.findMore'),
      overlayExt = document.querySelectorAll('.services-overlay_close');

      // Toggle menu on click
      burger.addEventListener('click', function(){
          nav.classList.toggle('active');
          // Transform burger to X on click
          line1.classList.toggle('active');
          line2.classList.toggle('active');
          line3.classList.toggle('active');
      })
      // Portfolio
      var box = document.querySelectorAll('.services .box');
      var overlay = document.querySelectorAll('.services-overlay');
      var portfolio = document.querySelectorAll('.portfolio');
      if(box){ 
          box.forEach(item => { // For each box with that class add click event listener 
            item.addEventListener('click', function(){
                var id = item.getAttribute('id'); // Take id from the clicked box
                var container = document.querySelector('#portfolio-' + id); // Find gallery with that id
                
                portfolio.forEach(item => {
                    item.classList.remove('active');
                    container.classList.add('active');
                    overlay.forEach(item => {
                        item.classList.add('active');
                    });
                });
                // Lightbox image fixed position
                var lightbox = document.querySelectorAll('.lightbox');
                lightbox.forEach(item => {
                    item.style.top = '0px';
                    item.style.position = 'fixed';
                });
            });
          });
      }
      // Close overlay
      if(overlayExt){ 
          overlayExt.forEach(item => {
            item.addEventListener('click', function(){
                portfolio.forEach(item => {
                    item.classList.remove('active');
                });
                overlay.forEach(item => {
                    item.classList.remove('active');
                });
                // Toggle find out more in opened gallery 
                findMore.forEach(function(){
                    portfolioToggle.forEach(function(friki){
                    friki.classList.remove('active');
                    });
                });
              });
          });
    }
      // JQuery loop through multiple classes
      $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            // Remove open navigation when scrolling
            $('.nav-list').removeClass('active');
            $('.bar-1').removeClass('active');
            $('.bar-2').removeClass('active');
            $('.bar-3').removeClass('active');
            // Shrink header on scroll
            $('.nav-list').addClass('shrink');
            $('.logoImg').addClass('active');
            $('.logo').addClass('active');
            $('.nav-links').addClass('shrink');
            $('.bar').addClass('shrink');
            $('.burger').addClass('active');
            $('.gotop').addClass('active');
        } else {
            $('.bar').removeClass('shrink');
            $('.burger').removeClass('active');
            $('.gotop').removeClass('active');
            $('.logoImg').removeClass('active'); 
            $('.logo').removeClass('active');
            $('.nav-links').removeClass('shrink');
            $('.nav-list').removeClass('shrink');
        }
    });
        // Go top button on click
        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
        // Modal popup
        var modalOverlay = document.querySelector('.services-overlay');
        modalBtn.addEventListener('click', function(){
            modal.classList.toggle('active');
        });
        modalClose.addEventListener('click', function(){
            modal.classList.remove('active');
            modalOverlay.classList.remove('active');

        });
        // Mesmerie element toggle on click
        var flipCard = document.querySelectorAll('.flipCard');
        var mesmerie = document.querySelector('.mesmerie-flip');
        var hoverLogo = document.querySelector('.hoverLogo');
        var mesmerieGallery = document.querySelector('.mesmerie-gallery');
        if(flipCard) {
            flipCard.forEach(function(item) {
                item.addEventListener('click', function(){
                    mesmerie.classList.toggle('active');
                    hoverLogo.classList.toggle('active');
                    mesmerieGallery.classList.toggle('active');
                });
            })
        }
        // Scroll appear elements
        function scrollAppear(){
            var alfa = document.querySelector('.alfa-heading');
            var introPosition = alfa.getBoundingClientRect().top;
            var screenPosition = window.innerHeight / 1.3;
            if(introPosition < screenPosition){
                alfa.classList.add('appear');
            }
            var mesmerie = document.querySelector('.mesmerie-heading_around');
            var introPosition2 = mesmerie.getBoundingClientRect().top;
            var screenPosition2 = window.innerHeight / 1.3;
            if(introPosition2 < screenPosition2){
                mesmerie.classList.add('appear');
            }
            // Wedding animation
            var wedding = document.querySelector('.block--wedding__right');
            var introPosition3 = wedding.getBoundingClientRect().top;
            var screenPosition3 = window.innerHeight / 1.3;
            if(introPosition3 < screenPosition3){
                wedding.classList.add('appear');
            }
        }
        window.addEventListener('scroll', scrollAppear);
      // Landing appear on window load JQuery loop through every element
      $(window).on('load', function () {
        $('.landingBtn, .landingTxt, .b--landing__inner-right, .b--landing__inner-right2').addClass('appear');
      });
      // Open more button on services section
      var more = document.querySelectorAll('.more');
      var desc = document.querySelectorAll('.portfolio-desc');
      var arrow = document.querySelectorAll('.arrow');
      if(more) {
        more.forEach(function(item) {
            item.addEventListener('click', function(){
                arrow.forEach(function(freak){
                   freak. classList.toggle('active');
                })
                desc.forEach(function(zex){
                    zex.classList.toggle('active');
                })
            });
        })
    }
    // Portfolio toggle
    var portfolioToggle = document.querySelectorAll('.portfolio-toggle');
    findMore.forEach(function(item){
        item.addEventListener('click', function(){
            portfolioToggle.forEach(function(friki){
                friki.classList.toggle('active');
            })
        });
    });
    // Alfaparf popup window
    function alfaPopup(){
        const highligh = document.querySelector('.alfa-popup_galleryHighlight');
        const preview = document.querySelectorAll('.alfa-popup_galleryPreview img');
        preview.forEach(image => {
            image.addEventListener('click', function(){
                const smallSrc = this.src;
                const bigSrc = smallSrc.replace('small', 'big');
                highligh.src = bigSrc;
                preview.forEach(image => image.classList.remove('alfa-active'));
                image.classList.add('alfa-active');
            });
        });
    }
    alfaPopup();
    // Alfaparf popup trigger
    const alfaTrigger = document.querySelector('.alfaBtn');
    const alfaWindow = document.querySelector('.alfa-popup');
    const alfaX = document.querySelector('.alfa-popup_x');
    var alfaOverlay = document.querySelector('.services-overlay');
    alfaTrigger.addEventListener('click', function(){
        alfaWindow.classList.add('active');
        alfaOverlay.classList.add('active');
    });
    alfaX.addEventListener('click', function(){
        alfaWindow.classList.remove('active');
        alfaOverlay.classList.remove('active');
    });
    // Cta overlay trigger
    const ctaBtn = document.querySelector('.modalBtn');
    var ctaOverlay = document.querySelector('.services-overlay');
    ctaBtn.addEventListener('click', function(){
        ctaOverlay.classList.add('active');
    });
    // Mesmerie popup
    const vacuslimPopup = document.querySelector('.vacuslim-popup');
    const vacuslimBtn = document.querySelector('.mesmerieBtn');
    const vacuslimExt = document.querySelector('.mesmerie-x');
    var vacuslimOverlay = document.querySelector('.services-overlay')
    vacuslimBtn.addEventListener('click', function(){
        vacuslimPopup.classList.add('active');
        vacuslimOverlay.classList.add('active');
    });
    vacuslimExt.addEventListener('click', function(){
        vacuslimPopup.classList.remove('active');
        vacuslimOverlay.classList.remove('active');
    });
    // Close all on navigation link click
    const closeAll = document.querySelectorAll('.close-all');
    var portfolioClose = document.querySelectorAll('.portfolio');
    var closeOverlay = document.querySelector('.services-overlay')
    closeAll.forEach(function(close){
        close.addEventListener('click', function(kidam){
            closeOverlay.classList.remove('active');
            vacuslimPopup.classList.remove('active');
            portfolioClose.forEach(function(portClose){
                portClose.classList.remove('active');
            });
            modal.classList.remove('active');
            alfaWindow.classList.remove('active');
        });
    });
    // Move portfolio to the top on description click
    var portItem = document.querySelectorAll('.portfolio');
    findMore.forEach(function(goTop){
        goTop.addEventListener('click', function(dalijeDobro){
            portItem.forEach(function(ajsad){
                ajsad.classList.toggle('goTop');
            });
        });
    });
    // Reset to default when exit description 
    var defaultItem = document.querySelectorAll('.portfolio');
    overlayExt.forEach(function(kirf){
        kirf.addEventListener('click', function(reset){
            defaultItem.forEach(function(zeksinho){
                zeksinho.classList.remove('goTop');
            });
        });
    });
    // Lazy load images
    const images = document.querySelectorAll('[data-src]');
    function preloadImage(img){
        const src = img.getAttribute('data-src');
        if(!src){
            return;
        }
        img.src = src;
    }
    const imgOptions = {};
    const imgObserver = new IntersectionObserver((entries, imgObserver)=>{
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        });
    }, imgOptions);
    images.forEach(image => {
        imgObserver.observe(image);
    });
    // When the user clicks anywhere outside of the any modal, close it
    vacuslimOverlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            vacuslimOverlay.classList.remove('active');
            modal.classList.remove('active');
        })
        const alfas = document.querySelectorAll('.alfa-popup.active');
        alfas.forEach(modal => {
            vacuslimOverlay.classList.remove('active');
            alfaWindow.classList.remove('active');
        })
        const mesmerie = document.querySelectorAll('.vacuslim-popup.active');
        mesmerie.forEach(modal => {
            vacuslimOverlay.classList.remove('active');
            vacuslimPopup.classList.remove('active');
        })
        const portfolios = document.querySelectorAll('.portfolio.active');
        portfolios.forEach(modal => {
            vacuslimOverlay.classList.remove('active');
            portfolio.forEach(function(brale){
                brale.classList.remove('active');
            })
            const moreBtns = document.querySelectorAll('.portfolio-toggle.active');
            const gotopBtns = document.querySelectorAll('.portfolio.goTop');
            moreBtns.forEach(function(saznaj){
                saznaj.classList.remove('active');
            })
            gotopBtns.forEach(function(sada){
                sada.classList.remove('goTop');
            })
        })
    });



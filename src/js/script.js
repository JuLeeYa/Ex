$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });

  $grid = $('.grid').isotope({
   itemSelector: '.grid-item',
   gutter: 10 
 });

  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });


  
  function renderList() {
    
    var API_KEY = '3246775-d5a5e1369fad91201ec99da11';
    $.ajax({
      url: "https://pixabay.com/api/?key=" + API_KEY + "&q=" + 'beautiful+travel'+ "&per_page=7",
      success: function(data) {
       
        if ( parseInt(data.totalHits) === 0)  {
          return false;
        } else 
        
        var gridImg = $('.grid-img');
        var gridTitles = $('.grid-text');

        for (var i = 0; i < gridImg.length; i++) {
          gridImg[i].setAttribute('src', data.hits[i].webformatURL);
          gridTitles[i].innerHTML = data.hits[i].tags;
        }

      }
    });
  };

  $('.search_submit').on('click', function(e) {
   
    e.preventDefault();
    
    var text = $('.search_input').val();
    var API_KEY = '3246775-d5a5e1369fad91201ec99da11';
    $.ajax({
      url: "https://pixabay.com/api/?key=" + API_KEY + "&q=" + text+ "&per_page=7",
      success: function(data) {
       
        if ( parseInt(data.totalHits) === 0)  {
          return false;
        } else 
        
        var gridImg = $('.grid-img');
        var gridTitles = $('.grid-text');
        for (var i = 0; i < gridImg.length; i++) {
          gridImg[i].setAttribute('src', data.hits[i].webformatURL);
          gridTitles[i].innerHTML = data.hits[i].tags;
        }
        

      }
    });
    

  })

  

  renderList();


  

});












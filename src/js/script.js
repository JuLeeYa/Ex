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
  // layoutMode: 'fitRows',
  // resize: false,
  gutter: 10 
});

$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});


 // $.ajax({
 //        type: 'GET',
 //        url:'http://api.pixplorer.co.uk/image?word=' + 'travel+sport' + ' &amount=7&size=l',

 //        dataType: 'json',
 //        success: function(data){
 //     var arrImageurl = _.map(data.images, 'imageurl');


 //    $('.grid-item').each(function(i){

 //       $(this).css('backgroundImage', 'url('+arrImageurl[i]+')');
 //       $(this).css('background-repeat', 'no-repeat');
 //       $(this).css('background-size', 'cover');

 //   });
 //        },
 //        error: function(){
 //            console.log('Request is bad');
 //        }
 //    });


 
        
     


  // $('#submit').click(function(){

  //   $('img').remove();
  //   $('.results').html('') ;
    

  //   var search = $('.form-control').val();
    
  //   var pixabayAPI = 'https://pixabay.com/api/?key=3246775-d5a5e1369fad91201ec99da11&orientation=horizontal&q='+ search;

  //   $.getJSON ( pixabayAPI, function(data)  {
  //     if ( parseInt ( data.totalHits ) > 0){
  //       $.each(data.hits, function( i, item) {
  //         if (i<18){
  //              $( "<img/>" ).attr( "src", item.webformatURL).appendTo( ".results" );
  //           } 
  //         });
  //     }
  //     else
  //       $('.results').html("Ничего не найдено");
   
  //   });

  // });
    
//     $('body').keypress(function (e) {
//     if (e.which == 13) {
//       $('#submit').click();
//     };
//     });

//  $('#submit').one('click', function(){
//   $('.search').css("marginTop", "-=90")
// });





// function getRandomImages() {
//  var search = 'vacation';
    
//     var pixabayAPI = 'https://pixabay.com/api/?key=3246775-d5a5e1369fad91201ec99da11&orientation=horizontal&q='+ search;

//     $.getJSON ( pixabayAPI, function(data)  {
//       if ( parseInt ( data.totalHits ) > 0){
//         $.each(data.hits, function( i, item) {
//           if (i<7){
//           	var gridImg = $('.grid-item img');
// 		            for (var i = 0; i < gridImg.length; i++) {
// 		            gridImg[i].setAttribute('src', data.hits[i].webformatURL);
// 		       			 }
//       		}
//       	})	
//       }
//           else
//         $('.grid').html("Ничего не найдено");
   
//       });
//   }
      
// crossDomainAjax('https://pixabay.com/api/?key=3246775-d5a5e1369fad91201ec99da11" + "&q=" + "beautiful+travel"+ "&per_page=7"', function (data) {
//     if ( parseInt(data.totalHits) === 0)  {
//                 return false;
//               } else 
               
//                var gridImg = $('.grid-img');

//                 for (var i = 0; i < gridImg.length; i++) {
//                 gridImg[i].setAttribute('src', data.hits[i].webformatURL);
//                  }
// });

// function crossDomainAjax (url, successCallback) {

//     // IE8 & 9 only Cross domain JSON GET request
//     if ('XDomainRequest' in window && window.XDomainRequest !== null) {

//         var xdr = new XDomainRequest(); // Use Microsoft XDR
//         xdr.open('get', url);
//         xdr.onload = function () {
//             var dom  = new ActiveXObject('Microsoft.XMLDOM'),
//                 JSON = $.parseJSON(xdr.responseText);

//             dom.async = false;

//             if (JSON == null || typeof (JSON) == 'undefined') {
//                 JSON = $.parseJSON(data.firstChild.textContent);
//             }

//             successCallback(JSON); // internal function
//         };

//         xdr.onerror = function() {
//             _result = false;  
//         };

//         xdr.send();
//     } 

//     // IE7 and lower can't do cross domain
//     else if (navigator.userAgent.indexOf('MSIE') != -1 &&
//              parseInt(navigator.userAgent.match(/MSIE ([\d.]+)/)[1], 10) < 8) {
//        return false;
//     }    
// };




 
      function renderList() {
      // var text = $('.search_input').val();
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
		       			 // $('.grid-text').text(text);

            }
        });
    

        })

   

    renderList();


  
  

 // function crossDomainAjax (url, successCallback) {
 //    if ('XDomainRequest' in window && window.XDomainRequest !== null) {
 //          var xdr = new XDomainRequest();
 //          xdr.open('get', url);
 //          xdr.onload = function () {
 //              var dom  = new ActiveXObject('Microsoft.XMLDOM'),
 //                  JSON = $.parseJSON(xdr.responseText);

 //              dom.async = false;

 //              if (JSON == null || typeof (JSON) == 'undefined') {
 //                  JSON = $.parseJSON(data.firstChild.textContent);
 //              }

 //              successCallback(JSON);
 //          };

 //          xdr.onerror = function() {
 //              _result = false;
 //          };

 //          xdr.send();
 //      } else {
 //          $.ajax({
 //              url: url,
 //              dataType: 'json',
 //              async: false,
 //              success: function (obj) {
 //                  successCallback(obj);
 //              }
 //          });
 //      }
 //  }


  // function getRandomImages() {
  //   var prot = (document.all && document.querySelector && !document.addEventListener) ? 'http' : 'https';
  //   crossDomainAjax( prot + '://pixabay.com/api/?key=3246775-d5a5e1369fad91201ec99da11&image_type=photo', function (obj) {
  //           var gridImgs = $('.grid-img');
  //           var gridTitles = $('.grid-text');
  //           for (var i = 0; i < gridImgs.length; i++) {
  //             gridImgs[i].setAttribute('src', obj.hits[i].webformatURL);
  //             gridTitles[i].innerHTML = obj.hits[i].tags;
  //           }
  //         });
  // }

  // function getImages() {
  //   var quer = $('.search_input').val();
  //   var prot = (document.all && document.querySelector && !document.addEventListener) ? 'http' : 'https';
  //   crossDomainAjax(prot + '://pixabay.com/api/?key=3246775-d5a5e1369fad91201ec99da11&q='+quer+'&image_type=photo', successCall);
  // }

  // getRandomImages();
  // $('.search_submit').on('click',getImages);





});












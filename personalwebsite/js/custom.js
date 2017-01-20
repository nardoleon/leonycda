$('#firstQuestion').click(function(){
    $('#firstAnswer').toggle(900)
    

});
$('.readmore').click(function(){
    $('.morecontent').toggle(900)
    

});

var currentImage;

$( ".portfolio" ).click(function(e) {

 //console.info (e);
 currentImage = e.target;
 console.info (currentImage);

 
  $(e.target)
 
  .css('position','fixed')
   .css('z-index','2')
    .css('cursor','default')
  
  .animate({
 
   width:"100%",
   height:"100%",
   margin:0,
   top:0,
   left:0,
   
    
  }, 900, function() {

   $(".close").show(900);

  
  })
  
  .clearQueue();
console.log ( currentImage.queue);
});

$('.close').click(function() {
$(".close").hide();
$(currentImage)

  .css('position','relative')
   .css('z-index','1')
     .css('cursor','pointer')
   .animate({
   width:"250px",
   height:"250px",
   margin:"10px"
   }, 900, function() {
			
   

  
  });
});
/*var stopPlayAt = 10, // Stop play at time in seconds
stopPlayTimer;   // Reference to settimeout call
*/

(function() {
  

  
  // This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement("script");
  tag.src = "//www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // This function creates an <iframe> (and YouTube player)
  // after the API code downloads.
  var player;
  
  // The API calls this function when the player's state changes.
  function onPlayerStateChange(event) {
	var time, rate, remainingTime;
	if (event.data == YT.PlayerState.PLAYING) {

	}
  }
  function onPlayerReady(event) {
		event.target.playVideo();
		
		  time = player.getCurrentTime();
		  
		  $('#player-controls li').bind('click',function() {
				if($(this).is(".pause")){
		        	pauseVideo();
		        	$('#player-controls').find('li').removeClass('pause');
		        	$('#player-controls').find('li').addClass('play');
		        	$('.opaque-button').find('img').attr('src', 'img/play.png');
		    	} else {
		    		playVideo();
		    		$('#player-controls').find('li').removeClass('play');
		        	$('#player-controls').find('li').addClass('pause');
		        	$('.opaque-button').find('img').attr('src', 'img/pause.png');
		    	}
			 });
		  
		  var startings = setInterval(function(){
			  if(player.getCurrentTime() >= 15){
				  player.seekTo(parseFloat(0));
				  player.playVideo();
			  }
		  },100);
		  
		  var options_interval = setInterval(function(){
			  if(player.getCurrentTime() >= 25){
				  $('.option1').css({opacity:0}).show().animate({opacity:1}, 5000);
				  $('#player-controls').hide();
				  clearInterval(options_interval);
			  }
			  /*else{
				  $('.option1').css({opacity:0}).hide()
			  }*/
		  },100);
		  
		  var stop1= setInterval(function(){
			  if(player.getCurrentTime() >= 40){
				  stopVideo();
			  }
		  }, 100);
		  
		  var option_bus = setInterval(function(){
			  if(player.getCurrentTime() >= 85){
				  $('.option2').css({opacity:0}).show().animate({opacity:1}, 5000);
				  $('#player-controls').hide();
				  clearInterval(option_bus);
			  }
		  }, 100);
		  
		  var stop_bus= setInterval(function(){
			  if(player.getCurrentTime() >= 100){
				  stopVideo();
			  }
		  }, 100);
		  
		  var option_taxi= setInterval(function(event){
			  if(player.getCurrentTime() >= 175){
				  $('.option2').css({opacity:0}).show().animate({opacity:1}, 5000);
				  $('#player-controls').hide();
				  clearInterval(option_taxi);
			  }
		  }, 100);
		  
		  var stop_taxi= setInterval(function(event){
			  if(player.getCurrentTime() >= 190){
				  stopVideo();
			  }
		  }, 100);
		  
		  var option_train= setInterval(function(){
			  if(player.getCurrentTime() >= 265){
				  $('.option2').css({opacity:0}).show().animate({opacity:1}, 5000);
				  $('#player-controls').hide();
				  clearInterval(option_train);
			  }
		  }, 100);
		  
		  var stop_train = setInterval(function(){
			  if(player.getCurrentTime() >= 280){
				  stopVideo();
			  }
		  }, 100);
		  
		  var stop_canal = setInterval(function(){
			  if(player.getCurrentTime() >= 350){
				  stopVideo();
			  }
		  }, 100);
		  
		  var stop_dazaifu = setInterval(function(){
			  if(player.getCurrentTime() >= 420){
				  stopVideo();
			  }
		  }, 100);
		  
		  var stop_tower= setInterval(function(){
			  if(player.getCurrentTime() >= 490){
				  stopVideo();
			  }
		  }, 100);
		  
		  $('.starts').bind('click', function(){
			  clearInterval(startings);
			  player.seekTo(parseFloat(17));
			  player.playVideo();
			  $('.option_main').hide();
			  $('#player-controls').show();
			 });
			 $('.bus').bind('click', function(){
			  clearInterval(stop1);
			  clearInterval(stop_taxi);
			  clearInterval(stop_train);
			  player.seekTo(parseFloat(60));
			  player.playVideo();
			  $('.option1').hide();
			  $('#player-controls').show();
			 });
			 $('.taxi').bind('click', function(){
			  clearInterval(stop1);
			  clearInterval(stop_bus);
			  clearInterval(stop_train);
			  player.seekTo(parseFloat(150));
			  player.playVideo();
			  $('.option1').hide();
			  $('#player-controls').show();
			 });
			 $('.train').bind('click', function(){
			  clearInterval(stop1);
			  clearInterval(stop_bus);
			  clearInterval(stop_taxi);
			  player.seekTo(parseFloat(240));
			  player.playVideo();
			  $('.option1').hide();
			  $('#player-controls').show();
			 });
			 
			 $('.canal').bind('click', function(){
			  clearInterval(stop_bus);
			  clearInterval(stop_taxi);
			  clearInterval(stop_train);
			  clearInterval(option_bus);
			  clearInterval(option_taxi);
			  clearInterval(option_train);
			  clearInterval(stop_dazaifu);
			  clearInterval(stop_tower);
			  player.seekTo(parseFloat(310));
			  player.playVideo();
			  $('.option2').hide();
			  $('#player-controls').show();
			 });
			 $('.dazaifu').bind('click', function(){
			  clearInterval(stop_bus);
			  clearInterval(stop_taxi);
			  clearInterval(stop_train);
			  clearInterval(option_bus);
			  clearInterval(option_taxi);
			  clearInterval(option_train);
			  clearInterval(stop_canal);
			  clearInterval(stop_tower);
			  player.seekTo(parseFloat(380));
			  player.playVideo();
			  $('.option2').hide();
			  $('#player-controls').show();
			 });
			 $('.tower').bind('click', function(){
			  clearInterval(stop_bus);
			  clearInterval(stop_taxi);
			  clearInterval(stop_train);
			  clearInterval(option_bus);
			  clearInterval(option_taxi);
			  clearInterval(option_train);
			  clearInterval(stop_canal);
			  clearInterval(stop_dazaifu);
			  player.seekTo(parseFloat(450));
			  player.playVideo();
			  $('.option2').hide();
			  $('#player-controls').show();
			 });
			
			$('.thumb-canals').mouseenter(function(){
				  $('.thumb-canal').css({opacity:0}).animate({opacity:0.8});
			});
			$('.thumb-canals').mouseleave(function(){
				  $('.thumb-canal').css({opacity:0.8}).animate({opacity:0});
			});
			$('.thumb-dazaifus').mouseenter(function(){
				  $('.thumb-dazaifu').css({opacity:0}).animate({opacity:0.8});
			});
			$('.thumb-dazaifus').mouseleave(function(){
				  $('.thumb-dazaifu').css({opacity:0.8}).animate({opacity:0});
			});
			$('.thumb-towers').mouseenter(function(){
				  $('.thumb-tower').css({opacity:0}).animate({opacity:0.8});
			});
			$('.thumb-towers').mouseleave(function(){
				  $('.thumb-tower').css({opacity:0.8}).animate({opacity:0});
			});
			
			  function playVideo() {
					player.playVideo();
				  }
				  function pauseVideo() {
					player.pauseVideo();
				  }
				  function stopVideo() {
					player.stopVideo();
				  }
  }
  
  window.onYouTubeIframeAPIReady = function() {
	player = new YT.Player("player", {
		height: '720',
		width: '100%',
		videoId: 'rQ85SalP5m4',
		playerVars: { 'autoplay': 1, 
		'controls': 0,
		'showinfo': 0,
		'loop':1,
		'enablejsapi' : 1,
		'playlist': 'rQ85SalP5m4'},
	  "events": {
		"onReady": onPlayerReady,
		"onStateChange": onPlayerStateChange
		
	  }
	});
  };
})();

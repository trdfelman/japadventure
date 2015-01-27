
(function() {
  var stopPlayAt = 10, // Stop play at time in seconds
	  stopPlayTimer;   // Reference to settimeout call

  
  // This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement("script");
  tag.src = "//www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // This function creates an <iframe> (and YouTube player)
  // after the API code downloads.
  var player;
  window.onYouTubeIframeAPIReady = function() {
	player = new YT.Player("player", {
		height: '720',
		width: '100%',
		videoId: 'rQ85SalP5m4',
		playerVars: { 'autoplay': 1, 
		'controls': 1,
		'showinfo': 0,
		'loop':1,
		'enablejsapi' : 1,
		'playlist': 'rQ85SalP5m4'},
	  "events": {
		"onReady": onPlayerReady,
		"onStateChange": onPlayerStateChange
	  }
	});
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
	
	$('.starts').bind('click', function(){
		clearInterval(startings);
		player.seekTo(parseFloat(17));
		player.playVideo();
		$('.option_main').hide();
		$('#player-controls').show();
	});
	$('.bus').bind('click', function(){
		clearInterval(stop1);
		player.seekTo(parseFloat(60));
		player.playVideo();
		$('.option1').hide();
		$('#player-controls').show();
	});
	$('.taxi').bind('click', function(){
		clearInterval(stop1);
		player.seekTo(parseFloat(150));
		player.playVideo();
		$('.option1').hide();
		$('#player-controls').show();
	});
	$('.train').bind('click', function(){
		clearInterval(stop1);
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
		player.seekTo(parseFloat(450));
		player.playVideo();
		$('.option2').hide();
		$('#player-controls').show();
	});
  }
  
  
  
  function updateHTML(elmId, value) {
	    try{
	    	document.getElementById(elmId).innerHTML = value;
	    } catch(e){}
	}
	function updatePlayerInfo() {
	    // Also check that at least one function exists since when IE unloads the
	    // page, it will destroy the SWF before clearing the interval.
	    if (ytplayer && ytplayer.getDuration) {
	        updateHTML("videoDuration", ytplayer.getDuration());
	        updateHTML("videoCurrentTime", ytplayer.getCurrentTime());
	        updateHTML("bytesTotal", ytplayer.getVideoBytesTotal());
	        updateHTML("startBytes", ytplayer.getVideoStartBytes());
	        updateHTML("bytesLoaded", ytplayer.getVideoBytesLoaded());

	        var sliderWidth = $('#seek_video_slider').width();
	        var videoDuration = ytplayer.getDuration();
	        var videoCurrent = ytplayer.getCurrentTime();
	        var videoSec = videoDuration / sliderWidth;

	        var updatedVideoLen = videoCurrent * videoSec * 100;
	        $('#knob').css('margin-left', '' + updatedVideoLen + '%');
	    }
	}
  // The API will call this function when the video player is ready.
  // This automatically starts the video playback when the player is loaded.
  function onPlayerReady(event) {
	event.target.playVideo();
  }

  // The API calls this function when the player's state changes.
  function onPlayerStateChange(event) {
	var time, rate, remainingTime;
	clearTimeout(stopPlayTimer);
	if (event.data == YT.PlayerState.PLAYING) {
	  time = player.getCurrentTime();
	  // Add .4 of a second to the time in case it's close to the current time
	  // (The API kept returning ~9.7 when hitting play after stopping at 10s)
	  if (time + .4 < stopPlayAt) {
		rate = player.getPlaybackRate();
		remainingTime = (stopPlayAt - time) / rate;
		//stopPlayTimer = setTimeout(stopVideo, remainingTime * 1500);
	  }
	}
  }
  
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
  
  var option_taxi= setInterval(function(){
	  if(player.getCurrentTime() >= 175){
		  $('.option2').css({opacity:0}).show().animate({opacity:1}, 5000);
		  $('#player-controls').hide();
		  clearInterval(option_taxi);
	  }
  }, 100);
  
  var stop_taxi= setInterval(function(){
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

  function options(){
	  //alert('test');
  }
  function playVideo() {
	player.playVideo();
  }
  function pauseVideo() {
	player.pauseVideo();
  }
  function stopVideo() {
	player.stopVideo();
  }
})();

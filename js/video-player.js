
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
	
	$('.bus').bind('click', function(){
		player.seekTo(parseFloat(60));
		player.playVideo();
		$('.option1').hide();
		$('#player-controls').show();
	});
	$('.taxi').bind('click', function(){
		player.seekTo(parseFloat(120));
		player.playVideo();
		$('.option1').hide();
		$('#player-controls').show();
	});
	$('.train').bind('click', function(){
		player.seekTo(parseFloat(180));
		player.playVideo();
		$('.option1').hide();
		$('#player-controls').show();
	});
	
	$('.canal').bind('click', function(){
		player.seekTo(parseFloat(860));
		player.playVideo();
		$('.option1').hide();
		$('#player-controls').show();
	});
	$('.dazaifu').bind('click', function(){
		player.seekTo(parseFloat(1520));
		player.playVideo();
		$('.option1').hide();
		$('#player-controls').show();
	});
	$('.tower').bind('click', function(){
		player.seekTo(parseFloat(2480));
		player.playVideo();
		$('.option1').hide();
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
		stopPlayTimer = setTimeout(stopVideo, remainingTime * 1500);
	  }
	}
  }
  
  
  var options_interval = setInterval(function(){
	  if(player.getCurrentTime() >= 8){
		  $('.option1').css({opacity:0}).show().animate({opacity:1}, 5000);
		  $('#player-controls').hide();
		  clearInterval(options_interval);
	  }
	  /*else{
		  $('.option1').css({opacity:0}).hide()
	  }*/
  },100);
  
  var option_place1 = setInterval(function(){
	  if(player.getCurrentTime() >= 75){
		  $('.option2').css({opacity:0}).show().animate({opacity:1}, 5000);
		  $('#player-controls').hide();
		  clearInterval(option_place1);
	  }
  }, 100);
  
  var stop1= setInterval(function(){
	  if(player.getCurrentTime() >= 85){
		  stopVideo();
	  }
  }, 100);
  
  var option_place2 = setInterval(function(){
	  if(player.getCurrentTime() >= 135){
		  $('.option2').css({opacity:0}).show().animate({opacity:1}, 5000);
		  $('#player-controls').hide();
		  clearInterval(option_place1);
	  }
  }, 100);
  
  var stop2= setInterval(function(){
	  if(player.getCurrentTime() >= 145){
		  stopVideo();
	  }
  }, 100);
  
  var option_place3 = setInterval(function(){
	  if(player.getCurrentTime() >= 195){
		  $('.option2').css({opacity:0}).show().animate({opacity:1}, 5000);
		  $('#player-controls').hide();
		  clearInterval(option_place1);
	  }
  }, 100);
  
  var stop1= setInterval(function(){
	  if(player.getCurrentTime() >= 205){
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

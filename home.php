<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="css/video-player.css">
<link rel="stylesheet" href="css/main-min.css">
<link rel="stylesheet" href="css/style.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="js/video-player.js"></script>
<script type="text/javascript" src="js/jquery.form.js"></script>



<style type="text/css">
#player{
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	z-index: -1;
}
.overlay{
	z-index: 1;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0.5;
}
.menus{
	z-index: 2;
	position: absolute;
}
p{
	color: white;
	font-size: 20px;
}
.seek{
	background: red;
	opacity: 1;
	font-size: 50px;
}
</style>
</head>
<body>
	<!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
	<div id="player" allowfullscreen="1"></div>
	<div class="title-box">
			<p class="header">日本アドベンチャー</p>
			<p class="header-description">We will take you to the place you've never been. </p>
	</div>
	<div  class="share-box">
			<iframe src="//www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;layout=button_count" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowTransparency="true"></iframe>
		</div>
	<form id="location" action="process.php" method="post">
		<div class="holder">
			<input type="text" name="place" id="place" placeholder="Where do you to go next?"/>
			
		</div>
		<input type="submit" name='submit' style="position: absolute; left: -9999px; width: 1px; height: 1px;"/>
	</form>
	<script type="text/javascript">
		$("#location").submit(function(event) {
			event.preventDefault();
			var $form = $( this ),
			url = $form.attr( 'action' );
			var posting = $.post( url, { place: $('#place').val() });
			posting.done(function( data ) {
				if($('#place').val().trim() == '' && $('#place').val().trim() !== null && $('#place').val().trim() !== undefined){
					alert('Error 404: Place Not found');
				}
				else{
					alert('You want to go to '+ $('#place').val() + "?");
				}
			});
		});
	</script>
	
	<div class="menus">
		<div class="button">
			
		</div>
	</div>
	
	<div class="option1">
		<div class="opt-main">
			<div class="choice"><a class="options bus" href="#"><img class="icons" alt="bus" src="img/bus.png"></a><p>BUS</p></div>
			<div class="choice"><a class="options taxi" href="#"><img class="icons" alt="bus" src="img/taxi.png"></a><p>TAXI</p></div>
			<div class="choice"><a class="options train" href="#"><img class="icons" alt="bus" src="img/train.png"></a><p>TRAIN</p></div>
		</div>
	</div>
	<div class="option2">
		<div class="opt-main2">
			<div class="choice"><a class="options canal" href="#"><img class="icons" alt="bus" src="img/canal.jpg"></a><p>CANAL CITY</p></div>
			<div class="choice"><a class="options dazaifu" href="#"><img class="icons" alt="bus" src="img/dazaifu.jpg"></a><p>DAZAIFU</p></div>
			<div class="choice"><a class="options tower" href="#"><img class="icons" alt="bus" src="img/tower.jpg"></a><p>FOKUOKA TOWER</p></div>
		</div>
	</div>
	<div id="player-controls" class="ytp-controls" style="display: none;">
			
			<ul class="list-item">
				<li class="pause"><a class="opaque-button" href="#"><img alt="adventure" src="img/pause.png" style="background: white; border-radius: 100%;"></a></li>
			</ul>
	</div>
	<div class="option_main" style="display: block;">
		<a class="options starts" href="#"><img class="icons" alt="start" src="img/start-button.png" style="width: 12%;"></a>
	</div>
  </body>
</html>
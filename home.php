<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/video-player.css">
<link rel="stylesheet" href="css/main-min.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="js/video-player.js"></script>



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
			<p class="header-description">some description here</p>
	</div>
	<div  class="share-box">
			<iframe src="//www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;layout=button_count" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowTransparency="true"></iframe>
		</div>
	<div class="holder">
		<input type="text" name="place" placeholder="Where do you to go next?"/>
		</div>
	<div class="menus">
		<div class="button">
			
		</div>
	</div>
	<div id="player-controls" class="ytp-controls">
			
			<ul class="list-item">
				<li class="pause"><a class="opaque-button" href="#">pause</a></li>
			</ul>
		</div>
  </body>
</html>
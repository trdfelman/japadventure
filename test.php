<?php
?>

<!DOCTYPE html>
<html>
<head>
<title></title>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.3/angular.min.js"></script>
<script src="html2canvas.js"></script>
</head>
<script type="text/javascript">
</script>

<body>
<div id="map">
<?php
header("Content-type: image/png");
$im = imagegrabscreen();    
imagepng($im);
imagedestroy($im); 
exit(0);
?>

<p>hello world</p>
</div>
</body>
</html>
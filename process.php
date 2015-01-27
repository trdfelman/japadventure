<?php
$con = mysql_connect('localhost','root','') or die(mysql_error());

$db_select = mysql_select_db('japanadventure',$con) or die(mysql_error());


$place = trim($_POST['place']);

if (empty($place)) {
	die();
}
else
	$sqlCmd = "INSERT INTO tblfeaturelocation (description) VALUES ('$place')";

	$add_place = mysql_query($sqlCmd);
	

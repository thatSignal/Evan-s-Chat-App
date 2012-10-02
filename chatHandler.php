<?php

	require('/lib/Pusher.php');

	var $key = 'a8f441c5ed552e302e89';
	var $secret = '6d2ce5befeadf804365e';
	var $app_id = '28696';

	$pusher = new Pusher($key, $secret, $app_id);


///DAVE's 
	$data = array(
	'messageToSend' => $_REQUEST['messageToSend'],
	'user' => $_REQUEST['user']
	);





	$pusher->trigger('my-channel', 'new-message', $data);




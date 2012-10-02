
var pusher = new Pusher('a8f441c5ed552e302e89');
var channel = pusher.subscribe('my-channel');
//var presenceChannel = pusher.subscribe('presence-origin');

var user = 'anon';


// messageFeed
var messageFeed = $('.messageFeed');

// alias
var aliasEntryField = $('#aliasEntryField');

// messages
var messageEntryField = $('#messageEntryField');
var transmitButton = $('#transmissionBtn');

var messageToSend;


//DAVE's
channel.bind('new-message', function(data) {
	console.log("DATA: " + data);
	var userEl = '<span>' + data.user + '</span>: ';
	var msgEl = '<span>' + data.messageToSend + '</span>';
	var el = '<div>' + userEl + msgEl + '</div>';
	$('#msgs').append(el);
});



//testing functionality 
window.onload = function(){
	
	messageFeed.html('patience...');
};

// window.on('click', function(){
// 	// if ($(document.activeElement) === messageEntryField && messageEntryField.val != "")
// 	// {
// 	// 	if ()
// 	// 	{
			// ADD an ENTER button send function 
// 	// 	}
// 	// }
// 	console.log('clicked the window!');
// })


/// MESSAGE SUBMISSION
transmitButton.on('click', function(){
	console.log('the signal has been sent');
	messageToSend = messageEntryField.val();
	messageEntryField.val('');
	//$('#msgs').append('<div>' + messageToSend + '</div>');
	

	// channel.bind('new-message', function(messageToSend){

	// alert('an event was triggered with message:' + messageToSend);

	// });

	//DAVE's
	$.ajax({
		type: 'POST',
		data: {
			user: user,
			messageToSend: messageToSend
		},
		url: 'chatHandler.php',
		success: function() {

		}
	});


});

messageEntryField.focus(function(){
		messageEntryField.html('');
})





// channel.bind('new-message', function(data){

// 	alert('an event was triggered with message:' + data.message);

// });








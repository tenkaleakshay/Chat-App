var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');


});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message){
  console.log('newMessage', message);
  var list = jQuery('<li></li>');
  list.text(`${message.from}:${message.text}`);

  jQuery('#messages').append(list);
});

// socket.emit('createMessage', {
//   from:'Akshay',
//   text: 'Bullshit'
// }, function(data){
//   console.log('got it:', data);
// });


jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();
  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function(){

  })
})

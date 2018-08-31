// This script allows you to define avatar images which will appear on cards when task is assigned to given user.

//
// Define the URL of avatar image for each of the user's initials below:
//
var avatars = {
  'JD': 'https://www.w3schools.com/howto/img_avatar.png',
  'MK': 'https://www.w3schools.com/howto/img_avatar.png'
};

// The code below alters the Task element header, by loading the avatar image.
KT.Elements.Task.header.push({
  'name': '__avatar',
  'filter': function(el, t) {
    return !!t.get('assigned_user_id');
  },
  'html': function(el, t) {
    var ref;
    return "<img class=\"__avatar\" src=\"" + avatars[(ref = t.assignedUser()) != null ? ref.get('initials') : void 0] + "\"/>";
  }
});

// The code below styles the avatar image, by making it 25px high and by placing it on the bottom-right of cards.
// Feel free to modify it to suit your needs.
$('<style>').html('kt-task .__avatar { position:absolute; bottom:0; right:0; z-index:-1; height:25px; opacity:0.8; }').appendTo($('head'));

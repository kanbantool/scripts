$ ->
  css = "
  body.high-contrast {
    background: #000; }
  body.high-contrast .navbar.navbar-inverse .navbar-inner {
    background-color: #1b1b1b;
    background-image: linear-gradient(to bottom, #222222, #111111);
    background-repeat: repeat-x;
    border-color: #252525; }
    body.high-contrast .navbar.navbar-inverse .navbar-inner .brand a {
      color: #999999; }
    body.high-contrast .navbar.navbar-inverse .navbar-inner .nav > li > a {
      color: #999999; }
    body.high-contrast .navbar.navbar-inverse .navbar-inner .nav > li.active > a, body.high-contrast .navbar.navbar-inverse .navbar-inner .nav > li > a:hover {
      color: #FFFFFF; }
  body.high-contrast .top-right-pane a, body.high-contrast .top-right-pane #tools_menu > span {
    color: #999999;
    text-shadow: none !important; }
  body.high-contrast .top-right-pane a:hover, body.high-contrast .top-right-pane #tools_menu > span:hover {
    color: white; }
  body.high-contrast #kt-filters_menu input {
    background-color: black !important;
    color: white !important;
    border-color: #505050 !important; }
  body.high-contrast #kt-filters_menu .btn {
    background: #505050;
    border-color: #505050; }
  body.high-contrast kt-board th, body.high-contrast kt-board td {
    background: #000;
    color: silver;
    text-shadow: none; }
  body.high-contrast kt-board td .kt-tasklist--add-task {
    opacity: 0.3;
    border: none; }
    body.high-contrast kt-board td .kt-tasklist--add-task:hover {
      opacity: 0.8; }
  body.high-contrast .kt-label, body.high-contrast .kt-hint-label {
    color: silver !important;
    text-shadow: none !important;
    background: black !important; }
  "

  # Load the high-contrast.css
  $('<style>').html(css).appendTo('head')

  # Inject link to the tools menu
  menuLink = $('<a href="#">high contrast mode</a>').on 'click', ->
    $('body').toggleClass('high-contrast')
    $('.navbar').toggleClass('navbar-inverse')
    $.cookie('high-contrast', $('body').hasClass('high-contrast'), { expires: 365 });
    false
  $('#tools_menu >ul').append( $('<li>').append(menuLink) )

  # Check for remembered value inside the cookie
  menuLink.click() if $.cookie('high-contrast') == 'true'

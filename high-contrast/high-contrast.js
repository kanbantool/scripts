(function() {

  $(function() {
    var css, menuLink;
    css = "    body.high-contrast.boards#show {      background: #000;      transition: all 0.5s ease;      -webkit-transition: all 0.5s ease; }      body.high-contrast.boards#show #content #ajax_spinner {        display: none !important;        opacity: 0 !important; }      body.high-contrast.boards#show #content .navbar.navbar-inverse .navbar-inner {        background-color: #1b1b1b;        background-image: linear-gradient(to bottom, #222222, #111111);        background-repeat: repeat-x;        border-color: #252525;        transition: all 0.5s ease;        -webkit-transition: all 0.5s ease; }        body.high-contrast.boards#show #content .navbar.navbar-inverse .navbar-inner .brand a {          color: #999999; }        body.high-contrast.boards#show #content .navbar.navbar-inverse .navbar-inner .nav > li > a {          color: #999999; }        body.high-contrast.boards#show #content .navbar.navbar-inverse .navbar-inner .nav > li.active > a, body.high-contrast.boards#show #content .navbar.navbar-inverse .navbar-inner .nav > li > a:hover {          color: #FFFFFF; }      body.high-contrast.boards#show #content .top_right_pane a, body.high-contrast.boards#show #content .top_right_pane #tools_menu > span {        color: #999999; }      body.high-contrast.boards#show #content .top_right_pane a:hover, body.high-contrast.boards#show #content .top_right_pane #tools_menu > span:hover {        color: white; }      body.high-contrast.boards#show #content .navbar-search input {        background-color: black;        color: white;        border-color: #505050 !important; }      body.high-contrast.boards#show #content .navbar-search .btn {        background: #505050;        border-color: #505050; }      body.high-contrast.boards#show #content .board_header .top_right_pane form .btn-search-engine .icon-fa-filter:before {        color: #000; }      body.high-contrast.boards#show #content table#board th, body.high-contrast.boards#show #content table#board td {        background: #000;        color: silver;        text-shadow: none;        transition: all 0.5s ease;        -webkit-transition: all 0.5s ease; }      body.high-contrast.boards#show #content table#board td span.add_task a {        opacity: 0.3;        border: none;        transition: all 1s ease;        -webkit-transition: all 0.5s ease; }        body.high-contrast.boards#show #content table#board td span.add_task a:hover {          opacity: 0.8; }      body.high-contrast.boards#show #content table#board td ul.task_list li.placeholder {        opacity: 0.1; }      body.high-contrast.boards#show #exposeMask {        background-color: black !important; }      body.high-contrast.boards#show .ws_hint_label {        color: silver !important;        background: black !important;        text-shadow: none !important;        box-shadow: 0 0 10px black; }  ";
    $('<style>').html(css).appendTo('head');
    menuLink = $('<a href="#">high contrast mode</a>').on('click', function() {
      $('body').toggleClass('high-contrast');
      $('.navbar').toggleClass('navbar-inverse');
      $.cookie('high-contrast', $('body').hasClass('high-contrast'), {
        expires: 365
      });
      return false;
    });
    $('#tools_menu ul').append($('<li>').append(menuLink));
    if ($.cookie('high-contrast') === 'true') return menuLink.click();
  });

}).call(this);

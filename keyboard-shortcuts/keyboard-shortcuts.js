document.onkeyup = function(e) {
  if ($(e.target).is('input, textarea, select')) return;
  if(e.keyCode == 66) {
      // b = board switcher
      var id = "#kt-board-switcher";
      if ($(id).is(":visible")) {
        $(id).hide();
      } else {
        $(id).show();
     }; 
  };
  if(e.keyCode == 84) {
      // t = tools menu
      var id = "#tools_menu";
      // alert($(id).hasClass("on"));
      if ($(id).hasClass("on")) {
        $(id).removeClass("on");
      } else {
        $(id).addClass("on");
      };
  }
  if(e.keyCode == 72) {
    // h = home
  }
  if(e.keyCode == 83) {
    // s = settings
  }
}



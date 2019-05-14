document.onkeyup = function(e) {
  // press a to show/hide board switcher
  if(e.keyCode == 65) {
    if ($(e.target).is('input, textarea, select')) return;
      if ($("#kt-board-switcher").is(":visible")) {
        $("#kt-board-switcher").hide();
      } else {
        $("#kt-board-switcher").show();
    }; 
  }
}

document.onkeyup = function(e) {
  if ($(e.target).is('input, textarea, select, div')) return;
  if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
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
    var x = document.getElementsByClassName("_board_settings_link");
    var settings = x[0];
    var url = settings.href;
    url = url.replace(/\/b\/.*/,"");
    window.location.href = url;
  }
  if(e.keyCode == 83) {
    // s = settings
    var x = document.getElementsByClassName("_board_settings_link");
    var settings = x[0];
    window.location.href = settings;
  }
  if(e.keyCode >= 49 && e.keyCode <= 57) {
      // 49 to 47 to open first 9 boards in board switcher
      var link = getBoard(e.keyCode-49);
      if (link) window.location.href=link;
  };
  if(e.keyCode == 48) {
      alert("opening all boards");
      openBoards();
  };
}

function getBoard(i) {
  var id = "#kt-board-switcher a";
  var links = [];
  $(id).each(function() {
     links.push( this.href ); 
    });
  return links[i];
}

function openBoards() {
  var id = "#kt-board-switcher a";
  $(id).each(function() {
     window.open(this.href, '_blank');
  });
}




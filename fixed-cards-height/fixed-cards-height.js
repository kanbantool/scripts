(function() {

  setTimeout(function() {
    return window.board.tasklists.forEach(function(e) {
      return e._recalculateHeight();
    });
  }, 1000);

}).call(this);

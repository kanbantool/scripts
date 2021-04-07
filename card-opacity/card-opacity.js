(function() {
  var opacity = 0.75;
  var changeTaskOpacity;

  changeTaskOpacity = function(taskElement) {
    var backgroundColor = taskElement.kt.$el.css('background-color');
    taskElement.kt.$el.css({'background-color': backgroundColor.split(')')[0] + ', ' + opacity + ')'} ); 
  };

  $(window).on('kt-task:render', function(e) {
    return changeTaskOpacity(e.target);
  });

  KT.onInit(function() {
    return setTimeout(function() {
      return $('kt-task').each(function() {
        return changeTaskOpacity(this);
      });
    }, 750);
  });
}).call(this);
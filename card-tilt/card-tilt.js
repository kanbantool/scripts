(function() {
  var rotateTask;

  rotateTask = function(taskElement) {
    var rd;
    rd = ((taskElement.props.task.get('board_version') + taskElement.props.task.get('id')) % 7) - 3;
    taskElement.kt.$el.css({
      '-webkit-transform': 'rotate(' + rd + 'deg)',
      '-moz-transform': 'rotate(' + rd + 'deg)',
      '-ms-transform': 'rotate(' + rd + 'deg)',
      '-o-transform': 'rotate(' + rd + 'deg)',
      'transform': 'rotate(' + rd + 'deg)'
    });
    rd = -1 * rd;
    return taskElement.kt.$el.find('.kt-task-body').css({
      '-webkit-transform': 'rotate(' + rd + 'deg)',
      '-moz-transform': 'rotate(' + rd + 'deg)',
      '-ms-transform': 'rotate(' + rd + 'deg)',
      '-o-transform': 'rotate(' + rd + 'deg)',
      'transform': 'rotate(' + rd + 'deg)'
    });
  };

  $(window).on('kt-task:render', function(e) {
    return rotateTask(e.target);
  });

  KT.onInit(function() {
    return setTimeout(function() {
      return $('kt-task').each(function() {
        return rotateTask(this);
      });
    }, 750);
  });
}).call(this);

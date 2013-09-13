rotateTask = (task) ->
  # Rotate somewhere between -4deg and 4deg
  rd = ((task.model.attributes.board_version + task.model.attributes.id) % 7) - 3

  task.$el.css(
    '-webkit-transform': 'rotate('+rd+'deg)'
    '-moz-transform': 'rotate('+rd+'deg)'
    '-ms-transform': 'rotate('+rd+'deg)'
    '-o-transform': 'rotate('+rd+'deg)'
    'transform': 'rotate('+rd+'deg)'
  )

  rd = -1 * rd

  task.$el.find('.task_name').css(
    '-webkit-transform': 'rotate('+rd+'deg)'
    '-moz-transform': 'rotate('+rd+'deg)'
    '-ms-transform': 'rotate('+rd+'deg)'
    '-o-transform': 'rotate('+rd+'deg)'
    'transform': 'rotate('+rd+'deg)'
  )

window.board.on 'task:render', rotateTask

setTimeout ->
  window.board.tasks.each rotateTask
, 750

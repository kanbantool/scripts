rotateTask = (taskElement) ->
  # Rotate somewhere between -4deg and 4deg
  rd = ((taskElement.props.task.get('board_version') + taskElement.props.task.get('id')) % 7) - 3

  taskElement.kt.$el.css(
    '-webkit-transform': 'rotate('+rd+'deg)'
    '-moz-transform': 'rotate('+rd+'deg)'
    '-ms-transform': 'rotate('+rd+'deg)'
    '-o-transform': 'rotate('+rd+'deg)'
    'transform': 'rotate('+rd+'deg)'
  )

  rd = -1 * rd

  taskElement.kt.$el.find('.kt-task-body').css(
    '-webkit-transform': 'rotate('+rd+'deg)'
    '-moz-transform': 'rotate('+rd+'deg)'
    '-ms-transform': 'rotate('+rd+'deg)'
    '-o-transform': 'rotate('+rd+'deg)'
    'transform': 'rotate('+rd+'deg)'
  )

$(window).on 'kt-task:render', (e) -> rotateTask(e.target)

KT.onInit ->
  setTimeout ->
    $('kt-task').each -> rotateTask(@)
  , 750

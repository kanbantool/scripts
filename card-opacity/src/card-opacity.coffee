(->
  opacity = 0.75

  changeTaskOpacity = (taskElement) ->
    backgroundColor = taskElement.kt.$el.css('background-color')
    taskElement.kt.$el.css 'background-color': backgroundColor.split(')')[0] + ', ' + opacity + ')'
    return

  $(window).on 'kt-task:render', (e) ->
    changeTaskOpacity e.target
  KT.onInit ->
    setTimeout (->
      $('kt-task').each ->
        changeTaskOpacity this
    ), 750
  return
).call this
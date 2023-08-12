makebar = (kde) ->
  title = $(kde).find('.checklist-indicator').attr('title')
  if title != undefined
    n = title.indexOf('%')
    prc = title.substr(0, n)
    $(kde).find('.kt-task-footer').find('hr').remove()
    $(kde).find('.kt-task-footer').prepend '<hr style="width:' + prc + '%; height:5px; background:#fff;">'

$('kt-task').each ->
  makebar(this)

KT.onInit ->
  setTimeout ->
    $('kt-task').each -> makebar(@)
  , 750
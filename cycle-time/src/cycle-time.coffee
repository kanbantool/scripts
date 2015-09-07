css = ".cycle_time { font-size: 0.9em; }"
$('<style>').html(css).appendTo('head')

KT.Elements.Task.header.unshift({
  __: 'CTime'
  html: (task, cardTemplate) ->
    """<span class="cycle_time">#{moment(task.attributes.created_at).fromNow()}</span>"""
})

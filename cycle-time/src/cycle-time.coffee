css = ".cycle_time { font-size: 0.9em; }"
$('<style>').html(css).appendTo('head')

KT.Elements.Task.header.unshift({
  __: 'CTime'
  html: (el, task) ->
    """<span class="cycle_time">#{moment(task.attributes.created_at).fromNow()}</span>"""
})

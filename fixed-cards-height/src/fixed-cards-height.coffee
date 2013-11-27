setTimeout ->
  window.board.tasklists.forEach (e) ->
    e._recalculateHeight()
, 1000

css = " .contextMenu li.delete_all a { background-image: url(/images/icons/silk/note_delete.png);} "

if board.model.users.get(KanbanTool.Board.current_user_id).can('delete_tasks', board.model)
  $('<style>').html(css).appendTo('head')
  $('#cell_context_menu').prepend('<li class="delete_all"><a href="#extension:delete_all">Delete all</a></li>')

  $(window).bind 'extensionContextMenuAction', (event, action, el, pos) ->
    if action == 'extension:delete_all'
      cell = $(el)[0].id.split('_')
      tasks_collection = board.model.tasks.where({"workflow_stage_id": parseInt(cell[2]), "swimlane_id": parseInt(cell[4])})

      $(tasks_collection).each ->
        this.destroy({ async: false })
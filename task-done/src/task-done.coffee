board_id = window.board.model.id; last_ws = $(window.board.model.attributes.workflow_stages).last()[0].id;
css = " .contextMenu li.task_done a { background-image: url(/scripts/task-done/done.png);} "

if window.board.model.users.get(KanbanTool.Board.current_user_id).can('move_tasks', window.board.model)
  $('<style>').html(css).appendTo('head')
  $('#task_context_menu .move').after('<li class="task_done"><a href="#extension:task_done">Task done</a></li>')

  $(window).bind 'extensionContextMenuAction', (event, action, el, pos) ->
    if action == 'extension:task_done'
      task_id = $(el)[0].id.split('_')[1]
      $.ajax
        type: 'POST'
        url: '/boards/' + parseInt(board_id + 20) + '/tasks/' + task_id + '/change_board'
        dataType: 'script'
        async: false
        data:
          b_id: parseInt(board_id + 20)
          ws_id: last_ws
          sl_id: $(el).parent()[0].id.split('_')[2]
          copy: false
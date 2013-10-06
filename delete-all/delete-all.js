(function() {
  var css;

  css = " .contextMenu li.delete_all a { background-image: url(/images/icons/silk/note_delete.png);} ";

  if (window.board.model.users.get(KanbanTool.Board.current_user_id).can('delete_tasks', window.board.model)) {
    $('<style>').html(css).appendTo('head');
    $('#cell_context_menu').prepend('<li class="delete_all"><a href="#extension:delete_all">Delete all</a></li>');
    $(window).bind('extensionContextMenuAction', function(event, action, el, pos) {
      var cell, tasks_collection;
      if (action === 'extension:delete_all') {
        cell = $(el)[0].id.split('_');
        tasks_collection = window.board.model.tasks.where({
          "workflow_stage_id": parseInt(cell[2]),
          "swimlane_id": parseInt(cell[4])
        });
        return $(tasks_collection).each(function() {
          return this.destroy({
            async: false
          });
        });
      }
    });
  }

}).call(this);

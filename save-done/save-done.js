(function() {
  var board_id, checked, last_ws, task_id, _this = this;

  checked = false;
  task_id = 0;
  board_id = window.board.model.id;
  last_ws = $(window.board.model.attributes.workflow_stages).last()[0].id;

  $(document).bind('card_open', function() {
    $('#task_overlay_tab_view').find('.submit_pane .save_and_close').after('<span style="font-size: 1.2em"><input id="save_and_done" type="checkbox" value="0"> task done</span>');
    return task_id = $('#task_overlay_tab_view').find('form.edit_task')[0].id.split('_')[2];
  });

  $('body').on('click', '#task_overlay_tab_view .save, #task_overlay_tab_view .save_and_close', function() {
    checked = $('#save_and_done').is(':checked');
    if (checked) {
      return $.ajax({
        type: 'POST',
        url: '/boards/' + parseInt(board_id + 20) + '/tasks/' + task_id + '/change_board',
        dataType: 'script',
        async: false,
        data: {
          b_id: parseInt(board_id + 20),
          ws_id: last_ws,
          sl_id: $('#task_' + task_id).parent()[0].id.split('_')[2],
          copy: false
        }
      });
    }
  });

}).call(this);

(function() {
  var css, customize,
    _this = this;

  css = "  body#show.boards #content table td ul.task_list, body#index.workflow #content table td ul.task_list { min-height: 42px; }  body#show.boards #content table td.collapsed .svg_supported img, body#index.workflow #content table td.collapsed .svg_supported img { min-height: 70px; height: 70px; }";

  $('<style>').html(css).appendTo('head');

  customize = function(event, tasks) {
    var $row, height, swimlanes, task, _i, _len, _results;
    console.log(tasks);
    if ($('#board').find('tr .svg_supported img:visible').length > 0) {
      swimlanes = [];
      _results = [];
      for (_i = 0, _len = tasks.length; _i < _len; _i++) {
        task = tasks[_i];
        if ($.inArray(task.swimlane_id, swimlanes) === -1) {
          swimlanes.push(task.swimlane_id);
          $row = $('#workflow_stage_' + task.workflow_stage_id + '_swimlane_' + task.swimlane_id).parent();
          $row.find('.svg_supported img').css({
            height: 70
          });
          height = $row.height();
          if (height > 250) {
            height = 250;
          }
          _results.push($row.find('.svg_supported img').css({
            height: height
          }));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    }
  };

  $(window).bind('tasks:sync.' + window.board.model.id, customize);

}).call(this);

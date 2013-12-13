(function() {
  var css;

  css = "body#show.boards #content table td ul.task_list, body#index.workflow #content table td ul.task_list { min-height: 42px; }";

  $('<style>').html(css).appendTo('head');

  setTimeout(KanbanTool.Board.flowSwimlaneLabels, 500);

}).call(this);

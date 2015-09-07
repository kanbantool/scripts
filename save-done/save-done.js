KT.Elements.Taskview.footer.push({
  __: 'save-done',
  filter: function(task) {
    var ref;
    return task.id && ((ref = task.workflowStage()) != null ? ref.next() : void 0);
  },
  html: function() {
    return "<button class=\"btn btn-small\" onclick=\"var task = $(event.target).addClass('disabled').closest('kt-taskview')[0].kt.task; task.save({'workflow_stage_id':task.board().workflowStages().leafs().pop().id, 'position':null}).done(function(){KT.Elements.Taskview.close();}); return false;\">Move to done</button>";
  }
});

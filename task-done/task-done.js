window.KT.Elements.Task.contextMenu.push({
  name: 'Task done',
  permissions: 'update_tasks',
  action: (function(e) {
    var doneStageId, ids;
    ids = $('kt-task.kt-selected').map(function() {
      return this.props.taskId;
    });
    doneStageId = $(e.delegateTarget)[0].props.task.board().workflowStages().leafs().pop().id;
    return KT.tasks.groupUpdate(ids, {
      'workflow_stage_id': doneStageId,
      'position': null
    });
  })
});

window.KT.Elements.Task.contextMenu.push({
  name: 'Task done',
  permissions: 'update_tasks',
  action: (function(taskView, task, selection) {
    var doneStageId;
    doneStageId = task.board().workflowStages().leafs().pop().id;
    return selection.groupUpdate({
      'workflow_stage_id': doneStageId,
      'position': null
    });
  })
});

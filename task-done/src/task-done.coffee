window.KT.Elements.Task.contextMenu.push(
  {
    name: 'Task done',
    permissions: 'update_tasks'
    action: ( (taskView, task, selection) ->
      doneStageId = task.board().workflowStages().leafs().pop().id
      selection.groupUpdate('workflow_stage_id': doneStageId, 'position':null)
    )
  }
)

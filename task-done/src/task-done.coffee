window.KT.Elements.Task.contextMenu.push(
  {
    name: 'Task done',
    permissions: 'update_tasks'
    action: ( (e) ->
      ids = $('kt-task.kt-selected').map(-> @props.taskId)
      doneStageId = $(e.delegateTarget)[0].props.task.board().workflowStages().leafs().pop().id
      KT.tasks.groupUpdate(ids, {'workflow_stage_id': doneStageId, 'position':null})
    )
  }
)

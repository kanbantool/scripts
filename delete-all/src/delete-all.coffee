window.KT.Elements.Tasklist.contextMenu.push(
  {
    name: 'Delete all',
    permissions: 'delete_tasks'
    action: ( (e) ->
      ids = $(e.delegateTarget).find('kt-task').map(-> @props.taskId)
      KT.tasks.groupUpdate(ids, {'_action': 'delete' })
    )
  }
)

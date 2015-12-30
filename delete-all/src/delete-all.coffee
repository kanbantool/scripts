window.KT.Elements.Tasklist.contextMenu.push(
  {
    name: 'Delete all',
    permissions: 'delete_tasks'
    action: ( (taskView, task, selection) ->
      selection.groupUpdate('_action': 'delete')
    )
  }
)

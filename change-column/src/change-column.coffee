window.KT.Elements.Task.contextMenu.push(
  {
    name: 'Change column',
    permissions: 'update_tasks'
    type: 'submenu'
    options: ( (taskView, task, selection) ->
      opts = []

      for stage in task.board().workflowStages().leafs()
        opts.push({
          id: stage.id,
          html: _.escape(stage.get('name')),
          action: (->
            selection.groupUpdate('workflow_stage_id': @id, 'position':null)
          )
        })

      opts
    )
  }
)

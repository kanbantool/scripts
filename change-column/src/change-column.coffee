window.KT.Elements.Task.contextMenu.push(
  {
    name: 'Change column',
    permissions: 'update_tasks'
    type: 'submenu'
    options: ( (e) ->
      opts = []

      for stage in e.delegateTarget.props.task.board().workflowStages().leafs()
        opts.push({
          id: stage.id,
          html: _.escape(stage.get('name')),
          action: (->
            ids = $('kt-task.kt-selected').map(-> @props.taskId)
            KT.tasks.groupUpdate(ids, {'workflow_stage_id': @id, 'position':null})
          )
        })

      opts
    )
  }
)

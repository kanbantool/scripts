KT.Elements.Taskview.footer.push({
  __: 'save-done'
  filter: (el, task) -> task.id && task.workflowStage()?.next()
  html: -> """<button class="btn btn-small" onclick="var task = $(event.target).addClass('disabled').closest('kt-taskview')[0].kt.task; KT.tasks.groupUpdate([task], {'workflow_stage_id':task.board().workflowStages().leafs().pop().id, 'position':null}).done(function(){KT.Elements.Taskview.close();}); return false;">Move to done</button>"""
})

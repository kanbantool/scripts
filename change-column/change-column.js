window.KT.Elements.Task.contextMenu.push({
  name: 'Change column',
  permissions: 'update_tasks',
  type: 'submenu',
  options: (function(taskView, task, selection) {
    var i, len, opts, ref, stage;
    opts = [];
    ref = task.board().workflowStages().leafs();
    for (i = 0, len = ref.length; i < len; i++) {
      stage = ref[i];
      opts.push({
        id: stage.id,
        html: _.escape(stage.get('full_name')),
        action: (function() {
          return selection.groupUpdate({
            'workflow_stage_id': this.id,
            'position': null
          });
        })
      });
    }
    return opts;
  })
});

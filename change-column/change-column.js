window.KT.Elements.Task.contextMenu.push({
  name: 'Change column',
  permissions: 'update_tasks',
  type: 'submenu',
  options: (function(e) {
    var i, len, opts, ref, stage;
    opts = [];
    ref = e.delegateTarget.props.task.board().workflowStages().leafs();
    for (i = 0, len = ref.length; i < len; i++) {
      stage = ref[i];
      opts.push({
        id: stage.id,
        html: _.escape(stage.get('name')),
        action: (function() {
          var ids;
          ids = $('kt-task.kt-selected').map(function() {
            return this.props.taskId;
          });
          return KT.tasks.groupUpdate(ids, {
            'workflow_stage_id': this.id,
            'position': null
          });
        })
      });
    }
    return opts;
  })
});

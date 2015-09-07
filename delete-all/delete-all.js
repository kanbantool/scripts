window.KT.Elements.Tasklist.contextMenu.push({
  name: 'Delete all',
  permissions: 'delete_tasks',
  action: (function(e) {
    var ids;
    ids = $(e.delegateTarget).find('kt-task').map(function() {
      return this.props.taskId;
    });
    return KT.tasks.groupUpdate(ids, {
      '_action': 'delete'
    });
  })
});

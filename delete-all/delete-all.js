window.KT.Elements.Tasklist.contextMenu.push({
  name: 'Delete all',
  permissions: 'delete_tasks',
  action: (function(taskView, task, selection) {
    return selection.groupUpdate({
      '_action': 'delete'
    });
  })
});

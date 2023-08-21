KT.Elements.Task.footer.push({
  __: 'checklist-progress',
  filter: function(el, task) {
    return parseInt(task.get('subtasks_count')) > 0;
  },
  html: function(el, task) {
    prc = parseInt(100 * parseFloat(task.get('subtasks_completed_count')) / parseFloat(task.get('subtasks_count')))
    return "<hr style=\"width:"+prc+"%; height:5px; background:#fff;\">"
  }
});
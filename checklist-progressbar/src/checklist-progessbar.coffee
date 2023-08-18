KT.Elements.Taskview.footer.push({
  __: 'checklist-progress'
  filter: (el, task) -> parseInt(task.get('subtasks_count')) > 0
  html: (el, task) -> 
    prc = parseInt(100 * parseFloat(task.get('subtasks_completed_count')) / parseFloat(task.get('subtasks_count')))
    "<hr style=\"width:"+prc+"%; height:5px; background:#fff;\">"
})
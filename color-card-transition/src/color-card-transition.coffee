ws_id = null; color = null; color_name = null

$(window.board.model.attributes.workflow_stages).each (i, e) =>
  ws_id = e.id if e.name && (/\*T\*/g).test(e.name)

$(window.board.model.attributes.card_types).each (i, e) =>
  if e.name && (/\*T\*/g).test(e.name)
    color = e.id
    color_name = e.color_ref

taskIterator = () =>
  window.board.tasks.forEach (task) =>
    checkTask(task)

checkTask = (task) =>
  if task.model.attributes.workflow_stage_id == parseInt(ws_id) && !$(task.el).hasClass('cct')
    updated_at = moment(task.model.attributes.updated_at)
    if moment().diff(updated_at, 'minutes') > 30
      is_invert = true if $.inArray(color_name, ['navy','green_dark','brown','gray_medium','gray_dark','black']) >= 0
      $(task.el).removeClass(task.model.attributes.card_color).addClass(color_name).addClass('cct')
      if is_invert
        $(task.el).addClass('invert')
      else
        $(task.el).removeClass('invert')

if color && ws_id
  setTimeout(taskIterator, 500)
  setInterval(taskIterator, 60000)
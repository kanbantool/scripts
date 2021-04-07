imgs = 
  'To do': 'domain.kanbantool.com/system/attachments/......'
  'In Progress': 'domain.kanbantool.com/system/attachments/......'
  'Done': 'domain.kanbantool.com/system/attachments/......'

$('kt-board thead tr th').click ->
  thWs = $(this)
  thWs.find('img').toggle()

for [key, value] in Object.entries(imgs)
  ws = KT.boards.first().get('workflow_stages').filter((ws) => ws.full_name == key)[0]
  if !ws
    ws = KT.boards.first().get('workflow_stages').filter((ws) => ws.name == key)[0]

  if ws 
    wsId = ws.id;
    thWs = $("th[data-stage-id='" + wsId + "']")
    img = $('<img>',{id:'theImg',src:value}).css("maxWidth", "176px")
    thWs.append(img);
    if thWs.hasClass('kt-collapsed')
      img.hide()
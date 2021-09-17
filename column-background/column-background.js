var settings = {
  "To do": "red",
  "In progress": "yellow",
  "Done": "blue"
}

var ALLOWED_COLORS = {
  "yellow": "rgba(255, 206, 84, 0.3)",
  "blue": "rgba(32, 148, 243, 0.3)",
  "green": "rgba(160, 212, 104, 0.3)",
  "teal": "rgba(160, 206, 203, 0.3)",
  "pink": "rgba(233, 70, 99, 0.3)",
  "red": "rgba(252, 110, 81, 0.3)"
}

for(var [key, value] of Object.entries(settings) ) {
  var ws = KT.boards.first().get('workflow_stages').filter((ws) => ws.full_name == key)[0];
  if (!ws) {
    ws = KT.boards.first().get('workflow_stages').filter((ws) => ws.name == key)[0];
  }

  if (ws) {
    var wsId = ws.id;
    $('kt-board > tbody > tr[data-swimlane-id] > td[data-stage-id=' + wsId + ']').attr('style', 'background:' + ALLOWED_COLORS[value] + ' !important');
  }
}
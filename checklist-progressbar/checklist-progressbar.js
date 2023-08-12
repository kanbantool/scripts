function makebar(kde) {
  title=$(kde).find(".checklist-indicator").attr("title");

  if (title!==undefined) {
    n=title.indexOf("%");
    prc=title.substr(0,n);    
    $(kde).find(".kt-task-footer").find("hr").remove();
    $(kde).find(".kt-task-footer").prepend("<hr style=\"width:"+prc+"%; height:5px; background:#fff;\">");            
  } 
}

$(window).on('kt-task:render', function(e) {
  makebar(e.target);
});

KT.onInit(function() {
  return setTimeout(function() {
    return $('kt-task').each(function() {
      return makebar(this);
    });
  }, 750);
});
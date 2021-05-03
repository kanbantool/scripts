function makebar(kde) {
  title=$(kde).find(".checklist-indicator").attr("title");

  if (title!==undefined) {
    n=title.indexOf("%");
    prc=title.substr(0,n);    
    $('kt-task').unbind('DOMSubtreeModified');
    $(kde).find(".kt-task-footer").find("hr").remove();
    $(kde).find(".kt-task-footer").prepend("<hr style=\"width:"+prc+"%; height:5px; background:#fff;\">");            
    $('kt-task').bind('DOMSubtreeModified', function(){ makebar(this); });
  } 
}

$(window).on('kt-task:render', function(e) {
  makebar(e.target);
});

$('kt-task').bind('DOMSubtreeModified', function(){
  makebar(this);
});
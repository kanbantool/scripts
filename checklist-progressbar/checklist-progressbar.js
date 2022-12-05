function makebar(kde) {
    title = $(kde).find(".checklist-indicator").attr("title");

    if (title !== undefined) {
        prc = title.split("%")[0];
        $('kt-task').unbind('DOMSubtreeModified');
        $(kde).find(".kt-task-footer").find("hr").remove();

        if ($(kde).find(".kt-task-footer > span").length == false) {
            $(kde).find(".kt-task-footer").prepend("<span style=\"display:block;width:100%;background: #fff;border-radius:5px;\"><span style=\"display:block;width:" + prc + "%;  background:#1fb5d7;text-align:center;\">" + prc + "%</span></span>");
        }
        $('kt-task').bind('DOMSubtreeModified', function() {
            makebar(this);
        });
    }
}

$('kt-task').bind('DOMSubtreeModified', function() {
    makebar(this);
});

$(document).ready(function() {
    setTimeout(function() {
        $(".checklist-indicator").each(function(index) {
            makebar($(this).parent().parent());
        });
    }, 100);
});

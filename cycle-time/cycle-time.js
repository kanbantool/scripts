(function() {
    var css;

    css = ".cycle_time { font-size: 0.9em; }";

    $('<style>').html(css).appendTo('head');

    KT.Elements.Task.header.unshift({
      __: 'CTime',
      html: function(task, cardTemplate) {
        return "<span class=\"cycle_time\">" + (moment(task.attributes.created_at).fromNow()) + "</span>";
      }
    });
}).call(this);

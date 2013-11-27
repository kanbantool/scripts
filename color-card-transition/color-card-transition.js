(function() {
    var checkTask, color, color_name, taskIterator, ws_id, _this = this;
    ws_id = null;
    color = null;
    color_name = null;

    $(window.board.model.attributes.workflow_stages).each(function(i, e) {
        if (e.name && /\*T\*/g.test(e.name)) {
            return ws_id = e.id;
        }
    });

    $(window.board.model.attributes.card_types).each(function(i, e) {
        if (e.name && /\*T\*/g.test(e.name)) {
            color = e.id;
            return color_name = e.color_ref;
        }
    });

    taskIterator = function() {
        return window.board.tasks.forEach(function(task) {
            return checkTask(task);
        });
    };

    checkTask = function(task) {
        var is_invert, updated_at;
        if (task.model.attributes.workflow_stage_id === parseInt(ws_id) && !$(task.el).hasClass('cct')) {
            updated_at = moment(task.model.attributes.updated_at);
            if (moment().diff(updated_at, 'minutes') > 30) {
                if ($.inArray(color_name, ['navy', 'green_dark', 'brown', 'gray_medium', 'gray_dark', 'black']) >= 0) {
                    is_invert = true;
                }
                $(task.el).removeClass(task.model.attributes.card_color).addClass(color_name).addClass('cct');
                if (is_invert) {
                    return $(task.el).addClass('invert');
                } else {
                    return $(task.el).removeClass('invert');
                }
            }
        }
    };

    if (color && ws_id) {
        setTimeout(taskIterator, 500);
        setInterval(taskIterator, 60000);
    }

}).call(this);

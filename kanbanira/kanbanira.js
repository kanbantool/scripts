(function() {
  var jira_key, jira_pid, jira_url, option, pair, _i, _len, _ref,
    _this = this;

  jira_url = '';

  jira_key = '';

  jira_pid = '';

  _ref = window.board.model.attributes.description.match(/\[(.*?)\]/g);
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    option = _ref[_i];
    option = option.replace(/[\[\]]/g, '');
    pair = option.split('=');
    if (pair.length === 2) {
      switch (pair[0]) {
        case "jira_url":
          jira_url = pair[1];
          break;
        case "jira_key":
          jira_key = pair[1];
          break;
        case "jira_pid":
          jira_pid = pair[1];
      }
    }
  }

  if (jira_url && jira_key && jira_pid) {
    $('.board_header .navbar ul.nav').append('<li><a href="' + jira_url + '/browse/' + jira_key + '" target="_blank" id="jiraProject"><i class="icon-et-link"></i> ' + jira_key + '</a></li>');
    $(document).bind('card_open', function() {
      var issue, submit_pane;
      submit_pane = $('#overlay .task_view #task_overlay_tab_contents #task_overlay_tab_view .submit_pane');
      if (issue = $('textarea#task_name').val().match(/\[(.*?)\]/m)) {
        return $(submit_pane).append('<button id="jiraIssueButton" class="show">Show issue in JIRA</button>');
      } else {
        return $(submit_pane).append('<button id="jiraIssueButton" class="create">Create issue in JIRA</button>');
      }
    });
    $('#overlay').on('click', '#jiraIssueButton', function(event) {
      var issue_key, location, task_name;
      task_name = $('textarea#task_name').val();
      if ($(event.currentTarget).hasClass('create')) {
        location = window.location;
        if (task_name.length > 0) {
          window.open(jira_url + '/secure/CreateIssueDetails!init.jspa?pid=' + jira_pid + '&issuetype=3&assignee=-1&summary=' + task_name + '&description=' + location.toString().replace('#', '%23'));
        }
      } else {
        issue_key = task_name.match(/\[(.*?)\]/);
        if (issue_key.length > 0) {
          window.open(jira_url + '/browse/' + issue_key[1]);
        }
      }
      return event.preventDefault();
    });
  }

}).call(this);

$(window).one('kt-board:render', (function(_this) {
  return function(e, $el, model) {
    var i, jira_key, jira_pid, jira_url, len, option, pair, ref;
    jira_url = '';
    jira_key = '';
    jira_pid = '';
    ref = model.attributes.description.match(/\[(.*?)\]/g);
    for (i = 0, len = ref.length; i < len; i++) {
      option = ref[i];
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
      $('.navbar ul.nav').first().append('<li><a href="' + jira_url + '/browse/' + jira_key + '" target="_blank" id="jiraProject"><i class="kt-icon-link"></i> ' + jira_key + '</a></li>');
      KT.Elements.Taskview.footer.push({
        __: 'jira-show',
        filter: function(task) {
          return task.id && task.get('name').match(/\[(.*?)\]/m);
        },
        html: function(task) {
          return "<a class=\"btn btn-small\" href=\"" + (jira_url + '/browse/' + task.get('name').match(/\[(.*?)\]/)[1]) + "\" target=\"_blank\">Show issue in JIRA</a>";
        }
      });
      return KT.Elements.Taskview.footer.push({
        __: 'jira-create',
        filter: function(task) {
          return !task.get('name').match(/\[(.*?)\]/m);
        },
        html: function(task) {
          return "<a class=\"btn btn-small\" href=\"" + (jira_url + '/secure/CreateIssueDetails!init.jspa?pid=' + jira_pid + '&issuetype=3&assignee=-1&summary=' + task.get('name') + '&description=' + window.location.toString().replace('#', '%23')) + "\" target=\"_blank\">Create issue in JIRA</a>";
        }
      });
    }
  };
})(this));

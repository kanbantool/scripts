$(window).one('kt-board:render', (e, $el, model) =>
  jira_url = ''; jira_key = ''; jira_pid = ''

  # Load settings for jira
  for option in model.attributes.description.match(/\[(.*?)\]/g)
    option = option.replace(/[\[\]]/g, '')
    pair = option.split('=')
    if pair.length == 2
      switch pair[0]
        when "jira_url" then jira_url = pair[1]
        when "jira_key" then jira_key = pair[1]
        when "jira_pid" then jira_pid = pair[1]

  # Execute if jira params was loaded
  if jira_url && jira_key && jira_pid
    $('.navbar ul.nav').first().append('<li><a href="' + jira_url + '/browse/' + jira_key + '" target="_blank" id="jiraProject"><i class="kt-icon-link"></i> ' + jira_key + '</a></li>');


    KT.Elements.Taskview.footer.push({
      __: 'jira-show'
      filter: (task) -> task.id && task.get('name').match(/\[(.*?)\]/m)
      html: (task) -> """<a class="btn btn-small" href="#{jira_url + '/browse/' + task.get('name').match(/\[(.*?)\]/)[1]}" target="_blank">Show issue in JIRA</a>"""
    })
    KT.Elements.Taskview.footer.push({
      __: 'jira-create'
      filter: (task) -> !task.get('name').match(/\[(.*?)\]/m)
      html: (task) -> """<a class="btn btn-small" href="#{jira_url + '/secure/CreateIssueDetails!init.jspa?pid=' + jira_pid + '&issuetype=3&assignee=-1&summary=' + task.get('name') + '&description=' + window.location.toString().replace('#', '%23')}" target="_blank">Create issue in JIRA</a>"""
    })
)

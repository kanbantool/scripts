jira_url = ''; jira_key = ''; jira_pid = ''

# Load settings for jira
for option in window.board.model.attributes.description.match(/\[(.*?)\]/g)
  option = option.replace(/[\[\]]/g, '')
  pair = option.split('=')
  if pair.length == 2
    switch pair[0]
      when "jira_url" then jira_url = pair[1]
      when "jira_key" then jira_key = pair[1]
      when "jira_pid" then jira_pid = pair[1]

# Execute if jira params was loaded
if jira_url && jira_key && jira_pid
  $('.board_header .navbar ul.nav').append('<li><a href="' + jira_url + '/browse/' + jira_key + '" target="_blank" id="jiraProject"><i class="icon-et-link"></i> ' + jira_key + '</a></li>');

  $(document).bind 'card_open', =>
    submit_pane = $('#overlay .task_view #task_overlay_tab_contents #task_overlay_tab_view .submit_pane');

    if issue = $('textarea#task_name').val().match(/\[(.*?)\]/m)
      $(submit_pane).append '<button id="jiraIssueButton" class="show">Show issue in JIRA</button>'
    else
      $(submit_pane).append '<button id="jiraIssueButton" class="create">Create issue in JIRA</button>'

  $('#overlay').on 'click', '#jiraIssueButton', (event) =>
    task_name = $('textarea#task_name').val()

    if $(event.currentTarget).hasClass('create')
      location = window.location;
      if task_name.length > 0
        window.open(jira_url + '/secure/CreateIssueDetails!init.jspa?pid=' + jira_pid + '&issuetype=3&assignee=-1&summary=' + task_name + '&description=' + location.toString().replace('#', '%23'));
    else
      issue_key = task_name.match(/\[(.*?)\]/)
      window.open(jira_url + '/browse/' + issue_key[1]) if issue_key.length > 0

    event.preventDefault()
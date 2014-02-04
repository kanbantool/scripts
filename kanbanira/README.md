# Kanbanira
Fast script for basic integration with Jira.

# Overview
Kanbanira allows basic integration with Jira, and adds:
- hyperlink to Jira project on top menu

![preview](preview.png)
- button for faster creating new issue in Jira to any task, if button was clicked form for create new issue in jira is opening in new window

![preview1](preview1.png)
- button for faster view related issue in Jira, if button was clicked issue is opening in new window (required add to task name key issue in square brackets -> [DEMO-2])

![preview2](preview2.png)

# Installation
For good script work all installation steps are required.

To board description must be add jira account link and project details. All options should be in square brackets with key and value -> [key=value].
Script for running require 3 options:

- Jira account url

  [jira_url=http://YOUR_ACCOUNT.atlassian.net]
  Required is full url.

- Project key

  [jira_key=PROJECT_KEY]
  You can find project key in jira on dashboard project next to logo.

  ![preview4](preview4.png)

- Jira project ID

  [jira_pid=10000]

  This step is only for project administrator in jira.
  Go to project administration and find 'Edit project', next you should open edit form in new window (click right mouse button and select 'Open link in new window').

  ![preview5](preview5.png)

  Next go to new opened window and look at URL, you should see on the end URL ?pid=xxxxxx for example: https://your_project.atlassian.net/secure/project/EditProject!default.jspa?pid=10000

  ![preview6](preview6.png)


All options in board description should look like as:
![preview3](preview3.png)

# More information
This script is based on Kanbanira extension for Chrome browser and usage is very similar but initialization is different,
but you can see how work Kanbanira extension in demonstration video:

![![Youtube](http://img.youtube.com/vi/oC8hdKmYbto/0.jpg)](http://www.youtube.com/watch?v=oC8hdKmYbto)

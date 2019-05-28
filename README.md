# Collection of useful scripts
This repository contains growing collection of simple scripts which can be loaded with the Developer Tools power-up in [Kanban Tool](http://kanbantool.com).

## How to use them?
Go to the *Board Settings* > *Power-ups* page, and enable the *Developer Tools* power-up.
Once you do that, you should see a form allowing you to specify links to external scripts.

Please select scripts from the table below, and copy-paste the URLs.

![Intro](intro.png)

## Available scripts

Name | Description | Configuration | `___ Copy links from this column ___`
--- | --- | --- | ---
[Swimlane Auto-Assign](swimlane-auto-assign/) | Automatically assign tasks to team members basing on the swimlane's name.| Swimlane name needs to include team member's name. | [/scripts/swimlane-auto-assign/swimlane-auto-assign.js](/swimlane-auto-assign/swimlane-auto-assign.js)
[High contrast](high-contrast/) | White-on-Black boards. Useful for TV screens. | Needs to be enabled from the tools menu | [/scripts/high-contrast/high-contrast.js](/high-contrast/high-contrast.js)
[Large font](large-font/) | Makes the font on cards slightly larger. | No configuration required. | Medium font:<br/>[/scripts/large-font/medium-font.css](/scripts/large-font/medium-font.css) <br/> Large font:<br/> [/scripts/large-font/large-font.css](/large-font/large-font.css)
[Card tilt](card-tilt/) | More natural alignment of cards. | No configuration required. | [/scripts/card-tilt/card-tilt.js](/card-tilt/card-tilt.js)
[Delete all](delete-all/) | Adds delete all option to the context menu. | No configuration required. | [/scripts/delete-all/delete-all.js](/delete-all/delete-all.js)
[Sorting animations](sorting-animations) | Animates cards when they are being moved. | No configuration required. | [/scripts/sorting-animations/sorting-animations.css](/sorting-animations/sorting-animations.css)
[Fixed cards height](fixed-cards-height) | Makes all cards the same height. | For better results you can append script [/scripts/fixed-cards-height/fixed-cards-height.js](/fixed-cards-height/fixed-cards-height.js) | [/scripts/fixed-cards-height/medium-cards.css](/fixed-cards-height/medium-cards.css)
[Save and close](save-close/) | Adds "Save and close (card)" option to the card footer. | No configuration required. | [/scripts/save-done/save-close.js](/save-close/save-close.js)
[Save and done](save-done/) | Adds "Save and move to done" option to the card footer. | No configuration required. | [/scripts/save-done/save-done.js](/save-done/save-done.js)
[Show all settings](show-all-settings/) | Shows all 'settings tabs' to the right of settings. | No configuration required. | [/scripts/show-all-settings/show-all-settings.js](/save-done/show-all-settings.js)
[Task done](task-done/) | Adds "Task done" option to the context menu | No configuration required. | [/scripts/task-done/task-done.js](/task-done/task-done.js)
[Keyboard shortcuts](keyboard-shortcuts/) | Adds keyboard shortcuts to reveal boards and tools menus, as well as navigate 'home' and to settings. | No configuration required. | [/scripts/keyboard-shortcutse/keyboard-shortcuts.js](/keyboard-shortcuts/keyboard-shortcuts.js)
[Change column](change-column/) | Adds change column option to the context menu. | No configuration required. | [/scripts/change-column/change-column.js](/change-column/change-column.js)
[Cycle time](cycle-time/) | Display time elapsed from when task was created. | No configuration required. | [/scripts/cycle-time/cycle-time.js](/working-time/working-time.js)
[Kanbanira](kanbanira/) | Basic integration with JIRA. | Needs information about JIRA project, see [README](/kanbanira/README.md) | [/scripts/kanbanira/kanbanira.js](/kanbanira/kanbanira.js)
[Order highlight](order-highlight/) | Highlight columns where card order does not match priorities. | No configuration required. | [/scripts/order-highlight/order-highlight.js](/order-highlight/order-highlight.js)
[User avatars](user-avatars/) | Adds support for avatar images. | Script needs to be manually modified, by listing avatar image URL for each users' initials. |

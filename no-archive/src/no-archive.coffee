if !KT.currentUser.attributes.is_account_admin
  window.KT.Elements.Task.contextMenu.remove('elements.task.menu.archive')
  window.KT.Elements.Tasklist.contextMenu.remove('elements.tasklist.menu.archive_all')
  window.KT.Elements.Board.contextMenu.remove('elements.tasklist.menu.archive_all')
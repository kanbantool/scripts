KT.Elements.Taskview.footer.push({
  __: 'save-close',
  filter: function(el, task) {
    var ref;                                                                                                                                                                      
    return task.id && ((ref = task.workflowStage()) != null ? ref.next() : void 0);                                                                                               
  },
  html: function() {
    return "<button class=\"btn btn-small\" onclick=\"KT.Elements.Taskview.close(); return false;\">Close</button>";                                                              
  }
});      

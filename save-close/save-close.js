KT.Elements.Taskview.footer.push({
  __: 'save-close',
  filter: function(el, task) {
    var ref;                                                                                                                                                                      
    return true;                                                                                               
  },
  html: function() {
    return "<button class=\"btn btn-small\" onclick=\"KT.Elements.Taskview.close(); return false;\">Close</button>";                                                              
  }
});      

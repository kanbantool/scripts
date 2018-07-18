KT.tasks.groupUpdateFilters.push({
  name: '_swimlane_auto_assign',
  action: function(tasks, attrs) {
    var sl; var slName;
    if (attrs && attrs['swimlane_id'] && !attrs['assigned_user_id'] && _.filter(tasks, function(t) {
      return t.get('swimlane_id') === attrs['swimlane_id'];
    }).length === 0) {
      if (sl = KT.Swimlane.get(attrs['swimlane_id'])) {
        slName = (sl.get('name') || '').toLowerCase();
        tasks[0].board().collaborators().each( function(c){
          if(slName.indexOf(c.get('name').toLowerCase()) >= 0 || slName.indexOf( '@' + c.get('initials').toLowerCase()) >= 0){
            return attrs.assigned_user_id = c.id;
          }
        })
      }
    }
  }
});

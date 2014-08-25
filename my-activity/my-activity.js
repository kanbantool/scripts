$(function(){
  if(KanbanTool.Boards.extensionsManager._extensions['RecentActivityWidget'].instance){
    KanbanTool.Boards.extensionsManager._extensions['RecentActivityWidget'].instance._filter = function(){ return true; } ;
    KanbanTool.Boards.extensionsManager._extensions['RecentActivityWidget'].instance.render();
  }
});

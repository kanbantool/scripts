var color = 'rgba(0, 0, 255, 1)';

var hoverFunction = function(el) {
   var $ktTask = $(el.target).closest('kt-task');         
   var dependentTasks = ($ktTask[0].kt.props.task.dependencies() || []);

   if (dependentTasks.length > 0) {
      boxShadow = '0 0 0 2px #c5c5c5';
      $ktTask.css('box-shadow', boxShadow);
   }
   boxShadow = '0 0 0 2px ' + color;
   dependentTasks.forEach(function(task) {
      return $('kt-task[data-task-id=' + task.get('dependent_task_id') + ']').css('box-shadow', boxShadow);
   });
}

var unhoverFunction = function(el) {
   var $ktTask = $(el.target).closest('kt-task');
   $ktTask.css('box-shadow', '');
   var dependentTasks = ($ktTask[0].kt.props.task.dependencies() || []);
   dependentTasks.forEach(function(task) {
      return $('kt-task[data-task-id=' + task.get('dependent_task_id') + ']').css('box-shadow', '');
   });
};

$(window).on('kt-task:render', function(e) {
   return $(e.target).hover(hoverFunction, unhoverFunction);
 });

KT.onInit(function() {
   return setTimeout(function() {
      $('kt-task').hover(hoverFunction, unhoverFunction);
   }, 750);
});

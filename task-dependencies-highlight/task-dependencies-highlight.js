var color = 'rgba(0, 0, 255, 1)';

KT.onInit(function() {
   return setTimeout(function() {
      $('kt-task').hover(function(el) {
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
      },
      function(el) {
         var $ktTask = $(el.target).closest('kt-task');
         $ktTask.css('box-shadow', '');
         var dependentTasks = ($ktTask[0].kt.props.task.dependencies() || []);
         dependentTasks.forEach(function(task) {
            return $('kt-task[data-task-id=' + task.get('dependent_task_id') + ']').css('box-shadow', '');
         });
      });
   }, 750);
});
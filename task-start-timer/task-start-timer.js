KT.onInit(function() {
   $(document).on('kt-taskview:open', function (e, taskView, taskModel) {
      KT.currentUser.timeTrackers().start(taskModel);
   });

   $(document).on('kt-taskview:close', function (e, taskView, taskModel) {
      KT.currentUser.timeTrackers().pauseActive()
   });
});
var highlightUnorderedColumns = function(){
  $('kt-tasklist').each( function(){
    var arr = $(this).find('kt-task').map( function(){ return parseInt(this.kt.props.task.get('priority')); } ).toArray();

    var ordered = true; var last = null;
    _.each(arr, function(e){ if(last != null && last < e){ordered = false;}; last = e; });

    $(this).css('background', ordered ? 'inherit' : 'rgba(255,0,0,0.25)');
  })
}

KT.tasks.on('change:position change:priority', _.debounce(highlightUnorderedColumns, 750));
KT.onInit( function(){ setTimeout(highlightUnorderedColumns, 1e3); });

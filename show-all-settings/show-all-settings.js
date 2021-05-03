var x = document.getElementsByClassName("_board_settings_link");
if (x) {
  var settings = x[0];
  var url = settings.href;
  addSetting("automation_rules","A");
  addSetting("powerups","P");
  addSetting("workflow","W");
  addSetting("card_template","C");
  addSetting("card_types","T");
}

function addSetting(ext,letter) {
  var el = document.createElement('a');
  el.innerHTML = letter;
  el.classList.add('kt-right-pane-element');
  el.classList.add('_board_settings_link');
  el.rel = "iframe-modal";
  el.href = url.replace("settings",ext);
  settings.parentNode.insertBefore(el, settings.nextSibling);
};

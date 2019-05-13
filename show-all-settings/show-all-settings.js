var x = document.getElementsByClassName("_board_settings_link");
var settings = x[0];
var url = settings.href;
url = url.replace("settings","");
addSetting("automation_rules","A");
addSetting("powerups","P");
addSetting("workflow","W");
addSetting("card_template","C");
addSetting("card_types","T");

function addSetting(ext,letter) {
  var el = document.createElement('a');
  el.innerHTML = letter;
  el.classList.add('kt-right-pane-element');
  el.classList.add('_board_settings_link');
  el.href = url + ext;
  settings.parentNode.insertBefore(el, settings.nextSibling);
};

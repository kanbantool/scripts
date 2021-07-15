var settings = document.getElementById("kt-top_panel-settings_link");
if (settings) {
  var url = settings.href;
  addSetting("automation_rules","A");
  addSetting("powerups","P");
  addSetting("workflow","W");
  addBackgroundLink();
  addSetting("card_template","C");
  addSetting("card_types","T");
}

function addSetting(ext,letter) {
  var el = document.createElement('a');
  el.innerHTML = letter;
  el.classList.add('kt-right-pane-element');
  el.rel = "iframe-modal";
  el.href = url.replace("settings",ext);
  settings.parentNode.insertBefore(el, settings.nextSibling);
};

function addBackgroundLink() {
  var el = document.createElement('a');
  el.innerHTML = "B";
  el.classList.add('kt-right-pane-element');
  el.onclick = function() { window.postMessage('iframe:trigger#kt-extensions-custom_theme:open');return false; };
  el.style.cursor = "pointer";
  settings.parentNode.insertBefore(el, settings.nextSibling);
}
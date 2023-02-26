function save_options() {
    var method = document.getElementById('method').value;
    chrome.storage.sync.set({
      desiredMethod: method,
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  function restore_options() {
    chrome.storage.sync.get({
      desiredMethod: 'always',
    }, function(items) {
      document.getElementById('method').value = items.desiredMethod;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);
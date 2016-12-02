// Saves options to chrome.storage
function save_options() {
	var image = document.getElementById('image').checked;
	var facebook = document.getElementById('facebook').checked;
	chrome.storage.sync.set({
		isImageEnable: image,
		isFacebookEnable: facebook
		}, function() {
		// Update status to let user know options were saved.
		var status = document.getElementById('status');
		status.textContent = 'Options saved.';
		status.classList.add('msg-show');
		setTimeout(function() {
			status.classList.remove('msg-show');
			status.textContent = '';
			}, 3000);
	});
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
	// Use default value color = 'red' and likesColor = true.
	chrome.storage.sync.get({
		isImageEnable: true,
		isFacebookEnable: true
		}, function(items) {
		document.getElementById('image').checked = items.isImageEnable;
		document.getElementById('facebook').checked = items.isFacebookEnable;
	});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
save_options);
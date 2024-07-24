var modal = document.getElementById('form-ct');
var btn = document.getElementById('trigger-modal');
var span = document.getElementsByClassName('close-button')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}



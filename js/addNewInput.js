// add new text input
window.onload = function() {
    document.getElementById('btnAdd').onclick = function (e) {
        var textData = document.getElementById("key-name").value;
        console.log(textData);
            var keyName = document.getElementById('key-name').value;
            console.log(keyName);
            // for Key
            var text = document.createElement('textarea');
            text.type = 'text';
            text.id =  keyName;
            text.rows = 2;
            text.cols = 39;
            text.style.margin = "2px";
            text.value = keyName;
            document.getElementById('keys').appendChild(text);

            // for Eng
            var text = document.createElement('textarea');
            text.type = 'text';
            text.id =  "eng-" + keyName;
            text.rows = 2;
            text.cols = 39;
            text.style.margin = "2px";
            text.value = keyName;
            document.getElementById('val').appendChild(text);

            // for Unicode
            var text = document.createElement('textarea');
            text.type = 'text';
            text.id =  "mmunicode-" + keyName;
            text.rows = 2;
            text.cols = 39;
            text.style.margin = "2px";
            text.value = "";
            document.getElementById('valUnicode').appendChild(text);

            // for Zawgyi
            var text = document.createElement('textarea');
            text.type = 'text';
            text.id =  "mmzawgyi-" + keyName;
            text.rows = 2;
            text.cols = 39;
            text.style.margin = "2px";
            text.value = "";
            document.getElementById('valZawgyi').appendChild(text);

            document.getElementById('key-name').value = "";
    };
}

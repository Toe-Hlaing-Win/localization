var actual_JSON = {};

// add new text input
window.onload = function() {
    console.log('here');
    document.getElementById('btnAdd').onclick = function (e) {
        var textData = document.getElementById("key-name").value;
        console.log(textData);
        var keyName = document.getElementById('key-name').value;
        var obj = {};
        obj[keyName] = keyName;
        Object.assign(actual_JSON, obj);
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

// to catch generate btn event
    document.getElementById('btn').onclick = function (e) {
        console.log(actual_JSON);
        for(var lastLoop in actual_JSON);

        try{
            var id = "eng-";
            var text = "{ \n";
            for (var i in actual_JSON){
                if ( lastLoop != i) {
                    text = text + '\"' + i + '\" : \"' + document.getElementById(  id + i ).value + '\" , \n';
                } else {
                    text = text + '\"' + i + '\" : \"' + document.getElementById( id + i ).value + '\" \n';
                }
            }
            text = text + '}';
            // for en
            download('en.json', text);
        }catch { window.alert("Can't Save eng JSON file");}


        try {
            var id = "mmunicode-";
            var text = "{ \n";
            for (var i in actual_JSON){
                if ( lastLoop != i) {
                    text = text + '\"' + i + '\" : \"' + document.getElementById( id + i ).value + '\" , \n';
                } else {
                    text = text + '\"' + i + '\" : \"' + document.getElementById( id + i ).value + '\" \n';
                }
            }
            text = text + '}';
            download('my.json', text);
        } catch { console.log("Can't Save Unicode JSON File");}

        try {
            var id = "mmzawgyi-";
            var text = "{ \n";
            for (var i in actual_JSON){
                if ( lastLoop != i) {
                    text = text + '\"' + i + '\" : \"' + document.getElementById( id + i ).value + '\" , \n';
                } else {
                    text = text + '\"' + i + '\" : \"' + document.getElementById( id + i ).value + '\" \n';
                }
            }
            text = text + '}';
            // for zg
            download('zg.json', text);
        } catch { console.log("Can't Save Zawgyi JSON file");}
    }
}

//download function
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

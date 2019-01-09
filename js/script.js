function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'jsondata/en.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
    callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function loadJSONUnicode(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'jsondata/my.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
    callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function loadJSONZawgyi(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'jsondata/zg.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
    callback(xobj.responseText);
    }
  };
  xobj.send(null);
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

// to load JSON data to textBox
// for key
loadJSON(function(response) {
    var actual_JSON = {};
    actual_JSON = JSON.parse(response);
    function loadkey(){
        var x = [];
        for( var i in actual_JSON){
            x.push(i);
        }
        return x;
    }
    var arr = loadkey();
    //
    for(var i in actual_JSON){
        var text = document.createElement('textarea');
        text.type = 'text';
        text.id =  i;
        text.rows = 2;
        text.cols = 39;
        text.style.margin = "2px";
        text.value = i;
        document.getElementById('keys').appendChild(text);
    }
    // for Eng
    for(var i in actual_JSON){
        var text = document.createElement('textarea');
        text.type = 'text';
        text.id =  "eng-" + i;
        text.rows = 2;
        text.cols = 39;
        text.style.margin = "2px";
        text.value = actual_JSON[i];
        console.log("from eng")
        document.getElementById('val').appendChild(text);
    }
    // ** For Unicode

    try {
        loadJSONUnicode(function(response){
            var jsonUnicode = JSON.parse(response);
            for(var i = 0 ; i < arr.length ; i++){
                if(jsonUnicode.hasOwnProperty(arr[i])){
                    var text = document.createElement('textarea');
                    text.type = 'text';
                    text.id = "mmunicode-" + arr[i];
                    text.rows = 2;
                    text.cols = 39;
                    text.style.margin = "2px";
                    if (!jsonUnicode[arr[i]]) {
                        text.className = "empty-text";
                    }
                    text.value = jsonUnicode[arr[i]];
                    console.log("from Uni");
                    document.getElementById('valUnicode').appendChild(text);
                }
                else {
                    var text = document.createElement('textarea');
                    text.type = 'text';
                    text.id = "mmunicode-" + arr[i];
                    text.className = "empty-text";
                    text.rows = 2;
                    text.cols = 39;
                    text.style.margin = "2px";
                    text.size = "40";
                    document.getElementById('valUnicode').appendChild(text);
                }
            }
        });
    } catch {
        for(var i in actual_JSON){
            var text = document.createElement('textarea');
            text.type = 'text';
            text.id =  "mmunicode-" + i;
            text.className = "empty-text";
            text.rows = 2;
            text.cols = 39;
            text.style.margin = "2px";
            text.value = "";
            document.getElementById('val').appendChild(text);
        }
    }

    try {
        loadJSONZawgyi(function(response){
            var jsonZawgyi = JSON.parse(response);
            for(var i = 0 ; i < arr.length ; i++){
                if(jsonZawgyi.hasOwnProperty(arr[i])){
                    var text = document.createElement('textarea');
                    text.type = 'text';
                    text.id = "mmzawgyi-" + arr[i];
                    text.rows = 2;
                    text.cols = 39;
                    text.style.margin = "2px";
                    if (!jsonZawgyi[arr[i]]) {
                        text.className = "empty-text";
                    }
                    console.log("from Zawgi");
                    text.value = jsonZawgyi[arr[i]];
                    document.getElementById('valZawgyi').appendChild(text);
                }
                else {
                    var text = document.createElement('textarea');
                    text.type = 'text';
                    text.id = "mmzawgyi-" + arr[i];
                    text.class = ("alert");
                    text.rows = 2;
                    text.cols = 39;
                    text.style.margin = "2px";
                    text.value = "";
                    text.className = "empty-text";
                    document.getElementById('valZawgyi').appendChild(text);
                }
            }
        });
    } catch {
        for(var i in actual_JSON){
            console.log('here');
            var text = document.createElement('textarea');
            text.type = 'text';
            text.id =  "mmzawgyi-" + i;
            text.className = "empty-text";
            text.rows = 2;
            text.cols = 39;
            text.style.margin = "2px";
            text.value = "";
            document.getElementById('val').appendChild(text);
        }
    }

    // to catch btn event
    var btn = document.getElementById('btn');
    btn.addEventListener('click', function(){
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
    });

    // Add new input key.
    document.getElementById('btnAdd').onclick = function (e) {
        var keyName = document.getElementById('key-name').value;
        // for Key
        var text = document.createElement('textarea');
        text.type = 'text';
        text.id =  keyName;
        text.rows = 2;
        text.cols = 39;
        text.style.margin = "2px";
        text.value = keyName;
        document.getElementById('keys').appendChild(text);
        var obj = {};
        obj[keyName] = keyName;
        Object.assign(actual_JSON, obj);

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
});

var Ajax = {
    loadJson : function(path = new String(), func) {
        var xhttp = new XMLHttpRequest();
        var dataJson = null;
        xhttp.open('GET', path, true);
    
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 400) {
                    console.log("Error 400: el archivo " + path);
                }
                else if (this.status == 200) {
                    dataJson = JSON.parse(this.responseText);
                    func(dataJson);
                }
            }
        };


    }
}
class httpManager {
    constructor() {

    }

    static get(url, successFunction, errorFunction) {

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {

                successFunction(JSON.parse(this.response));

            }

            else if (this.readyState == 4) {
                if (typeof errorFunction === "function")
                    errorFunction();

            }
        }

            xhttp.open("GET", url, true);

            xhttp.send();
        
    }

    static post(url, data, successFunction, errorFunction) {

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {

                successFunction(JSON.parse(this.response));

            }

            else if (this.readyState == 4) {
                if (typeof errorFunction === "function")
                    errorFunction();

            }
        }
            xhttp.open("POST", url, true);
            xhttp.setRequestHeader('Content-Type', 'application/json');

            xhttp.send(JSON.stringify(data));
        
    }

    static put(url, data, successFunction, errorFunction) {

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {

                successFunction();

            }

            else if (this.readyState == 4) {
                if (typeof errorFunction === "function")
                    errorFunction();

            }

            xhttp.open("PUT", url, true);

            xhttp.send(JSON.stringify(data));
        }

    }

    static delete(url, successFunction, errorFunction) {

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {

                successFunction();

            }

            else if (this.readyState == 4) {
                errorFunction();

            }

            xhttp.open("DELETE", url, true);

            xhttp.send();
        }

    }
}

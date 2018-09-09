export default class apiRequest {

    constructor (config) {
        if (new.target === apiRequest) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }

        this.API_ENDPOINT = 'https://my.callofduty.com/api/papi-client'
        this.title = config.title
        this.platform = config.platform
        this.type = config.type
        this.time = config.time
        this.mode = config.mode
        this.el = document.querySelector(config.el)
        this.config = config

        this.setEndpoint()
        this.getData(this.appendData)
    }


    setEndpoint () {
    }


    getData (callback) {
        var API_ENDPOINT = this.API_ENDPOINT
        var requestData
        var req = new XMLHttpRequest()

        req.open('GET', API_ENDPOINT, true)

        req.onload = function() {
            if (req.status >= 200 && req.status < 400) {
                requestData = JSON.parse(req.responseText)
            } else {
                requestData = false
            }
            return callback(requestData, this.el)
        }.bind(this)

        req.send()
    }

    appendData (data, el) {
        data = data.data
        data.entries.forEach(function(item) {
            var p = document.createElement('p');
            var string = document.createTextNode(
                '#' + item.rank +
                ' - ' + item.username +
                ' - ' + item.values.totalXp
            )
            p.appendChild(string)
            el.appendChild(p)

        });
    }

}

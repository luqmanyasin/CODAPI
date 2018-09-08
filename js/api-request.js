var apiRequest = function (requestType, config) {

    var klass = {
        API_ENDPOINT: 'https://my.callofduty.com/api/papi-client',
        title: config.title,
        platform: config.platform,
        type: config.type,
        time: config.time,
        mode: config.mode,
        el: config.el,
        requestType: requestType,

        init: function () {
            this.setEndpoint()
            this.runApi(this.insertData)
        },

        setEndpoint: function () {
            this.requestType
            switch (this.requestType) {
                case "leaderboard":
                    this.setLeaderboards(config.username)
                    break
            }
        },

        setLeaderboards: function (username) {
            return this.API_ENDPOINT =
                this.API_ENDPOINT +
                '/leaderboards/v2' +
                ("/title/" + this.title) +
                ("/platform/" + this.platform) +
                ("/time/" + this.time) +
                ("/type/" + this.type) +
                ("/mode/" + this.mode) +
                ("/gamer/" + username)
        },

        runApi: function (callback) {
            var API_ENDPOINT = this.API_ENDPOINT

            $.getJSON(API_ENDPOINT, function (data) {
                return callback(data, this.el)
            }.bind(this));
        },

        insertData: function (data, el) {
            data = data.data
            el = $(el)

            $(data.entries).each(function () {
                var string = $("<p></p>");
                string.append('#' + this.rank + ' - ')
                string.append(this.username + ' - ')
                string.append(this.values.totalXp + ' - ')
                el.append(string)

            })
        }
    }


    return klass;
}

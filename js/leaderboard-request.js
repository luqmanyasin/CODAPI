import apiRequest from './api-request.js'
export default class leaderboardRequest extends apiRequest {
    constructor(config) {
        super(config)


    }

    setEndpoint() {
        var username = this.config.username
        return this.API_ENDPOINT =
            this.API_ENDPOINT +
            '/leaderboards/v2' +
            ("/title/" + this.title) +
            ("/platform/" + this.platform) +
            ("/time/" + this.time) +
            ("/type/" + this.type) +
            ("/mode/" + this.mode) +
            ("/gamer/" + username)
    }
}
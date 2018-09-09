import leaderboardRequest from './js/leaderboard-request.js';

var request
request = new leaderboardRequest({
    title: 'wwii',
    platform: 'psn',
    type: 'core',
    time: 'monthly',
    mode: 'career',
    el: '.apiData',
    username: 'zXNsK_SaNcHoXz'
})

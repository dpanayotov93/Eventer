// expose our config directly to our application using module.exports
module.exports = {
    'facebookAuth': {
        'clientID': '1923818661202620', // your App ID
        'clientSecret': 'e8198fc8cec1a9d69e09beca131f32a4', // your App Secret
        'callbackURL': 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth': {
        'consumerKey': 'G6VJE38O9h3vP4phApYwNyZqW',
        'consumerSecret': 'AJ3KaicMsRzhltpekVJVyUhb5RjVSND6vUAoeG9zwEwhUyAUEv',
        'callbackURL': 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth': {
        'clientID': '903637306805-llj4abvjoa01q9qpokucqmreokjt1iln.apps.googleusercontent.com',
        'clientSecret': 'swzHhTVFOJQDuZzVJRX-w9dn',
        'callbackURL': 'http://localhost:8080/auth/google/callback'
    }
};

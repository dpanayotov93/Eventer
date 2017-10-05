// expose our config directly to our application using module.exports
module.exports = {
    'facebookAuth': {
        'clientID': '1923818661202620', // your App ID
        'clientSecret': 'e8198fc8cec1a9d69e09beca131f32a4', // your App Secret
        'callbackURL': 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth': {
        'consumerKey': 'your-consumer-key-here',
        'consumerSecret': 'your-client-secret-here',
        'callbackURL': 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth': {
        'clientID': 'your-secret-clientID-here',
        'clientSecret': 'your-client-secret-here',
        'callbackURL': 'http://localhost:8080/auth/google/callback'
    }
};

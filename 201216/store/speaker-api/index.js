const googlehome = require('google-home-notifier');
const lang = 'ja';

googlehome.device('Google Home', lang);
googlehome.notify('こんにちは',function(res){
    console.log(res);
});
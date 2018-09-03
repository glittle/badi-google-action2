const {
    actionssdk,
    dialogflow,
    Permission,
    Image,
} = require('actions-on-google');

const app = dialogflow({
    debug: false
});
console.log('started');

app.intent('get date', conv => {
    console.log('user:', conv.user);


    if (conv.sandbox) {
        conv.ask(`You are in sandbox mode.`);
    }
    conv.ask(`Hi, how is it going? I'm the fulfillment code.`);

    var test1 = conv.contexts.input.test1;
    console.log('test1 context: ', test1);

    var count = (test1 && test1.parameters.count || 0) + 1;
    conv.add(`Visit #${count}!`);

    conv.contexts.set('test1', 2, {
        count: count,
        hello: 'test hello'
    })
})

app.intent('actions.intent.DEVICE_COARSE_LOCATION', (conv, input, granted) => {
    if (granted) {

    }
})

app.intent('Default Welcome Intent', conv => {
    console.log('default intent!')
        //conv.ask(`Welcome, how is it going? I'm the fulfillment code.`);
    conv.ask(new Permission({
        context: 'To know your sunset times',
        permissions: 'DEVICE_COARSE_LOCATION'
    }));
})

module.exports = {
    app
}

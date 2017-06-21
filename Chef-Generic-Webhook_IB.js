/* Inbound IB to parse the information coming from a Chef Automate Generic Webhook.  Link to Chef Notifier documentation for formatting instructions.
http://chef-web-docs-notify.s3-website-us-west-2.amazonaws.com/config_rb_delivery.html#notifier-settings
*/

var data;

// If your data is posted as query string parameters or form post body
data1 = request.parameters.payload;
console.log('Body from Chef' + data1);
data = JSON.parse(data1);

var statusf = data.text;
var status = statusf.substring(1,24);

// Parse data from incoming payload and construct the trigger object
trigger.properties.host = data.attachments[0].fallback;
trigger.properties.status = status;
trigger.properties.summary = data.attachments[0].text;


// Define recipients
var recipients = [];
// Add a recipient targeting a user or group
recipients.push({
    'targetName': 'chef'
});

trigger.recipients = recipients;

// Post trigger to form
form.post(trigger);

/* Inbound IB to parse the information coming from a Chef Automate Generic Webhook.  Link to Chef Notifier documentation for formatting instructions.
http://chef-web-docs-notify.s3-website-us-west-2.amazonaws.com/config_rb_delivery.html#notifier-settings
*/

var data;

data = JSON.parse(request.body);

// Parse data from incoming payload and construct the trigger object.  This is not needed.  The json and form properties/fields
// already match.
//trigger.properties.failure_snippet = data.failure_snippet;

trigger.properties = data

// Define recipients
var recipients = [];
// Add a recipient targeting a user or group
recipients.push({
    'targetName': 'chef'
});

trigger.recipients = recipients;

// Post trigger to form
form.post(trigger);



/*
 * To use functions that are defined in a shared library, import
 * the shared library using the require function. You can then
 * access the functions in the shared library. Shared library names
 * are case-sensitive.
 *
 * The following statements show how to use a function named 'myFunction'
 * that is included in a shared library named 'My Shared Library'.
 *
 * var mySharedLibrary = require('My Shared Library');
 * var message = mySharedLibrary.myFunction();
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

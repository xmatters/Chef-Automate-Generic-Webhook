# Chef Generic Webhook
Whether you have five or five thousand servers, Chef lets you manage them all by turning infrastructure into code. Infrastructure described as code is flexible, versionable, human-readable, and testable. Check out the sweet video [here](media/mysweetvideo.mov). 

# Pre-Requisites
* Chef Automate v 3.x or higher.  The Generic Webhook is new functionality.  See the following Chef documentation for instructions on how to configure the Notify settings in the delivery.rb file of the Chef Automate server.  [delivery.rb](http://chef-web-docs-notify.s3-website-us-west-2.amazonaws.com/config_rb_delivery.html#notifier-settings)
* Generic Webhook configured.  
* Jenkins Communication Plan (see files) imported into xMatters or created in xMatters.
* xMatters account - If you don't have one, [get one](https://www.xmatters.com)!
* xMatters account - If you don't have one, [get one](https://www.xmatters.com)!

# Files
* [FileA.js](FileA.js) - The javascript file to be pasted into a Shared Library. It generally does xyz. 
* [MySweetCommPlan.zip](MySweetCommPlan.zip) - The comm plan (if needed) that has all the coold scripts and email format and such. 

# Installation
Details of the installation go here. 

## Chef Automate Server
1. Edit the delivery.rb file on the Chef Automate Server.  See the following instructions to configure the Notifier Settings. [derlivery.rb](http://chef-web-docs-notify.s3-website-us-west-2.amazonaws.com/config_rb_delivery.html#notifier-settings).
2. The attached delivery.rb file is an example of the configured settings pointing to a xMatters instance.
3. The following are the ruby lines in the file:
      * notifier['enable']
      * notifier['user_webhook_url']
4. The following is a sample notification message body:
      * {
      *  "automate_fqdn":"automate.test",
      *  "failure_snippet":"Chef client run failure on [chef-server.test] centos-runner-1.test : https://failure_url \n Failure Reason\n",
      * "exception_backtrace":"A long string with the backtrace that contains the error and \n",
      *  "exception_title":"Error Resolving Cookbooks for Run List:",
      *  "exception_message":"412 \"Precondition Failed\"",
      *  "automate_failure_url":"automate.test/long/url/that-takes-you-to-run-failure-page",
      *  "timestamp_utc":"2017-06-19T19:58:35.000000Z",
      *  "start_time_utc":"2017-06-19T19:58:35.000000Z",
      *  "end_time_utc":"2017-06-19T19:58:35.000000Z",
      *  "node_name":"centos-runner-1.test",
      *  "type":"node_failure"
      *}



## xMatters set up
1. Create a new Shared Library or (In|Out)bound integration
2. Add this code here:
   ```
   var items = [];
   items.push( { "stuff": "value"} );
   console.log( 'Do stuff' );
   ```
   
# Testing
Be specific. What should happen to make sure this code works? What would a user expect to see?

# Troubleshooting
Optional section for how to troubleshoot. Especially anything in the source application that an xMatters developer might not know about. 

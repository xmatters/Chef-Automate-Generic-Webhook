delivery_fqdn "chef-automate"
delivery['chef_username'] = "delivery"
delivery['chef_private_key'] = "/etc/delivery/delivery.pem"
delivery['chef_server'] = "https://chef-server.skytap.example/organizations/automate"
insights['enable'] = true

# These I am confirming

# nginx['log_directory'] = '/var/log/delivery/nginx/*.log'
# nginx['log_rotation']['file_maxbytes'] = 104857600
# nginx['log_rotation']['num_to_keep'] = 10


# These settings are beta
notifier['enable'] = true
#notifier['user_webhook_url'] = 'https://[xmatters instance]/api/integration/1/functions/7ae4d0e1-10bd-4c63-bf60-9a862a0abf18/triggers'

notifier['slack_webhook_url'] = 'https://[xmatters instance]/api/integration/1/functions/d80f4a0f-c744-4ac6-ab21-72d158051833/triggers'


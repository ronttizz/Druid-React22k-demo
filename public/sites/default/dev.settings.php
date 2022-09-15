<?php

// Disable Google Analytics from sending dev GA data.
$config['google_analytics.settings']['account'] = 'UA-XXXXXXXX-YY';

// Stage file proxy URL from production URL
$config['stage_file_proxy.settings']['origin'] = 'https://old.druid.fi';
$config['stage_file_proxy.settings']['hotlink'] = TRUE;

// Testing environment on Wodby
if (getenv('WODBY_HOST_PRIMARY') === 'testing.druid.fi') {
  $settings['skip_permissions_hardening'] = FALSE;

  // Private files path
  $settings['file_private_path'] = '/mnt/files/private';
}
// Local druid.docker.so
else {
  $settings['file_private_path'] = FALSE;

  // Redis
  $settings['redis.connection']['interface'] = 'PhpRedis';
  $settings['redis.connection']['host'] = 'redis';
  $settings['cache']['default'] = 'cache.backend.redis';
}

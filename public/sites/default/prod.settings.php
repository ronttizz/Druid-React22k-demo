<?php

// Disabling stage file proxy on production, with that the module can be enabled even on production
$config['stage_file_proxy.settings']['origin'] = FALSE;

// Private files path
$settings['file_private_path'] = '/mnt/files/private';

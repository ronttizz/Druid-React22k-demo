# Docker CLI container
CLI_SERVICE := app
CLI_SHELL := bash
CLI_USER := druid
DOCKER_PROJECT_ROOT := /app

# See drush/sites/wodby.site.yml for connection details

INSTANCE_prod_USER := wodby
INSTANCE_prod_OPTS ?= $(SSH_OPTS) -p 31222 -t
INSTANCE_prod_HOST ?= node-6ab20eef-ee13-45ff-8112-609e70fec7b4.wod.by
INSTANCE_prod_EXTRA ?= "cd /var/www/html/$(WEBROOT); bash -l"

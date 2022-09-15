# Druid.fi

Druid homepage with Drupal 9.

## Environments

| Env         | Branch | Drush alias | URL                      |
|-------------|--------|-------------|--------------------------|
| development | *      | -           | https://druid.docker.so/ |
| production  | dev    | @prod       | https://old.druid.fi/    |

## Requirements

You need to have these applications installed to operate on all environments:

- [Docker](https://github.com/druidfi/guidelines/blob/master/docs/docker.md)
- [Stonehenge](https://github.com/druidfi/stonehenge)
- Github CLI

## Create and start the environment

For the first time:

```
make fresh
```

Ready! Now go to https://druid.docker.so/ to see your site.

## Login to Drupal container

This will log you inside the app container:

```
make shell
```

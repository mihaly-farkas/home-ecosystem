# Home Ecosystem Installation

## Configure Environment Variables

### Configure Plex Media Server

- Configure the media library path in the `.env` file:

  ```text
  HOME_ECOSYSTEM_PLEX_MEDIA_PATH=/path/to/your/media
  ```

  Make sure that the specified path exists and is accessible by the Plex container.

- Get a Plex claim token from https://www.plex.tv/claim/


- Add th token to the `.env` file:

  ```text
  HOME_ECOSYSTEM_PLEX_CLAIM=claim-8Hwki7GQaMh2zNNLDox_
  ```

  Note that the claim token is valid for 4 minutes only, so you need to add it just before starting the stack for the
  first time!

## Start Home Ecosystem

Start the stack for the first time with the following command:

```bash
bin/start
```

## After the First Start

### Initial Plex Setup

- Set up Plex using the direct IP address of your server (e.g., http://127.0.0.1:32400/web) for the initial
  configuration - it won't work with the domain name until after the first setup.


- Open Plex in your browser using the domain name (e.g., http://plex.home.local/web) and complete the setup.

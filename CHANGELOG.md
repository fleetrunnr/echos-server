#1.5.0

Add `stop` command

# 1.3.7

Allow variables in .env file to set options in the server configuration.

### Updates
-   Auth Host: `ECHOS_SERVER_AUTH_HOST` *Note*: This option will fall back to the `ECHOS_SERVER_HOST` option as the default if that is set in the .env file.

-   *Host*: `ECHOS_SERVER_HOST`

-   *Port*: `ECHOS_SERVER_PORT`

-   *Debug*: `ECHOS_SERVER_DEBUG`

# 1.3.3

Return a better error when member data is not present when joining presence channels.

# 1.3.2

Added CORS support to the HTTP API.

# 1.2.9

Updated to socket.io v2
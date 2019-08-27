#! /usr/bin/env node

/**
 * Echos Server
 *
 * This file starts the socket.io server and loads configuration from a
 * echos-server.json file if available.
 *
 */
var EchosServerCli = require('../dist/cli');

process.title = 'echos-server';

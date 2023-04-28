#!/bin/sh
exec /usr/bin/ssh -o StrictHostKeyChecking=no -i /tmp/git_id "$@"

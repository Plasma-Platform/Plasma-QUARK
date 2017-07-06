#!/usr/bin/env bash

if [ -d './hooks' ] && [ -d './.git/hooks' ]; then
  cp ./hooks/* ./.git/hooks/
fi

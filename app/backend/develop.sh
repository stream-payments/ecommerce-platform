#!/bin/bash

#Run migrations to ensure the database is updated
streampay migrations run

#Start development environment
streampay develop
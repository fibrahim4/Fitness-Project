#!/usr/bin/env bash
# This script should be run from the root of the project, NOT the scripts directory

source .venv/bin/activate

MANAGE_SCRIPT=SDEV220Team3FitnessApp/manage.py

python3 $MANAGE_SCRIPT makemigrations
python3 $MANAGE_SCRIPT migrate
python3 $MANAGE_SCRIPT collectstatic

unset MANAGE_SCRIPT


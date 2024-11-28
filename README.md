# TalentFilter

## Steps to Run the Backend

### Create Virtual Environment using below command

`python -m venv venv`

- Activate teh Virtual Env using below cmd.
  `venv\Scripts\activate`

Note: To deactivate the virtual Environment use the cmd: `deactivate`

### install all dependencies by running:

`pip install -r requirements.txt`

Note: If you want to install new package use the command `pip install <package-name>`
use `pip freeze > requirements.txt` to save the installed packages to requirements.txt file.

### setting the env variables

use the cmd `set <variable-name>=<variable-value>` to set a env variable to the system or enter them manually into the .env file.

### Run Cmd to start the application:

`uvicorn app.main:app --reload --env-file <env-file-path> --port 5000`
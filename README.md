<img width="100" src="https://push.techulus.com/images/logo.png"/>

# Github Action for Push Notification
Receive push notification to your devices using Github Actions

## Pre-requisites

To run this action you'll need:

- An API key from Push (https://push.techulus.com/)

## Setup

1. Create the workflow and choose any event of your choice.
2. Copy and paste the following snippet into your .yml file.
```
- name: Send Push Notification
  uses: techulus/push-github-action@1.0.0
```
3. Add a new secret `API_KEY` (your API key) and an environment variable `MESSAGE` (notification message)
4. Commit your changes!

## Sample Workflows

### Send notification on every commit

```yaml
name: Push on commit

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - name: Send Push Notification
      uses: techulus/push-github-action@1.0.0
      env:
        API_KEY: ${{ secrets.API_KEY }}
        MESSAGE: "There is a new commit!"
```

### Send notification using schedule trigger

```yaml
name: Test push every day

on: 
  schedule:
    - cron: '* 0 * * *'

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - name: Send Push Notification
      uses: techulus/push-github-action@1.0.0
      env:
        API_KEY: ${{ secrets.API_KEY }}
        MESSAGE: "Test notification from GitHub"
```

### Customize notification title / add a link
```yaml
name: Test push every day

on: 
  schedule:
    - cron: '* 0 * * *'
jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - name: Send Push Notification
      uses: techulus/push-github-action@1.0.0
      env:
        API_KEY: ${{ secrets.API_KEY }}
        MESSAGE: "Test notification from GitHub 🧪"
        TITLE: Testing
        LINK: https://github.com/techulus/push-github-action
        SOUND: scifi
        TIME_SENSITIVE: true
```

## Support
Feature Request, Bugs and Ideas can be added [here.](https://pushbytechulus.freshdesk.com/support/tickets/new)

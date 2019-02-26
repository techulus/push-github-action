<img height="50px" src="https://push.techulus.com/img/logo.svg"/>

# Github Action for Push by Techulus
Receive push notification to your devices using Github Actions

## Pre-requisites

To run this action you'll need:

- To be part of the Actions beta.
- An API key from Push (https://push.techulus.com/), to get the API key you've to install Push's iOS or Android app and create an account.

## Setup

1. Create the workflow and choose any event of your choice.
2. Add a new action, enter `techulus/push-github-action@master` and click use.
3. Add a new secret `API_KEY` (your API key) and an environment variable `MESSAGE` (notification message)
4. Commit your changes!

## DEMO

<img src="https://github.com/techulus/push-github-action/blob/master/setup.gif?raw=true"/>

## Support
Feature Request, Bugs and Ideas can be added [here.](https://github.com/techulus/push-github-action/issues)

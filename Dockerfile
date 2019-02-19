FROM node:10.11.0-alpine

COPY ./notify /notify

ENTRYPOINT ["/notify/entrypoint.sh"]

LABEL "com.github.actions.name"="Send Push Notification"
LABEL "com.github.actions.description"="Notifies developers via Push Notification"
LABEL "com.github.actions.icon"="send"
LABEL "com.github.actions.color"="red"
LABEL "repository"="http://github.com/techulus/push-github-action"
LABEL "homepage"="https://push.techulus.com/"
LABEL "maintainer"="arjunkomath@gmail.com"
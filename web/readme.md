
# Web application with static page

It will poll specific url on button click

## Installation

First of all install npm modules.

```bash
npm install --save
```

By default listenning port is 4000

You could set another port with environment vriable APP_PORT

## Run application

Set TARGET_URL environment variable first, default value is `http://localhost:4000/ping`

Then just execute

```bash
npm start
```

## Check if application is running

Open `localhost:4000` in your browser

You will see a simple page with one button

Be aware if you changed listenning port - replace default 4000 port with your port

Click the button to send a request, if everything ok you must receive `Hello, it Works!!!` message

Good luck

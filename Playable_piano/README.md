
project structure

/your-project-folder
  /node_modules
  index.html
  soundsScript.js
  midiParser.js
  style.css
  package.json

Install Parcel and midi-parser-js

npm init -y  # Creates package.json if not already present
npm install -g parcel-bundler
npm install midi-parser-js

running the Parcel

parcel index.html

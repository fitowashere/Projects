# Project Structure

- `/your-project-folder`
  - `node_modules`
  - `piano.html`
  - `soundsScript.js`
  - `midiFileProcessor.js`
  - `style.css`
  - `package.json`

## Installation

To get started, follow these steps:

1. Initialize a new `package.json` file if not already present:
   ```bash
   npm init -y
   ```

2. Install Parcel bundler globally:
   ```bash
   npm install -g parcel-bundler
   ```

3. Install `midi-parser-js` package:
   ```bash
   npm install midi-parser-js
   ```

## Running the Project

To run the project using Parcel, execute the following command:

```bash 
parcel <file>.html
```
 
## Description 

The "Playable Piano" project is an interactive tutorial program that allows users to learn and play music using a virtual piano. This program is designed to provide a user-friendly interface and realistic sound effects to enhance the musical experience, making it feel as if you're playing a real piano.

The program comes with a predetermined list of songs that users can choose from. This feature is perfect for beginners who are just starting their musical journey, as well as for more experienced players who want to practice or learn new songs. Each song in the list is broken down into easy-to-follow steps, allowing users to learn at their own pace.

To get started, users need to set up the necessary dependencies. The installation process is straightforward and involves initializing a new package.json file, installing the Parcel bundler, and the midi-parser-js package. The midi-parser-js package is used to process MIDI files and generate the corresponding musical notes for the songs in the list.

Once the setup is complete, users can run the project using the Parcel bundler. The program's intuitive project structure and easy-to-follow instructions make it accessible for users of all levels.

The "Playable Piano" tutorial is more than just a program; it's a platform for users to explore their musical creativity, learn new songs, and enjoy the art of playing the piano. Whether you're a beginner looking to learn your first song or an experienced player wanting to expand your repertoire, the "Playable Piano" project has something for everyone.

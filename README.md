## About

This repositroy contains frontend for a personal movie streaming service. Specifically developed for [InnoRoute](https://innoroute.com/) to be integrated with their [6Tree](https://innoroute.com/save/) network and MaxBox. This platform allows users to stream movies from their MaxBox to their personal devices once they are connected to the 6Tree network. This allows a safe and secure way to save and stream personal movie collection without the need for a cloud service or constantly carrying physical copies of your movies.

This software is provided for MaxBox out of the box. If you want to install and use this software yourself, feel free to use the [guide](getting-started) underneath.

This is only the frontend part, the backend part can be found in the [resources](learn-more) underneath.

## Getting Started

- Install Raspbian GUI on your Raspberry Pi
- Install WireGuard: `sudo apt install wireguard`
- Install Node.js: `sudo apt install nodejs`
- Install NPM: `sudo apt install npm`
- Install UI: `git clone https://github.com/kirillinoz/pss-ui.git`
- Install Server: `git clone https://github.com/kirillinoz/pss-server.git`
- Start Server: `npm run start:prod`
- Build and start UI: `npm run build`, `sudo npm run start`
- Create 6Tree Account
- Activate 6Tree Account
- Download `wg0.conf` file
- Move .conf file to `/etc/wireguard/wg0.conf`
- Run `sudo apt install openresolv`
- Fill out rc.local
- Restart your device

## Features

### Add movie
<img width="1217" alt="Xnapper-2024-04-12-11 27 49" src="https://github.com/kirillinoz/pss-ui/assets/63226427/3c9b47b6-14fb-4ce4-8783-082dfb006782">

### Remove movie
<img width="1135" alt="Xnapper-2024-04-12-11 29 20" src="https://github.com/kirillinoz/pss-ui/assets/63226427/9bf2bf96-2c1f-4f1c-998d-b311e165a2c1">


## Replenishment of Movies

Use a CD/DVD drive to insert a disk with the movie to scan and add the file to your collection (reference add movie).

## Technologies

<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a>
<a href="https://nextjs.org/docs" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="36" height="36" alt="NextJs" /></a>
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="TailwindCSS" /></a>

## Learn More

- To learn more about InnoRoute and 6Tree, visit the official website [here](https://innoroute.com/).
- To have a look at the backend part of this project, visit the repository [here](https://github.com/kirillinoz/pss-server).

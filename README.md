# Bio Site

A simple bio site built using Node.js. This site can be easily customized by editing the `config.json` the site will update when you restart the application.

## Options

- Themes
  - Red
  - Orange
  - Yellow
  - Green
  - Blue
  - Purple
  - Pink

Project cards are not required but the 3 bio cards are.

## Features

- Customizable port and domain configurations.
- Easy setup and deployment.

## Prerequisites

- Node.js installed on your system.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ShadyM00n/bio-site.git
    cd bio-site
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

3. Configure the `config.json` file. Update the port, secondary port, domain, etc as needed:

    ```json
    {
    "port": 443,
    "port2": 3000,
    "ssl": true,
    "domain": "https://example.com",
    "theme": "blue",
    "account": {
        "name": { "part1": "Name", "part2": "Person",
            "whole": "NamePerson"
        },
        "pfp": "http://legendsnetwork.xyz/assets/8fbd3be4-8724-4428-a7df-6a6204d64de9.ico",
        "connections": {
            "discord": "https://discord.com/",
            "github": "https://github.com/",
            "instagram": "https://www.instagram.com/",
            "x": "https://x.com/",
            "tiktok": "https://www.tiktok.com/"
        },
        "bio": {
            "big": { "part1": "Big Bio Example 1", "part2": "Big Bio Example 2", "part3": "Big Bio Example 3." },
            "small": "Small Bio Example"
        }
    },
    ```

## Usage

1. To start the server, run:

    ```bash
    node index.js
    ```

2. Your site will be accessible at the domain specified in `config.json`.

## License

This project is licensed under the MIT License.
--

  [x] - Customizability
  [x] - Lightweight and Fast
  [x] - Personalization
  [x] - frequent updates
  [ ] - slow

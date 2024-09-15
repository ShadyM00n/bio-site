# Bio Site

A simple bio site built using Node.js. This site can be easily customized by editing the `config.json` and modifying the HTML files directly.

## Features

- Customizable port and domain configurations.
- Easy setup and deployment.
- Editable HTML files for personalizing your bio site.

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

3. Configure the `config.json` file. Update the port, secondary port, and domain as needed:

    ```json
    {
        "port": 443,
        "port2": 3000,
        "domain": "https://example.com"
    }
    ```

4. Customize the HTML files in the `public` folder to configure the site to your liking.

## Usage

1. To start the server, run:

    ```bash
    node index.js
    ```

2. Your site will be accessible at the domain specified in `config.json`.

## License

This project is licensed under the MIT License.

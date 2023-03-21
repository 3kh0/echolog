# ECHOLOG
Echolog is a simple and customizable IP logger written in plain JavaScript, which utilizes a free and open-source API provided by wtfismyip.com to collect information about the user's device and environment.

If you do decide to use this, please conside giving me a star! It would help out alot!

## Disclaimer

**PLEASE READ BEFORE USE**

This software is intended for legal and ethical purposes only. The use of Echolog without the end-user's consent may be illegal in many countries. By using Echolog, you assume all legal responsibilities and risks associated with the use of this software. Echolog is provided "as-is" and the author makes no guarantees or warranties regarding its performance, reliability, or legality.

## Features
Echolog collects the following information about the user:
- IP address
- Location
- Hostname
- Internet service provider (ISP)
- City
- Country
- Country code
- User agent
- `window` properties
- Window width, height, and aspect ratio
- Screen width, height, and aspect ratio
- Dots per inch (DPI)
- Color depth
- Screen orientation and angle
- Operating system
- CPU threads
- Memory (in GB)
- System languages
- Current Language

## Why use Echolog?

Echolog is a lightweight and customizable solution for logging IP addresses and collecting different browser data. It requires no backend, making it easy to integrate into any project. Additionally, Echolog allows developers to customize the information collected to fit their specific needs.

## Usage

This project uses [wtfismyip](https://wtfismyip.com/) as a base to collect the IP, but you can use any API that returns the information you want, you just have to update the `echolog` object to handle it. 

You can look in the [`tests`](tests) folder for examples on how to implent this into your own project.

## Contributing

If you'd like to contribute to Echolog, feel free to fork the repository and submit a pull request. Any contributions, bug reports, or feature requests are greatly appreciated.

## Credits

Echolog was created by 3kh0 and is based on the [wtfismyip](https://wtfismyip.com/) API.
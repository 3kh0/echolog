# ECHOLOG
Echolog is a simple and customizable IP logger written in plain JavaScript, which utilizes a free and open-source API provided by wtfismyip.com to collect information about the user's device and environment.

If you do decide to use this, please conside giving me a star! It would help out alot!

- [ECHOLOG](#echolog)
  * [Legal Disclaimer](#legal-disclaimer)
  * [Collected Information](#collected-information)
  * [Why Echolog](#why-echolog)
  * [Protect yourself](#protect-yourself)
  * [Getting started](#getting-started)
  * [Contributing](#contributing)
  * [Credits](#credits)

## Legal Disclaimer

**PLEASE READ BEFORE USE**

This software is intended for legal and ethical purposes only. The use of Echolog without the end-user's consent may be illegal in many countries. By using Echolog, you assume all legal responsibilities and risks associated with the use of this software. Echolog is provided "as-is" and the author makes no guarantees or warranties regarding its performance, reliability, or legality.

## Collected Information
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

## Why Echolog

Echolog is a lightweight and customizable solution for logging IP addresses and collecting different browser data. It requires no backend, making it easy to integrate into any project. Additionally, Echolog allows developers to customize the information collected to fit their specific needs.

## Protect yourself

There are three main ways to protect yourself from getting your IP being pulled, these are sorted from a quick fix to extreme measures.

- **Extensions**: Using different extensions you can most of these IP loggers. I would recommend installing [NoScript](https://noscript.net/), [Privacy Badger](https://privacybadger.org/), and [uBlock Origin](https://ublockorigin.com/). These are all good extensions that keep you safe online.
- **VPN**: Using a VPN service can hide your IP address and encrypt your internet traffic. If you would like to try a VPN, I recommend surfshark, get a sweet discount [with this referral link](https://surfshark.club/friend/gFRhb6Dq). You get a free month and I get a free month, it is a win win.
- **Tor**: Using the Tor browser is the ultimate way, it masks your IP address and encrypts your internet traffic through a series of servers. You will notice that speed are much slower than normal, but if you are getting targeted constantly, this should do it.
- **No internet**: Hey they can't IP log you if you don't have a IP to log :)

All of these depend on you and how much you are willing to sacrifice for privacy, but for most people getting extensions like Noscript and uBlock Origin should do you enough.

## Getting started

This project uses [wtfismyip](https://wtfismyip.com/) as a base to collect the IP, but you can use any API that returns the information you want, you just have to update the `echolog` object to handle it. 

You can look in the [`tests`](tests) folder for examples on how to implent this into your own project.

## Contributing

If you'd like to contribute to Echolog, feel free to fork the repository and submit a pull request. Any contributions, bug reports, or feature requests are greatly appreciated.

## Credits

Echolog was created by 3kh0 and is based on the [wtfismyip](https://wtfismyip.com/) API.
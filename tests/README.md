# Examples
This folder contains several examples of how to use Echolog, a simple and customizable IP logger written in plain JavaScript. Each example includes a HTML file with CSS and JS code that demonstrates how to integrate Echolog into your project and collect information about the user's device and environment.

## Example list

- [`sample.html`](sample.html): This example has all the info in a json object ready for use, it shows it to the user.
- [`justip.html`](justip.html): This example demonstrates how to customize the information collected by Echolog to fit your specific needs. This only collects the IP, nothing else and shows it to the user
- [`hidden.html`](hidden.html): This example showcases how you can hide the code and the user would have a hard time knowing. This also sends the data to a discord webhook for later analysis.
- [`sysdiag.html`](sysdiag.html): This example shows the results of the echolog object but it encoded with base64 so the end user does not know.

## Get started

To use these examples, simply download the HTML file(s) and upload them to some kind of HTTP server, this is prevent CORS problems. Then on your browser access the page and enjoy!

## Contributing

If you'd like to contribute to Echolog or suggest improvements to these examples, feel free to fork the repository and submit a pull request. Any contributions, bug reports, or feature requests are greatly appreciated.
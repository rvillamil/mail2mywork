<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Unlicense License][license-shield]][license-url]
<br />
<div align="center">
  <a href="https://github.com/rvillamil/mail2mywork">
    <img src="mail2mywork/Resources/my-icon-384.png" alt="mail2mywork Logo" width="80" height="80">
  </a>

  <h3 align="center">mail2mywork - Safari Extension</h3>

  <p align="center">
    Quickly send the current Safari page URL to your work email with a single click.
    <br />
    <br />
    <br />
    &middot;
    <a href="https://github.com/rvillamil/mail2mywork/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/rvillamil/mail2mywork/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

`mail2mywork` is a Safari extension designed to simplify the process of sending web links to a pre-configured email address, typically your work email. With a single click, you can compose a new email with the current URL, ready to be sent.

Why `mail2mywork`?
* **Efficiency:** Saves time by eliminating the need to manually copy and paste URLs into a new email.
* **Simplicity:** Clean and straightforward interface, focused on a single task.
* **Configurable:** You can set your destination email address through the extension's options page.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This extension uses standard web technologies and Apple's development environment:

* HTML5
* CSS3
* JavaScript (ES6+)
* WebExtensions API (for Safari)
* Xcode (as the development environment for Safari App Extensions)
* Swift (for the macOS application wrapper of the extension)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

Follow these steps to get a local copy of the extension up and running.

### Prerequisites

You will need the following to compile and run the extension:

* macOS (latest version recommended)
* Xcode (installed from the Mac App Store, latest version recommended)
* Safari browser

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/rvillamil/mail2mywork.git](https://github.com/rvillamil/mail2mywork.git)
    cd mail2mywork
    ```
2.  **Open the project in Xcode:**
    Locate the `.xcodeproj` file (likely `mail2mywork.xcodeproj`) and open it with Xcode.
3.  **Configure Signing (Signing & Capabilities):**
    * Select the main application target (e.g., `mail2mywork`) in the project navigator.
    * Go to the "Signing & Capabilities" tab.
    * Select your development team (Team). For local execution, you can use your personal Apple ID. For distribution, you'll need an Apple Developer account.
    * Repeat this step for the Extension target (`mail2mywork Extension`).
4.  **Build and Run:**
    * Select the main application scheme (e.g., `mail2mywork`) and a device (My Mac).
    * Click the "Run" button (▶) or press `Cmd+R`. This will compile the application and the extension.
5.  **Enable the Extension in Safari:**
    * Once the application has run (you might not see an application window if it's just a container), open Safari.
    * Go to Safari > Preferences (or Settings) > Extensions.
    * Look for "mail2mywork" in the list and check the box to enable it.
6.  **Configure your email address:**
    * Right-click the `mail2mywork` extension icon in the Safari toolbar (or find it on the Extensions page) and select "Options" (or the equivalent text).
    * Enter your work email address and save.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Once installed and configured:

1.  Navigate to any webpage in Safari that you wish to send.
2.  Click the `mail2mywork` extension icon in the Safari toolbar.
3.  A small popup will appear showing:
    * A confirmation message: "Send the URL to your work email?".
    * The current page's URL.
    * A "Send Email" button.
4.  Click the "Send Email" button.
5.  This will open your default mail client (e.g., Mail.app) with a new pre-filled message:
    * **To:** Your configured work email address.
    * **Subject:** "mail2work: [current URL's domain]"
    * **Body:** The full URL.

_Refer to the extension's options page to configure or change your email address._

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [X] Basic functionality: capture URL, open mail client.
- [X] Popup with URL display and send button.
- [X] Options page to configure the destination email address.
- [X] Persistent storage of the email address.
- [X] Basic toolbar icon.
- [ ] Allow customization of the email subject/body template.
- [ ] Support for multiple pre-configured email addresses.
- [ ] UI/UX improvements for the popup and options page.
- [ ] Localization into other languages (e.g., Spanish).

See the [open issues](https://github.com/rvillamil/mail2mywork/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1.  Fork the Project (`https://github.com/rvillamil/mail2mywork/fork`).
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the Unlicense License. See `LICENSE.txt` for more information (if you choose to include one).
If you prefer another license like MIT, please update this section.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Rodrigo Villamil Pérez - _[@rvillamil on GitHub](https://github.com/rvillamil)_ - _your_email@domain.com_

Project Link: [https://github.com/rvillamil/mail2mywork](https://github.com/rvillamil/mail2mywork)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

Helpful resources:

* [Apple Safari App Extensions Documentation](https://developer.apple.com/documentation/safariservices/safari_app_extensions)
* [MDN WebExtensions Guide](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
* [Original README Template (Best-README-Template)](https://github.com/othneildrew/Best-README-Template)
* [Choose an Open Source License](https://choosealicense.com)
* [Img Shields](https://shields.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/rvillamil/mail2mywork.svg?style=for-the-badge
[contributors-url]: https://github.com/rvillamil/mail2mywork/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rvillamil/mail2mywork.svg?style=for-the-badge
[forks-url]: https://github.com/rvillamil/mail2mywork/network/members
[stars-shield]: https://img.shields.io/github/stars/rvillamil/mail2mywork.svg?style=for-the-badge
[stars-url]: https://github.com/rvillamil/mail2mywork/stargazers
[issues-shield]: https://img.shields.io/github/issues/rvillamil/mail2mywork.svg?style=for-the-badge
[issues-url]: https://github.com/rvillamil/mail2mywork/issues
[license-shield]: https://img.shields.io/github/license/rvillamil/mail2mywork.svg?style=for-the-badge
[license-url]: https://github.com/rvillamil/mail2mywork/blob/master/LICENSE.txt
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-05-29
### Added
- Initial project setup for a Safari Web Extension.
- Core functionality to capture the current tab's URL.
- Popup interface (`popup.html`, `popup.js`, `popup.css`):
    - Displays the current page URL.
    - Shows a prompt asking to send the URL to the work email.
    - Includes a button to trigger the email sending process.
- Email generation:
    - Constructs a `mailto:` link with the pre-configured work email as the recipient.
    - Sets a dynamic subject line: "mail2work: [domain of the URL]".
    - Includes the captured URL in the email body.
    - Opens the system's default email client with the pre-filled email.
- Configuration options (`options.html`, `options.js`, `options.css`):
    - Dedicated options page for extension settings.
    - Allows users to input and save their work email address.
    - Uses `browser.storage.sync` to store the work email address securely and synchronize it if applicable.
- User Experience:
    - Loads the saved work email address in the popup for use.
    - If the work email is not configured, the popup prompts the user to set it via the options page and provides a direct link.
    - Custom SVG toolbar icon (`images/toolbar-icon.svg`) for the extension.
- `manifest.json` configured for Safari (Manifest V3):
    - Defines popup action, options page, and background script.
    - Requests necessary permissions: `activeTab` (to get URL) and `storage` (to save email preference).
- Basic styling for popup and options pages.
- Initial README.md file for project documentation.

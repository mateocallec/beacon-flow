# Security Policy for Beacon Flow

## Supported Versions

| Version | Supported          |
|---------|--------------------|
| 1.0.0   | :white_check_mark: |
| 1.0.1   | :white_check_mark: |

We actively maintain and support versions listed above. Please upgrade if you are using an unsupported version.

---

## Reporting a Vulnerability

If you discover a security vulnerability in Beacon Flow, please report it responsibly:

1. **Do not post publicly.** Avoid opening an issue on GitHub for security issues.
2. **Send an email**:
   **mateo@callec.net**
   Include:
   - Detailed description of the vulnerability
   - Steps to reproduce the issue
   - Affected version(s)
   - Any suggested mitigations (optional)

We will acknowledge receipt within 24 hours and provide an estimated timeline for a fix.

---

## Security Best Practices for Users

To keep your installation of Beacon Flow secure:

- **Always use the latest version** of Beacon Flow.
- **Validate and sanitize all inputs** to avoid injection attacks.
- **Use HTTPS** for all network requests.
- **Restrict API access** with proper authentication and authorization.
- **Limit permissions** of system accounts and processes.
- **Monitor logs** for unusual activity.

---

## Security Guidelines for Contributors

When contributing code to Beacon Flow:

- **Follow secure coding practices**:
  - Avoid hard-coded secrets or credentials.
  - Validate all inputs and outputs.
  - Use prepared statements or safe query methods for any database interactions.
- **Run static analysis and linters** to detect common vulnerabilities.
- **Include tests for security-critical functionality**.
- **Document security implications** for new features.

---

## Handling Vulnerabilities in Dependencies

Beacon Flow uses third-party libraries. To mitigate risks:

- Regularly update dependencies to the latest secure versions.
- Use automated tools to check for vulnerabilities, such as:
  - `npm audit` for Node.js projects
- Avoid including unnecessary packages.

---

## Security Release Process

- Critical vulnerabilities are patched as soon as possible.
- Users are notified via release notes and, when appropriate, via direct communication.
- Releases follow semantic versioning:
  - **Patch** version for security fixes
  - **Minor** version for new features with no breaking changes
  - **Major** version for breaking changes

---

## Acknowledgments

We appreciate all security researchers and contributors who responsibly report vulnerabilities and help make Beacon Flow safer.

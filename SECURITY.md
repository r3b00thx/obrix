# Security Policy

## Supported Versions

We aim to keep our project secure and up to date. The following table describes our support model:

| Version | Supported |
| ------- | --------- |
| Latest  | ✅        |
| Older   | ❌        |

If you are using the latest version from the `main` or `release` branches, you are supported.

---

## Reporting a Vulnerability

If you find a security vulnerability, please **do not open a public issue**.

Instead, follow these steps:

1. **Email us directly** at: `team@obrix.dev`
2. Provide as much detail as possible:
    - Affected components or files
    - Steps to reproduce
    - Potential impact
    - Suggested fix (if known)

We will respond to reports within **72 hours** and work with you to verify and patch the issue as quickly as possible.

---

## Security Measures in Place

- ✅ Secure OTP-based authentication
- ✅ Encrypted communications (at rest and in transit)
- ✅ Rate limiting and anti-abuse checks
- ✅ Role-based permission system
- ✅ Audit logs for admin actions
- ✅ Strict API validation using TypeScript and Zod
- ✅ GitHub CodeQL analysis enabled

---

## Guidelines for Security Researchers

We welcome responsible security research. Please:

- Avoid testing on production deployments
- Avoid denial-of-service (DoS) or automated scans
- Avoid accessing user data that isn’t yours
- Provide a reasonable time frame for us to fix issues before disclosure

If you follow these guidelines, we’ll credit your contribution in our changelog or acknowledgments section (if desired).

---

## Credits

We thank the community and contributors who help make this project secure.

# Security Policy

## Scope

This is a static, front-end-only demo (pure HTML, CSS, and vanilla JavaScript — no backend, no server-side code, no user data collection, no authentication). That limits the realistic attack surface mostly to:

- Malicious or unsafe code introduced via a contribution (e.g., a PR that adds obfuscated JS, remote script includes, or exfiltrates data)
- Vulnerable third-party assets or embedded links (e.g., a broken/hijacked external resource URL)
- DOM-based issues such as unsafe use of `innerHTML` with unsanitized input, if input handling is ever added

There is no npm dependency tree and no build pipeline at this time, so there are no package vulnerabilities to track — if that changes (e.g., dependencies are introduced), this policy should be updated to include dependency scanning.

## Supported Versions

This project doesn't maintain multiple release branches. Only the code on `main` is supported; please make sure you're using the latest commit before reporting an issue.

| Branch | Supported |
| :--- | :--- |
| `main` | ✅ |

## Reporting a Vulnerability

If you find a security issue — for example, a PR or commit that introduces unsafe/obfuscated code, a script tag pointing to an untrusted remote source, or any behavior that could compromise someone visiting the page:

1. **Please do not open a public issue for it.** Use GitHub's private reporting instead: go to the **Security** tab of this repository → **Report a vulnerability**.
2. Include:
   - A description of the issue and where it lives (file/line if possible)
   - Steps to reproduce or a proof of concept
   - The potential impact as you see it
3. You should get an initial response within a few days. This is a solo-maintained project, so please be patient — there's no dedicated security team.

## What to Expect

- Confirmed issues will be fixed on `main` as soon as reasonably possible, given this is a hobby/portfolio project rather than production software with SLAs.
- No bug bounty program is offered.
- Credit will be given in the fix's commit message or release notes if you'd like it (just say so in your report).

## Best Practices for Contributors

To keep this project safe for anyone who clones or views it:
- Don't add remote `<script src>` or `<link>` tags pointing to unverified third-party domains.
- Don't introduce `eval()`, `innerHTML` with unsanitized strings, or other patterns that could enable script injection if the project later accepts user input.
- Keep the project dependency-free unless a clear need is discussed in an issue first — fewer dependencies means fewer things to secure.

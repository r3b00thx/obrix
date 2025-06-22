# Commit Message Guidelines

We use a simplified version of the Conventional Commits format to keep our commit history clean, consistent, and easy to understand.

## 🧩 Format

Each commit message must follow this format:

`<type>(<scope>): short description`

Longer description (optional, wrapped at 72 characters per line).  
Use this section to explain what was done and why — not how.

## ✅ Types

Use one of the following types to describe the purpose of the change:

- feat: A new feature
- fix: A bug fix
- refactor: Code cleanup that doesn't add features or fix bugs
- chore: Build process, config, dependency or infra changes
- docs: Documentation only changes
- style: UI/CSS/style updates (no logic changes)
- test: Adding or modifying tests
- perf: Performance improvements
- ci: CI/CD or GitHub Actions-related updates

## 🧱 Scope

Use the scope to indicate the part of the app you're working on. Examples:  
auth, chat, api, db, ui, infra, config, server, client, app

## ✍️ Examples

```
feat(auth): add OTP-based login flow
Implements OTP-only authentication with session fallback. UI still pending.

fix(chat): message list doesn't scroll to bottom
Fixes auto-scroll bug when new messages arrive in a long chat.

chore(app): init project structure and lint config
Adds Next.js 14 layout, ESLint, and Prettier configs.

refactor(api): move user logic into separate service
No functional changes, just separation of concerns.
```

## 🔁 Best Practices

- Use the imperative mood: add, fix, refactor, not added, fixes, refactored
- Avoid vague commit messages like "update" or "fix stuff"
- Wrap long descriptions at 72 characters per line
- Group related small changes into a single commit
- Avoid mixing unrelated changes in one commit
- Use issue references if relevant:  
  Closes #12  
  Related to #7

## ✅ Summary

- Keep commits small and focused
- Use the correct type and scope
- Write clear, meaningful commit messages
- Make it easy for others (and future-you) to understand what changed and why

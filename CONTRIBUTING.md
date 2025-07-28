# Contributing to anivisuals

Thank you for considering contributing to **anivisuals**. We’re thrilled to have your support. Whether you're here to:

- Report an issue
- Propose an idea
- Submit bug fixes or features
- Help with testing and docs
- Just explore the code

You're welcome here.

---

## Quickstart for Development

To get your local environment set up:

1. Fork the repo and clone it locally
2. Ensure you're running Node.js v16 or later
3. Install project dependencies:

   ```bash
   npm install
   ```

4. Duplicate `.env.example` as `.env` and configure it as needed
5. Start the development server:

   ```bash
   npm run dev
   ```

---

## How Contributions Work

We use GitHub for version control, issues, and pull requests. To contribute:

1. Create a new branch from `main`
2. Commit your changes with clear messages
3. Push to your fork and open a pull request
4. Describe what your PR does and reference any related issues

---

## Testing

We use **Jest** for testing. Please:

- Write unit tests for new features or logic
- Use `__tests__` folders or `.test.ts` files
- Run tests with:

  ```bash
  npm test
  ```

- Ensure your code passes tests before submitting a PR

---

## Code Style & Best Practices

### TypeScript

- Use strict mode (enabled in `tsconfig.json`)
- Add types for all variables, parameters, and return values
- Prefer interfaces for object shapes

### Code Quality

- Lint with **ESLint**
- Format with **Prettier**
- Add meaningful JSDoc where appropriate
- Use clear variable/function names
- Write small, modular functions
- Favor `async/await` over `.then()`
- Handle errors using `try/catch`
- Store config in environment variables

---

## Pull Request Guidelines

Before submitting a PR:

1. Make sure tests pass
2. Follow the code style guidelines
3. Update documentation if needed
4. Add or adjust tests
5. Document any new dependencies

PRs are reviewed by maintainers before merging.

---

## Reporting Issues

To report bugs, use GitHub's issue tracker:

- Open a new issue at: [github.com/Kai4632/anivisuals/issues](https://github.com/Kai4632/anivisuals/issues)
- Include a clear summary and steps to reproduce
- Describe expected vs. actual behavior
- Add logs, screenshots, or code if helpful

---

## High-Impact Contribution Areas

We’d especially love help with:

- Better interaction flow logic
- Expanding platform integrations
- Strengthening app security
- Improving UI/UX polish
- Writing and improving documentation
- Test coverage and reliability

---

## Code Review Workflow

Every contribution goes through a review process:

- Open a pull request
- A maintainer (like [@Kai4632](https://github.com/Kai4632)) will review your changes
- We check:
  - Clarity and readability
  - Type safety and correctness
  - Test completeness
  - Documentation updates
  - Potential bugs or security concerns

---

## Editor & IDE Setup

To work smoothly:

- Enable TypeScript support
- Install ESLint and Prettier plugins
- Format on save
- Use a consistent branch naming pattern:

  ```bash
  git checkout -b feature/your-feature-name
  ```

---

## License

All contributions are made under the [MIT License](LICENSE). By submitting your code, you agree to license it under MIT.

---

Need help or want to chat? Reach out via 
<!-- [Telegram @Kai4632](https://t.me/Kai4632)  -->
or on GitHub at [@Kai4632](https://github.com/Kai4632).

thanks for all the current and future contributors for making cute panels a thing!

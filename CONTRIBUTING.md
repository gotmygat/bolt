# Contributing to CloudChain Pay

First off, thank you for considering contributing to CloudChain Pay! It's people like you that make CloudChain Pay such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our commitment to creating a welcoming and inclusive environment. Please be respectful and constructive in all interactions.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if relevant**
- **Note your environment** (OS, browser, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List any alternatives you've considered**

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. Ensure the test suite passes
4. Make sure your code follows the existing code style
5. Write a clear commit message

## Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/cloudchainpay.git

# Navigate to the directory
cd cloudchainpay

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## Project Structure

```
cloudchainpay/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── lib/            # Utilities and helpers
│   └── types/          # TypeScript type definitions
├── public/             # Static assets
├── docs/               # Documentation
└── tests/              # Test files
```

## Coding Standards

### JavaScript/TypeScript

- Use TypeScript for all new files
- Follow the existing code style (we use ESLint)
- Write meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### React Components

- Use functional components with hooks
- Keep components focused on a single responsibility
- Extract reusable logic into custom hooks
- Use proper TypeScript types for props

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters
- Reference issues and pull requests when relevant

Example:
```
Add Lightning Network support for Bitcoin payments

- Implement LN invoice generation
- Add payment status monitoring
- Update documentation

Fixes #123
```

## Testing

- Write unit tests for new features
- Ensure all tests pass before submitting PR
- Aim for meaningful test coverage
- Test edge cases and error conditions

```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Check test coverage
npm test -- --coverage
```

## Documentation

- Update README.md if you change functionality
- Add JSDoc comments for functions and components
- Update API.md for API changes
- Include examples in documentation

## Review Process

1. A team member will review your PR
2. Address any feedback or requested changes
3. Once approved, your PR will be merged
4. Your contribution will be included in the next release

## Recognition

Contributors are recognized in:
- The project README
- Release notes
- Our contributors page

## Questions?

Feel free to:
- Open an issue for questions
- Email us at support@cloudchainpay.com
- Join our community discussions

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to CloudChain Pay!

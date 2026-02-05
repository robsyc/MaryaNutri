# GitHub Copilot Instructions for MaryaNutri

## Project Overview
MaryaNutri is a web application focused on ending malnutrition and saving lives. The project is built with modern web technologies and follows best practices for web development.

## Technology Stack
- **Framework**: SvelteKit 2.0 with Svelte 5.0
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS with custom animations, tailwind-merge, clsx
- **Build Tool**: Vite
- **Deployment**: Vercel adapter
- **Internationalization**: sveltekit-i18n for multi-language support
- **UI Components**: bits-ui, lucide-svelte icons
- **Animations**: svelte-motion (external lib), svelte/motion (built-in), d3-interpolate
- **Forms**: EmailJS for contact form functionality

## Development Workflow

### Running the Project
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Create production build
npm run preview      # Preview production build
```

### Code Quality
```bash
npm run check        # Type-check with svelte-check
npm run lint         # Run ESLint and Prettier checks
npm run format       # Format code with Prettier
```

## Coding Standards

### TypeScript
- Use strict TypeScript mode (already enabled in tsconfig.json)
- Always define explicit types for props and function parameters
- Use interfaces for complex object structures
- Leverage SvelteKit's type safety features

### Svelte Components
- Use `<script lang="ts">` for all components
- Use the `export let` syntax for component props with type annotations
- Follow the component structure: script → style → markup
- Use reactive statements (`$:`) for derived values
- Prefer composition over inheritance
- Use `onMount` for lifecycle hooks requiring DOM access

### Styling
- Use Tailwind CSS utility classes as the primary styling method
- Use `class:` directives for conditional styling
- Follow mobile-first responsive design approach
- Leverage Tailwind's built-in animations and custom animations from tailwindcss-animate
- Use `clsx` or `tailwind-merge` for conditional class combinations

### Code Organization
- Place reusable components in `src/lib/components/`
- Place UI components in `src/lib/components/ui/`
- Use SvelteKit's file-based routing in `src/routes/`
- Use `$lib` alias for imports from `src/lib/`
- Keep components focused and single-responsibility

### Naming Conventions
- Components: PascalCase (e.g., `CountUp.svelte`, `SustainabilityFacts.svelte`)
- Files: kebab-case for routes and utilities
- Variables and functions: camelCase
- Types and interfaces: PascalCase
- Constants: UPPER_SNAKE_CASE

### Best Practices
- Always check for existing utility functions before creating new ones
- Use SvelteKit's built-in features (load functions, form actions, etc.)
- Implement proper error handling
- Optimize images and assets
- Use lazy loading for heavy components or images
- Implement accessibility features (ARIA labels, keyboard navigation, etc.)
- Use IntersectionObserver for scroll-based animations
- Test responsive behavior across different screen sizes

### Internationalization
- Use the `sveltekit-i18n` library for translations
- Keep translation keys organized and meaningful
- Support multi-language content where applicable

### Performance
- Minimize bundle size by importing only what's needed
- Use dynamic imports for heavy dependencies
- Optimize images before adding to the project
- Use Vite's build optimizations

## Project-Specific Patterns

### Animation Pattern
When creating animated components:
- Use `tweened` or `spring` from Svelte's built-in `svelte/motion` module for value animations
- Use `svelte-motion` library for more advanced motion features
- Use IntersectionObserver to trigger animations on scroll
- Use easing functions from `svelte/easing`
- See `src/lib/components/CountUp.svelte` for reference

### Component Props Pattern
```typescript
export let target: number = 0;        // Explicit type with default
export let duration: number = 1000;   // Always provide defaults when sensible
export let suffix: string = '';       // Document purpose in comments if needed
```

### Conditional Rendering
- Use `{#if}` blocks for conditional rendering
- Use `{#each}` for lists with proper key attributes
- Use `{#await}` for async data handling

## Security Considerations
- Never commit sensitive data (API keys, tokens, etc.)
- Use environment variables for configuration
- Sanitize user input
- Follow OWASP security best practices
- Keep dependencies up to date (check for vulnerabilities)

## Contributing
- Write clean, maintainable code
- Follow the existing code style
- Test your changes locally before committing
- Keep commits focused and atomic
- Write meaningful commit messages

## Resources
- [SvelteKit Documentation](https://kit.svelte.dev/)
- [Svelte Documentation](https://svelte.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

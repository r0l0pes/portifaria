# Refactoring Implementation Plan

## 1. Scope & Constraints

### Must Change
- Remove CDN-based dependencies (Tailwind CSS, React, Recharts, Lucide React)
- Split `App.tsx` (1314 lines) into smaller, focused components
- Add error boundaries for major sections
- Split `constants.ts` (1458 lines) into domain-specific files
- Set up testing infrastructure (Vitest + React Testing Library)
- Optimize performance (debounce/throttle events, code splitting)
- Implement state management (React Context for dark mode and navigation)
- Add accessibility improvements (ARIA labels, keyboard navigation)
- Move hardcoded values to environment variables
- Enable stricter TypeScript configuration
- Reorganize folder structure
- Remove duplicate `useInView` hook from `App.tsx`
- Extract magic numbers to constants
- Add JSDoc documentation
- Optimize build configuration
- Fix analytics initialization

### Must NOT Change
- Content data (text, case studies, blog posts, experience)
- Visual design (colors, animations, layout)
- External URLs (LinkedIn, GitHub, email, etc.)
- Component functionality and behavior
- Deployment target (Netlify)
- Google Analytics measurement ID (move to env, keep same value)

---

## 2. High-Level Refactor Phases

### Phase 1: Dependency & Build Configuration
**Objective**: Replace CDN dependencies with npm bundles and configure build tooling
**Expected Outcome**: All dependencies bundled locally, optimized build configuration

### Phase 2: Folder Structure Reorganization
**Objective**: Create proper component and file organization
**Expected Outcome**: Logical folder structure with separated concerns

### Phase 3: Component Extraction
**Objective**: Split monolithic `App.tsx` into focused components
**Expected Outcome**: Each section as separate, testable component

### Phase 4: Content Separation
**Objective**: Split `constants.ts` into domain-specific files
**Expected Outcome**: Content organized by domain (hero, experience, case studies, blog)

### Phase 5: State Management
**Objective**: Implement React Context for global state
**Expected Outcome**: Centralized dark mode and navigation state

### Phase 6: Error Handling
**Objective**: Add error boundaries
**Expected Outcome**: Graceful error handling for major sections

### Phase 7: Performance Optimization
**Objective**: Optimize scroll/mouse events and implement code splitting
**Expected Outcome**: Reduced re-renders, lazy-loaded components

### Phase 8: Accessibility & Security
**Objective**: Add ARIA labels, keyboard navigation, and environment variables
**Expected Outcome**: WCAG-compliant interactive elements, secure configuration

### Phase 9: Testing Infrastructure
**Objective**: Set up Vitest and React Testing Library
**Expected Outcome**: Test framework ready with initial component tests

### Phase 10: Documentation & Type Safety
**Objective**: Add JSDoc comments and enable stricter TypeScript
**Expected Outcome**: Documented codebase with improved type safety

---

## 3. Detailed Task Breakdown

### Task 1.1: Install npm Dependencies
**Description**: Install Tailwind CSS, React, Recharts, and Lucide React via npm
**Files to modify**: `package.json`
**Actions**:
- Add `tailwindcss` to devDependencies
- Add `@tailwindcss/vite` to devDependencies
- Add `postcss` to devDependencies
- Add `autoprefixer` to devDependencies
- Verify `react`, `react-dom`, `recharts`, `lucide-react` are in dependencies
**Dependencies**: None

### Task 1.2: Configure Tailwind CSS
**Description**: Set up Tailwind CSS with PostCSS configuration
**Files to create**: `tailwind.config.js`, `postcss.config.js`
**Files to modify**: `vite.config.ts`, `index.html`
**Actions**:
- Create `tailwind.config.js` with dark mode class strategy and brand colors
- Create `postcss.config.js` with tailwindcss and autoprefixer plugins
- Add `@tailwindcss/vite` plugin to `vite.config.ts`
- Remove Tailwind CDN script from `index.html`
- Remove Tailwind config script from `index.html`
- Add `@import './index.css'` to `index.tsx`
**Dependencies**: Task 1.1

### Task 1.3: Create CSS Entry Point
**Description**: Create index.css with Tailwind directives and custom styles
**Files to create**: `index.css`
**Actions**:
- Add Tailwind directives (@tailwind base, components, utilities)
- Move custom scrollbar styles from `index.html` to `index.css`
- Move font import from `index.html` to `index.css`
- Move `.text-outline` class from `index.html` to `index.css`
**Dependencies**: Task 1.2

### Task 1.4: Remove Import Map
**Description**: Remove CDN import map from index.html
**Files to modify**: `index.html`
**Actions**:
- Remove `<script type="importmap">` block
- Remove esm.sh CDN references
**Dependencies**: Task 1.1

### Task 1.5: Configure Build Optimization
**Description**: Add build optimizations to vite.config.ts
**Files to modify**: `vite.config.ts`
**Actions**:
- Add build.rollupOptions.output.manualChunks for vendor splitting
- Add build.chunkSizeWarningLimit
- Add build.minify
- Add build.sourcemap for production
**Dependencies**: Task 1.2

### Task 2.1: Create Folder Structure
**Description**: Create new folder structure for organized code
**Folders to create**:
- `src/components/layout/`
- `src/components/sections/`
- `src/components/ui/`
- `src/lib/`
- `src/types/`
- `src/constants/`
- `src/context/`
- `tests/`
- `tests/unit/`
- `tests/integration/`
**Dependencies**: None

### Task 2.2: Move Existing Components
**Description**: Move existing components to new structure
**Files to move**:
- Move `src/components/ui/ScrollProgress.tsx` to `src/components/ui/` (already correct)
- Move `src/components/animations/` to `src/components/animations/` (already correct)
- Move `src/hooks/` to `src/hooks/` (already correct)
**Dependencies**: Task 2.1

### Task 2.3: Move Types
**Description**: Move types.ts to src/types/
**Files to move**: `types.ts` → `src/types/index.ts`
**Actions**:
- Move file
- Update all imports from `./types` to `@/types`
**Dependencies**: Task 2.1

### Task 3.1: Extract Header Component
**Description**: Extract Header component from App.tsx
**Files to create**: `src/components/layout/Header.tsx`
**Files to modify**: `App.tsx`
**Actions**:
- Create `src/components/layout/Header.tsx` with Header component (lines 219-298 from App.tsx)
- Remove Header component from App.tsx
- Import Header in App.tsx
**Dependencies**: Task 2.1

### Task 3.2: Extract HeroContent Component
**Description**: Extract HeroContent component from App.tsx
**Files to create**: `src/components/sections/Hero.tsx`
**Files to modify**: `App.tsx`
**Actions**:
- Create `src/components/sections/Hero.tsx` with HeroContent component (lines 300-387 from App.tsx)
- Remove HeroContent from App.tsx
- Import Hero in App.tsx
**Dependencies**: Task 2.1

### Task 3.3: Extract AboutContent Component
**Description**: Extract AboutContent component from App.tsx
**Files to create**: `src/components/sections/About.tsx`
**Files to modify**: `App.tsx`
**Actions**:
- Create `src/components/sections/About.tsx` with AboutContent component (lines 389-533 from App.tsx)
- Remove AboutContent from App.tsx
- Import About in App.tsx
**Dependencies**: Task 2.1

### Task 3.4: Extract Work/CaseStudies Component
**Description**: Extract Work section component from App.tsx
**Files to create**: `src/components/sections/Work.tsx`
**Files to modify**: `App.tsx`
**Actions**:
- Create `src/components/sections/Work.tsx` with Work section (identify Work section in App.tsx)
- Remove Work section from App.tsx
- Import Work in App.tsx
**Dependencies**: Task 2.1

### Task 3.5: Extract Writings Component
**Description**: Extract Writings section component from App.tsx
**Files to create**: `src/components/sections/Writings.tsx`
**Files to modify**: `App.tsx`
**Actions**:
- Create `src/components/sections/Writings.tsx` with Writings section (identify Writings section in App.tsx)
- Remove Writings section from App.tsx
- Import Writings in App.tsx
**Dependencies**: Task 2.1

### Task 3.6: Extract Contact Component
**Description**: Extract Contact section component from App.tsx
**Files to create**: `src/components/sections/Contact.tsx`
**Files to modify**: `App.tsx`
**Actions**:
- Create `src/components/sections/Contact.tsx` with Contact section (identify Contact section in App.tsx)
- Remove Contact section from App.tsx
- Import Contact in App.tsx
**Dependencies**: Task 2.1

### Task 3.7: Extract SectionCard Component
**Description**: Extract SectionCard component from App.tsx
**Files to create**: `src/components/layout/SectionCard.tsx`
**Files to modify**: `App.tsx`
**Actions**:
- Create `src/components/layout/SectionCard.tsx` with SectionCard component (lines 209-217 from App.tsx)
- Remove SectionCard from App.tsx
- Import SectionCard in App.tsx
**Dependencies**: Task 2.1

### Task 3.8: Extract AnimatedBackground Component
**Description**: Extract AnimatedBackground component from App.tsx
**Files to create**: `src/components/animations/AnimatedBackground.tsx`
**Files to modify**: `App.tsx`
**Actions**:
- Create `src/components/animations/AnimatedBackground.tsx` with AnimatedBackground component (lines 42-121 from App.tsx)
- Remove AnimatedBackground from App.tsx
- Import AnimatedBackground in App.tsx
**Dependencies**: Task 2.1

### Task 3.9: Extract GlobalStyles Component
**Description**: Extract GlobalStyles component from App.tsx
**Files to create**: `src/components/animations/GlobalStyles.tsx`
**Files to modify**: `App.tsx`
**Actions**:
- Create `src/components/animations/GlobalStyles.tsx` with GlobalStyles component (lines 124-205 from App.tsx)
- Remove GlobalStyles from App.tsx
- Import GlobalStyles in App.tsx
**Dependencies**: Task 2.1

### Task 3.10: Extract useInView Hook
**Description**: Remove duplicate useInView hook from App.tsx
**Files to modify**: `App.tsx`
**Actions**:
- Remove custom useInView hook (lines 14-34 from App.tsx)
- Replace all usages with framer-motion's useInView
**Dependencies**: Task 3.1-3.9

### Task 4.1: Split Constants - Hero Data
**Description**: Extract HERO_DATA to separate file
**Files to create**: `src/constants/hero.ts`
**Files to modify**: `constants.ts`
**Actions**:
- Create `src/constants/hero.ts` with HERO_DATA export
- Remove HERO_DATA from constants.ts
- Update import in App.tsx and components
**Dependencies**: Task 2.1

### Task 4.2: Split Constants - Experience
**Description**: Extract EXPERIENCE to separate file
**Files to create**: `src/constants/experience.ts`
**Files to modify**: `constants.ts`
**Actions**:
- Create `src/constants/experience.ts` with EXPERIENCE export
- Remove EXPERIENCE from constants.ts
- Update import in App.tsx and components
**Dependencies**: Task 2.1

### Task 4.3: Split Constants - Case Studies
**Description**: Extract CASE_STUDIES to separate file
**Files to create**: `src/constants/caseStudies.ts`
**Files to modify**: `constants.ts`
**Actions**:
- Create `src/constants/caseStudies.ts` with CASE_STUDIES export
- Remove CASE_STUDIES from constants.ts
- Update import in App.tsx and components
**Dependencies**: Task 2.1

### Task 4.4: Split Constants - Blog Posts
**Description**: Extract BLOG_POSTS to separate file
**Files to create**: `src/constants/blogPosts.ts`
**Files to modify**: `constants.ts`
**Actions**:
- Create `src/constants/blogPosts.ts` with BLOG_POSTS export
- Remove BLOG_POSTS from constants.ts
- Update import in App.tsx and components
**Dependencies**: Task 2.1

### Task 4.5: Create Constants Barrel Export
**Description**: Create index.ts for constants
**Files to create**: `src/constants/index.ts`
**Actions**:
- Export all constants from individual files
- Provide backward compatibility by re-exporting all
**Dependencies**: Task 4.1, 4.2, 4.3, 4.4

### Task 5.1: Create App Context
**Description**: Create React Context for global state
**Files to create**: `src/context/AppContext.tsx`
**Actions**:
- Create AppContext with darkMode state
- Create AppProvider component
- Create useApp hook
**Dependencies**: Task 2.1

### Task 5.2: Integrate App Context
**Description**: Wrap app with AppProvider
**Files to modify**: `index.tsx`, `App.tsx`, `src/components/layout/Header.tsx`
**Actions**:
- Wrap App with AppProvider in index.tsx
- Replace local darkMode state in App.tsx with useApp hook
- Replace local darkMode state in Header.tsx with useApp hook
**Dependencies**: Task 5.1

### Task 5.3: Add Navigation State to Context
**Description**: Add navigation state to AppContext
**Files to modify**: `src/context/AppContext.tsx`
**Actions**:
- Add activeSection state to context
- Add navigate function to context
**Dependencies**: Task 5.1

### Task 6.1: Create Error Boundary Component
**Description**: Create ErrorBoundary component
**Files to create**: `src/components/ui/ErrorBoundary.tsx`
**Actions**:
- Create ErrorBoundary class component
- Implement componentDidCatch and getDerivedStateFromError
- Add fallback UI
**Dependencies**: Task 2.1

### Task 6.2: Wrap Sections with Error Boundaries
**Description**: Add error boundaries to major sections
**Files to modify**: `App.tsx`
**Actions**:
- Wrap Hero section with ErrorBoundary
- Wrap About section with ErrorBoundary
- Wrap Work section with ErrorBoundary
- Wrap Writings section with ErrorBoundary
- Wrap Contact section with ErrorBoundary
**Dependencies**: Task 6.1, Task 3.1-3.6

### Task 7.1: Optimize useScrollProgress
**Description**: Add throttling to scroll progress hook
**Files to modify**: `src/hooks/useScrollProgress.ts`
**Actions**:
- Implement throttling using requestAnimationFrame
- Reduce state update frequency
**Dependencies**: None

### Task 7.2: Optimize AnimatedBackground Mouse Events
**Description**: Add throttling to mouse move events
**Files to modify**: `src/components/animations/AnimatedBackground.tsx`
**Actions**:
- Verify requestAnimationFrame is used (already implemented in lines 59-61)
- Ensure cleanup is proper
**Dependencies**: Task 3.8

### Task 7.3: Implement Code Splitting
**Description**: Add React.lazy for heavy components
**Files to modify**: `App.tsx`
**Actions**:
- Convert Work section to lazy load
- Convert Writings section to lazy load
- Add Suspense wrapper with fallback
**Dependencies**: Task 3.4, 3.5

### Task 7.4: Add React.memo to Expensive Components
**Description**: Memoize components with expensive renders
**Files to modify**: `src/components/animations/TiltCard.tsx`, `src/components/animations/ParallaxSection.tsx`
**Actions**:
- Wrap TiltCard with React.memo
- Wrap ParallaxSection with React.memo
**Dependencies**: None

### Task 8.1: Create Environment Variables File
**Description**: Create .env.example and .env.local
**Files to create**: `.env.example`, `.env.local`
**Actions**:
- Create .env.example with VITE_GA_MEASUREMENT_ID=G-FJ9DNTJJR6
- Create .env.local with VITE_GA_MEASUREMENT_ID=G-FJ9DNTJJR6
- Add .env.local to .gitignore
**Dependencies**: None

### Task 8.2: Move GA ID to Environment Variable
**Description**: Use environment variable for GA measurement ID
**Files to modify**: `src/components/Analytics.tsx`
**Actions**:
- Replace hardcoded MEASUREMENT_ID with import.meta.env.VITE_GA_MEASUREMENT_ID
- Add type declaration for VITE_GA_MEASUREMENT_ID
**Dependencies**: Task 8.1

### Task 8.3: Add ARIA Labels to Interactive Elements
**Description**: Add ARIA labels to buttons and links
**Files to modify**: `src/components/layout/Header.tsx`, `src/components/sections/Hero.tsx`, `src/components/sections/About.tsx`
**Actions**:
- Add aria-label to navigation buttons
- Add aria-label to mobile menu toggle
- Add aria-label to dark mode toggle
- Add aria-label to download resume button
**Dependencies**: Task 3.1, 3.2, 3.3

### Task 8.4: Add Keyboard Navigation to TiltCard
**Description**: Make TiltCard keyboard accessible
**Files to modify**: `src/components/animations/TiltCard.tsx`
**Actions**:
- Add tabIndex={0} to motion.div
- Add onKeyDown handler for Enter and Space keys
- Add role="button" or appropriate role
**Dependencies**: None

### Task 8.5: Configure CSP Headers
**Description**: Add Content Security Policy to netlify.toml
**Files to modify**: `netlify.toml`
**Actions**:
- Add [[headers]] section
- Add CSP header allowing self and necessary CDNs
**Dependencies**: None

### Task 9.1: Install Testing Dependencies
**Description**: Install Vitest and React Testing Library
**Files to modify**: `package.json`
**Actions**:
- Add `vitest` to devDependencies
- Add `@testing-library/react` to devDependencies
- Add `@testing-library/jest-dom` to devDependencies
- Add `@testing-library/user-event` to devDependencies
- Add `jsdom` to devDependencies
**Dependencies**: None

### Task 9.2: Configure Vitest
**Description**: Create vitest.config.ts
**Files to create**: `vitest.config.ts`
**Files to modify**: `package.json`
**Actions**:
- Create vitest.config.ts with jsdom environment
- Add test script to package.json
- Add test:ui script to package.json
**Dependencies**: Task 9.1

### Task 9.3: Create Test Setup File
**Description**: Create test setup file
**Files to create**: `tests/setup.ts`
**Actions**:
- Import @testing-library/jest-dom
- Configure global test utilities
**Dependencies**: Task 9.2

### Task 9.4: Create Component Tests
**Description**: Create initial component tests
**Files to create**: `tests/unit/ScrollProgress.test.tsx`, `tests/unit/AnimatedText.test.tsx`
**Actions**:
- Create test for ScrollProgress component
- Create test for AnimatedText component
- Create test for CountUp component
**Dependencies**: Task 9.3

### Task 10.1: Enable Stricter TypeScript
**Description**: Update tsconfig.json with stricter options
**Files to modify**: `tsconfig.json`
**Actions**:
- Change `allowJs` to false
- Change `skipLibCheck` to false
- Add `strict: true`
- Add `noUnusedLocals: true`
- Add `noUnusedParameters: true`
- Add `noImplicitReturns: true`
- Add `noFallthroughCasesInSwitch: true`
**Dependencies**: None

### Task 10.2: Extract Magic Numbers to Constants
**Description**: Create constants file for magic numbers
**Files to create**: `src/lib/constants.ts`
**Files to modify**: `src/hooks/useScrollProgress.ts`, `src/components/animations/AnimatedText.tsx`, `src/components/animations/TiltCard.tsx`
**Actions**:
- Create `src/lib/constants.ts` with:
  - SCROLL_THRESHOLD = 0.1
  - ANIMATION_DELAY_MS = 100
  - SPRING_STIFFNESS = 300
  - SPRING_DAMPING = 20
  - TILT_AMOUNT_DEFAULT = 10
  - SCALE_DEFAULT = 1.02
- Replace magic numbers in useScrollProgress.ts
- Replace magic numbers in AnimatedText.tsx
- Replace magic numbers in TiltCard.tsx
**Dependencies**: Task 2.1

### Task 10.3: Add JSDoc Comments
**Description**: Add JSDoc documentation to components and hooks
**Files to modify**: All component and hook files
**Actions**:
- Add JSDoc to all exported components with @param and @returns
- Add JSDoc to all exported hooks with @param and @returns
- Add JSDoc to all exported types/interfaces
**Dependencies**: Task 3.1-3.9, Task 10.2

### Task 10.4: Fix Analytics Initialization
**Description**: Move analytics initialization to index.tsx
**Files to modify**: `index.tsx`, `App.tsx`, `src/components/Analytics.tsx`
**Actions**:
- Remove Analytics component from App.tsx
- Call initGA() in index.tsx after root.render
- Call logPageView() in index.tsx
- Keep logEvent export in Analytics.tsx
**Dependencies**: Task 8.2

---

## 4. Folder & File Structure (Final Expected State)

```
portifaria/
├── .env.example
├── .env.local
├── .gitignore
├── App.tsx
├── DEPLOYMENT.md
├── README.md
├── REFACTORING_PLAN.md
├── index.css
├── index.html
├── index.tsx
├── metadata.json
├── netlify.toml
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
├── copy-content/
│   ├── accenture_case_study.md
│   ├── Articles.md
│   ├── case_study_ca_brasil_checkout.md
│   ├── case_study_ca_brasil_whatsapp.md
│   ├── FORVIA_HELLA_Case_Study.md
│   ├── Resume_Rodrigo-Lopes.pdf
│   └── wfp_case_study_final.md
├── public/
│   ├── _redirects
│   └── Resume_Rodrigo-Lopes.pdf
├── src/
│   ├── components/
│   │   ├── animations/
│   │   │   ├── AnimatedBackground.tsx
│   │   │   ├── AnimatedText.tsx
│   │   │   ├── GlobalStyles.tsx
│   │   │   ├── PageTransition.tsx
│   │   │   ├── ParallaxSection.tsx
│   │   │   └── TiltCard.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── SectionCard.tsx
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Work.tsx
│   │   │   └── Writings.tsx
│   │   └── ui/
│   │       ├── Analytics.tsx
│   │       ├── ErrorBoundary.tsx
│   │       └── ScrollProgress.tsx
│   ├── constants/
│   │   ├── blogPosts.ts
│   │   ├── caseStudies.ts
│   │   ├── experience.ts
│   │   ├── hero.ts
│   │   └── index.ts
│   ├── context/
│   │   └── AppContext.tsx
│   ├── hooks/
│   │   └── useScrollProgress.ts
│   ├── lib/
│   │   └── constants.ts
│   └── types/
│       └── index.ts
└── tests/
    ├── integration/
    ├── setup.ts
    └── unit/
        ├── AnimatedText.test.tsx
        └── ScrollProgress.test.tsx
```

---

## 5. Acceptance Criteria

### Build & Runtime
- [ ] `npm install` completes without errors
- [ ] `npm run dev` starts development server on port 3000
- [ ] `npm run build` completes without errors
- [ ] `npm run preview` serves production build successfully
- [ ] No console errors in browser
- [ ] All pages render correctly
- [ ] Dark mode toggle works
- [ ] Navigation between sections works
- [ ] All animations function as before
- [ ] Scroll progress indicator works
- [ ] Charts render correctly

### Testing
- [ ] `npm run test` runs without errors
- [ ] All unit tests pass
- [ ] Test coverage report generates

### Code Quality
- [ ] No TypeScript errors
- [ ] No ESLint errors (if configured)
- [ ] All imports use @/ aliases where appropriate
- [ ] No duplicate code
- [ ] All components have JSDoc comments
- [ ] No magic numbers in code

### Performance
- [ ] Bundle size reduced (measure with `npm run build -- --report`)
- [ ] No scroll event listener leaks
- [ ] No memory leaks in animations
- [ ] Lazy-loaded sections load on demand

### Accessibility
- [ ] All interactive elements have ARIA labels
- [ ] Keyboard navigation works for all custom components
- [ ] Focus management is correct
- [ ] Screen reader announces changes appropriately

### Security
- [ ] No hardcoded secrets in code
- [ ] Environment variables are used for configuration
- [ ] CSP headers are configured
- [ ] .env.local is in .gitignore

---

## 6. Guardrails for the Coding Agent

### Do NOT Refactor or "Improve"
- **Content**: Do not change any text, case studies, blog posts, or experience data
- **Visual Design**: Do not change colors, animations, layout, or styling
- **External URLs**: Do not change LinkedIn, GitHub, email, or any external links
- **Functionality**: Do not change component behavior or user interactions
- **Deployment**: Do not change Netlify configuration beyond CSP headers
- **Analytics**: Do not change GA measurement ID value (only move to env var)

### Style Constraints
- **Naming**: Use existing naming conventions (camelCase for variables, PascalCase for components)
- **File Structure**: Follow the exact folder structure specified in Section 4
- **Imports**: Use @/ aliases for internal imports where configured
- **TypeScript**: Use strict types, avoid `any`, use proper interfaces
- **Comments**: Use JSDoc format for documentation

### Tooling Constraints
- **Build Tool**: Use Vite (do not switch to Webpack, Rollup, etc.)
- **Testing**: Use Vitest + React Testing Library (do not use Jest, Cypress, etc.)
- **Styling**: Use Tailwind CSS (do not switch to CSS Modules, styled-components, etc.)
- **State Management**: Use React Context (do not use Redux, Zustand, etc.)
- **Linting**: If adding ESLint, use standard React configuration

### Architectural Constraints
- **Component Size**: Keep extracted components under 300 lines
- **File Size**: Keep individual files under 500 lines
- **Dependencies**: Do not add new dependencies beyond those specified
- **Breaking Changes**: Do not make changes that require content updates
- **Backward Compatibility**: Maintain existing component APIs where possible

### Execution Order
- Execute tasks in the order specified in Section 3
- Complete all tasks in a phase before moving to the next phase
- Respect task dependencies
- Do not skip tasks

### Testing Requirements
- Write tests for all new components
- Maintain existing functionality
- All tests must pass before completing a phase
- Do not remove existing functionality without tests

### Documentation Requirements
- Add JSDoc to all new components and hooks
- Update README if necessary (only for build/run commands)
- Document any breaking changes in comments
- Keep inline comments minimal and meaningful

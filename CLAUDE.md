# Claude Instructions for Newsletter UI

React 18 + TypeScript + Tailwind 3 email component library. Storybook 8 for dev/docs. Figma as design source.

**Purpose:** This repo is a design system for building GitLaw marketing emails and newsletters. Claude uses these components to compose new email templates.

## Quick Start

```bash
npm install          # Node 18+
npm run storybook    # http://localhost:6007
npm run build-storybook  # build check — run before every PR
```

## Project Structure

```
src/
├── components/       # Email components (flat: Button.tsx, Hero.tsx, …)
├── specs/            # Design tokens + specs (single source of truth)
│   ├── colors.tokens.js   # All color primitives + semantic tokens (plain JS for Node compat)
│   ├── colors.ts          # Re-exports with TypeScript types
│   └── index.ts           # Barrel — import from '../specs', not individual files
├── stories/          # Storybook stories (components + template stories)
├── assets/email/     # Email images (logos, photos, illustrations)
└── styles/globals.css # Font imports, transition utilities

public/               # Static assets served by Storybook
```

## Existing Components

| Component | Description |
|-----------|-------------|
| Wrapper | Outermost container — 700px, white, rounded, shadow, flex column |
| Header | Logo at top — image or text wordmark fallback |
| Hero | Large Georgia headline, optional yellow highlight, body, CTA |
| Button | CTA link styled as purple pill button (`<a>` tag, not `<button>`) |
| Divider | Horizontal rule separator between sections |
| SectionHeader | Section heading in two sizes (lg/md) |
| FeatureBlock | Colored banner block (purple/light-purple/green) with text overlay |
| TemplateCard | Decorative document card (300x300, dashed border, skeleton bars) |
| Footer | Footer with tagline, site URL, address, unsubscribe link |

## How to Compose an Email Template

Every email follows this structure:

```tsx
<Wrapper>
  <Header logoSrc={logoUrl} />
  <Hero
    headline="Your headline here"
    highlightText="word to highlight"
    body="Body paragraph text"
    ctaLabel="Call to Action"
    ctaHref="#"
  />
  {/* Content sections — mix and match: */}
  <FeatureBlock variant="purple" text="Feature headline" />
  <Divider />
  <SectionHeader size="md">Section Title</SectionHeader>
  <TemplateCard title="Document Name" generatedIn="1.2s" />
  <Footer />
</Wrapper>
```

### Template Patterns

Each template has its own story under `Email/Templates/`:

| Template | Structure |
|----------|-----------|
| Welcome | Header → Hero → FeatureBlock(purple, tall) → Footer |
| eSign Announce | Header → Hero → FeatureBlock(light-purple, tall) → Footer |
| 1st Contract | Header → Hero → 2x FeatureBlock → 2x TemplateCard (side-by-side) → Footer |
| Trust Marks | Header → Hero → security icons grid → user photos → investor logos → Footer |
| Recommended Docs | Header → Hero → repeated (SectionHeader + TemplateCards + Button + Divider) → Footer |
| Feedback | Header → Hero (text-only, no feature blocks) → Footer |

## Storybook Hierarchy

```
Email/
├── Components/       # Individual component stories (Default + AllVariants)
│   ├── Wrapper
│   ├── Header
│   ├── Hero
│   ├── Button
│   ├── Divider
│   ├── SectionHeader
│   ├── FeatureBlock
│   ├── TemplateCard
│   └── Footer
└── Templates/        # Full email template compositions
    ├── Welcome
    ├── eSign Announce
    ├── 1st Contract
    ├── Trust Marks
    ├── Recommended Docs
    └── Feedback
```

- Component stories: `title: 'Email/Components/<Name>'`
- Template stories: `title: 'Email/Templates/<Name>'`

## Rules

### Colors

`colors.tokens.js` is the single source of truth. Both `tailwind.config.js` and `colors.ts` import from it.

- **In component JS/TS** — `import { colors } from '../specs'`, never hardcoded hex
- **In Tailwind classes** — use semantic names: `bg-primary`, `text-foreground`, `border-border`, etc.
- **Email-specific colors** — `bg-email-light-purple`, `bg-email-green`, `text-email-green-text`, `border-email-green-border`
- **To change a color** — edit only `colors.tokens.js`; everything else inherits

### Spacing & Radius

Custom tokens defined in `tailwind.config.js`:

- **Spacing:** `p-gitlaw-m` (8px), `gap-gitlaw-l` (12px), `m-gitlaw-xl` (16px), etc.
  Sizes: `xxs`=1px, `xs`=2px, `s`=4px, `m`=8px, `l`=12px, `xl`=16px, `2xl`=24px, `3xl`=32px, `4xl`=48px
- **Border radius:** `rounded-gitlaw-s` (4px), `rounded-gitlaw-m` (8px), `rounded-gitlaw-full` (pill)

### Components

All components use `React.forwardRef` and accept native element props:

```tsx
import React, { forwardRef } from 'react';

type NativeProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'className'>;

export interface MyComponentProps extends NativeProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>(({
  variant = 'primary',
  className = '',
  ...nativeProps
}, ref) => (
  <div ref={ref} className={`... ${className}`} {...nativeProps} />
));

MyComponent.displayName = 'MyComponent';
```

- Export component + types from `src/components/index.ts`
- Use `transition-interactive` (color changes) or `transition-fade` (opacity)
- Button is an `<a>` tag (correct for HTML emails), not `<button>`

### Email-Specific Fonts

- **Headlines:** `font-georgia` → `'GT Super Ds Trial', Georgia, serif` (52px, `leading-[1.2]`)
- **Body text:** `font-sans` → `DM Sans` (standard size scale)

### Email Layout Constraints

- **Fixed width:** 700px (set by Wrapper)
- **No media queries** — email clients don't support them reliably
- **No CSS Grid** — use flexbox only
- **Tailwind is fine for dev/preview** — production email sending should inline styles

### Don't

- Don't import directly from `colors.tokens.js` or `colors.ts` in components — use `'../specs'`
- Don't use Tailwind default spacing (`p-2`, `p-4`) — use `gitlaw-*` tokens
- Don't use inline `style={}` — use Tailwind classes
- Don't use `<button>` for CTAs — use `<a>` tags (Button does this correctly)
- Don't create responsive breakpoints — emails are fixed-width
- Don't prefix component names with `Email` — this is an email-only repo

### Stories

Component stories — max **3-4 stories** per file:

| Story | Purpose | Required |
|-------|---------|----------|
| Default | Controllable with args panel | Always |
| AllVariants | Grid of all visual states | Always |
| Interactive | Stateful demo | If needed |

Component story meta boilerplate:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from '../components/MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Email/Components/MyComponent',
  component: MyComponent,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;
```

Template story meta boilerplate:

```tsx
const meta: Meta<typeof Wrapper> = {
  title: 'Email/Templates/My Template',
  component: Wrapper,
  parameters: { layout: 'centered', backgrounds: { default: 'email-green' } },
};
```

### Git

- **Always branch** — `feature/`, `fix/`, `chore/`. Never commit to `main` directly.
- Merge via PR (squash). Merge to `main` triggers production Vercel deploy.
- Include `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>` in commits.

## Adding New Email Components

1. **Figma first** — use Figma MCP to extract specs
2. **Recap specs with user** — agree on structure before coding
3. **Build** — component in `src/components/`, story in `src/stories/`, export in `index.ts`
4. **Verify** — compare against Figma screenshot

## Composing New Newsletters

When asked to create a new newsletter/email template:

1. **Choose template pattern** — pick the closest match from the 6 templates under `Email/Templates/`
2. **Create a new story** — in `src/stories/Template<Name>.stories.tsx`
3. **Compose from primitives** — use existing components, don't create new ones unless needed
4. **Assets** — put any new images in `src/assets/email/`
5. **Preview** — check in Storybook that layout is correct at 700px width

## Deployment

Deploys via **GitHub Actions** → Vercel (same pattern as gitlaw-ui).

| Trigger | Target |
|---------|--------|
| Push to `main` | Production |
| Push to any other branch | Preview |

**GitHub Secrets required:** `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`, `VERCEL_TOKEN`

## After Every Task

Always check whether this file (`CLAUDE.md`) needs updating:
- New or removed component → update "Existing Components" table
- New pattern or convention → add to relevant "Rules" section

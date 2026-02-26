---
name: new-template
description: Create a new email template story by composing existing components. Pass the template name as an argument.
disable-model-invocation: false
allowed-tools: Read, Grep, Glob, Write, Edit
argument-hint: "<TemplateName>"
---

# New Email Template

Create a new email template story named `$ARGUMENTS` by composing existing components.

## Pre-flight

1. Check if a template story already exists: `src/stories/Template$ARGUMENTS.stories.tsx`
2. If it exists, stop and inform the user
3. Read the existing template stories to understand the patterns:
   - `src/stories/TemplateWelcome.stories.tsx` — simple: Hero + FeatureBlock
   - `src/stories/TemplateRecommendedDocs.stories.tsx` — complex: repeated sections
   - `src/stories/TemplateFeedback.stories.tsx` — minimal: text-only Hero

## Step 1: Choose the Closest Pattern

Review the 6 existing template patterns and pick the closest match:

| Template | Structure |
|----------|-----------|
| Welcome | Header → Hero → FeatureBlock(purple, tall) → Footer |
| eSign Announce | Header → Hero → FeatureBlock(light-purple, tall) → Footer |
| 1st Contract | Header → Hero → 2x FeatureBlock → 2x TemplateCard → Footer |
| Trust Marks | Header → Hero → security icons → user photos → investor logos → Footer |
| Recommended Docs | Header → Hero → repeated (SectionHeader + TemplateCards + Button + Divider) → Footer |
| Feedback | Header → Hero (text-only, no feature blocks) → Footer |

## Step 2: Create the Template Story

Create `src/stories/Template$ARGUMENTS.stories.tsx`:

```tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Wrapper } from '../components/Wrapper';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
// Import other components as needed
import emailLogoSrc from '../assets/email/email-logo.svg';

const meta: Meta<typeof Wrapper> = {
  title: 'Email/Templates/$ARGUMENTS',
  component: Wrapper,
  parameters: { layout: 'centered', backgrounds: { default: 'email-green' } },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="p-gitlaw-4xl">
      <Wrapper>
        <Header logoSrc={emailLogoSrc} />
        <Hero
          headline="Your headline here"
          highlightText="highlight"
          body="Body paragraph text"
        />
        {/* Add content sections here */}
        <Footer />
      </Wrapper>
    </div>
  ),
};
```

### Rules:
- Title must be `'Email/Templates/$ARGUMENTS'`
- File name must be `Template$ARGUMENTS.stories.tsx`
- Always wrap in `<div className="p-gitlaw-4xl"><Wrapper>...</Wrapper></div>`
- Always include Header with `emailLogoSrc` and Footer
- Use `backgrounds: { default: 'email-green' }` in parameters
- Only one story per template: `Default`
- Use existing components — don't create new ones unless necessary
- Put any new images in `src/assets/email/`

## Step 3: Update Storybook Sort Order

Add the new template name to `.storybook/preview.ts` in the `Templates` sort array.

## Step 4: Update CLAUDE.md

Add the new template to the "Template Patterns" table and the "Storybook Hierarchy" tree.

## Step 5: Verify

1. Run `npm run build-storybook` to verify the build passes
2. Check in Storybook that the template renders correctly at 700px width

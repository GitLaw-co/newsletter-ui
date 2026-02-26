---
name: new-story
description: Create a Storybook story file for an existing email component. Pass the component name as an argument.
disable-model-invocation: false
allowed-tools: Read, Grep, Glob, Write, Edit
argument-hint: "<ComponentName>"
---

# New Story

Create a Storybook story file for the existing component `$ARGUMENTS`.

## Pre-flight

1. Verify the component exists: check `src/components/$ARGUMENTS.tsx`
2. If it doesn't exist, stop and tell the user to create the component first (or use `/new-component`)
3. Check if a story already exists: `src/stories/$ARGUMENTS.stories.tsx`
4. If it exists, stop and inform the user
5. Read the component file to understand its props, variants, and sizes

## Step 1: Create the Story File

Create `src/stories/$ARGUMENTS.stories.tsx`:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { $ARGUMENTS } from '../components/$ARGUMENTS';

const meta: Meta<typeof $ARGUMENTS> = {
  title: 'Email/Components/$ARGUMENTS',
  component: $ARGUMENTS,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    // Add controls for key props based on the component's interface
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
```

### Required Stories (max 3-4 total):

**Default** (always required):
```tsx
export const Default: Story = {
  args: {
    // Set sensible defaults that showcase the component
  },
};
```

**AllVariants** (always required):
```tsx
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-gitlaw-xl">
      {/* Grid showing all visual states: variants x sizes x states */}
    </div>
  ),
};
```

**Interactive** (only if the component has stateful behavior):
```tsx
export const Interactive: Story = {
  render: () => {
    return <div>{/* Stateful demo */}</div>;
  },
};
```

### Rules:
- Title must be `'Email/Components/$ARGUMENTS'`
- Do NOT create individual stories for each variant
- Individual states belong in the AllVariants grid
- The Default story must be controllable via Storybook's args panel
- Use `gitlaw-*` spacing tokens for layout (`gap-gitlaw-xl`, `p-gitlaw-m`)

---
name: update-claude-md
description: Review recent changes to the codebase and update CLAUDE.md accordingly. Checks for new/removed components, changed paths, and new patterns.
disable-model-invocation: false
allowed-tools: Read, Grep, Glob, Edit, Bash
---

# Update CLAUDE.md

Review the current state of the codebase and ensure `CLAUDE.md` is accurate and up to date.

## Steps

### 1. Check Existing Components Table

Compare the "Existing Components" table against actual component files:

1. List all `.tsx` files in `src/components/` (excluding `index.ts`)
2. Compare against the table in CLAUDE.md
3. Add rows for any new components
4. Remove rows for any deleted components

### 2. Check Template Patterns Table

Compare the "Template Patterns" table against actual template stories:

1. List all `Template*.stories.tsx` files in `src/stories/`
2. Compare against the table in CLAUDE.md
3. Add/remove rows as needed

### 3. Check Storybook Hierarchy

Verify the hierarchy tree matches reality:

1. Check `Email/Components/` list matches component story files
2. Check `Email/Templates/` list matches template story files
3. Update the tree if needed

### 4. Check Project Structure

Verify the directory tree matches reality:

1. Check for any new directories under `src/`
2. Check for renamed or removed directories
3. Update if needed — keep it minimal

### 5. Verify Accuracy

Spot-check a few entries:

1. Verify color token examples in `colors.tokens.js`
2. Verify spacing token names in `tailwind.config.js`
3. Check `.storybook/preview.ts` sort order matches the hierarchy documentation

### 6. Apply Changes

- Keep edits minimal — one-line table rows, not paragraphs
- Maintain existing formatting and style
- Do not add lengthy descriptions

Report a summary of all changes made.

---
name: build-check
description: Run the Storybook build and report any errors. Use before creating PRs or after making changes to verify nothing is broken.
disable-model-invocation: false
allowed-tools: Bash
---

# Build Check

Run the Storybook build to verify the project compiles cleanly.

## Steps

1. Run: `npm run build-storybook`
2. Report the result:
   - **Success**: Confirm the build passed. Chunk size warnings are OK and can be ignored.
   - **Failure**: List all errors with file paths and line numbers. Suggest fixes for each error.
3. If there are TypeScript or import errors, identify the root cause and suggest the specific fix needed.

Do NOT automatically fix errors — report them and let the user decide. The purpose of this skill is verification, not modification.

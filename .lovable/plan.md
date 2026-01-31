

## Overview

Enhance the Hero section's typing animation to cycle through multiple words randomly instead of just "Evidence". The words will be: **Evidence**, **Insights**, **Actions**, and **Results**.

## Changes

### File: `src/components/Hero.tsx`

1. **Add an array of words** to cycle through:
   - `["Evidence", "Insights", "Actions", "Results"]`

2. **Add state to track the current word index**:
   - New state variable to keep track of which word is currently being displayed

3. **Modify the typing animation logic**:
   - After erasing a word completely, randomly select the next word from the array
   - Ensure the new word is different from the current one (avoid repeating the same word twice in a row)

4. **Update the typing cycle**:
   - Use the current word from the array instead of the static `fullText` variable
   - When starting a new cycle, pick a random word from the remaining options

## Technical Details

```text
┌─────────────────────────────────────────────────────┐
│                  Animation Flow                      │
├─────────────────────────────────────────────────────┤
│  1. Type word character by character (150ms each)   │
│  2. Wait 2 seconds when complete                    │
│  3. Erase character by character (100ms each)       │
│  4. Wait 1 second                                   │
│  5. Pick random NEW word (different from current)   │
│  6. Repeat from step 1                              │
└─────────────────────────────────────────────────────┘
```

The implementation will use `useRef` to track the current word index (avoiding unnecessary re-renders) and a helper function to select a random word that's different from the current one.


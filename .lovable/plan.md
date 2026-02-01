
# Fix: Hero Subtitle Text Layout

## Problem
The hero subtitle text is wrapping awkwardly, causing the em-dash (`—`) to appear on its own line. This happens because:
1. The em-dash is at the end of the first text segment before the `<br>` tag
2. At certain viewport widths, the text wraps before the dash, leaving it isolated

## Solution
Restructure the subtitle to prevent the awkward line break:
1. Remove the explicit `<br>` tag that forces a line break on desktop
2. Use a non-breaking space or wrap the dash with "evidence" to keep them together
3. Let the text flow naturally with proper max-width constraints

## Technical Changes

### File: `src/components/Hero.tsx`

**Current code (lines 99-103):**
```jsx
<p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
  Simulate real customers to test product, UX, and campaigns before you go live —
  <br className="hidden md:block" />
  evidence in hours, not weeks.
</p>
```

**Updated code:**
```jsx
<p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
  Simulate real customers to test product, UX, and campaigns before you go live
  <span className="hidden md:inline"><br /></span>
  <span className="md:hidden"> — </span>
  <span className="hidden md:inline">— </span>evidence in hours, not weeks.
</p>
```

**Alternative simpler approach (recommended):**
```jsx
<p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
  Simulate real customers to test product, UX, and campaigns before you go live — evidence in hours, not weeks.
</p>
```

This removes the forced line break entirely and lets the text flow naturally. The slightly reduced `max-w-2xl` helps control line length for readability.

## Summary
- Remove the `<br>` tag that was causing awkward text wrapping
- Let the subtitle flow as a single paragraph
- Adjust max-width to `max-w-2xl` for better line length control

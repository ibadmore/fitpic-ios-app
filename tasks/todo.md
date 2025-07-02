# Like Button Heart Color Fix - Todo List

## Current State Analysis

### How the Like Button Currently Works:
1. **HTML Structure**: Like buttons use the class `action-button like-button` with a heart SVG icon
2. **JavaScript**: The `toggleLike(button)` function in `script.js` adds/removes the `liked` class
3. **Current CSS Styling**: 
   - Lines 942-950 in `styles.css` define the `.action-button.liked` selector
   - Currently changes the **background** to red (#FF3B30) and border color
   - Makes the SVG icon white on red background
4. **Issue**: User wants the heart itself to be red, not the background

### Changes Needed:
- Instead of changing background to red, change the SVG fill/stroke to red
- Keep the background white/transparent when liked
- Make the heart icon red (#FF3B30) when in liked state

## Todo Tasks

- [ ] **Task 1: Update CSS for liked state**
  - Remove background color change from `.action-button.liked`
  - Remove border color change 
  - Keep background white when liked
  - Change SVG fill to red when liked

- [ ] **Task 2: Test the changes**
  - Verify like button toggles heart color correctly
  - Ensure heart appears red when liked
  - Ensure heart appears black when not liked
  - Verify background stays white in both states

## Implementation Details

**Current CSS (lines 942-950):**
```css
.action-button.liked {
    background: #FF3B30;
    border-color: #FF3B30;
}

.action-button.liked svg {
    fill: white;
    stroke: white;
}
```

**Target CSS:**
```css
.action-button.liked {
    /* Keep background white - remove background/border changes */
}

.action-button.liked svg {
    fill: #FF3B30;
    stroke: #FF3B30;
}
```

## Files to Modify
- `/Users/ibad/Documents/FitPic/fitpic-ios-app/styles.css` (lines 942-950)

## Review Section
*Will be filled in after implementation*
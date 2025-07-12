# HTML-iOS Mockup Development Instructions

## 🎯 Project Context
Building mobile consumer applications (outfit organizers, gamified idea management) as HTML mockups for eventual Swift/iOS conversion. Focus on automation, visual consistency, and iOS-ready patterns.

## 🛠️ Development Workflow

### 1. Planning Phase
- **Think through the problem** and explore codebase for relevant files
- **Create/update plan** in `tasks/todo.md` with specific, measurable tasks
- **Check in for approval** before implementation begins

### 2. Implementation Phase
- Work on approved tasks, marking complete as you go
- **Provide high-level updates** after each change (1-2 sentences max)
- **Simplicity is key**: Every change should impact minimal code
- Move completed tasks to "completed work" section in batches

### 3. Git Workflow - Grouped Commits
After completing **logical groups of work**:
```bash
git status          # Review changes first
git add .           # Stage all changes
git commit -m "Descriptive message summarizing batch"
git push origin main
```

**Commit Triggers:**
- Complete feature implementation (3-5 related tasks)
- Major bug fix resolution
- End of work session with substantial progress
- Logical milestone completion

**Avoid:** Single-task commits, micro-commits, uncommitted work accumulation

## 📱 Mobile-Specific Guidelines

### Visual Implementation
- **Reference images**: Use provided photos to extract design tokens
- **Touch-first**: Minimum 44x44pt touch targets
- **Responsive**: Design for 320px minimum width
- **Animations**: Use Framer Motion for gesture-based interactions

### Tech Stack Patterns
```javascript
// Component structure aligned with SwiftUI
const Card = ({ children, onSwipe }) => {
  // Mirrors SwiftUI's declarative approach
  return (
    <motion.div 
      className="rounded-lg shadow-md p-4"
      whileTap={{ scale: 0.98 }}
      drag="x"
      onDragEnd={onSwipe}
    >
      {children}
    </motion.div>
  );
};
```

### File Organization
```
src/
├── components/
│   ├── ui/          # Maps to SwiftUI controls
│   ├── layout/      # Maps to SwiftUI stacks
│   └── animations/  # Framer Motion components
├── features/        # Feature-based modules
│   ├── wardrobe/
│   ├── outfits/
│   └── recommendations/
└── styles/          # Tailwind + design tokens
```

## 📋 Todo.md Structure

```markdown
# [App Name] - iOS Mockup Development

## 🟢 ACTIVE TASKS
- [ ] Feature: Card Component System
    - [ ] Create base card with touch gestures
    - [ ] Add swipe-to-delete animation
    - [ ] Implement haptic feedback hooks

## 🔴 UPCOMING TASKS
- [ ] Feature: Camera Integration UI
    - [ ] Design camera capture interface
    - [ ] Create photo preview component
- [ ] SwiftUI Prep: Navigation Patterns
    - [ ] Document navigation flow
    - [ ] Create transition animations

## 📋 CURRENT PLAN
**Goal**: Build touch-optimized wardrobe management interface
**Priority**: Cards → Grid Layout → Camera UI → Navigation
**iOS Patterns**: Using VStack/HStack equivalents, @State-like hooks

---

## ✅ COMPLETED WORK

### Session N: Mobile Card System (Date)
**Focus**: Touch-optimized card components
- Created SwipeableCard with Framer Motion
- **Touch Targets**: Increased to 48x48 minimum
- Added spring animations matching iOS behavior
- **Result**: Smooth 60fps interactions

### Session N-1: Project Setup
**Setup**: TypeScript + Tailwind + Framer Motion
- Configured mobile-first breakpoints
- Set up iOS-inspired color system
- **SwiftUI Prep**: Component naming conventions
```

**Keep sessions under 150 chars when archived**

## 🚀 Automation Commands

### Available Slash Commands
- `/test-mobile` - Run mobile UI tests with screenshots
- `/animate [component]` - Add Framer Motion to component
- `/ios-preview` - Generate iOS simulator preview
- `/extract-tokens [image]` - Extract design tokens from reference

### MCP Integration
- **Figma Dev Mode**: Auto-sync design changes
- **Mobile MCP**: Test on iOS simulator
- **Puppeteer**: Visual regression testing

## 💡 Best Practices

### Prompting for Mobile UI
```xml
<context>
Building [specific feature] for [app type]
iOS target with SwiftUI conversion planned
</context>

<requirements>
- Touch-optimized with 44pt minimum targets
- Smooth 60fps animations
- Offline-first architecture
- Reference: [image path or description]
</requirements>

<technical>
Use TypeScript + Tailwind + Framer Motion
Follow atomic design principles
Prepare for SwiftUI conversion
</technical>
```

### Progressive Enhancement
1. **Structure first**: Semantic HTML with ARIA
2. **Enhance interactions**: Add touch gestures
3. **Polish animations**: Spring physics matching iOS
4. **Optimize performance**: Lazy loading, virtualization

### SwiftUI Conversion Notes
- React functional components → SwiftUI Views
- useState → @State
- useEffect → onAppear/onChange
- Flexbox → HStack/VStack
- CSS Grid → LazyVGrid
- Tailwind utilities → SwiftUI modifiers

## 🎨 Design System

### Touch Guidelines
- Minimum touch target: 44x44pt
- Spacing between targets: 8pt minimum
- Edge padding: 16pt for thumbs
- Gesture zones: Top 20% for navigation

### Animation Standards
```javascript
// iOS-inspired spring animations
const springConfig = {
  type: "spring",
  stiffness: 300,
  damping: 30
};

// Haptic feedback triggers
const hapticTriggers = ['onTap', 'onSwipeComplete', 'onError'];
```

### Color Tokens
Extract from reference images and define as:
```css
:root {
  --color-primary: /* from reference */;
  --color-surface: /* from reference */;
  --shadow-card: 0 2px 8px rgba(0,0,0,0.1);
}
```

## 📊 Performance Targets
- First paint: < 1.5s
- Interaction ready: < 3s
- Animation FPS: 60fps consistent
- Touch response: < 100ms

## 🔍 Testing Strategy
1. Visual regression with Puppeteer MCP
2. Touch interaction testing on iOS Simulator
3. Accessibility audit with mobile screen readers
4. Performance profiling in Safari DevTools

---

**Remember**: Every decision should consider the eventual Swift/iOS conversion. Build with native patterns in mind from the start.
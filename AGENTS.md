# AGENTS.md - Okta Automation Website

## Project Overview

Static HTML/CSS/JS website for Okta Automation - an industrial automation company. No build tools, no framework, no tests. Pure vanilla HTML, CSS, and JavaScript.

---

## Build & Development Commands

### Running the Site
```bash
# No build step required - open index.html directly in browser
# Or serve locally:
python3 -m http.server 8000
# Then open http://localhost:8000
```

### Testing
- **No test framework exists** - This is a static site
- Manual testing via browser only

### Code Quality
- No linting configured
- No formatting tools configured
- Manual code review required

---

## Code Style Guidelines

### General Principles

1. **Single Responsibility**: Each file should have one purpose (HTML for structure, CSS for styles, JS for behavior)
2. **Progressive Enhancement**: Core content should work without JavaScript
3. **Accessibility First**: Semantic HTML, ARIA labels, keyboard navigation
4. **Mobile-First**: Write responsive styles with mobile as baseline

---

### HTML Conventions

**File Organization:**
- `index.html` - Homepage
- `about.html` - About page
- `products/` - Product category pages
- Subdirectories for each product: `custom_automation_for_pp/`, `in-mold_labeling_(iml)_solutions/`, etc.

**Markup Rules:**
- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Always include `alt` attributes on images
- Use `<button>` for actions, `<a>` for navigation
- Keep scripts at end of `<body>` (before `</body>`)

**Example Structure:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title | Okta Automation</title>
  <meta name="description" content="Brief description for SEO">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header id="header">
    <nav class="nav-container">
      <a href="/" class="logo">Okta</a>
      <!-- nav links -->
    </nav>
  </header>
  <main>
    <!-- page content -->
  </main>
  <footer class="footer">
    <!-- footer content -->
  </footer>
  <script src="script.js"></script>
</body>
</html>
```

---

### CSS Conventions

**File:** `styles.css` (root level - single file for entire site)

**CSS Variables (Design Tokens):**
Define all colors, fonts, spacing in `:root` at top of file:
```css
:root {
  /* Colors */
  --color-bg-base: #030304;
  --color-text-main: #ededed;
  --color-primary: #3b82f6;

  /* Typography */
  --font-display: 'Space Grotesk', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;

  /* Spacing */
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;

  /* Effects */
  --radius-sm: 4px;
  --shadow-glow: 0 0 20px rgba(59, 130, 246, 0.5);
}
```

**Naming Conventions:**
- BEM-lite: `.block`, `.block--modifier`, `.block__element`
- Classes: lowercase with hyphens (`.btn-primary`, `.nav-links`)
- IDs: camelCase only where necessary (`#header`, `#mobile-menu-toggle`)

**Organization Order:**
1. Imports (@import fonts)
2. CSS Variables (`:root`)
3. Reset/Base styles
4. Typography utilities
5. Component classes
6. Layout classes
7. Section-specific styles
8. Responsive breakpoints (at end)

**Property Order:**
```css
.selector {
  /* Positioning */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;

  /* Box Model */
  display: flex;
  width: 100%;
  padding: 1rem;
  margin: 0;

  /* Visuals */
  background: #000;
  border: 1px solid #222;
  border-radius: 4px;

  /* Typography */
  font-family: var(--font-body);
  font-size: 1rem;
  color: #fff;

  /* Effects */
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.5);
}
```

**Responsive Breakpoints:**
```css
/* Tablet */
@media (max-width: 968px) {
  /* mobile overrides */
}

/* Keep mobile-first approach - default styles are mobile, override at breakpoints */
```

---

### JavaScript Conventions

**File:** `script.js` (root level)

**Structure:**
```javascript
document.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const header = document.getElementById('header');

  // Event listeners
  window.addEventListener('scroll', () => {
    // handle scroll
  });

  // Functions
  function handleAction() {
    // logic
  }
});
```

**Naming:**
- Variables/functions: camelCase (`menuToggle`, `handleClick`)
- Constants (if needed): UPPER_SNAKE_CASE
- Event handlers: descriptive names (`onMenuToggle`, `handleScroll`)

**DOM Selection:**
- Cache DOM references at top of scope
- Use `const` for elements that won't change
- Prefer `querySelector` over `getElementById` for consistency

**Error Handling:**
- Always null-check before adding listeners:
```javascript
if (menuToggle && menuOverlay) {
  menuToggle.addEventListener('click', () => { ... });
}
```

**Performance:**
- Use event delegation where appropriate
- Debounce scroll handlers if needed
- Keep animations CSS-based when possible

---

### Naming Conventions Summary

| Type | Convention | Example |
|------|------------|---------|
| HTML classes | kebab-case | `.btn-primary`, `.nav-links` |
| HTML IDs | camelCase | `#header`, `#mobileMenuToggle` |
| CSS variables | kebab-case | `--color-bg-base` |
| JavaScript variables | camelCase | `menuToggle`, `handleClick` |
| File names | kebab-case | `script.js`, `about.html` |

---

### Asset Guidelines

**Images:**
- Store in appropriate subdirectory (`icon/`, root for product images)
- Use descriptive filenames with hyphens: `automation-okta.mp4`, `logo.png`
- Optimize images before adding (WebP preferred, fallback to PNG/JPG)

**Fonts:**
- Import via Google Fonts in CSS: `@import url('...')`
- Current: Space Grotesk (display), Inter (body)
- Avoid generic fonts - use distinctive choices per design_rule.md

---

### Design Rules (from design_rule.md)

When making visual changes, follow:

1. **Typography**: Choose distinctive, memorable fonts (not Inter, Roboto, Arial)
2. **Color**: Commit to cohesive aesthetic with CSS variables; sharp accents over timid palettes
3. **Motion**: Use CSS transitions, focus on high-impact moments with staggered reveals
4. **Layout**: Unexpected layouts, asymmetry, generous negative space
5. **Details**: Add depth with textures, gradients, shadows - avoid flat designs

**Never use:**
- Generic AI-generated aesthetics
- Overused fonts (Inter, Roboto, Arial, system fonts)
- Purple gradients on white backgrounds
- Cookie-cutter design without context-specific character

---

### Common Workflows

**Adding a New Page:**
1. Create `new-page.html` in root
2. Copy structure from existing HTML file
3. Add page-specific CSS to `styles.css` (or use existing classes)
4. Add page-specific JS to `script.js` if needed (wrap in condition)

**Adding a Product:**
1. Create directory: `products/product-name/`
2. Add images to that directory
3. Link from main products page

**Debugging CSS:**
1. Use browser DevTools to inspect elements
2. Check computed styles for conflicts
3. Verify CSS variable inheritance
4. Test at multiple breakpoints

---

### When to Ask for Help

- Complex JavaScript logic requiring state management
- Adding build tools (not currently needed)
- Accessibility issues beyond basic ARIA
- Browser compatibility concerns (check CanIUse first)

---

### Quick Reference

| Task | File | Notes |
|------|------|-------|
| Add/change styles | `styles.css` | Add to appropriate section |
| Add behavior | `script.js` | Wrap in DOMContentLoaded |
| Add new page | Create new `.html` | Match existing structure |
| Change fonts | `styles.css` line 6 | Update @import |
| Colors/theme | `styles.css` lines 8-48 | Edit :root variables |
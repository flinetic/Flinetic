# Hooks

## useScrollNavigation

A custom hook for handling smooth scrolling to sections when using clean URL routing.

### Purpose

This hook replaces the old hash-based navigation (`/#services`) with clean URLs (`/services`) while maintaining smooth scrolling functionality.

### How it works

1. **Clean URLs**: Instead of `/#services`, we now use `/services`
2. **Section Detection**: The hook receives a `section` parameter from the route
3. **Auto Scroll**: Automatically scrolls to the specified section when the component mounts
4. **Home Handling**: When section is "home", scrolls to the top of the page
5. **Smooth Animation**: Uses the existing Lenis smooth scrolling or falls back to native scrolling

### Usage

```javascript
import useScrollNavigation from '../hooks/useScrollNavigation'

function HomePage({ section }) {
  // Automatically scrolls to the section specified in the route
  useScrollNavigation(section)

  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <Founders />
      </div>
      <div id="services">
        <Expertise />
      </div>
      {/* ... other sections */}
    </>
  )
}
```

### Route Configuration

The hook works with the following route structure:

```javascript
<Routes>
  <Route path="/" element={<HomePage section="home" />} />
  <Route path="/about" element={<HomePage section="about" />} />
  <Route path="/services" element={<HomePage section="services" />} />
  <Route path="/portfolio" element={<HomePage section="portfolio" />} />
  <Route path="/contact" element={<HomePage section="contact" />} />
  
  {/* Service detail pages */}
  <Route path="/services/web" element={<WebServices />} />
  <Route path="/services/app" element={<AppServices />} />
  <Route path="/services/iot" element={<IoTServices />} />
</Routes>
```

### Benefits

- **Clean URLs**: No more hash symbols in URLs
- **SEO Friendly**: Each section has its own URL
- **Consistent Structure**: `/services` → `/services/web` follows a logical hierarchy
- **Smooth Scrolling**: Maintains the same smooth scrolling experience
- **Browser History**: Back/forward buttons work correctly with clean URLs
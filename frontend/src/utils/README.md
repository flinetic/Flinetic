# Utility Functions

## Scroll Utils

Utility functions for smooth scrolling that work with both Lenis smooth scrolling and native browser scrolling.

### Functions

#### `scrollToElement(elementId, offset, duration)`
Smoothly scrolls to an element by its ID.

**Parameters:**
- `elementId` (string) - The ID of the element to scroll to (without #)
- `offset` (number, optional) - Offset from the top in pixels (default: 80px for navigation)
- `duration` (number, optional) - Animation duration in seconds (default: 1.2s)

**Example:**
```javascript
import { scrollToElement } from '../utils/scrollUtils'

// Scroll to services section
scrollToElement('services')

// Scroll to about section with custom offset
scrollToElement('about', 100)
```

#### `scrollToPosition(position, duration)`
Smoothly scrolls to a specific Y position.

**Parameters:**
- `position` (number) - The Y position to scroll to
- `duration` (number, optional) - Animation duration in seconds (default: 1.2s)

#### `scrollToTop(duration)`
Scrolls to the top of the page.

**Parameters:**
- `duration` (number, optional) - Animation duration in seconds (default: 1.2s)

### Features

- **Lenis Integration** - Automatically uses Lenis smooth scrolling when available
- **Fallback Support** - Falls back to native browser scrolling if Lenis is not available
- **Navigation Offset** - Accounts for fixed navigation bar height
- **Consistent API** - Same interface regardless of scrolling method used

### Usage with Clean URL Navigation

The scroll utilities are automatically used by the `useScrollNavigation` hook to handle section navigation with clean URLs (e.g., `/services/web` → `/services`).
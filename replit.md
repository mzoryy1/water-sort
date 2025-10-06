# Color Sort Puzzle Game

## Overview

This is a browser-based Color Sort Puzzle game built as a single-page application. The game challenges players to sort colored liquids into separate test tubes by pouring them between containers. The project uses a minimal Node.js/TypeScript backend that serves a self-contained HTML file with embedded CSS and JavaScript. The game logic runs entirely in the browser.

## User Preferences

Preferred communication style: Simple, everyday language.

## Game Features

- **Progressive Difficulty**: Levels increase in complexity, starting with 3 colors and adding more as you advance
- **No Time Limit**: Think carefully and take your time to solve each puzzle
- **Visual Feedback**: Smooth animations when pouring liquids between tubes
- **Win Celebration**: Confetti animation when you complete a level
- **Unlimited Levels**: Keep playing with increasing difficulty
- **Move Counter**: Track how many moves it takes to solve each level

## How to Play

1. Click on a tube to select it
2. Click on another tube to pour the liquid
3. You can only pour if the colors match or the target tube is empty
4. Sort all colors so each tube contains only one color
5. Use the two empty tubes to help organize the colors

## System Architecture

### Frontend Architecture

**Problem**: Need to deliver an interactive puzzle game with smooth animations and vibrant visuals that works in any modern browser.

**Solution**: Single HTML file architecture with inline CSS and JavaScript. All game logic, rendering, state management, and animations happen client-side.

**Key Features**:
1. **Dynamic Level Generation**: Algorithmically creates puzzles with increasing difficulty
2. **Pour Mechanics**: Only allows valid moves (same color to same color, or to empty tube)
3. **Win Detection**: Automatically checks if all colors are properly sorted
4. **Visual Effects**: CSS animations for tube selection, liquid pouring, and confetti celebration

**Rationale**: 
- **Pros**: Zero build complexity, instant loading, no bundler required, smooth animations using CSS transitions
- **Cons**: Limited code organization, no module system for frontend code

### Backend Architecture

**Problem**: Need to serve the game to users over HTTP while maintaining TypeScript development environment.

**Solution**: Minimal Node.js HTTP server using native `http` module with TypeScript compilation via `tsx`.

**Key Decisions**:
1. **ES Modules**: Uses `"type": "module"` in package.json for modern JavaScript module syntax
2. **Direct TypeScript Execution**: Uses `tsx` for running TypeScript without pre-compilation
3. **Static Asset Serving**: Server handles both HTML and static assets (images) with proper content types
4. **No Caching**: Sets `Cache-Control: no-cache` headers for development convenience
5. **Port 5000**: Configured to run on port 5000 as required by the Replit environment

**Rationale**:
- **Pros**: Simple deployment, minimal dependencies, fast startup, easy debugging
- **Cons**: No routing flexibility, no API endpoints for game state persistence

### Data Storage

**Problem**: Game needs to track level progression and game state.

**Solution**: Client-side storage using localStorage to persist completed levels across sessions.

**Rationale**: 
- No database implementation needed for this puzzle game
- localStorage preserves progress even after page refresh
- Simple and effective for a casual puzzle game without server-side storage needs

### Color Palette

The game uses a vibrant, saturated color palette:
- **Red/Pink**: #FF3366
- **Blue**: #3366FF
- **Green**: #33FF66
- **Yellow**: #FFFF33
- **Magenta**: #FF33FF
- **Orange**: #FF9933

Background features a custom gaming-themed pattern image with colorful neon icons (computers, game controllers, puzzle pieces, etc.) overlaid with a semi-transparent dark gradient (from rgba(26, 26, 46, 0.95) to rgba(22, 33, 62, 0.95)) to make the bright colors pop while keeping the pattern visible.

## External Dependencies

### Runtime Dependencies

1. **node-fetch** (v3.3.1)
   - Purpose: HTTP client for Node.js (currently unused, could be used for future features like leaderboards)

### Development Dependencies

1. **@types/node** (v20.10.0)
   - Purpose: TypeScript type definitions for Node.js built-in modules
   - Enables type checking for `http`, `fs`, `path`, `url` modules

2. **tsx** (v4.7.1)
   - Purpose: TypeScript execution engine
   - Allows running `.ts` files directly without compilation step

### Infrastructure

- **Server**: Node.js native HTTP server (no Express or other framework)
- **Port**: 5000 (configured for Replit environment)
- **Host**: 0.0.0.0 (accepts connections from any network interface)
- **Build Tool**: esbuild (via tsx dependency) for TypeScript transformation

## Recent Changes (October 6, 2025)

### Latest Update - Mobile Responsive Design
- Added comprehensive mobile responsiveness optimizations for Android devices:
  - Enhanced viewport meta tags with touch optimization settings
  - Added `touch-action: manipulation` to prevent double-tap zoom on interactive elements
  - Implemented media queries for tablets (max-width: 768px) and phones (max-width: 480px)
  - Scaled down titles, buttons, and tubes for smaller screens
  - Set minimum button height to 44px for better touch targets
- Improved gameplay UI:
  - Removed "Restart Level" and "Select Level" buttons from gameplay controls
  - Kept "Back to Menu" button for easier navigation during gameplay
  - Win screen still allows replaying levels
- Added custom gaming-themed background image with colorful neon pattern
- Updated server to serve static assets (images) with proper content types

### Previous Changes
- Converted project from simple "Hello World" to full Color Sort Puzzle game
- Implemented complete game logic with level progression
- Added visual effects including animations and confetti celebrations
- Created responsive UI with vibrant color scheme on dark background
- Configured server to properly serve HTML file with ES modules support
- Updated port to 5000 for proper Replit deployment

## Notes

- The application has minimal external dependencies, making it lightweight and easy to deploy
- No database, authentication, or external API integrations currently implemented
- The architecture supports future expansion (e.g., adding Express, database for high scores, or external services) without major refactoring

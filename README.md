# Ayasc Platform

Ayasc Platform is a modern web application designed to provide a robust, scalable, and visually appealing platform for a variety of business and technology solutions. This project leverages the latest technologies in the React and Next.js ecosystem, with a focus on modularity, performance, and developer experience.

## Features

- **Animated Backgrounds**: Dynamic and visually engaging backgrounds for a modern UI.
- **Responsive Navigation Bar**: Adaptive navigation for desktop and mobile devices.
- **Sectioned Landing Page**: Modular sections for About, AI Development, App Development, Automation, Network, Outsourcing, Sales, Software, and Web Development.
- **Reusable UI Components**: Includes accordions, dialogs, cards, forms, tables, tooltips, and more for rapid development.
- **Theme Support**: Light and dark mode support via a theme provider.
- **Custom Hooks**: Utilities for mobile detection, scroll animation, and toast notifications.
- **Modern Styling**: Uses Tailwind CSS for utility-first, responsive design.
- **SEO Friendly**: Configured for optimal search engine visibility.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **UI Library**: React
- **Styling**: Tailwind CSS, PostCSS
- **Package Manager**: pnpm
- **State Management**: React Context (for theme and UI state)
- **Other Tools**: 
  - Custom hooks for enhanced UX
  - Modular component architecture

## Project Structure

```
app/            # Next.js app directory (routing, layout, pages)
components/     # Reusable UI and section components
hooks/          # Custom React hooks
lib/            # Utility functions
public/         # Static assets
styles/         # Global and component styles
```

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/m-anas456/Ayasc-Platform.git
   cd Ayasc-Platform
   ```
2. **Install dependencies:**
   ```sh
   pnpm install
   ```
3. **Run the development server:**
   ```sh
   pnpm dev
   ```
4. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Scripts

- `pnpm dev` — Start the development server
- `pnpm build` — Build for production
- `pnpm start` — Start the production server

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

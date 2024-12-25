# Volunteers Today

## Original Prompt to o1
"""I've just created a new Nuxt 3 app, and want to build out my UI before I add Firebase and Pinia. This will be a SaaS volunteer coordinator app named Volunteers Today. It will be very similar to a food delivery app with the following use case. Volunteer Coordinators will be our initial users, who will register through the SaaS signup. These users will have role = coordinator and during onboarding will be asked to invite their volunteers who will get a special register page url that defaults them to volunteer and sets their groupId to indicate their coordinator. Be thoughtful and create a plan with numbered steps, small increments where I'll branch my main git and work toward a solution then merge it back in upon success. We should build out a basic scaffolding in Nuxt, create 'coming soon' pages for the auth system, an index that will fully present the SaaS in a one-page setup, a landing page with curated info from the index, and a dashboard where everything else will live. I want the dashboard to have a modular setup with collapsable drag and drop widgets for each view/vue we need. On mobile especially, I want it to appear to the user as if everything is happening in this one page, by using animations and transitions to bring the ui into the widget, then back out again. I want it to be so easy to use that an 8 year old could explain it to their grandparents. Let's setup all of our UI before we begin working on the backend. I want to use TailwindCSS and DaisyUI, I want it to be 100% accessible scores and 100% mobile-first in both the UI and the UX. Dashboard will have 'edit profile' widget, settings, available 'Opportunities', 'My Committments', Achievements, and Leaderboard. Opportunities should have 'title', 'delivery-location' (address), 'delivery-dateTime', and a list of one or more items with 'name', and 'quantity-requested'. A volunteer will only see opportunities from their coordinator, but can 'commit' through a checkout style process to deliver one or more quantity of one or more items, which are then allocated to that volunteer and reduced from the available number of that item in that opportunity, which should be updated on front end in all views. (use progress bars to indicate 'quantity-allocated' of 'quantity-requested'). Gather current/latest documentation for each piece of the tech stack and save it in our readme. Create a 'design system' implemented with TaiilwindCSS and DaisyUI components. Document it in the readme. Also in the readme, add the numbered list of tasks that will become our branches for sprints, and keep it updated, along with notes about choices and preferences we make along the way, then continue to reference the readme in every prompt/response throughout our project. Be bold in our design, but sleek as well. I like neumorphic thick component styles, I like glassmorphic background panels and 'god ray' sunshine lighting deco behind them. Use animation early and often to indicate location and path for our users. We will create onboarding routines and guided tours for segments in the app as well. """

This project is a Nuxt 3 SaaS volunteer coordinator app.

## Tech Stack References
- [Nuxt 3 Documentation](https://nuxt.com/docs/get-started/introduction)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [DaisyUI Documentation](https://daisyui.com/docs/)

## Design System
- TailwindCSS + DaisyUI
- Neumorphic components with glassmorphic panels and smooth transitions
- Accessible, mobile-first approach
- High contrast and unobtrusive animations

## Branch Tasks (In Order)
1. Initialize repo & set up scaffolding (index, landing, auth placeholder, dashboard).
2. Tailwind + DaisyUI integration.
3. Create design system (shared components, styles).
4. Add pages for “Coming Soon” features (Auth, Onboarding).
5. Implement dashboard with modular widgets (drag, collapse, transitions, progress bars).
6. Add guided tours/onboarding flows.
7. Expand UI with volunteer “checkout” for opportunities.

## Notes & Preferences
- Bold, sleek UI with clear animations for user flow.
- Document all choices here for future collaboration.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

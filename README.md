# Engine Console

# CONTEXT

Target: Web Application Architecture (React/Node).

Objective: Build the UI and functional mock-up for "Research Macro Batch 1", a sub-system of a larger 25-engine diagnostic platform.

Design/Tone: Dark mode, clinical, high-density data dashboard. Use monospace fonts for numerical data, strict grid layouts, and minimal padding. Aesthetic must reflect a highly technical, mission-critical operations console.

# TASK

Develop a single-page dashboard containing five distinct modular cards (representing Engines 1 through 5). Each engine card must possess specific telemetry readouts and interactive control elements.

# CORE FEATURES & ENGINE SPECIFICATIONS

Implement the following components as discrete React modules within the primary grid:

*   **Engine 1 ($\phi_1$): Ingestion Core**

    *   Function: Handles asynchronous API payload routing.

    *   UI Element: A live, scrolling terminal log window simulating incoming JSON payloads. Include a "Flush Buffer" button.

*   **Engine 2 ($\phi_2$): Heuristic Indexer**

    *   Function: Tokenizes and structures raw input.

    *   UI Element: A dynamic key-value table. Include a search/filter input field at the top of the card.

*   **Engine 3 ($\phi_3$): Prior-Art Validator**

    *   Function: Cross-references data against known cryptographic baselines.

    *   UI Element: A status indicator (Red/Green) and a progress bar simulating a hashing verification sequence.

*   **Engine 4 ($\phi_4$): Anomaly Detector**

    *   Function: Monitors input vectors for statistical deviations.

    *   UI Element: A real-time sparkline chart or line graph tracking a generic anomaly score (Y-axis: 0.0 to 1.0, X-axis: Time).

*   **Engine 5 ($\phi_5$): AEGIS Router**

    *   Function: Dispatches autonomous repair queries if system health drops.

    *   UI Element: A central "System Health ($H_{sys}$)" radial gauge. Include a locked/disabled button labeled "Execute Autonomous Repair" that only enables if the gauge is manually clicked to drop below 0.85.

# CONSTRAINTS

*   All components must be contained within a single view. No routing or pagination.

*   Do not implement an actual backend database; mock all data states using React state (useState/useEffect hooks) for immediate visualization.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ad8fde8b-c49a-48e7-81f1-749995d45637).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

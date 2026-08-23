# Make the 25-engine console real

Today every engine is a simulation: random numbers, hardcoded rows, fake timers. The goal is a console where each section accepts real input (files, text, config), stores it, processes it server-side, and shows real results.

## Foundation

Turn on Lovable Cloud to get a database, file storage, auth, and server-side compute.

- **Auth** — sign-in so uploads and runs belong to you and stay private.
- **Storage bucket** — per-engine uploads (code files, CSV/JSON datasets, spec sheets, images).
- **Tables** — `artifacts` (uploaded files + metadata), `runs` (every engine execution: inputs, outputs, duration, status), `engine_config` (per-engine saved settings), `incidents`, `traces`, `api_keys`.
- **Shared upload panel** — one real drag-and-drop uploader component reused on every engine card, plus a run history strip showing past executions pulled from the database.

## What becomes genuinely real

| Engine | Real behavior |
|---|---|
| 01 Ingestion Core | Upload JSON/NDJSON/CSV; parsed and streamed server-side, rows persisted, real error lines |
| 02 Heuristic Indexer | Real tokenizer over uploaded text; term frequencies computed and stored, filter queries the DB |
| 03 Prior-Art Validator | Real SHA-256 of uploaded bytes, compared against stored baselines; genuine match/mismatch |
| 04 Anomaly Detector | Real z-score / rolling-window stats over an uploaded numeric series |
| 05 AEGIS Router | Health score computed from actual recent run failure rate; dispatches a real AI analysis call |
| 06 Kinematic Load | Real statics: load distribution, moment arms, stress from entered geometry and payload |
| 07 Terrain Analyzer | Real rolling-resistance/friction model with published coefficients; computes tractive effort |
| 08 Torque & Thermal | Real motor power/torque and lumped thermal-mass equations from entered motor specs |
| 09 Structural Validator | Real beam/frame calculation (bending stress, deflection, safety factor) against material limits |
| 10 Market Indexer | Your specs vs. a competitor table you own and edit; scores computed from stored rows |
| 11 CodeGen | Real AI code generation streamed from Lovable AI, saved as an artifact |
| 12 AST Parser | Real AST from a real JS/TS parser over uploaded or generated code |
| 13 Syntax & Logic Validator | Real parse errors plus real static checks over that AST |
| 14 Refactor Engine | Real AI refactor with a real computed line diff |
| 15 Test Harness | Real assertion runner executing generated pure-function tests in an isolated evaluator |
| 16 Target Node | Real saved deployment targets with real reachability checks |
| 17 Edge Latency | Real timed HTTP requests to real regional endpoints |
| 18 Commit Orchestrator | Real GitHub repo commits/branches via the GitHub API (needs your token) |
| 19 Viewport Attestation | Real measured DOM/layout metrics at each width, not a status string |
| 20 Build Compiler | Real bundle of uploaded JS via a real minifier; reports real byte sizes |
| 21 CausalRail | Real public webhook endpoint; real SHA-256 normalization + dedupe of received payloads |
| 22 ProofPatch | Real unified-diff parse and apply against an uploaded file, with real validation |
| 23 IncidentDojo | Real embeddings + vector similarity search over incidents you write or upload |
| 24 ScopeShield | Real schema validation of an uploaded `.env`, plus real reachability probes |
| 25 KeyHarbor | Real encrypted key storage, real token-bucket limiter, real proxied upstream requests with rotation |

## Honest limits

Three engines need something only you can supply, and they'll show a clear "connect" state until then:

- **18 Commit Orchestrator** — needs a GitHub personal access token and repo.
- **22 ProofPatch** — can apply and validate diffs for real, but cannot run a repo's test suite; there is no sandbox VM available. It validates syntax and re-parses instead.
- **25 KeyHarbor** — proxies to whatever upstream API keys you add.

Anything that would otherwise require inventing data will show an empty state asking for input rather than fake rows.

## Sequencing

1. Cloud, auth, schema, storage, shared upload + run-history components.
2. Batches 1–2 (data ingestion and physics) — fully real math.
3. Batch 3 (real parser, AI codegen, real diff, real assertions).
4. Batches 4–5 (network probes, webhook endpoint, vector search, env validation, key proxy).

Each batch is verified in the browser with real uploaded files before moving on.

## Technical notes

Server work runs in TanStack server functions; the CausalRail webhook is a public server route with signature verification. Row-level security scopes every table to the signed-in user. Uploads go to Cloud storage with per-user paths. Real parsing uses `acorn`/`@babel/parser`, diffing uses `diff`, minification uses `esbuild`'s WASM build, embeddings and codegen use the Lovable AI gateway.

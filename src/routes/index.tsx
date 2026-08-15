import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { IngestionCore } from "@/components/engines/IngestionCore";
import { HeuristicIndexer } from "@/components/engines/HeuristicIndexer";
import { PriorArtValidator } from "@/components/engines/PriorArtValidator";
import { AnomalyDetector } from "@/components/engines/AnomalyDetector";
import { AegisRouter } from "@/components/engines/AegisRouter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Research Macro Batch 1 — Diagnostic Console" },
      {
        name: "description",
        content:
          "Mission-critical operations console for Engines 1-5: ingestion, indexing, prior-art validation, anomaly detection and AEGIS repair routing.",
      },
      { property: "og:title", content: "Research Macro Batch 1 — Diagnostic Console" },
      {
        property: "og:description",
        content:
          "High-density dark telemetry dashboard for the 25-engine diagnostic platform, batch 1 of 5 engines.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Clock() {
  const [t, setT] = useState("--:--:--");
  useEffect(() => {
    const tick = () => setT(new Date().toISOString().slice(11, 19) + "Z");
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);
  return <span className="tabular-nums text-foreground">{t}</span>;
}

function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border bg-secondary/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-2 px-3 py-2">
          <div>
            <h1 className="text-sm font-semibold tracking-widest">
              RESEARCH MACRO · BATCH 1
            </h1>
            <p className="font-mono text-[10px] text-muted-foreground">
              engines 01–05 of 25 · diagnostic platform / operations console
            </p>
          </div>
          <div className="flex items-center gap-3 font-mono text-[10px] text-muted-foreground">
            <span>
              LINK <span className="text-accent">STABLE</span>
            </span>
            <span>
              NODE <span className="text-foreground">aegis-04</span>
            </span>
            <Clock />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1600px] p-3">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-6">
          <div className="lg:col-span-3">
            <IngestionCore />
          </div>
          <div className="lg:col-span-3">
            <HeuristicIndexer />
          </div>
          <div className="lg:col-span-2">
            <PriorArtValidator />
          </div>
          <div className="lg:col-span-2">
            <AnomalyDetector />
          </div>
          <div className="lg:col-span-2">
            <AegisRouter />
          </div>
        </div>
      </main>

      <footer className="border-t border-border px-3 py-2 text-center font-mono text-[9px] tracking-widest text-muted-foreground">
        MOCK TELEMETRY · NO PERSISTENT STORE · CLIENT-STATE SIMULATION
      </footer>
    </div>
  );
}

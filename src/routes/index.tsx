import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { IngestionCore } from "@/components/engines/IngestionCore";
import { HeuristicIndexer } from "@/components/engines/HeuristicIndexer";
import { PriorArtValidator } from "@/components/engines/PriorArtValidator";
import { AnomalyDetector } from "@/components/engines/AnomalyDetector";
import { AegisRouter } from "@/components/engines/AegisRouter";
import { KinematicLoad } from "@/components/engines/KinematicLoad";
import { TerrainAnalyzer } from "@/components/engines/TerrainAnalyzer";
import { TorqueThermal } from "@/components/engines/TorqueThermal";
import { StructuralValidator } from "@/components/engines/StructuralValidator";
import { MarketIndexer } from "@/components/engines/MarketIndexer";
import { CodeGenOrchestrator } from "@/components/engines/CodeGenOrchestrator";
import { AstParser } from "@/components/engines/AstParser";
import { SyntaxLogicValidator } from "@/components/engines/SyntaxLogicValidator";
import { RefactorEngine } from "@/components/engines/RefactorEngine";
import { TestHarness } from "@/components/engines/TestHarness";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diagnostic Console — Research & Inventor Macros" },
      {
        name: "description",
        content:
          "Mission-critical operations console for Engines 1-10: research ingestion, indexing, validation, anomaly detection, AEGIS routing, and utility engineering simulation.",
      },
      { property: "og:title", content: "Diagnostic Console — Research & Inventor Macros" },
      {
        property: "og:description",
        content:
          "High-density dark telemetry dashboard for the 25-engine diagnostic platform, batches 1 and 2.",
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

function BatchSection({
  label,
  sublabel,
  children,
}: {
  label: string;
  sublabel: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <div className="border-y border-border bg-secondary/50 px-3 py-2">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-2">
          <div>
            <h2 className="text-xs font-semibold tracking-widest">{label}</h2>
            <p className="font-mono text-[10px] text-muted-foreground">{sublabel}</p>
          </div>
          <span className="font-mono text-[9px] tracking-widest text-muted-foreground">
            ACTIVE
          </span>
        </div>
      </div>
      <div className="mx-auto max-w-[1600px] p-3">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-6">{children}</div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border bg-secondary/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-2 px-3 py-2">
          <div>
            <h1 className="text-sm font-semibold tracking-widest">
              DIAGNOSTIC PLATFORM · MACRO DASHBOARD
            </h1>
            <p className="font-mono text-[10px] text-muted-foreground">
              engines 01–10 of 25 · dual macro view · operations console
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

      <main className="space-y-6">
        <BatchSection
          label="RESEARCH MACRO · BATCH 1"
          sublabel="engines 01–05 · ingestion, indexing, prior-art, anomaly, aegis routing"
        >
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
        </BatchSection>

        <BatchSection
          label="INVENTOR MACRO · BATCH 2"
          sublabel="engines 06–10 · kinematic load, terrain, torque, structural, market index"
        >
          <div className="lg:col-span-3">
            <KinematicLoad />
          </div>
          <div className="lg:col-span-3">
            <TerrainAnalyzer />
          </div>
          <div className="lg:col-span-2">
            <TorqueThermal />
          </div>
          <div className="lg:col-span-2">
            <StructuralValidator />
          </div>
          <div className="lg:col-span-2">
            <MarketIndexer />
          </div>
        </BatchSection>

        <BatchSection
          label="CODER MACRO · BATCH 3"
          sublabel="engines 11–15 · codegen, AST parse, validation, refactor, test harness"
        >
          <div className="lg:col-span-3">
            <CodeGenOrchestrator />
          </div>
          <div className="lg:col-span-3">
            <AstParser />
          </div>
          <div className="lg:col-span-2">
            <SyntaxLogicValidator />
          </div>
          <div className="lg:col-span-2">
            <RefactorEngine />
          </div>
          <div className="lg:col-span-2">
            <TestHarness />
          </div>
        </BatchSection>
      </main>

      <footer className="border-t border-border px-3 py-2 text-center font-mono text-[9px] tracking-widest text-muted-foreground">
        MOCK TELEMETRY · NO PERSISTENT STORE · CLIENT-STATE SIMULATION
      </footer>
    </div>
  );
}

import { workspaceSteps } from "@/constants/workspace";

export default function Workspace() {
  return (
    <section
      id="workspace"
      className="grid gap-6 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[0.95fr_1.05fr] sm:p-8"
    >
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-700">
          Workspace
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          A simple decision workspace sample
        </h2>
        <p className="text-sm leading-7 text-slate-600 sm:text-base">
          This component gives the page a dashboard-style ending with a compact
          task flow, notes area, and status summary.
        </p>

        <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
          <p className="text-sm text-slate-300">Decision status</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-emerald-300">
            Ready for review
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            All campaign data is consolidated here so the team can move from
            exploration to action without jumping across screens.
          </p>
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
          Workflow
        </p>
        <div className="mt-5 space-y-3">
          {workspaceSteps.map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-4 rounded-2xl bg-white px-4 py-4 shadow-sm"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-800">
                {index + 1}
              </span>
              <p className="text-sm font-medium text-slate-700">{step}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-dashed border-slate-300 p-4 text-sm leading-6 text-slate-600">
          Use this card as a starting point for more advanced workspace actions
          like approvals, comments, or document uploads.
        </div>
      </div>
    </section>
  );
}

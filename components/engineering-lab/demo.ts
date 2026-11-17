export const demos = {
  frontend: {
    label: "Frontend systems",
    project: "Quick Builder",
    subtitle: "From interaction to consistent application state.",
    steps: [
      {
        label: "Select route",
        detail:
          "A route selection begins in the interface. The saved journey and its pricing still need to catch up.",
        event: "route.selected",
        status: "Unsaved selection",
      },
      {
        label: "Save changes",
        detail:
          "The selected journey is persisted through the product API. Saving and pricing have separate lifecycles.",
        event: "itinerary.saved",
        status: "Changes saved",
      },
      {
        label: "Reconcile price",
        detail:
          "Pricing can finish before or after the save response. Reconcile with the current server state.",
        event: "pricing.reconciled",
        status: "Pricing reconciled",
      },
      {
        label: "Update view",
        detail:
          "The review reflects the saved journey. Clear state ownership keeps the steps connected as the product evolves.",
        event: "review.updated",
        status: "Journey in sync",
      },
    ],
  },
  ai: {
    label: "AI applications",
    project: "Agent Assistant",
    subtitle: "From product context to an actionable response.",
    steps: [
      {
        label: "Retrieve context",
        detail:
          "Product retrieval identifies suitable candidates. A search match alone cannot confirm availability.",
        event: "context.retrieved",
        status: "Candidates found",
      },
      {
        label: "Check live space",
        detail:
          "Supplier confirmation is required for the exact dates and room party before describing a stay as available.",
        event: "availability.checked",
        status: "Sample stay confirmed",
      },
      {
        label: "Stream events",
        detail:
          "Typed events carry response content and structured data across the service and interface boundary.",
        event: "response.streaming",
        status: "Response streaming",
      },
      {
        label: "Render actions",
        detail:
          "The interface renders a recommendation with explicit product actions, grounded in the returned evidence.",
        event: "actions.rendered",
        status: "Ready for the next step",
      },
    ],
  },
} as const;

export type DemoMode = keyof typeof demos;

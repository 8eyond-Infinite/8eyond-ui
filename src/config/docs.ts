export const sidebarData = [
  {
    protocol: "STANDARD_CORE",
    label: "Industrial Protocols",
    groups: [
      {
        title: "Text Components",
        icon: "Type",
        items: [
          { name: "Typography", href: "/components/core/typography" },
          { name: "Label", href: "/components/core/label" },
        ],
      },
      {
        title: "Actions & Signals",
        icon: "MousePointer2",
        items: [
          { name: "Button", href: "/components/core/button" },
          { name: "Badge", href: "/components/core/badge" },
          { name: "Tooltip", href: "/components/core/tooltip" },
        ],
      },
      {
        title: "Control Interface",
        icon: "Sliders",
        items: [
          { name: "Input", href: "/components/core/input" },
          { name: "Checkbox", href: "/components/core/checkbox" },
          { name: "Radio Group", href: "/components/core/radio-group" },
          { name: "Switch", href: "/components/core/switch" },
          { name: "Slider", href: "/components/core/slider" },
        ],
      },
      {
        title: "Data Matrix",
        icon: "Database",
        items: [
          { name: "Table", href: "/components/core/table" },
          { name: "Calendar", href: "/components/core/calendar" },
        ],
      },
      {
        title: "System Feedback",
        icon: "Activity",
        items: [
          { name: "Progress", href: "/components/core/progress" },
          { name: "Spinner", href: "/components/core/spinner" },
          { name: "Skeleton", href: "/components/core/skeleton" },
          { name: "Toast", href: "/components/core/toast" },
        ],
      },
      {
        title: "Containment",
        icon: "Box",
        items: [
          { name: "Card", href: "/components/core/card" },
          { name: "Accordion", href: "/components/core/accordion" },
          { name: "Separator", href: "/components/core/separator" },
          { name: "Scroll Area", href: "/components/core/scroll-area" },
        ],
      },
      {
        title: "Overlays",
        icon: "Layers",
        items: [
          { name: "Dialog", href: "/components/core/dialog" },
          { name: "Sheet", href: "/components/core/sheet" },
          { name: "Command Menu", href: "/components/core/command" },
        ],
      },
      {
        title: "Navigation",
        icon: "Compass",
        items: [
          { name: "Tabs", href: "/components/core/tabs" },
          { name: "Breadcrumb", href: "/components/core/breadcrumb" },
          { name: "Avatar", href: "/components/core/avatar" },
        ],
      },
    ],
  },
  {
    protocol: "EXTENDED_ARTIFACTS",
    label: "Alchemist Lab",
    groups: [
      {
        title: "Visual Artifacts",
        icon: "Sparkles",
        items: [
          {
            name: "Alchemist Button",
            href: "/components/visual/alchemist-button",
          },
        ],
      },
      {
        title: "Telemetry Artifacts",
        icon: "Gauge",
        items: [{ name: "Gauge", href: "/components/visual/gauge" }],
      },
    ],
  },
  {
    protocol: "TERMINAL_SOLUTIONS",
    label: "Case Studies",
    groups: [
      {
        title: "Templates",
        icon: "Layout",
        items: [
          { name: "Operator Console", href: "/templates/operator-console" },
        ],
      },
    ],
  },
];

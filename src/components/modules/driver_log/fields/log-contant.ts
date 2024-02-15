export const logConts = {
  event_type: [
    {
      key: 1,
      name: "ChangeDutyStatus",
      value: "A change in driver’s duty-status",
      codes: [
        { key: 1, value: 'Driver\'s Duty status changed to "Off Duty"' },
        { key: 2, value: 'Driver\'s Duty status changed to "Sleeper Berth"' },
        { key: 3, value: 'Driver\'s Duty status changed to "Driving"' },
        {
          key: 4,
          value: 'Driver\'s Duty status changed to "On Duty Not Driving"',
          annotations: [
            {
              key: 1,
              value: "Pre-Trip Inspection",
              text: false,
              file: false,
            },
            {
              key: 2,
              value: "Post-Trip Inspection",
              text: false,
              file: false,
            },
            { key: 3, value: "Pick Up (Loading)", text: true, file: true },
            { key: 4, value: "Delivery", text: false, file: true },
            { key: 5, value: "Fuel", text: true, file: true },
            { key: 6, value: "Hooking", text: false, file: false },
            { key: 7, value: "Dropping", text: false, file: false },
            { key: 8, value: "Safety Check", text: false, file: false },
            { key: 9, value: "DOT Inspection", text: true, file: true },
            { key: 10, value: "Check in", text: false, file: false },
            { key: 11, value: "Check out", text: false, file: false },
            { key: 12, value: "Parking", text: false, file: false },
            { key: 13, value: "Repairs", text: false, file: false },
            { key: 0, value: "Other", text: true, file: false },
          ],
        },
      ],
    },
    {
      key: 2,
      name: "IntermediateLog",
      value: "An intermediate log",
      codes: [
        {
          key: 1,
          value: "Intermediate log with conventional location precision",
        },
        { key: 2, value: "Intermediate log with reduced location precision" },
      ],
    },
    {
      key: 3,
      name: "ChangeInDriverIndication",
      value:
        "A change in driver’s indication of authorized personal use of CMV or yard moves",
      codes: [
        { key: 1, value: 'Driver indicates "Authorized Personal Use of CMV' },
        { key: 2, value: 'Driver indicates "Yard Moves"' },
        { key: 0, value: "Driver indication for PC, YM and WT cleared" },
      ],
    },
    {
      key: 4,
      name: "DriverCertification",
      value: "A driver’s certification/re-certification of records",
      codes: [],
    },
    {
      key: 5,
      name: "DriverLogIn",
      value: "A driver’s login/logout activity",
      codes: [
        { key: 1, value: "Authenticated driver’s ELD login activity" },
        { key: 2, value: "Authenticated driver’s ELD logout activity" },
      ],
    },
    {
      key: 6,
      name: "PowerUp",
      value: "CMV’s engine power up / shut down activity",
      codes: [
        {
          key: 1,
          value: "Engine power-up with conventional location precision",
        },
        { key: 2, value: "Engine power-up with reduced location precision" },
        {
          key: 3,
          value: "Engine shut down with conventional location precision",
        },
        { key: 4, value: "Engine shut-down with reduced location precision" },
      ],
    },
    {
      key: 7,
      name: "Malfunction",
      value: "A malfunction or data diagnostic detection occurrence",
      codes: [
        { key: 1, value: "An ELD malfunction logged" },
        { key: 2, value: "An ELD malfunction cleared" },
        { key: 3, value: "A data diagnostic event logged" },
        { key: 4, value: "A data diagnostic event cleared" },
      ],
    },
  ],
  color: [
    { key: 0, value: "Black", color: "#000000" },
    { key: 1, value: "Red", color: "#ff0000" },
    { key: 2, value: "Green", color: "#000000" },
    { key: 3, value: "Blue", color: "#000000" },
    { key: 4, value: "Yellow", color: "#000000" },
    { key: 5, value: "Orange", color: "#000000" },
    { key: 6, value: "Purple", color: "#000000" },
    { key: 7, value: "Pink", color: "#000000" },
    { key: 8, value: "Cyan", color: "#000000" },
    { key: 9, value: "Brown", color: "#000000" },
    { key: 10, value: "Maroon", color: "#000000" },
    { key: 11, value: "Silver", color: "#000000" },
    { key: 12, value: "Gold", color: "#000000" },
  ],
};

export const eventData = [
  { type: 1, code: 1, label: "OFF", origin: [{ key: "Driver", value: 1 }] },
  { type: 1, code: 2, label: "SB", origin: [{ key: "Driver", value: 1 }] },
  {
    type: 1,
    code: 3,
    label: "D",
    origin: [
      { key: "Auto", value: 1 },
      { key: "Driver", value: 2 },
      { key: "User", value: 3 },
    ],
  },
  {
    type: 1,
    code: 4,
    label: "ON",
    origin: [
      { key: "Driver", value: 2 },
      { key: "User", value: 3 },
      { key: "Auto", value: 1 },
    ],
  },
  {
    type: 2,
    code: 1,
    label: "Intermediate w/ CLP",
    origin: [{ key: "Auto", value: 1 }],
  },
  {
    type: 2,
    code: 2,
    label: "Intermediate w/ RLP",
    origin: [{ key: "Auto", value: 1 }],
  },
  {
    type: 3,
    code: 1,
    label: "PC",
    origin: [
      { key: "Driver", value: 2 },
      { key: "User", value: 3 },
      { key: "Unidentified", value: 4 },
    ],
  },
  {
    type: 3,
    code: 2,
    label: "YM",
    origin: [
      { key: "Driver", value: 2 },
      { key: "User", value: 3 },
      { key: "Unidentified", value: 4 },
    ],
  },
  {
    type: 3,
    code: 0,
    label: "PC/YM Cleared",
    origin: [
      { key: "Driver", value: 2 },
      { key: "User", value: 3 },
      { key: "Unidentified", value: 4 },
    ],
  },
  {
    type: 4,
    code: 1,
    label: "Certification",
    origin: [{ key: "Driver", value: 2 }],
  },
  {
    type: 4,
    code: 2,
    label: "Certification 2 - 9",
    origin: [{ key: "Driver", value: 2 }],
  },
  {
    type: 5,
    code: 1,
    label: "Login",
    origin: [
      { key: "Auto", value: 1 },
      { key: "Driver", value: 2 },
    ],
  },
  {
    type: 5,
    code: 2,
    label: "Logout",
    origin: [
      { key: "Auto", value: 1 },
      { key: "Driver", value: 2 },
    ],
  },
  {
    type: 6,
    code: 1,
    label: "Engine Power-up w/ CLP",
    origin: [{ key: "Auto", value: 1 }],
  },
  {
    type: 6,
    code: 2,
    label: "Engine Power-up w/ RLP",
    origin: [{ key: "Auto", value: 1 }],
  },
  {
    type: 6,
    code: 3,
    label: "Engine Shut-down w/ CLP",
    origin: [{ key: "Auto", value: 1 }],
  },
  {
    type: 6,
    code: 4,
    label: "Engine Shut-Down w/ RLP",
    origin: [{ key: "Auto", value: 1 }],
  },
  {
    type: 7,
    code: 1,
    label: "ELD malfunction",
    origin: [{ key: "Auto", value: 1 }],
  },
  {
    type: 7,
    code: 2,
    label: "ELD Malfunction cleared",
    origin: [{ key: "Auto", value: 1 }],
  },
  {
    type: 7,
    code: 3,
    label: "Power data diagnostic",
    origin: [{ key: "Auto", value: 1 }],
  },
  {
    type: 7,
    code: 4,
    label: "Power data diagnostic (cleared)",
    origin: [{ key: "Auto", value: 1 }],
  },
];

export const EventOptions = eventData
  .map((event) => {
    return {
      key: `${event.type}${event.code}`,
      value: event.label,
      label: event.label,
    };
  })
  .reverse();

export const annotations = [
  {
    key: 1,
    value: "Pre-Trip Inspection",
    text: false,
    file: false,
  },
  {
    key: 2,
    value: "Post-Trip Inspection",
    text: false,
    file: false,
  },
  {
    key: 3,
    value: "Pick Up (Loading)",
    text: true,
    file: true,
  },
  {
    key: 4,
    value: "Delivery",
    text: false,
    file: true,
  },
  {
    key: 5,
    value: "Fuel",
    text: true,
    file: true,
  },
  {
    key: 6,
    value: "Hooking",
    text: false,
    file: false,
  },
  {
    key: 7,
    value: "Dropping",
    text: false,
    file: false,
  },
  {
    key: 8,
    value: "Safety Check",
    text: false,
    file: false,
  },
  {
    key: 9,
    value: "DOT Inspection",
    text: true,
    file: true,
  },
  {
    key: 10,
    value: "Check in",
    text: false,
    file: false,
  },
  {
    key: 11,
    value: "Check out",
    text: false,
    file: false,
  },
  {
    key: 12,
    value: "Parking",
    text: false,
    file: false,
  },
  {
    key: 13,
    value: "Repairs",
    text: false,
    file: false,
  },
  {
    key: 0,
    value: "Other",
    text: true,
    file: false,
  },
];

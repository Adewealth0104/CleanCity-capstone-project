const wasteCategories = [
  {
    id: 1,
    name: "Plastic",
    short: "Containers, bottles, packaging and other plastic products.",
    description: "Plastic can remain in the environment for a very long time, so reducing unnecessary plastic and recovering recyclable plastic matters.",
    tips: [
      "Rinse containers when practical before recycling.",
      "Reuse durable containers instead of replacing them immediately.",
      "Keep plastic separate from food-contaminated waste where your local system requires it.",
      "Avoid burning plastic."
    ]
  },
  {
    id: 2,
    name: "Organic",
    short: "Food scraps, fruit and vegetable peels, leaves and other biodegradable material.",
    description: "Organic waste can often be returned to the soil through composting instead of occupying landfill space.",
    tips: [
      "Separate food scraps from recyclable materials.",
      "Compost suitable kitchen and garden waste.",
      "Keep plastic packaging out of organic waste.",
      "Plan meals and store food well to reduce avoidable food waste."
    ]
  },
  {
    id: 3,
    name: "E-waste",
    short: "Phones, computers, batteries and other electronic equipment.",
    description: "Electronic products can contain useful materials as well as components that should not be handled like ordinary household waste.",
    tips: [
      "Use an appropriate e-waste collection point where available.",
      "Repair or donate working devices when possible.",
      "Remove personal information before handing over a device.",
      "Do not burn electronics or batteries."
    ]
  },
  {
    id: 4,
    name: "Paper",
    short: "Office paper, newspapers, cardboard, magazines and similar materials.",
    description: "Paper is easier to recover when it is kept dry, clean and separate from materials that can contaminate it.",
    tips: [
      "Reuse one-sided paper for notes when practical.",
      "Flatten cardboard boxes.",
      "Keep recyclable paper dry.",
      "Reduce unnecessary printing."
    ]
  },
  {
    id: 5,
    name: "Glass",
    short: "Bottles, jars and other glass containers.",
    description: "Glass containers are durable and, depending on local collection systems, can be recovered for recycling or reused.",
    tips: [
      "Rinse jars and bottles before recycling.",
      "Reuse sound glass containers where practical.",
      "Handle broken glass carefully.",
      "Follow your local collection rules for glass."
    ]
  }
];

export default wasteCategories;

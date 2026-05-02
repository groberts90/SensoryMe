// import "./styles.css";
// import { NavBar } from "./NavBar";
// import Main from "./Main";

// export default function App() {
//   return (
//     <div className="app">
//       <NavBar />
//       <Main view={"home"} selectedCount={0} />
//     </div>
//   );
// }

// ── DATA ──────────────────────────────────────────────────────────────────────

import { useState } from "react";

const SENSES = [
  {
    id: "sight",
    label: "Sight",
    emoji: "👁️",
    color: "#F5A623",
    desc: "Light, colour, movement",
  },
  {
    id: "sound",
    label: "Sound",
    emoji: "👂",
    color: "#7B68EE",
    desc: "Volume, pitch, unpredictability",
  },
  {
    id: "touch",
    label: "Touch",
    emoji: "✋",
    color: "#50C878",
    desc: "Texture, pressure, temperature",
  },
  {
    id: "body",
    label: "Body & Balance",
    emoji: "🧍",
    color: "#FF7F7F",
    desc: "Position, movement, grounding",
  },
  {
    id: "smell",
    label: "Smell",
    emoji: "👃",
    color: "#87CEEB",
    desc: "Scent, intensity, familiarity",
  },
  {
    id: "taste",
    label: "Taste",
    emoji: "👅",
    color: "#FFB347",
    desc: "Flavour, texture, temperature",
  },
  {
    id: "internal",
    label: "Internal Sensations",
    emoji: "💭",
    color: "#DDA0DD",
    desc: "Hunger, thirst, fatigue, emotion",
  },
  {
    id: "misc",
    label: "General",
    emoji: "🌿",
    color: "#8FBC8F",
    desc: "Cross-sensory strategies",
  },
];

const STRATEGIES = {
  sight: [
    {
      id: "s1",
      name: "Sunglasses",
      category: "Reduce",
      type: "Me",
      spoons: 1,
      desc: "Wear sunglasses to take the edge off bright or harsh light.",
    },
    {
      id: "s11",
      name: "Tinted lenses (FL-41)",
      category: "Reduce",
      type: "Me",
      spoons: 3,
      desc: "Specialist tinted lenses that filter the specific light frequencies most likely to cause discomfort.",
    },
    {
      id: "s12",
      name: "Baseball caps / visors",
      category: "Reduce",
      type: "Me",
      spoons: 2,
      desc: "A brimmed cap blocks overhead light without needing to change your whole environment.",
    },
    {
      id: "s6",
      name: "Dimmer switches",
      category: "Reduce",
      type: "Environment",
      spoons: 3,
      desc: "Dial down overhead lighting to a level that feels comfortable for you.",
    },
    {
      id: "s13",
      name: "Warm lighting instead of cool",
      category: "Reduce",
      type: "Environment",
      spoons: 2,
      desc: "Swap cold white bulbs for warm-toned ones, which are gentler on the eyes.",
    },
    {
      id: "s3",
      name: "Reduce screen brightness",
      category: "Reduce",
      type: "Digital",
      spoons: 1,
      desc: "Lower your screen brightness so it doesn't feel like staring into a light source.",
    },
    {
      id: "s2",
      name: "Dark mode on devices",
      category: "Reduce",
      type: "Digital",
      spoons: 1,
      desc: "Switch to dark mode to reduce the contrast and brightness of your screen.",
    },
    {
      id: "s14",
      name: "Declutter environment",
      category: "Reduce",
      type: "Environment",
      spoons: 2,
      desc: "Clear surfaces and reduce visual noise so your eyes have less to process.",
    },
    {
      id: "s15",
      name: "Plain walls / minimal décor",
      category: "Reduce",
      type: "Environment",
      spoons: 2,
      desc: "Keep walls simple so your environment feels calmer and less busy.",
    },
    {
      id: "s4",
      name: "Close curtains / blackout blinds",
      category: "Reduce",
      type: "Environment",
      spoons: 1,
      desc: "Block out daylight or streetlights when you need a dimmer space.",
    },
    {
      id: "s16",
      name: "Matte screen protectors",
      category: "Reduce",
      type: "Digital",
      spoons: 2,
      desc: "Reduce glare and reflections on your screen with a matte film.",
    },
    {
      id: "s5",
      name: "Turn off overhead lighting",
      category: "Reduce",
      type: "Environment",
      spoons: 1,
      desc: "Switch off harsh overhead lights and use lamps instead.",
    },
    {
      id: "s17",
      name: "Sit facing away from windows",
      category: "Reduce",
      type: "Environment",
      spoons: 1,
      desc: "Position yourself so bright windows aren't in your field of view.",
    },
    {
      id: "s18",
      name: "Reduce movement in field of vision",
      category: "Reduce",
      type: "Environment",
      spoons: 2,
      desc: "Choose a spot where there's less activity, traffic, or flickering around you.",
    },
    {
      id: "s19",
      name: "Adjustable LED lighting",
      category: "Modify",
      type: "Environment",
      spoons: 3,
      desc: "Use smart bulbs you can tune for both warmth and brightness to suit your needs.",
    },
    {
      id: "s20",
      name: "Bias lighting behind screens",
      category: "Modify",
      type: "Environment",
      spoons: 3,
      desc: "Place a soft light behind your monitor to reduce the contrast between screen and room.",
    },
    {
      id: "s21",
      name: "Visual schedules / planners",
      category: "Modify",
      type: "Me",
      spoons: 2,
      desc: "Use visual layouts to make your day more predictable and easier to process.",
    },
    {
      id: "s22",
      name: "Colour coding systems",
      category: "Modify",
      type: "Environment",
      spoons: 2,
      desc: "Assign colours to categories so information is easier to scan at a glance.",
    },
    {
      id: "s7",
      name: "Larger fonts / accessibility",
      category: "Modify",
      type: "Digital",
      spoons: 1,
      desc: "Increase text size so reading takes less effort.",
    },
    {
      id: "s8",
      name: "High contrast modes",
      category: "Modify",
      type: "Digital",
      spoons: 1,
      desc: "Switch to high contrast display settings if standard text feels hard to read.",
    },
    {
      id: "s23",
      name: "Screen filters (blue light)",
      category: "Modify",
      type: "Digital",
      spoons: 2,
      desc: "Apply a filter to reduce the type of light most associated with eye strain.",
    },
    {
      id: "s24",
      name: "Structured layouts (clear zones)",
      category: "Modify",
      type: "Environment",
      spoons: 2,
      desc: "Organise your space into defined areas so it's easier to know where to look.",
    },
    {
      id: "s25",
      name: "Neutral palettes",
      category: "Modify",
      type: "Environment",
      spoons: 2,
      desc: "Decorate with muted, low-saturation colours to keep your environment visually calm.",
    },
    {
      id: "s10",
      name: "Bright colours in environment",
      category: "Increase",
      type: "Environment",
      spoons: 2,
      desc: "Add vibrant colours to your space if visual stimulation helps you feel alert.",
    },
    {
      id: "s26",
      name: "LED strips / colour-changing lights",
      category: "Increase",
      type: "Environment",
      spoons: 2,
      desc: "Use colour-changing lights to create an environment that feels engaging or energising.",
    },
    {
      id: "s27",
      name: "Watching visually stimulating content",
      category: "Increase",
      type: "Digital",
      spoons: 1,
      desc: "Put on something visually rich when you need more input to feel regulated.",
    },
    {
      id: "s9",
      name: "Lava lamps / moving light",
      category: "Increase",
      type: "Environment",
      spoons: 2,
      desc: "Slow, predictable movement in your visual field can be soothing or regulating.",
    },
    {
      id: "s28",
      name: "Patterned décor",
      category: "Increase",
      type: "Environment",
      spoons: 2,
      desc: "Surround yourself with pattern and texture if visual richness helps you feel grounded.",
    },
    {
      id: "s29",
      name: "Light projectors",
      category: "Increase",
      type: "Environment",
      spoons: 2,
      desc: "Project moving light patterns onto walls or ceiling for gentle visual stimulation.",
    },
    {
      id: "s30",
      name: "Art / drawing / painting",
      category: "Increase",
      type: "Me",
      spoons: 2,
      desc: "Engage your visual sense actively through making something.",
    },
    {
      id: "s31",
      name: "Fast-paced visual media",
      category: "Increase",
      type: "Digital",
      spoons: 1,
      desc: "Watch something with lots of movement and cuts when you need a stronger visual hit.",
    },
  ],
  sound: [
    {
      id: "so1",
      name: "Noise-cancelling headphones",
      category: "Reduce",
      type: "Me",
      spoons: 2,
      desc: "Block out surrounding sound using active noise-cancellation.",
    },
    {
      id: "so2",
      name: "Earplugs",
      category: "Reduce",
      type: "Me",
      spoons: 1,
      desc: "Reduce sound levels discreetly — disposable or loop-style.",
    },
    {
      id: "so3",
      name: "Passive ear defenders",
      category: "Reduce",
      type: "Me",
      spoons: 1,
      desc: "Physical ear defenders to muffle loud or overwhelming environments.",
    },
    {
      id: "so4",
      name: "White noise masking",
      category: "Reduce",
      type: "Environment",
      spoons: 1,
      desc: "Play white noise to cover unpredictable background sounds.",
    },
    {
      id: "so5",
      name: "Turn off background appliances",
      category: "Reduce",
      type: "Environment",
      spoons: 1,
      desc: "Switch off TVs, fans, or hums you've stopped noticing but that are still adding up.",
    },
    {
      id: "so13",
      name: "Close windows",
      category: "Reduce",
      type: "Environment",
      spoons: 1,
      desc: "Shut out traffic, voices, or outdoor sounds.",
    },
    {
      id: "so14",
      name: "Soundproofing (rugs, curtains)",
      category: "Reduce",
      type: "Environment",
      spoons: 3,
      desc: "Use soft furnishings to absorb sound and reduce echo in your space.",
    },
    {
      id: "so12",
      name: "Leave environment early",
      category: "Reduce",
      type: "Me",
      spoons: 2,
      desc: "Give yourself permission to exit a noisy situation before you hit your limit.",
    },
    {
      id: "so6",
      name: "Soundscapes",
      category: "Modify",
      type: "Digital",
      spoons: 1,
      desc: "Natural sounds like rain or birdsong for a calm audio backdrop.",
    },
    {
      id: "so7",
      name: "Pink / brown noise",
      category: "Modify",
      type: "Digital",
      spoons: 1,
      desc: "Soft, steady noise frequency to create a consistent audio environment.",
    },
    {
      id: "so11",
      name: "Spoken word audio",
      category: "Modify",
      type: "Environment",
      spoons: 1,
      desc: "Audiobooks, podcasts, or talk radio in the background for a comfortable spoken word environment.",
    },
    {
      id: "so8",
      name: "Preferred music",
      category: "Increase",
      type: "Digital",
      spoons: 1,
      desc: "Put on music you enjoy to create a sound environment within your control.",
    },
    {
      id: "so9",
      name: "Singing / humming",
      category: "Increase",
      type: "Me",
      spoons: 1,
      desc: "Use your own voice — vibration can be deeply calming.",
    },
    {
      id: "so15",
      name: "Instrument playing",
      category: "Increase",
      type: "Me",
      spoons: 3,
      desc: "Play an instrument to engage your auditory sense actively and expressively.",
    },
    {
      id: "so10",
      name: "Clapping / tapping",
      category: "Increase",
      type: "Me",
      spoons: 1,
      desc: "Create rhythmic sound with your hands or fingers to regulate.",
    },
  ],
  touch: [
    {
      id: "t1",
      name: "Seamless clothing",
      category: "Reduce",
      type: "Me",
      spoons: 1,
      desc: "Wear clothing without seams or raised stitching to avoid irritating pressure points.",
    },
    {
      id: "t2",
      name: "Soft fabrics only",
      category: "Reduce",
      type: "Me",
      spoons: 1,
      desc: "Stick to materials that feel comfortable against your skin, like cotton or bamboo.",
    },
    {
      id: "t3",
      name: "Loose clothing",
      category: "Reduce",
      type: "Me",
      spoons: 1,
      desc: "Wear relaxed fits that don't press or restrict anywhere on your body.",
    },
    {
      id: "t10",
      name: "Remove tags / labels",
      category: "Reduce",
      type: "Me",
      spoons: 1,
      desc: "Cut out clothing tags that cause persistent scratching or distraction against your skin.",
    },
    {
      id: "t11",
      name: "Avoid wool / synthetics",
      category: "Reduce",
      type: "Me",
      spoons: 1,
      desc: "Steer clear of fabrics that feel rough, itchy, or static-prone.",
    },
    {
      id: "t12",
      name: "Protective gloves",
      category: "Reduce",
      type: "Me",
      spoons: 1,
      desc: "Wear gloves as a barrier when handling materials that feel unpleasant or overwhelming.",
    },
    {
      id: "t13",
      name: "Keep skin dry",
      category: "Reduce",
      type: "Me",
      spoons: 1,
      desc: "Change out of damp clothing quickly, as moisture against skin can feel intensely uncomfortable.",
    },
    {
      id: "t14",
      name: "Limit physical contact",
      category: "Reduce",
      type: "Me",
      spoons: 2,
      desc: "Set boundaries around touch so you're only receiving contact you've chosen and anticipated.",
    },
    {
      id: "t4",
      name: "Fidget tools",
      category: "Modify",
      type: "Me",
      spoons: 1,
      desc: "Keep a small object to hand that gives your fingers something satisfying to do.",
    },
    {
      id: "t15",
      name: "Textured objects",
      category: "Modify",
      type: "Me",
      spoons: 1,
      desc: "Use objects with a specific texture to provide controlled, predictable tactile input.",
    },
    {
      id: "t16",
      name: "Compression gloves",
      category: "Modify",
      type: "Me",
      spoons: 2,
      desc: "Wear snug gloves that provide steady, even pressure across your hands.",
    },
    {
      id: "t17",
      name: "Brushing protocols",
      category: "Modify",
      type: "Me",
      spoons: 2,
      desc: "Use a soft sensory brush on your skin to provide deep, regulating tactile input.",
    },
    {
      id: "t6",
      name: "Hand creams / oils",
      category: "Modify",
      type: "Me",
      spoons: 1,
      desc: "Apply lotion or oil to your hands for a grounding, predictable tactile experience.",
    },
    {
      id: "t5",
      name: "Weighted lap pads",
      category: "Modify",
      type: "Me",
      spoons: 1,
      desc: "Rest a weighted pad across your lap for calming, even pressure while seated.",
    },
    {
      id: "t7",
      name: "Petting animals",
      category: "Increase",
      type: "Me",
      spoons: 1,
      desc: "Stroke a pet for soft, warm, and naturally calming tactile input.",
    },
    {
      id: "t8",
      name: "Clay / slime",
      category: "Increase",
      type: "Me",
      spoons: 2,
      desc: "Work with a malleable material that gives satisfying resistance and texture.",
    },
    {
      id: "t9",
      name: "Hand massage",
      category: "Increase",
      type: "Me",
      spoons: 1,
      desc: "Massage your own hands to provide deep, controlled pressure to your palms and fingers.",
    },
    {
      id: "t18",
      name: "Sensory bins",
      category: "Increase",
      type: "Environment",
      spoons: 2,
      desc: "Fill a container with a texture such as rice or sand to explore with your hands.",
    },
    {
      id: "t19",
      name: "Water play",
      category: "Increase",
      type: "Environment",
      spoons: 2,
      desc: "Use running water, a basin, or a bath to engage your sense of touch in a soothing way.",
    },
    {
      id: "t20",
      name: "Exploring textures",
      category: "Increase",
      type: "Me",
      spoons: 1,
      desc: "Deliberately handle different surfaces to satisfy the need for varied tactile input.",
    },
    {
      id: "t21",
      name: "Craft activities",
      category: "Increase",
      type: "Me",
      spoons: 2,
      desc: "Use hands-on making such as knitting, beading, or collage to engage your tactile sense.",
    },
  ],
  body: [
    {
      id: "b1",
      name: "Weighted blankets & lap pads",
      category: "Calming",
      type: "Me",
      spoons: 1,
      desc: "Deep, even pressure to help your body settle.",
    },
    {
      id: "b2",
      name: "Wall push",
      category: "Calming",
      type: "Me",
      spoons: 1,
      desc: "Press palms firmly against a wall and push for 10–30 seconds.",
    },
    {
      id: "b3",
      name: "Compression clothing",
      category: "Calming",
      type: "Me",
      spoons: 1,
      desc: "Close-fitting garments providing steady, gentle pressure.",
    },
    {
      id: "b10",
      name: "Tight hugs",
      category: "Calming",
      type: "Me",
      spoons: 1,
      desc: "Ask for or give yourself a firm hug to deliver grounding deep pressure.",
    },
    {
      id: "b11",
      name: "Deep pressure massage",
      category: "Calming",
      type: "Me",
      spoons: 2,
      desc: "Slow, firm pressure on muscles to help your nervous system calm down.",
    },
    {
      id: "b12",
      name: "Carrying heavy objects",
      category: "Calming",
      type: "Me",
      spoons: 2,
      desc: "Carry something with real weight for grounding proprioceptive feedback.",
    },
    {
      id: "b13",
      name: "Wall sits",
      category: "Calming",
      type: "Me",
      spoons: 2,
      desc: "Hold a seated position against a wall to engage muscles with steady, calming effort.",
    },
    {
      id: "b6",
      name: "Slow rocking",
      category: "Calming",
      type: "Me",
      spoons: 1,
      desc: "Rock your body gently back and forth to soothe your vestibular system.",
    },
    {
      id: "b14",
      name: "Slow walking",
      category: "Calming",
      type: "Me",
      spoons: 1,
      desc: "Walk at a deliberate, unhurried pace to provide gentle movement input.",
    },
    {
      id: "b15",
      name: "Lying down after movement",
      category: "Calming",
      type: "Me",
      spoons: 1,
      desc: "Rest flat after activity to let your vestibular system settle and recover.",
    },
    {
      id: "b4",
      name: "Body scan",
      category: "Regulating",
      type: "Me",
      spoons: 1,
      desc: "Mentally move through each part of your body noticing sensation without judgement.",
    },
    {
      id: "b5",
      name: "Stretching",
      category: "Regulating",
      type: "Me",
      spoons: 2,
      desc: "Slowly lengthen muscles to release tension and reconnect with your body.",
    },
    {
      id: "b9",
      name: "Yoga",
      category: "Regulating",
      type: "Me",
      spoons: 3,
      desc: "Poses combining body awareness, breath, and controlled effort.",
    },
    {
      id: "b16",
      name: "Pilates",
      category: "Regulating",
      type: "Me",
      spoons: 3,
      desc: "Controlled, precise movements to build body awareness and calm your nervous system.",
    },
    {
      id: "b17",
      name: "Postural alignment",
      category: "Regulating",
      type: "Me",
      spoons: 1,
      desc: "Adjust how you're sitting or standing to reduce physical tension and feel more grounded.",
    },
    {
      id: "b18",
      name: "Standing still",
      category: "Regulating",
      type: "Me",
      spoons: 1,
      desc: "Plant your feet and stay still for a moment to reset your sense of balance.",
    },
    {
      id: "b19",
      name: "Walking with focus",
      category: "Regulating",
      type: "Me",
      spoons: 2,
      desc: "Walk mindfully, paying attention to each step and your body's movement through space.",
    },
    {
      id: "b20",
      name: "Balance exercises",
      category: "Regulating",
      type: "Me",
      spoons: 2,
      desc: "Practice standing on one foot or using a balance board to regulate through controlled challenge.",
    },
    {
      id: "b7",
      name: "Dancing",
      category: "Alerting",
      type: "Me",
      spoons: 2,
      desc: "Move freely to music for stimulating, joyful vestibular input.",
    },
    {
      id: "b8",
      name: "Jumping",
      category: "Alerting",
      type: "Me",
      spoons: 2,
      desc: "Jump on the spot to send strong input through joints and muscles.",
    },
    {
      id: "b21",
      name: "Running",
      category: "Alerting",
      type: "Me",
      spoons: 3,
      desc: "Move at pace to wake up your vestibular system through speed and rhythm.",
    },
    {
      id: "b22",
      name: "Resistance bursts",
      category: "Alerting",
      type: "Me",
      spoons: 2,
      desc: "Short bursts of pushing or pulling against resistance to quickly raise alertness.",
    },
    {
      id: "b23",
      name: "Fast bodyweight exercise",
      category: "Alerting",
      type: "Me",
      spoons: 3,
      desc: "Move quickly through exercises like squats or press-ups to energise your system.",
    },
    {
      id: "b24",
      name: "Spinning",
      category: "Alerting",
      type: "Me",
      spoons: 2,
      desc: "Turn in circles to deliver strong, activating input to your vestibular system.",
    },
    {
      id: "b25",
      name: "Trampolining",
      category: "Alerting",
      type: "Environment",
      spoons: 3,
      desc: "Bounce repeatedly for strong, repetitive vestibular and proprioceptive input combined.",
    },
  ],
  smell: [
    {
      id: "sm1",
      name: "Fragrance-free products",
      category: "Reduce",
      type: "Me",
      spoons: 1,
      desc: "Switch to unscented toiletries and cleaning products to remove hidden scent triggers.",
    },
    {
      id: "sm2",
      name: "Ventilation",
      category: "Reduce",
      type: "Environment",
      spoons: 1,
      desc: "Open windows or use a fan to move air through your space and dilute strong smells.",
    },
    {
      id: "sm8",
      name: "Avoid perfumes",
      category: "Reduce",
      type: "Environment",
      spoons: 1,
      desc: "Skip wearing or being around fragranced products that can feel overwhelming.",
    },
    {
      id: "sm9",
      name: "Air purifiers",
      category: "Reduce",
      type: "Environment",
      spoons: 2,
      desc: "Use a purifier to filter out odours and airborne particles from your environment.",
    },
    {
      id: "sm10",
      name: "Mask in strong scents",
      category: "Reduce",
      type: "Me",
      spoons: 1,
      desc: "Wear a mask in environments where you can't control what you're exposed to.",
    },
    {
      id: "sm7",
      name: "Essential oils",
      category: "Modify",
      type: "Environment",
      spoons: 1,
      desc: "Use a small amount of a familiar scent to create a predictable olfactory environment.",
    },
    {
      id: "sm11",
      name: "Scent rotation",
      category: "Modify",
      type: "Environment",
      spoons: 2,
      desc: "Alternate between scents so your nose doesn't become overloaded by one in particular.",
    },
    {
      id: "sm12",
      name: "Low diffusion",
      category: "Modify",
      type: "Environment",
      spoons: 2,
      desc: "Use a diffuser on a low setting so scent is subtle and doesn't overwhelm the space.",
    },
    {
      id: "sm3",
      name: "Personal scent",
      category: "Modify",
      type: "Me",
      spoons: 1,
      desc: "Wear a familiar scent on your wrist or collar so you have a comforting smell close by.",
    },
    {
      id: "sm4",
      name: "Lavender",
      category: "Increase",
      type: "Environment",
      spoons: 1,
      desc: "Use lavender for its widely recognised calming and grounding scent.",
    },
    {
      id: "sm13",
      name: "Chamomile",
      category: "Increase",
      type: "Environment",
      spoons: 1,
      desc: "Diffuse or apply chamomile for a soft, soothing scent that supports relaxation.",
    },
    {
      id: "sm14",
      name: "Vanilla",
      category: "Increase",
      type: "Environment",
      spoons: 1,
      desc: "Use vanilla as a warm, comforting scent that many people find naturally settling.",
    },
    {
      id: "sm15",
      name: "Citrus",
      category: "Increase",
      type: "Environment",
      spoons: 1,
      desc: "Use citrus scents like orange or lemon for a bright, energising olfactory hit.",
    },
    {
      id: "sm5",
      name: "Peppermint",
      category: "Increase",
      type: "Environment",
      spoons: 1,
      desc: "Inhale peppermint for a sharp, clarifying scent that can increase alertness.",
    },
    {
      id: "sm16",
      name: "Eucalyptus",
      category: "Increase",
      type: "Environment",
      spoons: 1,
      desc: "Use eucalyptus for a cooling, clarifying scent that can help you feel more grounded.",
    },
    {
      id: "sm17",
      name: "Coffee smell",
      category: "Increase",
      type: "Environment",
      spoons: 1,
      desc: "Breathe in coffee aroma for a familiar, alerting scent even without drinking it.",
    },
    {
      id: "sm6",
      name: "Fresh air",
      category: "Increase",
      type: "Environment",
      spoons: 1,
      desc: "Step outside or open a window to clear your olfactory system with clean, neutral air.",
    },
  ],
  taste: [
    {
      id: "ta1",
      name: "Bland foods",
      category: "Reduce",
      type: "Me",
      spoons: 1,
      desc: "Mild, simple flavours that don't overwhelm your taste receptors.",
    },
    {
      id: "ta2",
      name: "Consistent textures",
      category: "Reduce",
      type: "Me",
      spoons: 1,
      desc: "Foods with uniform texture — no unexpected mouthfeel surprises.",
    },
    {
      id: "ta3",
      name: "Avoid strong flavours",
      category: "Reduce",
      type: "Me",
      spoons: 1,
      desc: "Steer clear of heavily seasoned or intensely flavoured foods when already overstimulated.",
    },
    {
      id: "ta4",
      name: "Avoid mixed textures",
      category: "Reduce",
      type: "Me",
      spoons: 1,
      desc: "Skip dishes that combine different textures, like soggy and crunchy together.",
    },
    {
      id: "ta5",
      name: "Chewing gum",
      category: "Modify",
      type: "Me",
      spoons: 1,
      desc: "Steady rhythmic oral input that can help regulate your nervous system.",
    },
    {
      id: "ta6",
      name: "Straw drinking",
      category: "Modify",
      type: "Me",
      spoons: 1,
      desc: "Drink through a straw for additional oral motor input that many people find calming.",
    },
    {
      id: "ta7",
      name: "Crunchy snacks",
      category: "Modify",
      type: "Me",
      spoons: 1,
      desc: "Eat something crunchy to deliver satisfying, regulating input through your jaw.",
    },
    {
      id: "ta8",
      name: "Structured meals",
      category: "Modify",
      type: "Me",
      spoons: 2,
      desc: "Plan your meals in advance so eating feels predictable and low-stress.",
    },
    {
      id: "ta9",
      name: "Predictable eating",
      category: "Modify",
      type: "Me",
      spoons: 1,
      desc: "Stick to familiar foods and routines to reduce the cognitive load around mealtimes.",
    },
    {
      id: "ta10",
      name: "Sour foods",
      category: "Increase",
      type: "Me",
      spoons: 1,
      desc: "Sharp, sour flavours like lemon or vinegar for a strong, alerting taste hit.",
    },
    {
      id: "ta11",
      name: "Spicy foods",
      category: "Increase",
      type: "Me",
      spoons: 1,
      desc: "Add heat to your food for an intense, activating gustatory experience.",
    },
    {
      id: "ta12",
      name: "Strong flavours",
      category: "Increase",
      type: "Me",
      spoons: 1,
      desc: "Choose bold, punchy flavours when you need more input to feel regulated.",
    },
    {
      id: "ta13",
      name: "Cold drinks",
      category: "Increase",
      type: "Me",
      spoons: 1,
      desc: "Drink something very cold for a sharp, grounding sensory contrast.",
    },
    {
      id: "ta14",
      name: "Fizzy drinks",
      category: "Increase",
      type: "Me",
      spoons: 1,
      desc: "Use carbonation for a strong, stimulating sensation in your mouth and throat.",
    },
    {
      id: "ta15",
      name: "Ice chewing",
      category: "Increase",
      type: "Me",
      spoons: 1,
      desc: "Chew ice for a combined temperature and texture hit that can be intensely grounding.",
    },
  ],
  internal: [
    {
      id: "in7",
      name: "Hunger scale check",
      category: "Hunger",
      type: "Me",
      spoons: 1,
      desc: "Rate your hunger from 1–10 at set times to build awareness before it becomes urgent.",
    },
    {
      id: "in1",
      name: "Regular meal times",
      category: "Hunger",
      type: "Me",
      spoons: 1,
      desc: "Eat at the same times each day so your body doesn't have to send strong signals to remind you.",
    },
    {
      id: "in8",
      name: "Pre-planned meals",
      category: "Hunger",
      type: "Me",
      spoons: 2,
      desc: "Decide what you're eating in advance so hunger doesn't catch you without an easy answer.",
    },
    {
      id: "in9",
      name: "Hourly water reminder",
      category: "Thirst",
      type: "Digital",
      spoons: 1,
      desc: "Set a recurring timer so drinking is triggered by a prompt rather than waiting for a signal.",
    },
    {
      id: "in2",
      name: "Visible water bottle",
      category: "Thirst",
      type: "Me",
      spoons: 1,
      desc: "Keep water in your line of sight so drinking becomes automatic rather than effortful.",
    },
    {
      id: "in10",
      name: "Flavoured water",
      category: "Thirst",
      type: "Me",
      spoons: 1,
      desc: "Add squash or fruit if plain water feels unappealing, so you'll actually drink it.",
    },
    {
      id: "in3",
      name: "Scheduled toilet breaks",
      category: "ToiletNeeds",
      type: "Me",
      spoons: 1,
      desc: "Go at set times throughout the day rather than waiting for a strong urge.",
    },
    {
      id: "in11",
      name: "Body check before transitions",
      category: "ToiletNeeds",
      type: "Me",
      spoons: 1,
      desc: "Make a toilet stop part of your routine before leaving the house or switching activities.",
    },
    {
      id: "in12",
      name: "Temperature check-in",
      category: "Temperature",
      type: "Me",
      spoons: 1,
      desc: "Pause once or twice a day to actively ask yourself whether you're too hot or cold.",
    },
    {
      id: "in4",
      name: "Layered clothing",
      category: "Temperature",
      type: "Me",
      spoons: 1,
      desc: "Dress in layers you can add or remove easily so you can respond quickly when you notice a change.",
    },
    {
      id: "in13",
      name: "Environmental controls",
      category: "Temperature",
      type: "Environment",
      spoons: 1,
      desc: "Keep a fan, blanket, or hot water bottle within reach so adjusting is low-effort.",
    },
    {
      id: "in5",
      name: "Energy rating",
      category: "Fatigue",
      type: "Me",
      spoons: 1,
      desc: "Rate your energy from 1–10 at set points in the day to catch depletion before it becomes a crisis.",
    },
    {
      id: "in14",
      name: "Rest before exhaustion",
      category: "Fatigue",
      type: "Me",
      spoons: 1,
      desc: "Schedule breaks earlier than you think you need them, not after you've already crashed.",
    },
    {
      id: "in15",
      name: "Sleep consistency",
      category: "Fatigue",
      type: "Me",
      spoons: 2,
      desc: "Go to bed and wake at the same time each day to stabilise your baseline energy levels.",
    },
    {
      id: "in16",
      name: "Body location check",
      category: "EmotionBody",
      type: "Me",
      spoons: 1,
      desc: "When you notice a feeling, ask where you feel it physically to help identify what it might be.",
    },
    {
      id: "in6",
      name: "Name it to tame it",
      category: "EmotionBody",
      type: "Me",
      spoons: 1,
      desc: "Putting a word to a physical sensation can reduce its intensity and help you decide what to do next.",
    },
    {
      id: "in17",
      name: "Sensation journal",
      category: "EmotionBody",
      type: "Me",
      spoons: 1,
      desc: "Keep a brief log of physical sensations alongside emotions to learn your own patterns over time.",
    },
  ],
  misc: [
    {
      id: "m1",
      name: "Avoid crowded environments",
      category: "Reduce",
      type: "Environment",
      spoons: 2,
      desc: "Choose quieter venues or times to reduce exposure to noise.",
    },
  ],
};

const ALL_STRATEGIES = Object.values(STRATEGIES).flat();

const REGULATION_STATES = [
  {
    id: "red",
    label: "I'm overwhelmed",
    short: "Overwhelmed",
    color: "#E05252",
    bg: "#FEF2F2",
    pct: 0.9,
  },
  {
    id: "amber",
    label: "I'm struggling",
    short: "Struggling",
    color: "#E07D2A",
    bg: "#FFF7ED",
    pct: 0.65,
  },
  {
    id: "yellow",
    label: "I'm a bit off",
    short: "A bit off",
    color: "#D4A017",
    bg: "#FEFCE8",
    pct: 0.4,
  },
  {
    id: "green",
    label: "I'm okay",
    short: "Okay",
    color: "#3D9E60",
    bg: "#F0FDF4",
    pct: 0.15,
  },
];

const BODY_CARE = [
  {
    id: "eaten",
    label: "Have I eaten recently?",
    icon: "🍎",
    tip: "If not, try to eat something — even something small. Hunger can amplify everything.",
    strategyIds: ["in1", "in8", "in7"],
  },
  {
    id: "drunk",
    label: "Have I had enough to drink?",
    icon: "💧",
    tip: "Dehydration can make sensory sensitivity worse. Try to drink something now.",
    strategyIds: ["in2", "in9", "in10"],
  },
  {
    id: "toilet",
    label: "Do I need the bathroom?",
    icon: "🚻",
    tip: "Even mild urgency uses up mental resources. Go now if you can.",
    strategyIds: ["in3", "in11"],
  },
  {
    id: "quiet",
    label: "Do I have somewhere quiet I can go?",
    icon: "🔇",
    tip: "Reducing sensory input is often the most direct thing you can do when overwhelmed.",
    strategyIds: ["so1", "so2", "so3", "so4", "s4", "s5"],
  },
];

const SCAN_LAYER2 = {
  sound: [
    "Everything feels too loud",
    "Specific sounds are grating or irritating",
    "I can't filter out background noise",
    "Sudden or unpredictable sounds are catching me off guard",
    "I need background sound to feel settled",
  ],
  sight: [
    "Light feels too bright or harsh",
    "Everything looks too busy or cluttered",
    "Screens feel uncomfortable to look at",
  ],
  touch: [
    "Clothing or fabrics feel uncomfortable",
    "Sticky or wet things on my skin feel unbearable",
    "I'm extra sensitive and don't want to be touched",
  ],
  body: [
    "My body feels restless or unable to settle",
    "I feel disconnected from my body",
    "I'm feeling tense or wound up",
    "I feel clumsy or uncoordinated",
  ],
  smell: [
    "A specific smell at home is bothering me",
    "I'm out and struggling with smells around me",
    "Food smells are difficult right now",
  ],
  taste: [
    "Limited food options available",
    "Unpleasant taste in my mouth",
    "Eating feels overwhelming right now",
  ],
  internal: ["See Body Care Checklist"],
};

// ── HELPERS ───────────────────────────────────────────────────────────────────

function SpoonDots({ count, max = 3 }) {
  return (
    <span style={{ display: "inline-flex", gap: 2 }}>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: i < count ? "#6B6BFF" : "#D4D4E8",
            display: "inline-block",
          }}
        />
      ))}
    </span>
  );
}

function Badge({ label, color = "#6B6BFF" }) {
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 0.5,
        background: color + "22",
        color,
        borderRadius: 20,
        padding: "2px 8px",
        textTransform: "uppercase",
      }}
    >
      {label}
    </span>
  );
}

function StrategyCard({ strategy, inToolkit, onToggle, expandable = false }) {
  const [expanded, setExpanded] = useState(false);

  const catColor =
    strategy.category === "Reduce" || strategy.category === "Calming"
      ? "#5B8AF0"
      : strategy.category === "Modify" || strategy.category === "Regulating"
      ? "#3DB87A"
      : "#F0A050";

  const showDetail = !expandable || expanded;

  return (
    <div
      onClick={expandable && !expanded ? () => setExpanded(true) : undefined}
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: "14px 16px",
        border: inToolkit ? "2px solid #6B6BFF33" : "1.5px solid #EEEEF6",
        boxShadow: inToolkit ? "0 2px 12px #6B6BFF18" : "0 1px 4px #0001",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        position: "relative",
        cursor: expandable && !expanded ? "pointer" : "default",
        transition: "box-shadow .15s",
      }}
    >
      {/* Header row — name + chevron */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: 4,
        }}
      >
        <div
          style={{ fontWeight: 700, fontSize: 14, color: "#1A1A2E", flex: 1 }}
        >
          {strategy.name}
        </div>
        {expandable && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded((ex) => !ex);
            }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#999",
              fontSize: 14,
              padding: "0 0 0 8px",
              lineHeight: 1,
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform .2s",
            }}
          >
            ▾
          </button>
        )}
      </div>

      {/* Tags always visible */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          flexWrap: "wrap",
        }}
      >
        <Badge label={strategy.category} color={catColor} />
        <Badge label={strategy.type} color="#888" />
        {/* <SpoonDots count={strategy.spoons} /> */}
      </div>

      {/* Expanded detail */}
      {showDetail && (
        <>
          <div
            style={{
              fontSize: 13,
              color: "#555",
              lineHeight: 1.6,
              marginTop: 4,
            }}
          >
            {strategy.desc}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle(strategy);
            }}
            style={{
              marginTop: 4,
              background: inToolkit ? "#F3F3FF" : "#6B6BFF",
              color: inToolkit ? "#6B6BFF" : "#fff",
              border: inToolkit ? "1.5px solid #6B6BFF44" : "none",
              borderRadius: 10,
              padding: "6px 12px",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
              alignSelf: "flex-start",
              transition: "all .15s",
            }}
          >
            {inToolkit ? "Remove from toolkit" : "+ Add to toolkit"}
          </button>
        </>
      )}
    </div>
  );
}

// ── SCREENS ───────────────────────────────────────────────────────────────────

function OnboardingScreen({ onDone }) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");

  const slides = [
    {
      emoji: "🌿",
      title: "Welcome to SensoryMe",
      body: "A personal toolkit to help you understand and manage your sensory experience — at your own pace, on your own terms.",
    },
    {
      emoji: "🧩",
      title: "Build your toolkit",
      body: "Work through each of your 8 sensory systems. Short quizzes help surface strategies that match how you experience the world.",
    },
    {
      emoji: "🌡️",
      title: "Support in the moment",
      body: "When things feel like too much, the Body Scan helps you quickly find what your nervous system needs right now.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F7F7FF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      {step < 3 ? (
        <div style={{ maxWidth: 380, width: "100%", textAlign: "center" }}>
          <div style={{ fontSize: 72, marginBottom: 24 }}>
            {slides[step].emoji}
          </div>
          <h1
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 28,
              color: "#1A1A2E",
              marginBottom: 12,
              lineHeight: 1.2,
            }}
          >
            {slides[step].title}
          </h1>
          <p
            style={{
              color: "#555",
              lineHeight: 1.7,
              fontSize: 15,
              marginBottom: 40,
            }}
          >
            {slides[step].body}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 6,
              marginBottom: 32,
            }}
          >
            {slides.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === step ? 20 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === step ? "#6B6BFF" : "#D4D4E8",
                  transition: "all .3s",
                }}
              />
            ))}
          </div>
          <button
            onClick={() => setStep((s) => s + 1)}
            style={{
              width: "100%",
              padding: "14px 0",
              borderRadius: 14,
              background: "#6B6BFF",
              color: "#fff",
              fontWeight: 700,
              fontSize: 16,
              border: "none",
              cursor: "pointer",
            }}
          >
            {step === 2 ? "Get started" : "Continue"}
          </button>
        </div>
      ) : (
        <div style={{ maxWidth: 380, width: "100%", textAlign: "center" }}>
          <div style={{ fontSize: 56, marginBottom: 20 }}>👋</div>
          <h2
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 26,
              color: "#1A1A2E",
              marginBottom: 8,
            }}
          >
            What's your name?
          </h2>
          <p style={{ color: "#777", fontSize: 14, marginBottom: 28 }}>
            Just your first name — so the app feels like yours.
          </p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your first name…"
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: 14,
              fontSize: 16,
              border: "2px solid #EEEEF6",
              background: "#fff",
              outline: "none",
              fontFamily: "inherit",
              boxSizing: "border-box",
              marginBottom: 20,
              color: "#1A1A2E",
            }}
          />
          <button
            onClick={() => onDone(name || "there")}
            disabled={!name.trim()}
            style={{
              width: "100%",
              padding: "14px 0",
              borderRadius: 14,
              background: name.trim() ? "#6B6BFF" : "#D4D4E8",
              color: "#fff",
              fontWeight: 700,
              fontSize: 16,
              border: "none",
              cursor: name.trim() ? "pointer" : "default",
            }}
          >
            Let's go →
          </button>
        </div>
      )}
    </div>
  );
}

function Thermometer({ value, onChange }) {
  const stateFromValue = (v) => {
    if (v > 0.75) return REGULATION_STATES[0];
    if (v > 0.5) return REGULATION_STATES[1];
    if (v > 0.25) return REGULATION_STATES[2];
    return REGULATION_STATES[3];
  };

  const state = stateFromValue(value);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: "100%",
      }}
    >
      {REGULATION_STATES.map((s) => {
        const active = state.id === s.id;
        return (
          <button
            key={s.id}
            onClick={() => onChange(s.pct)}
            style={{
              width: "100%",
              padding: "14px 18px",
              borderRadius: 14,
              background: active ? s.color + "22" : "#fff",
              border: active ? `2px solid ${s.color}` : "2px solid #EEEEF6",
              display: "flex",
              alignItems: "center",
              gap: 12,
              cursor: "pointer",
              textAlign: "left",
              transition: "all .15s",
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                flexShrink: 0,
                background: active ? s.color : "#D4D4E8",
              }}
            />
            <span
              style={{
                fontSize: 14,
                fontWeight: active ? 700 : 500,
                color: active ? s.color : "#888",
              }}
            >
              {s.label}
            </span>
            {active && (
              <span
                style={{ marginLeft: "auto", fontSize: 12, color: s.color }}
              >
                ✓
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function HomeScreen({
  userName,
  toolkit,
  thermoValue,
  onThermoChange,
  onSenseOpen,
  completedSenses,
  onScan,
}) {
  const state =
    thermoValue > 0.75
      ? REGULATION_STATES[0]
      : thermoValue > 0.5
      ? REGULATION_STATES[1]
      : thermoValue > 0.25
      ? REGULATION_STATES[2]
      : REGULATION_STATES[3];

  const toolkitCount = toolkit.length;

  return (
    <div style={{ padding: "0 0 100px" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1A1A2E 0%, #2D2D5E 100%)",
          padding: "48px 24px 32px",
          borderRadius: "0 0 32px 32px",
        }}
      >
        <div style={{ fontSize: 13, color: "#9999CC", marginBottom: 4 }}>
          Good to see you,
        </div>
        <div
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 28,
            color: "#fff",
            marginBottom: 24,
          }}
        >
          {userName} 👋
        </div>

        {/* Compact state indicator — taps to open scan */}
        <button
          onClick={onScan}
          style={{
            width: "100%",
            background: "#ffffff14",
            border: "1.5px solid #ffffff22",
            borderRadius: 16,
            padding: "14px 18px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 14,
            backdropFilter: "blur(10px)",
            textAlign: "left",
          }}
        >
          <div
            style={{
              width: 10,
              height: 48,
              borderRadius: 6,
              background: "#ffffff22",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: `${thermoValue * 100}%`,
                background: state.color,
                borderRadius: 6,
                transition: "height .3s, background .3s",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 11,
                color: "#9999CC",
                fontWeight: 600,
                marginBottom: 3,
              }}
            >
              Last logged state
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>
              {state.label}
            </div>
          </div>
          <div style={{ fontSize: 13, color: "#9999CC" }}>Scan →</div>
        </button>
      </div>

      <div style={{ padding: "24px 20px 0" }}>
        {/* Toolkit summary */}
        {toolkitCount > 0 && (
          <div
            style={{
              background: "#F0F0FF",
              borderRadius: 16,
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <div style={{ fontSize: 28 }}>🧰</div>
            <div>
              <div style={{ fontWeight: 700, color: "#1A1A2E", fontSize: 15 }}>
                Your toolkit
              </div>
              <div style={{ color: "#6B6BFF", fontSize: 13 }}>
                {toolkitCount} {toolkitCount === 1 ? "strategy" : "strategies"}{" "}
                saved
              </div>
            </div>
          </div>
        )}

        {/* Senses grid */}
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#888",
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          Your Sensory Systems
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
        >
          {SENSES.map((s) => {
            const done = completedSenses.includes(s.id);
            return (
              <button
                key={s.id}
                onClick={() => onSenseOpen(s)}
                style={{
                  background: done ? s.color + "18" : "#fff",
                  border: done ? `2px solid ${s.color}44` : "2px solid #EEEEF6",
                  borderRadius: 18,
                  padding: "16px 14px",
                  textAlign: "left",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  transition: "transform .15s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: 26 }}>{s.emoji}</span>
                  {done && <span style={{ fontSize: 16 }}>✓</span>}
                </div>
                <div
                  style={{ fontWeight: 700, fontSize: 13, color: "#1A1A2E" }}
                >
                  {s.label}
                </div>
                <div style={{ fontSize: 11, color: "#999" }}>{s.desc}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── QUIZ CONTENT (Layer 1 statements + Layer 3 Like Me cards) ────────────────

const QUIZ_DATA = {
  sound: {
    layer1: [
      {
        orientation: "Reduce",
        statement:
          "Sound affects me more than it seems to affect other people — busy or noisy environments are genuinely hard for me.",
      },
      {
        orientation: "Modify",
        statement:
          "I'm not always bothered by sound, but I need it to be predictable — sudden or unexpected noises throw me off.",
      },
      {
        orientation: "Increase",
        statement:
          "I like having sound around me — noise, music or background audio helps me feel comfortable and at ease.",
      },
    ],
    layer2Types: {
      Reduce: ["Me", "Environment"],
      Modify: ["Digital", "Environment"],
      Increase: ["Me"],
    },
    layer3: {
      Reduce: [
        {
          statement:
            "I need to be able to block sound out completely sometimes — partial reduction isn't enough.",
          strategyId: "so1",
        },
        {
          statement:
            "Wearing something physical over my ears helps me feel protected from noise.",
          strategyId: "so3",
        },
        {
          statement:
            "I want something discreet and portable I can use anywhere to take the edge off sound.",
          strategyId: "so2",
        },
        {
          statement:
            "I do better if I can get out of a noisy situation before I reach my limit, rather than pushing through.",
          strategyId: "so12",
        },
        {
          statement:
            "Unpredictable or jarring background sounds are more disturbing to me than steady noise — I find it much easier when the sound around me is consistent.",
          strategyId: "so4",
        },
        {
          statement:
            "Low-level background sounds like buzzing or humming bother me more than most people — they're hard to ignore even when nothing loud is happening.",
          strategyId: "so5",
        },
        {
          statement:
            "Outdoor sounds like traffic or voices drifting in make it hard for me to relax or focus, even when they're not particularly loud.",
          strategyId: "so13",
        },
        {
          statement:
            "Hard surfaces and echo make rooms feel much noisier and harder for me to be in — the acoustics of a space have a real impact on how I feel.",
          strategyId: "so14",
        },
      ],
      Modify: [
        {
          statement:
            "Natural sounds like rain or birdsong have a noticeably calming effect on me.",
          strategyId: "so6",
        },
        {
          statement:
            "Unexpected noises disrupt my focus and I find it hard to get back on track.",
          strategyId: "so7",
        },
        {
          statement:
            "Hearing people talking in the background helps me feel calm and focused.",
          strategyId: "so11",
        },
      ],
      Increase: [
        {
          statement: "I like to sing, hum or make other noises with my mouth.",
          strategyId: "so9",
        },
        {
          statement:
            "Playing a musical instrument is something I genuinely enjoy.",
          strategyId: "so15",
        },
        {
          statement:
            "Tapping out a beat or clapping along to something feels satisfying and fun.",
          strategyId: "so10",
        },
        {
          statement:
            "Listening to music I love has a noticeable effect on how I feel.",
          strategyId: "so8",
        },
      ],
    },
  },
  sight: {
    layer1: [
      {
        orientation: "Reduce",
        statement:
          "Bright lights, busy environments or too much visual information can quickly become overwhelming for me.",
      },
      {
        orientation: "Modify",
        statement:
          "I have strong preferences about how things look and feel unsettled when my visual environment isn't right.",
      },
      {
        orientation: "Increase",
        statement:
          "I love colour, pattern and visual stimulation — a visually rich environment helps me feel engaged and alive.",
      },
    ],
    layer2Types: {
      Reduce: ["Me", "Environment", "Digital"],
      Modify: ["Me", "Environment", "Digital"],
      Increase: ["Me", "Environment", "Digital"],
    },
    layer3: {
      Reduce: [
        {
          statement:
            "Bright or harsh lighting can feel uncomfortable or even painful.",
          strategyId: "s1",
        },
        {
          statement:
            "The sun shining on my face really bothers me when I'm outside.",
          strategyId: "s12",
        },
        {
          statement: "Overhead lighting often feels too harsh or intense.",
          strategyId: "s6",
        },
        {
          statement: "Cool white light feels harsh or clinical to me.",
          strategyId: "s13",
        },
        {
          statement:
            "When my environment is messy I can see too many things at once and this feels overwhelming.",
          strategyId: "s14",
        },
        {
          statement:
            "I feel stressed or uncomfortable in rooms with lots of decorations.",
          strategyId: "s15",
        },
        {
          statement:
            "Daylight or streetlights coming into a room can feel too intense.",
          strategyId: "s4",
        },
        {
          statement: "Overhead lights feel harsher than side or lamp lighting.",
          strategyId: "s5",
        },
        { statement: "Screens sometimes hurt my eyes.", strategyId: "s3" },
        {
          statement:
            "Darker colours are much easier for me to look at on a screen than light or bright ones.",
          strategyId: "s2",
        },
        {
          statement:
            "Glare and reflections on screens are really distracting to me.",
          strategyId: "s16",
        },
      ],
      Modify: [
        {
          statement:
            "I wish I had full control over the shade and brightness of the lights around me.",
          strategyId: "s19",
        },
        {
          statement: "Sometimes I find text difficult to read on devices.",
          strategyId: "s7",
        },
        {
          statement:
            "Certain types of screen light seem to contribute to how tired or strained my eyes feel.",
          strategyId: "s23",
        },
      ],
      Increase: [
        {
          statement: "Having colour around me feels energising or uplifting.",
          strategyId: "s10",
        },
        {
          statement: "I find it relaxing to watch slow moving shapes or fish.",
          strategyId: "s9",
        },
        {
          statement:
            "I enjoy being surrounded by decorations and take great pleasure in visual art.",
          strategyId: "s28",
        },
        {
          statement:
            "I enjoy watching twinkling lights or gentle moving images.",
          strategyId: "s29",
        },
        {
          statement: "Creating something visual is one of the ways I regulate.",
          strategyId: "s30",
        },
      ],
    },
  },
  touch: {
    layer1: [
      {
        orientation: "Reduce",
        statement:
          "Certain textures, fabrics or tactile sensations are uncomfortable or unbearable for me.",
      },
      {
        orientation: "Modify",
        statement:
          "I have strong preferences about how things feel against my skin and need my environment to feel just right.",
      },
      {
        orientation: "Increase",
        statement:
          "I love exploring different textures and fabrics — the rougher, more varied or more interesting the better.",
      },
    ],
    layer2Types: {
      Reduce: ["Me"],
      Modify: ["Me"],
      Increase: ["Me", "Environment"],
    },
    layer3: {
      Reduce: [
        {
          statement:
            "Clothing seams or stitching can feel really irritating against my skin.",
          strategyId: "t1",
        },
        {
          statement:
            "I need to cut out labels from clothing — they drive me mad.",
          strategyId: "t10",
        },
        {
          statement: "Only certain fabrics feel comfortable to wear.",
          strategyId: "t2",
        },
        {
          statement:
            "I avoid wool or synthetic fabrics because they feel rough or itchy.",
          strategyId: "t11",
        },
        {
          statement: "Tight or restrictive clothing is uncomfortable for me.",
          strategyId: "t3",
        },
        {
          statement: "I prefer to use gloves when handling certain materials.",
          strategyId: "t12",
        },
        {
          statement:
            "Moisture or dampness against my skin feels really uncomfortable.",
          strategyId: "t13",
        },
        {
          statement:
            "I find uninvited touch or physical contact difficult to manage.",
          strategyId: "t14",
        },
      ],
      Modify: [
        {
          statement:
            "I like having something to fidget with — it helps me focus.",
          strategyId: "t4",
        },
        {
          statement: "Steady, even pressure on my body feels calming.",
          strategyId: "t5",
        },
        {
          statement:
            "Applying something to my hands — like lotion — is grounding.",
          strategyId: "t6",
        },
        {
          statement:
            "I find deep, firm pressure comforting rather than overwhelming.",
          strategyId: "t16",
        },
      ],
      Increase: [
        {
          statement:
            "Stroking soft textures or animals is one of my favourite sensory experiences.",
          strategyId: "t7",
        },
        {
          statement:
            "I enjoy squeezing or moulding things — like clay or slime.",
          strategyId: "t8",
        },
        {
          statement: "Massaging my own hands or feet feels satisfying.",
          strategyId: "t9",
        },
        {
          statement:
            "I enjoy running my hands through different textures like rice or sand.",
          strategyId: "t18",
        },
        {
          statement:
            "Water — running or still — is a really grounding sensory experience for me.",
          strategyId: "t19",
        },
        {
          statement:
            "Craft activities that involve my hands are one of the ways I regulate.",
          strategyId: "t21",
        },
      ],
    },
  },
  smell: {
    layer1: [
      {
        orientation: "Reduce",
        statement:
          "Strong or unexpected smells are overwhelming or unbearable for me.",
      },
      {
        orientation: "Modify",
        statement:
          "I'm sensitive to smells in my environment and feel much better when they're familiar and predictable.",
      },
      {
        orientation: "Increase",
        statement:
          "I love strong, rich or distinctive smells — scent is something I actively seek out and enjoy.",
      },
    ],
    layer2Types: {
      Reduce: ["Me", "Environment"],
      Modify: ["Me", "Environment"],
      Increase: ["Environment"],
    },
    layer3: {
      Reduce: [
        {
          statement:
            "I've switched to fragrance-free products because scented ones are too overwhelming.",
          strategyId: "sm1",
        },
        {
          statement:
            "Wearing a mask helps me cope in environments I can't control.",
          strategyId: "sm10",
        },
        {
          statement: "I need good ventilation to feel comfortable in a space.",
          strategyId: "sm2",
        },
        {
          statement:
            "Strong air fresheners or perfumes in a room make it very hard for me to be there.",
          strategyId: "sm8",
        },
        {
          statement:
            "An air purifier makes a real difference to how comfortable I feel at home.",
          strategyId: "sm9",
        },
      ],
      Modify: [
        {
          statement:
            "Having a familiar personal scent nearby helps me feel calm.",
          strategyId: "sm3",
        },
        {
          statement:
            "A subtle, controlled amount of a scent I like makes my environment feel safer.",
          strategyId: "sm7",
        },
        {
          statement:
            "Too much of even a nice scent becomes overwhelming — I need it kept low.",
          strategyId: "sm12",
        },
      ],
      Increase: [
        {
          statement: "Lavender is one of my go-to scents for calming down.",
          strategyId: "sm4",
        },
        {
          statement: "Citrus smells feel bright and energising to me.",
          strategyId: "sm15",
        },
        {
          statement:
            "Peppermint is a scent I use to feel more alert and clear-headed.",
          strategyId: "sm5",
        },
        {
          statement: "The smell of coffee is immediately grounding for me.",
          strategyId: "sm17",
        },
        {
          statement:
            "Getting fresh air is one of the most reliable ways I reset my sense of smell.",
          strategyId: "sm6",
        },
        {
          statement: "Vanilla or chamomile scents help me wind down.",
          strategyId: "sm13",
        },
      ],
    },
  },
  taste: {
    layer1: [
      {
        orientation: "Reduce",
        statement:
          "Certain tastes, textures or temperatures in food are unbearable for me and can put me off eating entirely.",
      },
      {
        orientation: "Modify",
        statement:
          "I have strong preferences about food and eat best when I know exactly what I'm having and what to expect.",
      },
      {
        orientation: "Increase",
        statement:
          "I love bold, strong or intense flavours — the more variety and intensity the better.",
      },
    ],
    layer2Types: {
      Reduce: ["Me"],
      Modify: ["Me"],
      Increase: ["Me"],
    },
    layer3: {
      Reduce: [
        {
          statement:
            "I stick to mild, bland foods when things feel like too much.",
          strategyId: "ta1",
        },
        {
          statement: "Mixed textures in food are really hard for me to manage.",
          strategyId: "ta4",
        },
        {
          statement:
            "I need food to have a consistent texture — unexpected bits are difficult.",
          strategyId: "ta2",
        },
        {
          statement:
            "Strong or heavily seasoned food is overwhelming when I'm already stressed.",
          strategyId: "ta3",
        },
      ],
      Modify: [
        {
          statement: "Chewing gum helps me regulate — the rhythm is calming.",
          strategyId: "ta5",
        },
        {
          statement:
            "Drinking through a straw is something I find surprisingly settling.",
          strategyId: "ta6",
        },
        {
          statement: "Crunchy foods give me satisfying input through my jaw.",
          strategyId: "ta7",
        },
        {
          statement:
            "Planning meals in advance reduces the stress around eating significantly.",
          strategyId: "ta8",
        },
        {
          statement:
            "Sticking to familiar foods I know I like means mealtimes are much easier.",
          strategyId: "ta9",
        },
      ],
      Increase: [
        {
          statement:
            "Sour or sharp flavours feel satisfying and grounding to me.",
          strategyId: "ta10",
        },
        {
          statement: "Spicy food is something I genuinely enjoy and seek out.",
          strategyId: "ta11",
        },
        {
          statement:
            "Bold, punchy flavours are what I reach for when I need more input.",
          strategyId: "ta12",
        },
        {
          statement: "Very cold drinks give me a sharp, grounding hit.",
          strategyId: "ta13",
        },
        {
          statement:
            "Fizzy drinks or carbonated water feel stimulating in a way I enjoy.",
          strategyId: "ta14",
        },
        {
          statement: "Chewing ice is something I find intensely satisfying.",
          strategyId: "ta15",
        },
      ],
    },
  },
  body: {
    layer1: [
      {
        orientation: "Calming",
        statement:
          "I find deep pressure, stillness or slow movement helps my body feel settled and less wound up.",
      },
      {
        orientation: "Regulating",
        statement:
          "My body feels most settled when I have a steady rhythm of movement and pressure throughout the day.",
      },
      {
        orientation: "Alerting",
        statement:
          "I need lots of movement and physical activity to feel awake, focused and ready to engage.",
      },
    ],
    layer2Types: {
      Calming: ["Me"],
      Regulating: ["Me"],
      Alerting: ["Me", "Environment"],
    },
    layer3: {
      Calming: [
        {
          statement:
            "A heavy blanket or weighted item helps me feel grounded and settled.",
          strategyId: "b1",
        },
        {
          statement: "Wearing clothing that holds me firmly feels calming.",
          strategyId: "b3",
        },
        {
          statement:
            "Pressing or pushing firmly against something solid helps me feel more settled.",
          strategyId: "b2",
        },
        {
          statement:
            "A firm hug — giving or receiving — is one of the most calming things for me.",
          strategyId: "b10",
        },
        {
          statement:
            "Deep pressure on my muscles helps my nervous system calm down.",
          strategyId: "b11",
        },
        {
          statement:
            "Carrying something heavy makes me feel more grounded as I move.",
          strategyId: "b12",
        },
        {
          statement:
            "Gently rocking my body back and forth is something I do when I need to settle.",
          strategyId: "b6",
        },
        {
          statement: "Slow, steady walking helps me come back to myself.",
          strategyId: "b14",
        },
      ],
      Regulating: [
        {
          statement:
            "Checking in with my body — noticing where I hold tension — helps me feel regulated.",
          strategyId: "b4",
        },
        {
          statement: "Stretching is one of my main ways of releasing tension.",
          strategyId: "b5",
        },
        {
          statement:
            "Yoga or pilates-style movement helps me feel more grounded and present.",
          strategyId: "b9",
        },
        {
          statement:
            "Standing still and feeling my feet on the ground helps me reset.",
          strategyId: "b18",
        },
        {
          statement:
            "Mindful walking, where I pay attention to how I'm moving, feels regulating.",
          strategyId: "b19",
        },
        {
          statement:
            "Balancing exercises help me feel more coordinated and centred.",
          strategyId: "b20",
        },
      ],
      Alerting: [
        {
          statement:
            "Dancing or moving freely to music is one of my favourite ways to feel alive.",
          strategyId: "b7",
        },
        {
          statement:
            "Jumping — on the spot or on a trampoline — feels energising and fun.",
          strategyId: "b8",
        },
        {
          statement: "Running or fast movement wakes up my body and mind.",
          strategyId: "b21",
        },
        {
          statement:
            "Short bursts of hard physical effort quickly shift my energy level.",
          strategyId: "b22",
        },
        {
          statement:
            "Fast, intense exercise is what I need to feel ready to engage with the world.",
          strategyId: "b23",
        },
      ],
    },
  },
  internal: {
    layer1: [
      {
        orientation: "Hunger",
        statement:
          "I can accidentally go long periods without eating because I don't reliably notice when I'm hungry.",
      },
      {
        orientation: "Thirst",
        statement:
          "I can go a long time without drinking because I don't reliably notice when I'm thirsty.",
      },
      {
        orientation: "Toilet Needs",
        statement:
          "I can leave it too long before using the toilet because I don't always notice I need to go until it's desperate.",
      },
      {
        orientation: "Temperature",
        statement:
          "I often end up too hot or too cold without having noticed — others might point it out before I do.",
      },
      {
        orientation: "Fatigue",
        statement:
          "It's hard for me to know when to stop or go to bed because I don't reliably notice when I'm tired.",
      },
      {
        orientation: "Emotion in the Body",
        statement:
          "I struggle to identify my own emotions — sometimes my body feels wrong but I don't know why.",
      },
    ],
    layer2Types: {
      Hunger: ["Me"],
      Thirst: ["Me", "Digital"],
      "Toilet Needs": ["Me"],
      Temperature: ["Me", "Environment"],
      Fatigue: ["Me"],
      "Emotion in the Body": ["Me"],
    },
    layer3: {
      Hunger: [
        {
          statement:
            "Rating my hunger on a scale helps me notice it before it becomes urgent.",
          strategyId: "in7",
        },
        {
          statement:
            "Eating at the same times each day works better than waiting until I feel hungry.",
          strategyId: "in1",
        },
        {
          statement:
            "Planning meals in advance means I'm less likely to get caught without food.",
          strategyId: "in8",
        },
      ],
      Thirst: [
        {
          statement:
            "I need a timer or prompt to remind me to drink — I can't rely on feeling thirsty.",
          strategyId: "in9",
        },
        {
          statement:
            "Keeping water where I can see it means I actually drink it.",
          strategyId: "in2",
        },
        {
          statement:
            "Adding flavour to water makes it much easier to drink enough.",
          strategyId: "in10",
        },
      ],
      "Toilet Needs": [
        {
          statement:
            "Going to the toilet at set times works better for me than waiting for a strong urge.",
          strategyId: "in3",
        },
        {
          statement:
            "Making a toilet stop part of my routine before transitions helps avoid being caught out.",
          strategyId: "in11",
        },
      ],
      Temperature: [
        {
          statement:
            "Actively checking in with myself about temperature helps me notice when I'm uncomfortable.",
          strategyId: "in12",
        },
        {
          statement:
            "Wearing layers makes it easy to adjust quickly when I do notice.",
          strategyId: "in4",
        },
        {
          statement:
            "Keeping a fan or blanket close by means I can respond without effort.",
          strategyId: "in13",
        },
      ],
      Fatigue: [
        {
          statement:
            "Rating my energy at set points in the day helps me catch depletion before it becomes a crisis.",
          strategyId: "in5",
        },
        {
          statement:
            "Taking breaks before I feel tired — rather than after — makes a real difference.",
          strategyId: "in14",
        },
        {
          statement:
            "Going to bed at the same time each night helps stabilise my energy levels.",
          strategyId: "in15",
        },
      ],
      "Emotion in the Body": [
        {
          statement:
            "When something feels off, asking where I feel it in my body helps me work out what it is.",
          strategyId: "in16",
        },
        {
          statement:
            "Naming an emotion — even roughly — seems to reduce its intensity.",
          strategyId: "in6",
        },
        {
          statement:
            "Keeping a brief log of sensations and feelings helps me learn my own patterns.",
          strategyId: "in17",
        },
      ],
    },
  },
};

// Build a lookup from strategyId → strategy object across all senses
const STRATEGY_BY_ID = {};
Object.values(STRATEGIES)
  .flat()
  .forEach((s) => {
    STRATEGY_BY_ID[s.id] = s;
  });

function SenseQuizScreen({
  sense,
  toolkit,
  onToggle,
  onBack,
  onComplete,
  completed,
}) {
  const quizData = QUIZ_DATA[sense.id];
  const allStrategies = STRATEGIES[sense.id] || [];

  // step: "l1" | "l2" | "l3" | "results"
  const [step, setStep] = useState("l1");
  const [selectedOrientations, setSelectedOrientations] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [likedIds, setLikedIds] = useState(new Set());

  // Derived values
  const layer1Items = quizData?.layer1 || [];
  const hasMultipleOrientations = layer1Items.length > 1;

  // All L3 cards for selected orientations
  const layer3Cards = selectedOrientations.flatMap(
    (o) => quizData?.layer3?.[o] || []
  );

  // Filtered strategies for results: match selected orientations + types
  const getResults = () => {
    // If user liked anything, show only those matches
    if (likedIds.size > 0) {
      return allStrategies.filter((s) => likedIds.has(s.id));
    }
    // If user skipped Layer 3 or tapped nothing, fall back to the full filtered pool
    if (!quizData) return allStrategies;
    let pool =
      selectedOrientations.length > 0
        ? allStrategies.filter((s) => selectedOrientations.includes(s.category))
        : allStrategies;
    if (selectedTypes.length > 0)
      pool = pool.filter((s) => selectedTypes.includes(s.type));
    return pool;
  };

  const toggleOrientation = (o) => {
    setSelectedOrientations((prev) =>
      prev.includes(o) ? prev.filter((x) => x !== o) : [...prev, o]
    );
  };

  const toggleType = (t) => {
    setSelectedTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  const toggleLike = (id) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  // Available types for Layer 2 based on selected orientations
  const availableTypes = [
    ...new Set(
      selectedOrientations.flatMap((o) => quizData?.layer2Types?.[o] || [])
    ),
  ];

  // Skip L2 if only one type available or no orientations selected
  const shouldShowL2 = availableTypes.length > 1;

  const handleL1Continue = () => {
    if (selectedOrientations.length === 0) {
      // Nothing selected — show all, skip to results
      setStep("results");
    } else if (shouldShowL2) {
      setStep("l2");
    } else {
      setStep("l3");
    }
  };

  const handleL2Continue = () => {
    if (layer3Cards.length > 0) {
      setStep("l3");
    } else {
      setStep("results");
    }
  };

  const results = getResults();
  const inToolkitResults = results.filter((s) =>
    toolkit.some((t) => t.id === s.id)
  );
  const notInToolkitResults = results.filter(
    (s) => !toolkit.some((t) => t.id === s.id)
  );

  const stepIndex = { l1: 0, l2: 1, l3: 2, results: 3 }[step];

  return (
    <div style={{ padding: "0 0 100px" }}>
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${sense.color}33 0%, ${sense.color}11 100%)`,
          padding: "48px 20px 24px",
          borderBottom: `2px solid ${sense.color}22`,
        }}
      >
        <button
          onClick={
            step === "l1"
              ? onBack
              : () => setStep(["l1", "l1", "l2", "l3"][stepIndex])
          }
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#666",
            fontSize: 14,
            padding: 0,
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          ← {step === "l1" ? "Back" : "Previous step"}
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 12,
          }}
        >
          <span style={{ fontSize: 36 }}>{sense.emoji}</span>
          <h2
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 22,
              color: "#1A1A2E",
              margin: 0,
            }}
          >
            {sense.label}
          </h2>
        </div>

        {/* Step progress */}
        <div style={{ display: "flex", gap: 6 }}>
          {["l1", "l2", "l3", "results"].map((s, i) => (
            <div
              key={s}
              style={{
                flex: 1,
                height: 3,
                borderRadius: 2,
                background: i <= stepIndex ? sense.color : sense.color + "33",
                transition: "background .3s",
              }}
            />
          ))}
        </div>
      </div>

      <div style={{ padding: "24px 20px" }}>
        {/* ── LAYER 1: Orientation ── */}
        {step === "l1" && (
          <div>
            <div
              style={{
                fontWeight: 700,
                color: "#1A1A2E",
                fontSize: 16,
                marginBottom: 6,
              }}
            >
              Which of these sounds like you?
            </div>
            <p
              style={{
                color: "#666",
                fontSize: 13,
                marginBottom: 20,
                lineHeight: 1.6,
              }}
            >
              Select all that apply — you can identify with more than one.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginBottom: 24,
              }}
            >
              {layer1Items.map((item) => {
                const selected = selectedOrientations.includes(
                  item.orientation
                );
                return (
                  <button
                    key={item.orientation}
                    onClick={() => toggleOrientation(item.orientation)}
                    style={{
                      background: selected ? sense.color + "18" : "#fff",
                      border: selected
                        ? `2px solid ${sense.color}88`
                        : "2px solid #EEEEF6",
                      borderRadius: 16,
                      padding: "16px 18px",
                      textAlign: "left",
                      cursor: "pointer",
                      transition: "all .15s",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                      }}
                    >
                      <div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          flexShrink: 0,
                          marginTop: 1,
                          background: selected ? sense.color : "#E8E8F0",
                          border: `2px solid ${
                            selected ? sense.color : "#D0D0E0"
                          }`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: 12,
                          fontWeight: 700,
                        }}
                      >
                        {selected ? "✓" : ""}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: sense.color,
                            textTransform: "uppercase",
                            letterSpacing: 0.5,
                            marginBottom: 4,
                          }}
                        >
                          {item.orientation}
                        </div>
                        <div
                          style={{
                            fontSize: 14,
                            color: "#333",
                            lineHeight: 1.5,
                            fontWeight: 500,
                          }}
                        >
                          {item.statement}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            <button
              onClick={handleL1Continue}
              style={{
                width: "100%",
                padding: "14px 0",
                borderRadius: 14,
                background: sense.color,
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                border: "none",
                cursor: "pointer",
              }}
            >
              {selectedOrientations.length === 0
                ? "Show everything →"
                : "Continue →"}
            </button>
          </div>
        )}

        {/* ── LAYER 2: Type filter ── */}
        {step === "l2" && (
          <div>
            <div
              style={{
                fontWeight: 700,
                color: "#1A1A2E",
                fontSize: 16,
                marginBottom: 6,
              }}
            >
              Where do you want to focus?
            </div>
            <p
              style={{
                color: "#666",
                fontSize: 13,
                marginBottom: 20,
                lineHeight: 1.6,
              }}
            >
              Choose the kinds of strategies that fit your life best right now.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginBottom: 24,
              }}
            >
              {availableTypes.map((type) => {
                const selected = selectedTypes.includes(type);
                const icons = { Me: "🧍", Environment: "🏠", Digital: "📱" };
                const descriptions = {
                  Me: "Things you do with your body or belongings",
                  Environment: "Changes to your physical space",
                  Digital: "Apps, devices and digital tools",
                };
                return (
                  <button
                    key={type}
                    onClick={() => toggleType(type)}
                    style={{
                      background: selected ? sense.color + "18" : "#fff",
                      border: selected
                        ? `2px solid ${sense.color}88`
                        : "2px solid #EEEEF6",
                      borderRadius: 16,
                      padding: "16px 18px",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                    }}
                  >
                    <span style={{ fontSize: 28 }}>{icons[type]}</span>
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: 14,
                          color: "#1A1A2E",
                        }}
                      >
                        {type}
                      </div>
                      <div
                        style={{ fontSize: 12, color: "#888", marginTop: 2 }}
                      >
                        {descriptions[type]}
                      </div>
                    </div>
                    {selected && (
                      <span
                        style={{
                          marginLeft: "auto",
                          color: sense.color,
                          fontWeight: 700,
                        }}
                      >
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            <button
              onClick={handleL2Continue}
              style={{
                width: "100%",
                padding: "14px 0",
                borderRadius: 14,
                background: sense.color,
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                border: "none",
                cursor: "pointer",
              }}
            >
              {selectedTypes.length === 0 ? "Show all types →" : "Continue →"}
            </button>
          </div>
        )}

        {/* ── LAYER 3: Like Me / Not Me ── */}
        {step === "l3" && (
          <div>
            <div
              style={{
                fontWeight: 700,
                color: "#1A1A2E",
                fontSize: 16,
                marginBottom: 6,
              }}
            >
              Which of these sound like you?
            </div>
            <p
              style={{
                color: "#666",
                fontSize: 13,
                marginBottom: 20,
                lineHeight: 1.6,
              }}
            >
              Tap "Like me" on anything that resonates — those strategies will
              go straight to your toolkit.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginBottom: 24,
              }}
            >
              {layer3Cards.map((card) => {
                const strategy = STRATEGY_BY_ID[card.strategyId];
                if (!strategy) return null;
                const liked = likedIds.has(strategy.id);
                return (
                  <div
                    key={card.strategyId}
                    style={{
                      background: liked ? sense.color + "12" : "#fff",
                      border: liked
                        ? `2px solid ${sense.color}66`
                        : "2px solid #EEEEF6",
                      borderRadius: 16,
                      padding: "16px 18px",
                      transition: "all .15s",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 14,
                        color: "#1A1A2E",
                        lineHeight: 1.55,
                        marginBottom: 12,
                        fontStyle: "italic",
                      }}
                    >
                      "{card.statement}"
                    </div>
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <button
                        onClick={() => toggleLike(strategy.id)}
                        style={{
                          padding: "6px 14px",
                          borderRadius: 20,
                          fontSize: 12,
                          fontWeight: 700,
                          border: `2px solid ${
                            liked ? sense.color : "#D0D0E0"
                          }`,
                          background: liked ? sense.color : "transparent",
                          color: liked ? "#fff" : "#888",
                          cursor: "pointer",
                          transition: "all .15s",
                        }}
                      >
                        {liked ? "✓ Like me" : "Like me"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => setStep("results")}
              style={{
                width: "100%",
                padding: "14px 0",
                borderRadius: 14,
                background: sense.color,
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                border: "none",
                cursor: "pointer",
              }}
            >
              See my suggestions →
            </button>
          </div>
        )}

        {/* ── RESULTS ── */}
        {step === "results" && (
          <div>
            {likedIds.size > 0 ? (
              <div
                style={{
                  background: sense.color + "15",
                  border: `1.5px solid ${sense.color}44`,
                  borderRadius: 14,
                  padding: "12px 16px",
                  marginBottom: 20,
                  fontSize: 13,
                  color: "#333",
                  lineHeight: 1.5,
                }}
              >
                Your <strong>{likedIds.size} "Like me"</strong>{" "}
                {likedIds.size === 1 ? "match" : "matches"} — add any to your
                toolkit below.
              </div>
            ) : (
              <div
                style={{
                  background: "#F7F7FF",
                  border: "1.5px solid #EEEEF6",
                  borderRadius: 14,
                  padding: "12px 16px",
                  marginBottom: 20,
                  fontSize: 13,
                  color: "#888",
                  lineHeight: 1.5,
                }}
              >
                You didn't tap "Like me" on anything — here are all the
                strategies for your selections.
              </div>
            )}

            {inToolkitResults.length > 0 && (
              <>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: sense.color,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  In your toolkit
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    marginBottom: 24,
                  }}
                >
                  {inToolkitResults.map((s) => (
                    <StrategyCard
                      key={s.id}
                      strategy={s}
                      inToolkit
                      onToggle={onToggle}
                    />
                  ))}
                </div>
              </>
            )}

            {notInToolkitResults.length > 0 && (
              <>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#888",
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  {inToolkitResults.length > 0
                    ? "Also add to toolkit"
                    : "Add to toolkit"}
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {notInToolkitResults.map((s) => (
                    <StrategyCard
                      key={s.id}
                      strategy={s}
                      inToolkit={false}
                      onToggle={onToggle}
                    />
                  ))}
                </div>
              </>
            )}

            {results.length === 0 && (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px 0",
                  color: "#888",
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
                <div style={{ fontSize: 14 }}>
                  No strategies match those filters — try selecting fewer
                  options.
                </div>
                <button
                  onClick={() => setStep("l1")}
                  style={{
                    marginTop: 16,
                    background: "none",
                    border: `1.5px solid ${sense.color}`,
                    color: sense.color,
                    borderRadius: 10,
                    padding: "8px 16px",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: 13,
                  }}
                >
                  Start again
                </button>
              </div>
            )}

            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              <button
                onClick={() => setStep("l1")}
                style={{
                  flex: 1,
                  padding: "12px 0",
                  borderRadius: 12,
                  background: "#F0F0FF",
                  color: "#6B6BFF",
                  fontWeight: 700,
                  fontSize: 13,
                  border: "2px solid #6B6BFF22",
                  cursor: "pointer",
                }}
              >
                Start over
              </button>
              {!completed && (
                <button
                  onClick={onComplete}
                  style={{
                    flex: 2,
                    padding: "12px 0",
                    borderRadius: 12,
                    background: sense.color,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 13,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Mark as explored ✓
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SettingsScreen({ settings, onSettingChange, userName }) {
  const Toggle = ({ id, label, desc }) => {
    const on = settings[id];
    return (
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: "16px 18px",
          border: "1.5px solid #EEEEF6",
          marginBottom: 10,
          display: "flex",
          alignItems: "flex-start",
          gap: 14,
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: "#1A1A2E",
              marginBottom: 2,
            }}
          >
            {label}
          </div>
          <div style={{ fontSize: 12, color: "#888", lineHeight: 1.5 }}>
            {desc}
          </div>
        </div>
        <button
          onClick={() => onSettingChange(id, !on)}
          style={{
            width: 48,
            height: 26,
            borderRadius: 13,
            flexShrink: 0,
            background: on ? "#6B6BFF" : "#D4D4E8",
            border: "none",
            cursor: "pointer",
            position: "relative",
            transition: "background .2s",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "#fff",
              position: "absolute",
              top: 3,
              left: on ? 25 : 3,
              transition: "left .2s",
              boxShadow: "0 1px 4px #0002",
            }}
          />
        </button>
      </div>
    );
  };

  return (
    <div style={{ padding: "0 0 100px" }}>
      <div
        style={{
          background: "linear-gradient(135deg, #1A1A2E 0%, #2D2D5E 100%)",
          padding: "48px 24px 28px",
          borderRadius: "0 0 28px 28px",
          marginBottom: 24,
        }}
      >
        <h2
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 26,
            color: "#fff",
            marginBottom: 4,
          }}
        >
          Settings
        </h2>
        <p style={{ color: "#9999CC", fontSize: 13, margin: 0 }}>
          Customise your SensoryMe experience
        </p>
      </div>

      <div style={{ padding: "0 20px" }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#6B6BFF",
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Accessibility
        </div>
        <Toggle
          id="greyscale"
          label="Greyscale mode"
          desc="Removes all colour from the app. Useful when colour feels overwhelming or if you want a calmer visual experience."
        />
        <Toggle
          id="dyslexia"
          label="Dyslexia-friendly font"
          desc="Switches to OpenDyslexic, a typeface designed to improve readability for people with dyslexia."
        />
        <Toggle
          id="reducedMotion"
          label="Reduced motion"
          desc="Turns off animations and transitions throughout the app."
        />

        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#6B6BFF",
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 12,
            marginTop: 24,
          }}
        >
          Profile
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "16px 18px",
            border: "1.5px solid #EEEEF6",
            marginBottom: 10,
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: "#1A1A2E",
              marginBottom: 2,
            }}
          >
            Name
          </div>
          <div style={{ fontSize: 13, color: "#888" }}>{userName}</div>
        </div>

        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#6B6BFF",
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 12,
            marginTop: 24,
          }}
        >
          Reminders
        </div>
        <div
          style={{
            background: "#F7F7FF",
            borderRadius: 16,
            padding: "16px 18px",
            border: "1.5px solid #EEEEF6",
            marginBottom: 10,
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: "#1A1A2E",
              marginBottom: 4,
            }}
          >
            Daily check-in reminder
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#888",
              lineHeight: 1.5,
              marginBottom: 10,
            }}
          >
            A gentle prompt to log your regulation state once a day. Only sent
            if you request it.
          </div>
          <div
            style={{
              display: "inline-block",
              background: "#E8E8F0",
              borderRadius: 8,
              padding: "5px 12px",
              fontSize: 12,
              color: "#999",
              fontWeight: 600,
            }}
          >
            Coming in the full app
          </div>
        </div>

        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#E05252",
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 12,
            marginTop: 24,
          }}
        >
          Data
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "16px 18px",
            border: "1.5px solid #EEEEF6",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: "#1A1A2E",
              marginBottom: 4,
            }}
          >
            Reset profile
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#888",
              lineHeight: 1.5,
              marginBottom: 12,
            }}
          >
            Clears all your quiz responses and saved strategies. This cannot be
            undone.
          </div>
          <button
            style={{
              background: "#FEF2F2",
              border: "1.5px solid #E0525244",
              borderRadius: 10,
              padding: "8px 16px",
              fontSize: 12,
              color: "#E05252",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Reset profile
          </button>
        </div>
      </div>
    </div>
  );
}

function ToolkitScreen({ toolkit, onToggle, pinnedIds, onTogglePin }) {
  const [expandedSenses, setExpandedSenses] = useState({});

  const toggleExpand = (id) =>
    setExpandedSenses((prev) => ({ ...prev, [id]: !prev[id] }));

  if (toolkit.length === 0) {
    return (
      <div style={{ padding: "60px 24px", textAlign: "center" }}>
        <div style={{ fontSize: 64, marginBottom: 20 }}>🧰</div>
        <h2
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 24,
            color: "#1A1A2E",
            marginBottom: 10,
          }}
        >
          Your toolkit is empty
        </h2>
        <p style={{ color: "#777", lineHeight: 1.7, fontSize: 14 }}>
          Explore your sensory systems on the Home tab to start adding
          strategies that work for you.
        </p>
      </div>
    );
  }

  // Group toolkit strategies by sense, preserving SENSES order
  const grouped = SENSES.filter((s) => s.id !== "misc")
    .map((sense) => {
      // Find which strategies in the toolkit belong to this sense
      const senseStrategyIds = new Set(
        (STRATEGIES[sense.id] || []).map((s) => s.id)
      );
      const strategies = toolkit.filter((s) => senseStrategyIds.has(s.id));
      return { sense, strategies };
    })
    .filter(({ strategies }) => strategies.length > 0);

  // Misc strategies in toolkit (not tied to a sense)
  const miscIds = new Set((STRATEGIES.misc || []).map((s) => s.id));
  const miscInToolkit = toolkit.filter((s) => miscIds.has(s.id));

  return (
    <div style={{ padding: "0 0 100px" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1A1A2E 0%, #2D2D5E 100%)",
          padding: "48px 24px 28px",
          borderRadius: "0 0 28px 28px",
          marginBottom: 24,
        }}
      >
        <h2
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 26,
            color: "#fff",
            marginBottom: 4,
          }}
        >
          My Toolkit
        </h2>
        <p style={{ color: "#9999CC", fontSize: 13, margin: 0 }}>
          {toolkit.length} {toolkit.length === 1 ? "strategy" : "strategies"}{" "}
          across {grouped.length} {grouped.length === 1 ? "sense" : "senses"}
        </p>
      </div>

      <div style={{ padding: "0 20px" }}>
        {pinnedIds.size > 0 && (
          <>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#6B6BFF",
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              📌 Go-to strategies
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginBottom: 24,
              }}
            >
              {toolkit
                .filter((s) => pinnedIds.has(s.id))
                .map((s) => (
                  <div key={s.id} style={{ position: "relative" }}>
                    <StrategyCard
                      strategy={s}
                      inToolkit
                      onToggle={onToggle}
                      expandable
                    />
                    <button
                      onClick={() => onTogglePin(s.id)}
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 44,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: 16,
                      }}
                    >
                      📌
                    </button>
                  </div>
                ))}
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#888",
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              All strategies
            </div>
          </>
        )}
        {grouped.map(({ sense, strategies }) => {
          const isExpanded = expandedSenses[sense.id] !== false; // default open
          return (
            <div key={sense.id} style={{ marginBottom: 12 }}>
              {/* Sense section header */}
              <button
                onClick={() => toggleExpand(sense.id)}
                style={{
                  width: "100%",
                  background: sense.color + "18",
                  border: `1.5px solid ${sense.color}33`,
                  borderRadius: isExpanded ? "14px 14px 0 0" : 14,
                  padding: "14px 16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  transition: "border-radius .2s",
                }}
              >
                <span style={{ fontSize: 20 }}>{sense.emoji}</span>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#1A1A2E",
                    flex: 1,
                    textAlign: "left",
                  }}
                >
                  {sense.label}
                </span>
                <span
                  style={{ fontSize: 12, color: sense.color, fontWeight: 600 }}
                >
                  {strategies.length}{" "}
                  {strategies.length === 1 ? "strategy" : "strategies"}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: sense.color,
                    marginLeft: 4,
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    display: "inline-block",
                    transition: "transform .2s",
                  }}
                >
                  ▾
                </span>
              </button>

              {/* Strategies */}
              {isExpanded && (
                <div
                  style={{
                    border: `1.5px solid ${sense.color}33`,
                    borderTop: "none",
                    borderRadius: "0 0 14px 14px",
                    overflow: "hidden",
                  }}
                >
                  {strategies.map((s, i) => (
                    <div
                      key={s.id}
                      style={{
                        borderTop: i > 0 ? "1px solid #F0F0F8" : "none",
                        background: "#fff",
                      }}
                    >
                      <div style={{ position: "relative" }}>
                        <StrategyCard
                          strategy={s}
                          inToolkit
                          onToggle={onToggle}
                          expandable
                        />
                        <button
                          onClick={() => onTogglePin(s.id)}
                          title={
                            pinnedIds.has(s.id)
                              ? "Unpin from go-to"
                              : pinnedIds.size >= 5 && !pinnedIds.has(s.id)
                              ? "Limit of 5 go-to strategies reached"
                              : "Pin as go-to strategy"
                          }
                          style={{
                            position: "absolute",
                            top: 10,
                            right: 44,
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            fontSize: 16,
                            opacity: pinnedIds.has(s.id) ? 1 : 0.3,
                            transition: "opacity .15s",
                          }}
                        >
                          📌
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Misc strategies */}
        {miscInToolkit.length > 0 && (
          <div style={{ marginBottom: 12 }}>
            <div
              style={{
                background: "#F7F7FF",
                border: "1.5px solid #EEEEF6",
                borderRadius: 14,
                padding: "14px 16px",
                marginBottom: 8,
                fontSize: 13,
                fontWeight: 700,
                color: "#888",
              }}
            >
              🌿 General
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {miscInToolkit.map((s) => (
                <StrategyCard
                  key={s.id}
                  strategy={s}
                  inToolkit
                  onToggle={onToggle}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ScanScreen({
  toolkit,
  thermoValue,
  onThermoChange,
  onToggle,
  setActiveTab,
}) {
  const [step, setStep] = useState("thermo"); // thermo | bodycare | senses | layer2 | results
  const [bodyChecks, setBodyChecks] = useState({});
  const [bodyCheckExpanded, setBodyCheckExpanded] = useState(null);
  const [selectedSenses, setSelectedSenses] = useState([]);
  const [layer2, setLayer2] = useState({});

  const state =
    thermoValue > 0.75
      ? REGULATION_STATES[0]
      : thermoValue > 0.5
      ? REGULATION_STATES[1]
      : thermoValue > 0.25
      ? REGULATION_STATES[2]
      : REGULATION_STATES[3];

  const toggleSense = (id) =>
    setSelectedSenses((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id]
    );
  const toggleL2 = (sense, opt) => {
    setLayer2((prev) => {
      const cur = prev[sense] || [];
      const next = cur.includes(opt)
        ? cur.filter((x) => x !== opt)
        : [...cur, opt];
      return { ...prev, [sense]: next };
    });
  };

  const getResults = () => {
    if (selectedSenses.length === 0) return ALL_STRATEGIES;
    let pool = [];
    for (const sId of selectedSenses) {
      const sStrategies = STRATEGIES[sId] || [];
      let filtered = sStrategies;
      if (state.id === "amber")
        filtered = sStrategies.filter((s) =>
          ["Reduce", "Calming"].includes(s.category)
        );
      else if (state.id === "yellow")
        filtered = sStrategies.filter((s) =>
          ["Modify", "Regulating"].includes(s.category)
        );
      pool = [...pool, ...filtered];
    }
    // Also add misc
    pool = [...pool, ...(STRATEGIES.misc || [])];
    return pool;
  };

  const results = getResults();
  const toolkitResults = results.filter((s) =>
    toolkit.some((t) => t.id === s.id)
  );
  const otherResults = results.filter(
    (s) => !toolkit.some((t) => t.id === s.id)
  );

  const SCAN_SENSES = SENSES.filter((s) => s.id !== "misc");

  return (
    <div style={{ padding: "0 0 100px" }}>
      <div
        style={{
          background: "linear-gradient(135deg, #1A1A2E 0%, #2D2D5E 100%)",
          padding: "48px 24px 28px",
          borderRadius: "0 0 28px 28px",
          marginBottom: 24,
        }}
      >
        <h2
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 26,
            color: "#fff",
            marginBottom: 4,
          }}
        >
          Check in
        </h2>
        <p style={{ color: "#9999CC", fontSize: 13, margin: 0 }}>
          In-the-moment support
        </p>

        {/* Step progress */}
        <div style={{ display: "flex", gap: 6, marginTop: 20 }}>
          {["thermo", "bodycare", "senses", "results"].map((s, i) => (
            <div
              key={s}
              style={{
                flex: 1,
                height: 4,
                borderRadius: 2,
                background:
                  step === s || (step === "layer2" && s === "senses")
                    ? "#6B6BFF"
                    : ["thermo", "bodycare", "senses", "results"].indexOf(
                        step
                      ) > i
                    ? "#6B6BFF88"
                    : "#ffffff22",
              }}
            />
          ))}
        </div>
      </div>

      <div style={{ padding: "0 20px" }}>
        {step === "thermo" && (
          <div>
            <div
              style={{
                fontWeight: 700,
                color: "#1A1A2E",
                fontSize: 16,
                marginBottom: 8,
              }}
            >
              How are you feeling right now?
            </div>
            <p
              style={{
                color: "#666",
                fontSize: 13,
                marginBottom: 24,
                lineHeight: 1.6,
              }}
            >
              Adjust the thermometer to show where you are.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 28,
              }}
            >
              <Thermometer value={thermoValue} onChange={onThermoChange} />
            </div>
            <div
              style={{
                padding: "14px 18px",
                borderRadius: 14,
                background: state.bg,
                border: `1.5px solid ${state.color}44`,
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: state.color,
                  flexShrink: 0,
                }}
              />
              <span
                style={{ color: state.color, fontWeight: 700, fontSize: 15 }}
              >
                {state.label}
              </span>
            </div>
            <button
              onClick={() =>
                setStep(
                  state.id === "red" || state.id === "amber"
                    ? "bodycare"
                    : "senses"
                )
              }
              style={{
                width: "100%",
                padding: "14px 0",
                borderRadius: 14,
                background: "#6B6BFF",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                border: "none",
                cursor: "pointer",
              }}
            >
              Continue →
            </button>
          </div>
        )}

        {step === "bodycare" && (
          <div>
            <div style={{ fontSize: 28, marginBottom: 12 }}>🌿</div>
            <div
              style={{
                fontWeight: 700,
                color: "#1A1A2E",
                fontSize: 16,
                marginBottom: 6,
              }}
            >
              Let's check in on the basics first
            </div>
            <p
              style={{
                color: "#666",
                fontSize: 13,
                marginBottom: 24,
                lineHeight: 1.6,
              }}
            >
              Sometimes the body needs basic care before anything else can help.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginBottom: 20,
              }}
            >
              {BODY_CARE.map((item) => {
                const checked = !!bodyChecks[item.id];
                const expanded = bodyCheckExpanded === item.id;
                const linkedStrategies = (item.strategyIds || [])
                  .map((id) => STRATEGY_BY_ID[id])
                  .filter(Boolean);
                return (
                  <div
                    key={item.id}
                    style={{
                      background: checked ? "#F0FDF4" : "#fff",
                      border: checked
                        ? "2px solid #3D9E6044"
                        : "2px solid #EEEEF6",
                      borderRadius: 14,
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() =>
                        setBodyChecks((bc) => ({
                          ...bc,
                          [item.id]: !bc[item.id],
                        }))
                      }
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        textAlign: "left",
                        cursor: "pointer",
                        background: "none",
                        border: "none",
                      }}
                    >
                      <span style={{ fontSize: 22 }}>{item.icon}</span>
                      <span
                        style={{
                          flex: 1,
                          fontSize: 14,
                          color: "#1A1A2E",
                          fontWeight: 500,
                        }}
                      >
                        {item.label}
                      </span>
                      <div
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          background: checked ? "#3D9E60" : "#E8E8F0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: 13,
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {checked ? "✓" : ""}
                      </div>
                    </button>
                    {!checked && (
                      <div style={{ padding: "0 16px 14px" }}>
                        <div
                          style={{
                            fontSize: 12,
                            color: "#888",
                            lineHeight: 1.6,
                            marginBottom: 10,
                          }}
                        >
                          {item.tip}
                        </div>
                        <button
                          onClick={() =>
                            setBodyCheckExpanded(expanded ? null : item.id)
                          }
                          style={{
                            background: "none",
                            border: "1.5px solid #EEEEF6",
                            borderRadius: 8,
                            padding: "5px 10px",
                            fontSize: 11,
                            color: "#6B6BFF",
                            fontWeight: 700,
                            cursor: "pointer",
                          }}
                        >
                          {expanded ? "Hide strategies ▴" : "See strategies ▾"}
                        </button>
                        {expanded && (
                          <div
                            style={{
                              marginTop: 10,
                              display: "flex",
                              flexDirection: "column",
                              gap: 8,
                            }}
                          >
                            {linkedStrategies.map((s) => (
                              <StrategyCard
                                key={s.id}
                                strategy={s}
                                inToolkit={toolkit.some((t) => t.id === s.id)}
                                onToggle={onToggle}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {state.id === "red" ? (
              <div
                style={{
                  background: "#FEF2F2",
                  border: "1.5px solid #E0525255",
                  borderRadius: 14,
                  padding: "14px 16px",
                  marginBottom: 16,
                  fontSize: 13,
                  color: "#666",
                  lineHeight: 1.6,
                }}
              >
                💙 When you're overwhelmed, taking care of the basics is the
                most important thing. Take your time here.
              </div>
            ) : (
              <button
                onClick={() => setStep("senses")}
                style={{
                  width: "100%",
                  padding: "14px 0",
                  borderRadius: 14,
                  background: "#6B6BFF",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 15,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Continue to senses →
              </button>
            )}
            {state.id !== "red" && (
              <button
                onClick={() => setStep("senses")}
                style={{
                  marginTop: 10,
                  width: "100%",
                  padding: "12px 0",
                  borderRadius: 14,
                  background: "transparent",
                  color: "#999",
                  fontWeight: 600,
                  fontSize: 13,
                  border: "1.5px solid #EEEEF6",
                  cursor: "pointer",
                }}
              >
                Skip to sensory strategies
              </button>
            )}
          </div>
        )}

        {step === "senses" && state.id == "green" && (
          <div>
            <div
              style={{
                fontWeight: 700,
                color: "#1A1A2E",
                fontSize: 16,
                marginBottom: 6,
              }}
            >
              You're all good
            </div>
            <p
              style={{
                color: "#666",
                fontSize: 13,
                marginBottom: 20,
                lineHeight: 1.6,
              }}
            >
              Explore the senses in your own time.
            </p>
            <button
              onClick={() => setActiveTab("home")}
              style={{
                width: "100%",
                padding: "14px 0",
                borderRadius: 14,
                background: "#6B6BFF",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                border: "none",
                cursor: "pointer",
              }}
            >
              Home →
            </button>
          </div>
        )}

        {/* If user chooses any other answer then "I'm ok", show senses */}
        {step === "senses" && state.id !== "green" && (
          <div>
            <div
              style={{
                fontWeight: 700,
                color: "#1A1A2E",
                fontSize: 16,
                marginBottom: 6,
              }}
            >
              Which senses feel difficult right now?
            </div>
            <p
              style={{
                color: "#666",
                fontSize: 13,
                marginBottom: 20,
                lineHeight: 1.6,
              }}
            >
              Select all that apply.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
                marginBottom: 24,
              }}
            >
              {SCAN_SENSES.map((s) => {
                const sel = selectedSenses.includes(s.id);
                return (
                  <button
                    key={s.id}
                    onClick={() => toggleSense(s.id)}
                    style={{
                      background: sel ? s.color + "22" : "#fff",
                      border: sel
                        ? `2px solid ${s.color}77`
                        : "2px solid #EEEEF6",
                      borderRadius: 16,
                      padding: "14px 12px",
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 24, marginBottom: 4 }}>
                      {s.emoji}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#1A1A2E",
                      }}
                    >
                      {s.label}
                    </div>
                  </button>
                );
              })}
            </div>
            <button
              onClick={() =>
                setStep(selectedSenses.length > 0 ? "layer2" : "results")
              }
              style={{
                width: "100%",
                padding: "14px 0",
                borderRadius: 14,
                background: "#6B6BFF",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                border: "none",
                cursor: "pointer",
              }}
            >
              {selectedSenses.length > 0
                ? "Tell me more →"
                : "Show all strategies →"}
            </button>
          </div>
        )}

        {step === "layer2" && (
          <div>
            <div
              style={{
                fontWeight: 700,
                color: "#1A1A2E",
                fontSize: 16,
                marginBottom: 6,
              }}
            >
              A bit more detail…
            </div>
            <p
              style={{
                color: "#666",
                fontSize: 13,
                marginBottom: 20,
                lineHeight: 1.6,
              }}
            >
              This helps surface the most useful strategies for you right now.
            </p>
            {selectedSenses.map((sId) => {
              const sense = SENSES.find((s) => s.id === sId);
              const opts = SCAN_LAYER2[sId] || [];
              if (!opts.length || opts[0] === "See Body Care Checklist")
                return null;
              return (
                <div key={sId} style={{ marginBottom: 24 }}>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#444",
                      marginBottom: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span>{sense?.emoji}</span> {sense?.label}
                  </div>
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 8 }}
                  >
                    {opts.map((opt) => {
                      const sel = (layer2[sId] || []).includes(opt);
                      return (
                        <button
                          key={opt}
                          onClick={() => toggleL2(sId, opt)}
                          style={{
                            background: sel ? sense.color + "18" : "#F7F7FF",
                            border: sel
                              ? `2px solid ${sense.color}55`
                              : "2px solid #EEEEF6",
                            borderRadius: 12,
                            padding: "11px 14px",
                            textAlign: "left",
                            fontSize: 13,
                            color: "#333",
                            cursor: "pointer",
                            fontWeight: sel ? 700 : 400,
                          }}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <button
              onClick={() => setStep("results")}
              style={{
                width: "100%",
                padding: "14px 0",
                borderRadius: 14,
                background: "#6B6BFF",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                border: "none",
                cursor: "pointer",
              }}
            >
              Show my strategies →
            </button>
          </div>
        )}

        {step === "results" && (
          <div>
            <div
              style={{
                fontWeight: 600,
                color: "#555",
                fontSize: 14,
                marginBottom: 24,
                lineHeight: 1.6,
              }}
            >
              💙 Let's make this a bit easier.
            </div>

            {toolkitResults.length > 0 && (
              <>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#6B6BFF",
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  From your toolkit
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    marginBottom: 28,
                  }}
                >
                  {toolkitResults.map((s) => (
                    <StrategyCard
                      key={s.id}
                      strategy={s}
                      inToolkit
                      onToggle={onToggle}
                    />
                  ))}
                </div>
              </>
            )}

            {otherResults.length > 0 && (
              <>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#888",
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  Other suggestions
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {otherResults.slice(0, 8).map((s) => (
                    <StrategyCard
                      key={s.id}
                      strategy={s}
                      inToolkit={false}
                      onToggle={onToggle}
                    />
                  ))}
                </div>
              </>
            )}

            <button
              onClick={() => setStep("thermo")}
              style={{
                marginTop: 24,
                width: "100%",
                padding: "14px 0",
                borderRadius: 14,
                background: "#F0F0FF",
                color: "#6B6BFF",
                fontWeight: 700,
                fontSize: 14,
                border: "2px solid #6B6BFF33",
                cursor: "pointer",
              }}
            >
              Start again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ── MAIN APP ──────────────────────────────────────────────────────────────────

export default function App() {
  const [onboarded, setOnboarded] = useState(false);
  const [userName, setUserName] = useState("there");
  const [activeTab, setActiveTab] = useState("home");
  const [toolkit, setToolkit] = useState([]);
  const [thermoValue, setThermoValue] = useState(0.35);
  const [completedSenses, setCompletedSenses] = useState([]);
  const [activeSense, setActiveSense] = useState(null);
  const [pinnedIds, setPinnedIds] = useState(new Set());
  const [settings, setSettings] = useState({
    greyscale: false,
    dyslexia: false,
    reducedMotion: false,
  });

  const toggleToolkit = (strategy) => {
    setToolkit((prev) =>
      prev.some((s) => s.id === strategy.id)
        ? prev.filter((s) => s.id !== strategy.id)
        : [...prev, strategy]
    );
  };

  const togglePin = (id) => {
    setPinnedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else if (next.size < 5) {
        next.add(id);
      }
      return next;
    });
  };

  const handleSettingChange = (key, val) => {
    setSettings((prev) => ({ ...prev, [key]: val }));
  };

  const TABS = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "toolkit", label: "Toolkit", icon: "🧰" },
    { id: "scan", label: "Scan", icon: "🌡️" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  if (!onboarded) {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;600;700&display=swap');
        @import url('https://fonts.cdnfonts.com/css/opendyslexic');
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: 'DM Sans', sans-serif; }
        `}</style>
        <OnboardingScreen
          onDone={(name) => {
            setUserName(name);
            setOnboarded(true);
          }}
        />
      </>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;600;700&display=swap');
        @import url('https://fonts.cdnfonts.com/css/opendyslexic');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; background: #F7F7FF; }
        ::-webkit-scrollbar { display: none; }
      `}</style>

      <div
        style={{
          maxWidth: 430,
          margin: "0 auto",
          minHeight: "100vh",
          background: "#F7F7FF",
          position: "relative",
          fontFamily: settings.dyslexia
            ? "'OpenDyslexic', sans-serif"
            : "'DM Sans', sans-serif",
          overflowX: "hidden",
          filter: settings.greyscale ? "grayscale(100%)" : "none",
          transition: settings.reducedMotion ? "none" : undefined,
        }}
      >
        {/* SCREENS */}
        <div style={{ overflowY: "auto", height: "100vh" }}>
          {activeSense ? (
            <SenseQuizScreen
              sense={activeSense}
              toolkit={toolkit}
              onToggle={toggleToolkit}
              onBack={() => setActiveSense(null)}
              completed={completedSenses.includes(activeSense.id)}
              onComplete={() => {
                setCompletedSenses((c) => [...c, activeSense.id]);
                setActiveSense(null);
              }}
            />
          ) : activeTab === "home" ? (
            <HomeScreen
              userName={userName}
              toolkit={toolkit}
              thermoValue={thermoValue}
              onThermoChange={setThermoValue}
              onSenseOpen={(s) => setActiveSense(s)}
              completedSenses={completedSenses}
              onScan={() => setActiveTab("scan")}
            />
          ) : activeTab === "toolkit" ? (
            <ToolkitScreen
              toolkit={toolkit}
              onToggle={toggleToolkit}
              pinnedIds={pinnedIds}
              onTogglePin={togglePin}
            />
          ) : activeTab === "settings" ? (
            <SettingsScreen
              settings={settings}
              onSettingChange={handleSettingChange}
              userName={userName}
            />
          ) : (
            <ScanScreen
              toolkit={toolkit}
              thermoValue={thermoValue}
              onThermoChange={setThermoValue}
              onToggle={toggleToolkit}
              setActiveTab={setActiveTab}
            />
          )}
        </div>

        {/* Bottom Nav */}
        {!activeSense && (
          <div
            style={{
              position: "fixed",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              maxWidth: 430,
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
              borderTop: "1.5px solid #EEEEF6",
              display: "flex",
              padding: "8px 0 16px",
              zIndex: 100,
            }}
          >
            {TABS.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    flex: 1,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 3,
                    padding: "4px 0",
                  }}
                >
                  <span style={{ fontSize: 22 }}>{tab.icon}</span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: active ? "#6B6BFF" : "#AAA",
                      letterSpacing: 0.3,
                    }}
                  >
                    {tab.label}
                  </span>
                  {active && (
                    <div
                      style={{
                        width: 20,
                        height: 3,
                        borderRadius: 2,
                        background: "#6B6BFF",
                        marginTop: 2,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

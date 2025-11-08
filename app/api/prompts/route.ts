import { NextResponse } from 'next/server';

const prompts = [
  {
    id: 1,
    title: 'Slide 1',
    text:
      'Close-up shot of a black t-shirt shoulder with visible dandruff flakes, realistic lighting, shallow depth of field'
  },
  {
    id: 2,
    title: 'Slide 2',
    text:
      'Person looking into mirror, brushing white flakes off shoulder, confused expression, indoor bathroom lighting'
  },
  {
    id: 3,
    title: 'Slide 3',
    text:
      'Zoomed-in scalp view turning into medical diagram illustration showing layers of skin and hair roots, clean style'
  },
  {
    id: 4,
    title: 'Slide 4',
    text:
      'Healthy scalp transitioning into dry and flaky scalp texture, split view, medical educational infographic style'
  },
  {
    id: 5,
    title: 'Slide 5',
    text:
      'Split image: oily scalp with shiny texture on one side, desert dry cracked scalp on the other, high resolution, educational theme'
  },
  {
    id: 6,
    title: 'Slide 6',
    text:
      'Microscopic illustration of Malassezia yeast on scalp, magnified cells, soft blue background, scientific style'
  },
  {
    id: 7,
    title: 'Slide 7',
    text:
      "Shampoo bottle labeled 'anti-dandruff' with active ingredients icons (zinc pyrithione, ketoconazole, salicylic acid), minimal product mockup, clean white background"
  },
  {
    id: 8,
    title: 'Slide 8',
    text:
      'Step-by-step sequence: person applying medicated shampoo to scalp, massaging foam, 3?5 minutes timer icon, rinse, bright bathroom setting'
  },
  {
    id: 9,
    title: 'Slide 9',
    text:
      'Before and after panel: week 0 vs week 2 vs week 4 scalp close-ups, progressively fewer flakes, consistent lighting'
  },
  {
    id: 10,
    title: 'Slide 10',
    text:
      'Lifestyle montage: pillowcase, comb, towel being cleaned; balanced diet plate; stress relief meditation pose, soft natural lighting'
  },
  {
    id: 11,
    title: 'Slide 11',
    text:
      'Confident person wearing black t-shirt, clean shoulders, smiling in natural light, subtle bokeh, no text overlay'
  }
];

export async function GET() {
  return NextResponse.json({ prompts });
}

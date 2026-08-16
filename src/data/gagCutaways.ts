import type { CutawaySegment, CutawaySuggestion } from './suggestions';

function still(id: string, prompt: string, onScreen: string, variations: string[]): CutawaySegment {
  return {
    id: `${id}-still`,
    label: 'Still',
    start: '0:00',
    end: '0:00',
    durationSec: 0,
    onScreen,
    lyrics: '',
    musicCue: 'Hold for newspaper-comic test. If it needs a caption, the still is unfinished.',
    grokImaginePrompt: prompt,
    geminiOmniPrompt: prompt,
    promptVariations: variations,
  };
}

function motion(
  id: string,
  seconds: number,
  prompt: string,
  onScreen: string,
  musicCue: string,
): CutawaySegment {
  return {
    id: `${id}-motion`,
    label: `Motion (${seconds}s)`,
    start: '0:00',
    end: `0:0${seconds}`,
    durationSec: seconds,
    onScreen,
    lyrics: '',
    musicCue,
    grokImaginePrompt: prompt,
    geminiOmniPrompt: prompt,
    promptVariations: [],
  };
}

export const gagCutaways: CutawaySuggestion[] = [
  {
    id: 'gag-closed-for-cosmic-reasons',
    kind: 'gag',
    title: 'Closed for Cosmic Reasons',
    status: 'ready-to-generate',
    runtime: 'still + 6s loop',
    episode: 'One-panel gag',
    songId: 'closed-for-cosmic-reasons',
    songTitle: 'Closed for Cosmic Reasons',
    summary:
      'Night infinity pool; laminated sign; the water hovers three feet up, still reflecting the city. She sits dry underneath and uses it as a ceiling. Vivienne energy.',
    visualArc: 'Chrome stanchion → hovering water sheet → dry woman in the empty basin → smoke flattening on the underside.',
    tags: ['gag', 'vivienne', 'pool', 'eyewash-station', 'one-panel'],
    segments: [
      still(
        'gag-01',
        'Photoreal one-panel film still, 2.39:1, night luxury hotel rooftop infinity pool, the entire rectangular sheet of dark chlorinated water hovering three feet above the empty pale-blue tiled basin as one unbroken pane, underside faintly convex, still rippling, still reflecting a distant sodium-and-neon city skyline, a small laminated institutional sign on a chrome stanchion at pool\'s edge reading CLOSED FOR COSMIC REASONS in polite Helvetica, under the hovering water a bored glamorous woman with long black hair, blood-red lipstick, a black one-piece maillot, and black stiletto heels sitting dry on a white woven deck chair, an open glossy fashion magazine on her lap that is not wet, a thin cigarette between two fingers, smoke rising and flattening against the water\'s underside like a ceiling, a room-service tumbler of amber liquid on the dry limestone deck, a tiny lobby CRT in the far colonnade playing EyeWash Station color bars, high-contrast silver moonlight from above-right plus one submerged pool lamp shining upward through the levitating water so her face is lit by the moon and by green-cyan caustics, wet chrome, dry stone, lots of negative night sky, 35mm anamorphic, T2.0, fine grain, Grok Imagine style',
        'Hovering infinity-pool sheet; laminated CLOSED FOR COSMIC REASONS sign; dry woman in black maillot and heels reading a dry magazine.',
        [
          'Same frame, magazine swapped for a dry room-service tray, Grok Imagine',
          'Sign handwritten in lipstick on the laminated card, otherwise identical, Grok Imagine',
        ],
      ),
      motion(
        'gag-01',
        6,
        'Locked-off 6-second photoreal loop. A slow ripple travels left to right across the hovering water sheet. Cigarette smoke rises, hits the underside, and sheets sideways. The submerged lamp\'s caustic crawls once across her collarbone. The ember pulses on beat two. The magazine page does not turn. The sign does not flutter. No one enters. Camera: 2 percent push only.',
        'Ripple across hovering water; smoke sheets on the underside; ember pulse; page does not turn.',
        'Closed for Cosmic Reasons — title line PA-narrow, half-step flat',
      ),
    ],
  },
  {
    id: 'gag-the-moon-is-collect',
    kind: 'gag',
    title: 'The Moon Is Collect',
    status: 'ready-to-generate',
    runtime: 'still + 5s loop',
    episode: 'One-panel gag',
    songId: 'the-moon-is-collect',
    songTitle: 'The Moon Is Collect',
    summary:
      'Red rotary, taut cord to a huge moon, empty chair, abandoned gloves. Someone is calling collect; the charges are astronomical; she stepped out. Liliane energy.',
    visualArc: 'Red plastic on black lacquer → cord out the window → moon as the other party → empty gloves.',
    tags: ['gag', 'liliane', 'moon', 'telephone', 'one-panel'],
    segments: [
      still(
        'gag-02',
        'Photoreal one-panel film still, 2.39:1, black-lacquer penthouse interior at 2 a.m., a single cherry-red 1960s rotary telephone ringing on a leather blotter, the coiled red plastic cord running out an open floor-to-ceiling window and stretching taut across high thin cloud all the way to a huge detailed full moon filling the upper right, empty oxblood leather chair pulled back as if someone just stood, crystal ashtray crowded with lipstick-stained filter ends, a pair of black evening gloves abandoned on the blotter with one finger still slightly curled, two wine glasses (one upright, one stem-down) and a few crushed berries on a saucer at the far edge of the desk, city grid far below the window, practical desk lamp off, the only warm light the telephone\'s tiny indicator, high-contrast red plastic against black lacquer and cold silver moonlight, strong negative space, 35mm, T1.8, quiet menace, Grok Imagine style',
        'Red rotary; cord taut to the moon; empty chair; lipstick filters; abandoned gloves; two glasses and berries.',
        [
          'Moon with a tiny NO CHARGES ACCEPTED sticker, otherwise identical, Grok Imagine',
          'Gloves still faintly steaming, otherwise identical, Grok Imagine',
        ],
      ),
      motion(
        'gag-02',
        5,
        '5-second locked interior. The receiver trembles on three rings. The cord sways in high-altitude wind. The moon brightens a half-stop on each ring and dims between. One ash cylinder lengthens a millimeter. The gloves do not move. No one returns. Photoreal, no whip-pans, no face.',
        'Three rings; moon half-stop pulse; ash lengthens a millimeter; nobody returns.',
        'The Moon Is Collect — last syllables missing; rest, not fade',
      ),
    ],
  },
  {
    id: 'gag-third-shift-porcelain',
    kind: 'gag',
    title: 'Third Shift Porcelain',
    status: 'ready-to-generate',
    runtime: 'still + 6s loop',
    episode: 'One-panel gag',
    songId: 'third-shift-porcelain',
    songTitle: 'Third Shift Porcelain',
    summary:
      'Couture mannequins at a factory time-clock; one smokes chrome in the dock door. Beauty is hourly; overtime is not discussed. The Two do not punch out.',
    visualArc: 'Marble lineup → time-clock → chrome cigarette in the dock → red LED in 4/4.',
    tags: ['gag', 'mannequin', 'labor', 'after-hours', 'one-panel'],
    segments: [
      still(
        'gag-03',
        'Photoreal one-panel film still, 3:2, after-hours luxury department store, pale fashion mannequins in black couture, pearls, and identical tired painted smiles lined up at an industrial factory time-clock bolted to a marble column, punch-cards in a steel slot, one mannequin already clocked out standing in a loading-dock doorway with a perfectly chrome cigarette, no lungs, a thin ribbon of metallic smoke, banks of cold fluorescent tubes in receding rows, one bank already dead, marble floor reflecting the lineup, a single red security-camera LED in the upper corner, a tiny wall-mounted CRT behind the clock playing EyeWash Station with the sound off, high contrast, strong silhouettes, no shoppers, no staff, 35mm, T2.8, deadpan and slightly menacing, Grok Imagine style',
        'Mannequins at a factory time-clock; one clocked out smoking chrome in the dock; red security LED; EyeWash CRT.',
        [
          'Heels with time-clock stamps on the soles, otherwise identical, Grok Imagine',
          'One mannequin smile slightly more tired than the factory paint allows, Grok Imagine',
        ],
      ),
      motion(
        'gag-03',
        6,
        '6-second locked wide. Time-clock thunks once. A punch-card drops into the catch. Chrome-cigarette smoke drifts toward the dock air. Fluorescents die one bank at a time, left to right. The camera LED blinks in 4/4. Downbeat of bar 5 is late — the lineup does not move on it. Mannequin faces do not change. Photoreal, no smile animation.',
        'Thunk, punch-card drop, chrome smoke, fluorescents dying bank by bank, late bar-5 downbeat.',
        'Third Shift Porcelain — bar 5 late; do not quantize',
      ),
    ],
  },
  {
    id: 'gag-cities-in-the-shell',
    kind: 'gag',
    title: 'Cities in the Shell',
    status: 'ready-to-generate',
    runtime: 'still + 7s loop',
    episode: 'One-panel gag',
    songId: 'pearls-in-the-ashtray',
    songTitle: 'Pearls in the Ashtray (lemon-drop beat)',
    summary:
      '2 a.m. oyster bar; each opened shell holds a tiny lit city; she squeezes lemon over one and sets it aside. Tonight\'s selection is a little metropolitan. Vivienne.',
    visualArc: 'Black marble → nacre cities → lemon bead over a boulevard → dark-ocean shell kept.',
    tags: ['gag', 'vivienne', 'oyster', 'miniature-city', 'one-panel'],
    segments: [
      still(
        'gag-04',
        'Photoreal one-panel close-to-medium film still, 4:5, 2 a.m. luxury oyster bar, black marble counter beaded with seawater, a single warm Edison bulb on a cloth cord, a glamorous bored woman with long black hair, blood-red lips, and a dark sequined dress shucking with a short silver knife, each opened shell lined in wet nacre holding a tiny still-lit night city — sodium windows, microscopic traffic, a harbor no bigger than a thumbnail — she is squeezing a lemon wedge over one city so a single bead of juice hangs above a boulevard, a small pile of rejected city-oysters to her left, one empty shell containing only dark ocean to her right which she is keeping, no other patrons, high contrast, luxury materials, macro detail in the nacre and the miniature streetlights, 35mm, T1.4, quiet apocalypse, Grok Imagine style',
        'Woman shucking; each shell a tiny night city; lemon bead hanging; dark-ocean shell kept to her right.',
        ['She keeps only the dark-ocean oyster, cities piled as rejects, Grok Imagine'],
      ),
      motion(
        'gag-04',
        7,
        '7-second macro-leaning lockoff. The lemon bead falls in slow motion and hits the miniature boulevard. One skyscraper window blinks out. Tiny headlights crawl a three-block grid. Her mouth almost smiles and does not. She does not eat. Steam from the lemon oil only. Photoreal, no camera orbit.',
        'Lemon bead falls; one window dies; microscopic headlights crawl; she does not eat.',
        'Pearls in the Ashtray — lemon-drop beat',
      ),
    ],
  },
  {
    id: 'gag-complaint-window-deep-field',
    kind: 'gag',
    title: 'Complaint Window, Deep Field',
    status: 'ready-to-generate',
    runtime: 'still + 8s loop',
    episode: 'One-panel gag',
    songId: 'after-is-a-floor',
    songTitle: 'After Is a Floor',
    summary:
      'A wood-and-brass service window floating in a Hubble field; she slides a triplicate form; stamp: DENIED; now serving: —. Liliane files.',
    visualArc: 'Deep-field galaxies → lone booth → triplicate through the slot → DENIED / 000000.',
    tags: ['gag', 'liliane', 'bureaucracy', 'space', 'one-panel'],
    segments: [
      still(
        'gag-05',
        'Photoreal one-panel film still, 2.39:1, a single old-fashioned wood-and-brass customer-service window floating alone in deep space against a Hubble deep-field of distant galaxies, a glamorous woman in a black dress and pearls in microgravity sliding a triplicate carbon form through the slot, only a clerk\'s pale hands and a red rubber stamp visible inside the booth, the stamp just marking DENIED in wet red ink, a ticket display above the window reading NOW SERVING: — (an em dash, no number), her paper ticket printed 000000, a brass plaque reading PLEASE TAKE A NUMBER, her pearl earring lifting in zero-g, high contrast practical fluorescent window light against cosmic black, strong silhouette, no planet, no ship, 35mm anamorphic, T2.0, dry bureaucratic dread, Grok Imagine style',
        'Service window in deep space; DENIED; NOW SERVING: —; ticket 000000; pearl earring in zero-g.',
        [
          'Stamp reads PLEASE STAND BY instead of DENIED, Grok Imagine',
          'Her form is a seating chart, otherwise identical, Grok Imagine',
        ],
      ),
      motion(
        'gag-05',
        8,
        '8-second slow drift. The stamp comes down. The form\'s edges lift as if in a draft vacuum should not have. Stars crawl. The booth\'s fluorescent tube flickers once. Her earring rotates a quarter turn. The display never advances. Photoreal, camera almost locked, one percent drift to imply no floor.',
        'Stamp down; form edges lift; stars crawl; earring rotates; display never advances.',
        'After Is a Floor — extra ding / destinations as manners',
      ),
    ],
  },
  {
    id: 'gag-the-overnight-conservator',
    kind: 'gag',
    title: 'The Overnight Conservator',
    status: 'ready-to-generate',
    runtime: 'still + 6s loop',
    episode: 'One-panel gag',
    songId: 'condition-report',
    songTitle: 'Condition Report',
    summary:
      '3 a.m. gallery; she dusts a kouros; it holds her champagne; she holds its broken forearm like a clipboard. Post-gala Two. Sibling hour to Master Control.',
    visualArc: 'Hard museum spot → torn ballgown → kouros with flute → condition report in lipstick.',
    tags: ['gag', 'the-two', 'museum', 'eyewash-station', 'one-panel'],
    segments: [
      still(
        'gag-06',
        'Photoreal one-panel film still, 3:2, classical sculpture gallery at 3 a.m., a woman in a torn black ballgown and smeared red lipstick dusting a white marble kouros with a small conservator\'s brush, the statue calmly holding her champagne flute at the correct height, she holding the statue\'s broken marble forearm like a clipboard and initialing a condition-report form in lipstick, hard museum spotlight pools on marble and silk, everything else velvet black, marble dust hanging in the beam, a second statue in the dark holding her black heels by the straps, a tiny security monitor in the far corner playing EyeWash Station snow, high contrast, 35mm, T2.0, elegant and slightly dangerous, Grok Imagine style',
        'Torn ballgown; kouros holding champagne; she holding its forearm like a clipboard; second statue with her heels.',
        ['Condition report rates her for surface cracks, Grok Imagine'],
      ),
      motion(
        'gag-06',
        6,
        '6-second locked gallery. Dust motes drift through the spotlight. One champagne bubble rises in the statue\'s glass. She turns a page. Stone eyes catch the light as if they blinked — maybe they did not. The second statue does not move. Photoreal, no dolly, no jump scare.',
        'Dust motes; one bubble; page turn; stone eyes maybe blink; no jump scare.',
        'Condition Report — cello and una corda; clause 4 never arrives',
      ),
    ],
  },
  {
    id: 'gag-furnace-season',
    kind: 'gag',
    title: 'Furnace Season',
    status: 'ready-to-generate',
    runtime: 'still + 8s loop',
    episode: 'One-panel gag',
    songId: 'the-pour',
    songTitle: 'The Pour',
    summary:
      'Foundry gala; molten iron as the room\'s weather; she warms her hands at the pour; sparks die on mink. Vivienne hired a climate.',
    visualArc: 'Molten ribbon → bored couture middle distance → hands at the trough → sparks on mink.',
    tags: ['gag', 'vivienne', 'foundry', 'gala', 'one-panel'],
    segments: [
      still(
        'gag-07',
        'Photoreal one-panel film still, 2.39:1, industrial iron foundry converted into a black-tie gala, a slow ribbon of molten iron pouring in the background from a lip into a trough, a string quartet in evening wear playing without looking back, glamorous guests in couture standing at a bored, safe distance, one woman in a torn black lace dress warming her hands at the pour as if it were a fireplace, orange molten light versus cold chrome and black silk, sparks dying on a mink stole over her shoulders, place cards that look fireproof, heat shimmer between her fingers and the trough, high contrast, strong silhouettes, 35mm anamorphic, T2.0, Grok Imagine style',
        'Foundry black-tie; molten pour; quartet not looking back; woman warming hands; sparks on mink.',
        ['Quartet rosin smoke matching the pour color, Grok Imagine'],
      ),
      motion(
        'gag-07',
        8,
        '8-second perfect loop. The pour never stops. Sparks drift and extinguish on the mink. One violin bow draws slowly. Heat shimmer. Her fingers flex once toward the iron. The quartet does not look back. Photoreal, locked camera, loop on the pour cycle.',
        'Endless pour; sparks die on mink; one bow-stroke; fingers flex once.',
        'The Pour — cello in 5 against 4',
      ),
    ],
  },
  {
    id: 'gag-the-ice-that-exhales',
    kind: 'gag',
    title: 'The Ice That Exhales',
    status: 'ready-to-generate',
    runtime: 'still + 7s loop',
    episode: 'One-panel gag',
    songId: 'pearls-in-the-ashtray',
    songTitle: 'Pearls in the Ashtray',
    summary:
      'Banquet ice sculpture of a woman melting into cigarette smoke, not water; cloth dry; waiter adjusts her a quarter inch. The Two as ice and absence.',
    visualArc: 'White linen → ice woman mid-curtsy → smoke not melt → waiter micro-adjustment → empty chair.',
    tags: ['gag', 'the-two', 'banquet', 'ice', 'one-panel'],
    segments: [
      still(
        'gag-08',
        'Photoreal one-panel film still, 3:2, formal banquet table with white linen and polished silver, a tall clear ice sculpture of an elegant woman mid-curtsy that is melting into dense cigarette-colored smoke instead of water, the tablecloth perfectly dry, a waiter in white gloves adjusting the sculpture a quarter inch as if this were still a centerpiece problem, a lipstick-stained napkin, one empty chair, two wine glasses and scattered berries at the far setting, candlelight leaning away from the smoke, high contrast, luxury and unease, 35mm, T2.0, Grok Imagine style',
        'Ice woman exhaling smoke; dry cloth; waiter adjusting a quarter inch; empty chair; berries.',
        [
          'Place card in front of the sculpture has her real name, Grok Imagine',
          'Smoke spells nothing, which is worse, Grok Imagine',
        ],
      ),
      motion(
        'gag-08',
        7,
        '7-second lockoff. Smoke thickens from the sculpture\'s mouth and shoulders. The waiter\'s gloves make a micro-adjustment. Candle flames lean away. One ice earring drops and becomes a puff. The cloth stays dry. Photoreal, no whip, no face of the waiter.',
        'Smoke thickens; micro-adjustment; candle lean; ice earring becomes a puff; cloth stays dry.',
        'Pearls in the Ashtray — trumpet late',
      ),
    ],
  },
];

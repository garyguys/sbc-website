// =============================================================================
// Seniors Professional Network — member roster
// -----------------------------------------------------------------------------
// Last reconciled: August 2026 (SBC -> SPN rebrand)
//
// FIELD NOTES
//   slug        URL segment for /directory/:slug — must be unique and stable.
//               Changing a slug breaks any link already shared. Don't rename
//               casually; add a redirect instead.
//   title       Job title. null = hidden on the card and profile.
//   blurb       One or two sentences in the member's own words. null = the
//               profile page falls back to contact details only.
//   services    Short service phrases. Powers directory SEARCH as well as
//               display, so these are worth filling in properly.
//   areasServed Communities covered. Critical for franchises and for anyone
//               who doesn't travel across the whole region.
//   needs       Which "what do you need help with?" situations this member
//               answers. Keys are defined in ./needs.js.
//
// ⚠️ ITEMS AWAITING GARRETT'S CONFIRMATION — search this file for "TODO"
//   1. Harvin Bhathal's franchise territory (Heart to Home Meals)
//   2. Cassandra Stevens — email reads "castephens@" (Stephens?) vs the name given
//   3. Ethan Martin AND Jessica Gracey both listed for Comfort Keepers
//   4. Aspira websites — emails moved to siennaliving.ca; is aspiralife.ca live?
//   5. Phone numbers for all nine new members
//   6. blurb / services / areasServed are empty for most members — the UI
//      degrades gracefully, but these are what make the directory useful.
// =============================================================================

export const CATEGORIES = [
    'Senior Living & Care',
    'Health & Wellness',
    'Home Services',
    'Financial Services',
    'Real Estate',
    'Legal Services',
    'Travel & Leisure',
    'End-of-Life Services',
    'Community Organizations',
];

export const members = [
    // ========================= Senior Living & Care =========================
    {
        slug: 'terrie-orthner',
        name: 'Terrie Orthner',
        title: null,
        company: 'Aspira Peninsula Retirement Living',
        email: 'Terrie.Orthner@siennaliving.ca',
        phone: '236-333-5149',
        website: 'https://www.aspiralife.ca', // TODO verify — email domain is now siennaliving.ca
        category: 'Senior Living & Care',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['moving', 'care'],
    },
    {
        slug: 'tina-coco',
        name: 'Tina Coco',
        title: null,
        company: 'Aspira Pacifica Retirement Living',
        email: 'Tina.Coco@siennaliving.ca',
        phone: '236-833-1680',
        website: 'https://www.aspiralife.ca', // TODO verify
        category: 'Senior Living & Care',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['moving', 'care'],
    },
    {
        slug: 'samantha-sigurdson',
        name: 'Samantha Sigurdson',
        title: null,
        company: 'Venvi Renaissance Langley',
        email: 'Samantha.Sigurdson@cogirseniorliving.ca',
        phone: '604-539-0571',
        website: 'https://www.cogirseniorliving.ca',
        category: 'Senior Living & Care',
        areasServed: ['Langley'],
        services: [],
        blurb: null,
        needs: ['moving', 'care'],
    },
    {
        slug: 'tarn-rai',
        name: 'Tarn Rai',
        title: null,
        company: 'Rosemary Heights Seniors Village',
        email: 'trai@retirementconcepts.com',
        phone: '778-938-1342',
        website: 'https://www.retirementconcepts.com',
        category: 'Senior Living & Care',
        areasServed: ['Surrey'],
        services: [],
        blurb: null,
        needs: ['moving', 'care'],
    },
    {
        slug: 'michael-amirani',
        name: 'Michael Amirani',
        title: null,
        company: 'Langley Seniors Village',
        email: 'michaelamirani@retirementconcepts.com',
        phone: '604-307-9066',
        website: 'https://www.retirementconcepts.com',
        category: 'Senior Living & Care',
        areasServed: ['Langley'],
        services: [],
        blurb: null,
        needs: ['moving', 'care'],
    },
    {
        slug: 'shally-prasad',
        name: 'Shally Prasad',
        title: null,
        company: 'Bolivar Creek Retirement Residences',
        email: 'Shally.Prasad@ppsl.com',
        phone: '672-336-4578',
        website: 'https://www.bolivarcreek.ca',
        category: 'Senior Living & Care',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['moving', 'care'],
    },
    {
        slug: 'natasha-stott',
        name: 'Natasha Stott',
        title: null,
        company: 'Pacific Carlton / Sunnyside Manor',
        email: 'sales@pacificcarlton.com',
        phone: '604-838-5442',
        website: 'https://www.pacificcarlton.com',
        category: 'Senior Living & Care',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['moving', 'care'],
    },
    {
        slug: 'keri-severinski',
        name: 'Keri Severinski',
        title: null,
        company: 'Bria Communities',
        email: 'keri.severinski@briacommunities.ca',
        phone: null, // TODO
        website: 'https://www.briacommunities.ca',
        category: 'Senior Living & Care',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['moving', 'care'],
    },
    {
        slug: 'cassandra-stevens',
        name: 'Cassandra Stevens', // TODO confirm spelling — email reads "castephens@"
        title: null,
        company: 'Chartwell Retirement Residences',
        email: 'castephens@chartwell.com',
        phone: null, // TODO
        website: 'https://www.chartwell.com',
        category: 'Senior Living & Care',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['moving', 'care'],
    },

    // ========================== Health & Wellness ===========================
    {
        slug: 'karen-tyrell',
        name: 'Karen Tyrell',
        credentials: 'CPCA, CDCP',
        title: null,
        company: 'Personalized Dementia Solutions Inc.',
        email: 'Karen@dementiasolutions.ca',
        phone: '1-888-502-1321',
        website: 'https://www.dementiasolutions.ca',
        category: 'Health & Wellness',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['memory', 'care'],
    },
    {
        slug: 'diane-hill-doell',
        name: 'Diane Hill Doell',
        credentials: 'LPN, FCN, CFCS (USA)',
        title: null,
        company: 'Advanced Foot Care by Nurses Inc.',
        email: 'diane@advancedfootcarebynurses.ca',
        phone: '604-309-8971',
        website: 'https://www.advancedfootcarebynurses.ca',
        category: 'Health & Wellness',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['health'],
    },
    {
        slug: 'harleen-kalra',
        name: 'Harleen Kalra',
        title: null,
        company: 'Physiatrix Rehab',
        email: 'harleen@physiatrixrehab.com',
        phone: '604-728-7626',
        website: 'https://www.physiatrixrehab.com',
        category: 'Health & Wellness',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['health'],
    },
    {
        slug: 'sunny-upadhyay',
        name: 'Sunny Upadhyay',
        title: null,
        company: 'Save On Scooters & Medical Equipment Inc.',
        email: 's@updy.me',
        phone: '604-541-7550',
        website: 'https://www.saveonscooters.ca',
        category: 'Health & Wellness',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['home', 'health'],
    },
    {
        slug: 'shalini-charla',
        name: 'Shalini Charla',
        title: null,
        company: 'Adult Cognitive Wellness Centre',
        email: 'shalinic@adultcognitivewellnesscentre.ca',
        phone: null, // TODO
        website: null, // TODO
        category: 'Health & Wellness',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['memory', 'health'],
    },

    // ============================ Home Services =============================
    {
        slug: 'garrett-robertson',
        name: 'Garrett Robertson',
        title: null,
        company: 'Get Started Home Services',
        email: 'admin@getstartedhomeservices.com',
        phone: '604-996-8512',
        website: 'https://www.getstartedhomeservices.com',
        category: 'Home Services',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['home', 'downsizing'],
    },
    {
        slug: 'ethan-martin',
        name: 'Ethan Martin',
        title: null,
        company: 'Comfort Keepers', // TODO Ethan and Jessica are both listed here
        email: 'ethanmartin@comfortkeepersvancouver.ca',
        phone: '604-541-8653',
        website: 'https://www.comfortkeepersvancouver.ca',
        category: 'Home Services',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['care', 'home'],
    },
    {
        slug: 'jessica-gracey',
        name: 'Jessica Gracey',
        title: null,
        company: 'Comfort Keepers', // TODO see above
        email: 'jessica@comfortkeepersvancouver.ca',
        phone: null, // TODO
        website: 'https://www.comfortkeepersvancouver.ca',
        category: 'Home Services',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['care', 'home'],
    },
    {
        slug: 'joseph-choi',
        name: 'Joseph Choi',
        title: null,
        company: 'ShelfGenie',
        email: 'jchoi@shelfgenie.com',
        phone: '778-984-6868',
        website: 'https://www.shelfgenie.com',
        category: 'Home Services',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['home'],
    },
    {
        // Two INDEPENDENT Heart to Home Meals franchises are in the network.
        // They must stay visibly distinct so families contact the right one.
        slug: 'youla-thomas',
        name: 'Youla Thomas',
        title: null,
        company: 'Heart to Home Meals — Vancouver',
        franchiseOf: 'Heart to Home Meals',
        email: 'vancouver@hearttohomemeals.ca',
        phone: null, // TODO
        website: 'https://www.hearttohomemeals.ca',
        category: 'Home Services',
        areasServed: ['Vancouver'],
        services: [],
        blurb: null,
        needs: ['home', 'health'],
    },
    {
        slug: 'harvin-bhathal',
        name: 'Harvin Bhathal',
        title: null,
        // TODO ⚠️ Replace "[Territory]" with Harvin's actual franchise area.
        // This string is public-facing — do not ship as-is.
        company: 'Heart to Home Meals — [Territory]',
        franchiseOf: 'Heart to Home Meals',
        email: 'harvinbhathal.media@gmail.com',
        phone: null, // TODO
        website: 'https://www.hearttohomemeals.ca',
        category: 'Home Services',
        areasServed: null, // TODO
        services: [],
        blurb: null,
        needs: ['home', 'health'],
    },

    // ========================== Financial Services ==========================
    {
        slug: 'moreen-perimal',
        name: 'Moreen Perimal',
        title: 'Reverse Mortgage Specialist',
        company: 'Dominion Lending Centres',
        email: 'mp@mortgagesbymoreen.com',
        phone: '604-374-6193',
        website: 'https://www.mortgagesbymoreen.com',
        category: 'Financial Services',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['money', 'downsizing'],
    },

    // ============================= Real Estate ==============================
    {
        slug: 'sadhana-kumar',
        name: 'Sadhana Kumar',
        title: 'Seniors Real Estate Specialist',
        company: 'eXp Realty',
        email: 'info@soldbysadhana.com',
        phone: '604-762-6125',
        website: 'https://www.soldbysadhana.com',
        category: 'Real Estate',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['downsizing', 'moving'],
    },

    // ============================ Legal Services ============================
    {
        slug: 'mimi-wang',
        name: 'Mimi Wang',
        title: null,
        company: 'Maximus Law',
        email: 'wang@maximuslaw.ca',
        phone: null, // TODO
        website: 'https://www.maximuslaw.ca',
        category: 'Legal Services',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['planning'],
    },

    // =========================== Travel & Leisure ===========================
    {
        slug: 'yvonna-camire',
        name: 'Yvonna Camire',
        title: null,
        company: 'Paramount Travel',
        email: 'yvonnac@shaw.ca',
        phone: null, // TODO
        website: null, // TODO
        category: 'Travel & Leisure',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['living-well'],
    },

    // ========================= End-of-Life Services =========================
    {
        slug: 'vanessa-king',
        name: 'Vanessa King',
        title: null,
        company: 'Alternatives Funeral & Cremation Services',
        email: 'v.king@myalternatives.ca',
        phone: null, // TODO
        website: 'https://www.myalternatives.ca',
        category: 'End-of-Life Services',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['planning'],
    },

    // ======================= Community Organizations ========================
    {
        slug: 'rod-tondevold',
        name: 'Rod Tondevold',
        title: null,
        company: "Men's Shed WRSS",
        email: 'rod.tondevold@gmail.com',
        phone: '672-762-2047',
        website: 'https://www.wrssms.ca',
        category: 'Community Organizations',
        areasServed: ['White Rock', 'South Surrey'],
        services: [],
        blurb: null,
        needs: ['living-well'],
    },
    {
        slug: 'louise-taylor',
        name: 'Louise Taylor',
        title: null,
        company: 'Brella Society',
        email: 'louise.taylor@brellasociety.ca',
        phone: '604-531-9400',
        website: 'https://www.brellasociety.ca',
        category: 'Community Organizations',
        areasServed: null,
        services: [],
        blurb: null,
        needs: ['living-well', 'care'],
    },
];

/** Members grouped in CATEGORIES order, skipping empty categories. */
export const membersByCategory = () =>
    CATEGORIES
        .map((category) => ({
            category,
            members: members.filter((m) => m.category === category),
        }))
        .filter((g) => g.members.length > 0);

export const getMemberBySlug = (slug) => members.find((m) => m.slug === slug) || null;

/** Full display name including credentials, e.g. "Karen Tyrell, CPCA, CDCP". */
export const displayName = (m) => (m.credentials ? `${m.name}, ${m.credentials}` : m.name);

/** Everything a search query should match against, lower-cased. */
export const searchIndex = (m) =>
    [
        m.name,
        m.credentials,
        m.company,
        m.franchiseOf,
        m.title,
        m.category,
        ...(m.services || []),
        ...(m.areasServed || []),
        m.blurb,
    ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

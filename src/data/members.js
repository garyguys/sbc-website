// =============================================================================
// Seniors Professional Network — member roster
// -----------------------------------------------------------------------------
// Last reconciled: September 2026, against the "SPN Member Profile - Public
// Directory" form responses and the SPN main roster spreadsheet.
//
// EVERYTHING IN THIS FILE IS PUBLIC. Only put here what a member has agreed
// to publish. Internal notes, personal mobiles and home addresses stay out.
//
// FIELD NOTES (all optional except slug, name, company, email, category)
//   slug          URL segment for /directory/:slug — unique and stable. Changing
//                 a slug breaks any link already shared.
//   credentials   Post-nominals shown after the name, e.g. "CPCA, CDCP".
//   title         Job title or role.
//   company       Business or organization as it should appear publicly.
//   franchiseOf   Parent brand, when the listing is an independent franchise.
//   location      Short place name for the directory card pin, e.g. "Langley".
//                 Use for residences, clinics and anyone tied to one place.
//   areasServed   Communities covered, for the profile page.
//   tagline       One line, in the member's words.
//   blurb         Bio, one or two paragraphs. Shown under "About".
//   description   Business description, shown under "About the business".
//   services      Short phrases. Also power directory search.
//   idealClients  Who they are best placed to help.
//   gettingStarted How a new client begins working with them.
//   freeConsultation  true / false / undefined (not asked).
//   payment       Funding and payment types accepted.
//   accreditations Licences, memberships, accreditations.
//   hours         Free text.
//   languages     Languages served.
//   years         Years working with seniors, as the member phrased it.
//   established   Year the business was founded.
//   booking       Booking, intake or contact page URL.
//   social        { linkedin, facebook, instagram } URLs or handles.
//   photo         Path under /public for a headshot, once supplied. Cards and
//                 profiles fall back to initials when absent.
//
// ⚠️ OPEN ITEMS — search for "TODO"
//   1. Phone numbers marked "roster" came from the internal roster, not the
//      public form. Confirm each member is happy to publish them.
//   2. Members without a form response only have basic contact details.
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

/** Lucide icon name for each category, used on the industry grid. */
export const CATEGORY_ICONS = {
    'Senior Living & Care': 'Building2',
    'Health & Wellness': 'HeartPulse',
    'Home Services': 'Wrench',
    'Financial Services': 'PiggyBank',
    'Real Estate': 'House',
    'Legal Services': 'Scale',
    'Travel & Leisure': 'Plane',
    'End-of-Life Services': 'Flower2',
    'Community Organizations': 'Users',
};

const LOWER_MAINLAND = [
    'Vancouver',
    'North Shore (North and West Vancouver)',
    'Burnaby and New Westminster',
    'Tri-Cities (Coquitlam, Port Coquitlam, Port Moody)',
    'Richmond',
    'Surrey and White Rock',
    'Delta, Ladner and Tsawwassen',
    'Langley',
    'Maple Ridge and Pitt Meadows',
];

const FRASER_VALLEY = ['Abbotsford and Mission', 'Chilliwack', 'Agassiz and Hope'];

export const members = [
    // ========================= Senior Living & Care =========================
    {
        slug: 'terrie-orthner',
        name: 'Terrie Orthner',
        company: 'Aspira Peninsula Retirement Living',
        email: 'Terrie.Orthner@siennaliving.ca',
        phone: '236-333-5149',
        website: 'https://www.aspiralife.ca',
        category: 'Senior Living & Care',
        location: 'South Surrey',
    },
    {
        slug: 'tina-coco',
        name: 'Tina Coco',
        title: 'Sales Advisor',
        company: 'Aspira Pacifica Retirement Community',
        email: 'tina.coco@siennaliving.ca',
        phone: '236-833-1680',
        website: 'https://www.aspiralife.ca',
        category: 'Senior Living & Care',
        location: 'South Surrey',
        address: '2525 King George Blvd, Surrey, BC V4P 0C8',
        tagline: 'Independent living with assisted living services.',
        blurb:
            'Tina Coco is a dedicated Sales Advisor with four years of experience in retirement living and more than 20 years in the hospitality industry. Her career has been built around creating meaningful connections, providing exceptional service, and making people feel genuinely welcomed and cared for.\n\nTina understands that choosing a retirement community is much more than a financial decision: it is choosing a place to call home. She takes the time to listen to each individual’s needs, lifestyle and goals, helping seniors and their families navigate this important transition with confidence and peace of mind.',
        description:
            'At Sienna Senior Living, happiness doesn’t just happen. It’s what we do, who we are, and what we get back from it. It’s found in the little things we do every day: contentment, satisfaction, pride, the kind of happiness that comes from feeling safe, from achieving a goal, from making play, and from the friendships made in living rooms and kitchens. Cultivating happiness in daily life is our purpose, and it supports our vision to become Canada’s most trusted and most loved senior living provider.',
        services: [
            'Daily three-course lunch and dinner',
            'Afternoon snacks',
            '24-hour emergency response system',
            'Weekly light housekeeping and flat linen laundry',
            'All in-suite utilities, telephone, cable and internet',
            'Mini bus transportation for planned excursions',
            'Private chauffeured town car',
            'Concierge service',
            'A robust activity calendar',
            'Two safety checks per day',
            'Two full-time nurses on staff',
        ],
        idealClients:
            'Families in South Surrey, White Rock and the surrounding Lower Mainland whose aging parent is struggling to live safely and independently at home and may need assisted living within the next three to six months. Often adult children seeking a trusted, supportive community where their parent can keep their independence while receiving the right level of care.',
        gettingStarted: 'Call directly to make an appointment for a tour of Pacifica, with a complimentary lunch or dinner.',
        freeConsultation: true,
        payment: ['Private pay'],
        hours: '24 hours',
        languages: ['English'],
        years: '2 to 5 years',
        established: 2009,
        areasServed: [...LOWER_MAINLAND, ...FRASER_VALLEY, 'Sea to Sky', 'Sunshine Coast', 'Vancouver Island', 'Province wide'],
    },
    {
        slug: 'samantha-sigurdson',
        name: 'Samantha Sigurdson',
        company: 'Venvi Renaissance Langley',
        email: 'Samantha.Sigurdson@cogirseniorliving.ca',
        phone: '604-539-0571',
        website: 'https://www.cogirseniorliving.ca',
        category: 'Senior Living & Care',
        location: 'Langley',
    },
    {
        slug: 'tarn-rai',
        name: 'Tarn Rai',
        company: 'Rosemary Heights Seniors Village',
        email: 'trai@retirementconcepts.com',
        phone: '778-938-1342',
        website: 'https://www.retirementconcepts.com',
        category: 'Senior Living & Care',
        location: 'Surrey',
    },
    {
        slug: 'michael-amirani',
        name: 'Michael Amirani',
        company: 'Langley Seniors Village',
        email: 'michaelamirani@retirementconcepts.com',
        phone: '604-307-9066',
        website: 'https://www.retirementconcepts.com',
        category: 'Senior Living & Care',
        location: 'Langley',
    },
    {
        slug: 'shally-prasad',
        name: 'Shally Prasad',
        title: 'Sales and Community Relations Manager',
        company: 'Bolivar Creek Retirement Residence',
        email: 'shally.prasad@ppsl.com',
        phone: '604-336-9798',
        website: 'https://bolivarcreek.ca',
        booking: 'https://bolivarcreek.ca/book-a-tour',
        category: 'Senior Living & Care',
        location: 'North Surrey',
        address: '10928 132nd Street, Surrey, BC V3T 0R3',
        tagline: 'A welcoming independent living community where seniors can age in place.',
        blurb:
            'Shally Prasad has worked with seniors for over three years. After leaving accounting, she began her career in retirement living as a contract office manager. She now works in independent living and is passionate about helping seniors maintain their independence and quality of life. Her personal experience supporting her father, who lives with dementia, has deepened her compassion and understanding of seniors and their families. Through her work and involvement with the Seniors Professional Network, Shally continues to build meaningful connections and find ways to improve the lives of older adults.',
        description:
            'Bolivar Creek Retirement Residence is a welcoming, newer independent living community in North Surrey, designed for seniors who value their independence while enjoying the comfort, connection and convenience of community living. Residents enjoy thoughtfully designed suites, daily dining, bi-weekly housekeeping, social and recreational activities, fitness opportunities and 24/7 on-site support.\n\nWhat makes Bolivar Creek unique is its ability to support seniors as their needs change. Residents have access to private home support services that can provide additional assistance and help them age in place. The community also features a new on-site pharmacy, with a medical clinic planned to open in November 2026.',
        services: [
            'Independent living for seniors 55+',
            'Furnished and unfurnished suites',
            'Daily meals',
            'Weekly housekeeping',
            '24/7 on-site staff',
            'Social and recreational activities',
            'Fitness and wellness programs',
            'Utilities, Wi-Fi and basic cable',
            'Storage lockers and parking',
            'Private home support services',
            'On-site pharmacy',
        ],
        idealClients:
            'Seniors 55+ in Surrey and surrounding communities who are independent and looking to downsize into a safe, social, maintenance-free lifestyle, and families helping a parent find a comfortable long-term home where they can age in place.',
        gettingStarted:
            'Contact Bolivar Creek by phone or email to learn more and arrange a personalized tour. We’ll answer questions, discuss available suites and services, and help guide you through the next steps at your own pace.',
        freeConsultation: true,
        payment: ['Private pay'],
        accreditations: ['Independent living community for adults 55+'],
        hours: 'Monday to Friday, 9:00 a.m. to 4:30 p.m., or by appointment outside these hours.',
        languages: ['English', 'Hindi'],
        years: '2 to 5 years',
        established: 2018,
        areasServed: LOWER_MAINLAND,
        social: { facebook: 'https://www.facebook.com/profile.php?id=61573587983375' },
    },
    {
        slug: 'natasha-stott',
        name: 'Natasha Stott',
        company: 'Pacific Carlton / Sunnyside Manor',
        email: 'sales@pacificcarlton.com',
        phone: '604-838-5442',
        website: 'https://www.pacificcarlton.com',
        category: 'Senior Living & Care',
        location: 'White Rock',
    },
    {
        slug: 'keri-severinski',
        name: 'Keri Severinski',
        company: 'Bria Communities',
        email: 'keri.severinski@briacommunities.ca',
        phone: '604-789-2307', // TODO roster
        website: 'https://www.briacommunities.ca',
        category: 'Senior Living & Care',
        location: 'Langley',
        description: 'Sunridge Gardens and Magnolia Gardens, Langley.',
    },
    {
        slug: 'cassandra-stephens',
        name: 'Cassandra Stephens',
        company: 'Chartwell Langley Gardens',
        email: 'castephens@chartwell.com',
        phone: '778-828-5137', // TODO roster
        website: 'https://www.chartwell.com',
        category: 'Senior Living & Care',
        location: 'Langley',
    },

    // ========================== Health & Wellness ===========================
    {
        slug: 'karen-tyrell',
        name: 'Karen Tyrell',
        credentials: 'CPCA, CDCP',
        title: 'Dementia Consultant & Educator',
        company: 'Personalized Dementia Solutions Inc.',
        email: 'info@DementiaSolutions.ca',
        phone: '1-888-502-1321',
        website: 'https://www.dementiasolutions.ca',
        booking: 'https://dementiasolutions.ca/contact-4/',
        category: 'Health & Wellness',
        tagline: 'Because no family should have to navigate dementia alone.',
        blurb:
            'Karen Tyrell, CPCA, CDCP, is a Dementia Consultant, Educator, Advocate and Speaker with over 30 years of experience in seniors’ care. She is the founder and CEO of Personalized Dementia Solutions Inc., which provides practical education, compassionate guidance and personalized support that empowers families and care teams to confidently navigate every stage of the dementia journey.\n\nKaren is the author of Cracking the Dementia Code: Creative Solutions to Cope with Changed Behaviours, a book that reflects her dedication to innovative, non-drug approaches for understanding and addressing behaviour changes in those living with symptoms of dementia.',
        description:
            'Dementia Solutions provides personalized guidance, education and support to individuals and families navigating dementia. It helps families understand dementia, respond to changing needs and make informed decisions throughout the journey, from early concerns and diagnosis to ongoing care and support.\n\nRather than one-size-fits-all advice, it takes time to understand each family’s unique situation, challenges and goals, providing clear, compassionate strategies they can put into practice. By supporting both the person living with dementia and those who care for them, Dementia Solutions helps families feel more prepared, confident and less alone.',
        services: [
            'One-to-one private consulting for families',
            'Online Family Support Membership (group support)',
            'Dementia education',
            'Staff workshops',
            'Community talks',
        ],
        idealClients:
            'Families caring for a loved one with dementia in the early to moderate stages, who are struggling to keep stress levels low and harmony in the home.',
        gettingStarted: 'Book a free 20-minute phone or Zoom call.',
        freeConsultation: true,
        payment: ['Private pay', 'Extended health or insurance'],
        accreditations: ['BC Care Providers Association'],
        hours: 'By appointment',
        languages: ['English'],
        years: 'Over 20 years',
        established: 2009,
        areasServed: [...LOWER_MAINLAND, ...FRASER_VALLEY, 'Sea to Sky', 'Sunshine Coast', 'Vancouver Island', 'Province wide', 'North America'],
        social: {
            linkedin: 'https://www.linkedin.com/in/karen-tyrell/',
            facebook: 'https://www.facebook.com/Personalized.Dementia.Solutions.Inc',
            instagram: 'dementia__help',
        },
    },
    {
        slug: 'diane-hill-doell',
        name: 'Diane Hill Doell',
        credentials: 'LPN, CFCS (US)',
        title: 'Owner/Operator',
        company: 'Advanced Foot Care by Nurses Inc.',
        email: 'diane@advancedfootcarebynurses.ca',
        phone: '604-533-3829',
        website: 'https://www.advancedfootcarebynurses.ca',
        category: 'Health & Wellness',
        location: 'Langley',
        address: '4109 205A Street, Langley, BC',
        tagline: 'Nursing foot care, in clinic or at home.',
        blurb:
            'Podiatric nurse with 23 years’ experience, holding US certification as a Foot Care Specialist. Medical foot care in a nurse-run clinic specializing in diabetic foot care, deformity care, and ingrown and fungal nail care. Certified compression garment fitter. Clinic and in-home appointments available. An income-tax-deductible medical expense; extended coverage may be available.',
        description:
            'Advanced Foot Care by Nurses Inc. is your first stop on the journey to longevity and better health, tailored to the changing foot care needs of today’s active senior. We help identify clinical need and refer on to the appropriate health professional for early intervention.',
        services: [
            'Assessment',
            'Fungal nail care',
            'Ingrown nail care',
            'Callus, corn and deformity care',
            'Compression garment fitting',
            'Offloading, padding and digital moulds',
            'Swift microwave therapy',
            'ToeFX',
        ],
        idealClients: 'Anyone with a foot care concern that cannot be addressed by the salon industry.',
        gettingStarted: 'Self-referral. Call 604-533-3829 or book through the online portal on the website.',
        freeConsultation: false,
        payment: ['Private pay', 'Veterans Affairs Canada'],
        accreditations: [
            'BBB Accredited',
            'Foot Care Nurses Association of BC',
            'Canadian Association of Foot Care Nurses',
            'American Foot Care Nurses Association',
        ],
        hours: 'By appointment',
        languages: ['English'],
        years: 'Over 20 years',
        established: 2013,
        areasServed: ['Surrey and White Rock', 'Langley'],
        social: {
            linkedin: 'https://www.linkedin.com/company/advanced-foot-care-by-nurses-inc-bc./',
            instagram: 'advancedfootcarebynursesincbc',
        },
    },
    {
        slug: 'harleen-kalra',
        name: 'Harleen Kalra',
        company: 'Physiatrix Rehab',
        email: 'harleen@physiatrixrehab.com',
        phone: '604-728-7626',
        website: 'https://www.physiatrixrehab.com',
        category: 'Health & Wellness',
    },
    {
        slug: 'sunny-upadhyay',
        name: 'Sunny Upadhyay',
        company: 'Save On Scooters & Medical Equipment Inc.',
        email: 's@updy.me',
        phone: '604-541-7550',
        website: 'https://www.saveonscooters.ca',
        category: 'Health & Wellness',
    },
    {
        slug: 'shalini-charla',
        name: 'Shalini Charla',
        company: 'Adult Cognitive Wellness Centre',
        email: 'shalinic@adultcognitivewellnesscentre.ca',
        phone: null, // TODO not yet supplied
        website: null,
        category: 'Health & Wellness',
    },

    // ============================ Home Services =============================
    {
        slug: 'garrett-robertson',
        name: 'Garrett Robertson',
        title: 'Director',
        company: 'Get Started Home Services',
        email: 'admin@getstartedhomeservices.com',
        phone: '604-996-8512',
        website: 'https://getstartedhomeservices.com',
        category: 'Home Services',
        tagline: 'Full service seniors moving and home transitions.',
        gettingStarted: 'Call, text, email or book on our website for a free initial consultation.',
        freeConsultation: true,
        payment: ['Private pay', 'Payment plans available'],
        hours: '7 days a week, 8:00 a.m. to 9:00 p.m.',
        languages: ['English'],
        years: '11 to 20 years',
        established: 2020,
        areasServed: [...LOWER_MAINLAND, ...FRASER_VALLEY],
        social: { instagram: 'getstartedhs' },
    },
    {
        slug: 'ethan-martin',
        name: 'Ethan Martin',
        company: 'Comfort Keepers',
        email: 'ethanmartin@comfortkeepersvancouver.ca',
        phone: '604-541-8653',
        website: 'https://www.comfortkeepersvancouver.ca',
        category: 'Home Services',
    },
    {
        slug: 'joseph-choi',
        name: 'Joseph Choi',
        company: 'ShelfGenie',
        email: 'jchoi@shelfgenie.com',
        phone: '778-984-6868',
        website: 'https://www.shelfgenie.com',
        category: 'Home Services',
    },
    {
        // Two INDEPENDENT Heart to Home Meals franchises are in the network.
        // They must stay visibly distinct so families contact the right one.
        slug: 'youla-thomas',
        name: 'Youla Thomas',
        company: 'Heart to Home Meals — Vancouver',
        franchiseOf: 'Heart to Home Meals',
        email: 'vancouver@hearttohomemeals.ca',
        phone: '778-308-4351', // TODO roster
        website: 'https://www.hearttohomemeals.ca',
        category: 'Home Services',
        location: 'Vancouver',
    },
    {
        slug: 'harvin-bhathal',
        name: 'Harvin Bhathal',
        company: 'Heart to Home Meals — Fraser Valley',
        franchiseOf: 'Heart to Home Meals',
        email: 'harvinbhathal.media@gmail.com',
        phone: '604-855-8323', // TODO roster
        website: 'https://www.hearttohomemeals.ca',
        category: 'Home Services',
        location: 'Fraser Valley',
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
    },

    // ============================ Legal Services ============================
    {
        slug: 'mimi-wang',
        name: 'Mimi Wang',
        company: 'Maximus Law',
        email: 'wang@maximuslaw.ca',
        phone: '778-386-6963', // TODO roster
        website: 'https://www.maximuslaw.ca',
        category: 'Legal Services',
        social: { linkedin: 'https://www.linkedin.com/in/mimi-w-9b69161b' },
    },

    // =========================== Travel & Leisure ===========================
    {
        slug: 'yvonna-camire',
        name: 'Yvonna Camire',
        company: 'Paramount Cruise & Travel',
        email: 'yvonnac@shaw.ca',
        phone: '604-575-6200', // TODO roster
        website: null,
        category: 'Travel & Leisure',
    },

    // ========================= End-of-Life Services =========================
    {
        slug: 'vanessa-king',
        name: 'Vanessa King',
        company: 'Alternatives Funeral & Cremation Services',
        email: 'v.king@myalternatives.ca',
        phone: null, // TODO not yet supplied
        website: 'https://www.myalternatives.ca',
        category: 'End-of-Life Services',
    },

    // ======================= Community Organizations ========================
    {
        slug: 'rod-tondevold',
        name: 'Rod Tondevold',
        company: "Men's Shed WRSS",
        email: 'rod.tondevold@gmail.com',
        phone: '672-762-2047',
        website: 'https://www.wrssms.ca',
        category: 'Community Organizations',
        location: 'White Rock, South Surrey',
    },
    {
        slug: 'louise-taylor',
        name: 'Louise Taylor',
        company: 'Brella Society',
        email: 'louise.taylor@brellasociety.ca',
        phone: '604-531-9400',
        website: 'https://www.brellasociety.ca',
        category: 'Community Organizations',
        location: 'White Rock',
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

/** Two-letter initials for the avatar fallback. */
export const initials = (name) =>
    name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

/** Everything a search query should match against, lower-cased. */
export const searchIndex = (m) =>
    [
        m.name,
        m.credentials,
        m.company,
        m.franchiseOf,
        m.title,
        m.category,
        m.location,
        m.tagline,
        ...(m.services || []),
        ...(m.areasServed || []),
        m.blurb,
    ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

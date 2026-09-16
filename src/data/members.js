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
//   bookingLabel  Text for the booking button. Default "Book or enquire".
//   social        { linkedin, facebook, instagram } URLs or handles.
//   address       Street address of the main location, shown on the profile.
//   locations     For members who look after more than one site: an array of
//                 { name, address, phone?, website? }, listed on the profile.
//   photo         Path under /public for a headshot (square, 600x600 JPEG).
//                 Cards and profiles fall back to initials when absent.
//   logo          Path under /public/members/logos for the business logo
//                 (PNG, transparent or white background), shown on the profile.
//   business      Key of a shared record in ./businesses.js, for members who
//                 work for the same business. The business fields are filled
//                 in from there; anything set here on the person wins.
//
// ⚠️ OPEN ITEMS — search for "TODO"
//   1. Phone numbers only appear when the member supplied them on the public
//      form or the business publishes them on its own website. Roster-only
//      numbers were removed before launch (Sept 2026); add them back as
//      members confirm.
//   2. Members without a form response only have basic contact details.
// =============================================================================

export const CATEGORIES = [
    'Senior Living & Care',
    'Health & Wellness',
    'Moving & Transitions',
    'Food Services',
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
    'Moving & Transitions': 'Truck',
    'Food Services': 'Utensils',
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
        slug: 'tina-coco',
        name: 'Tina Coco',
        title: 'Sales Advisor',
        company: 'Aspira Pacifica Retirement Community',
        email: 'tina.coco@siennaliving.ca',
        phone: '236-833-1680',
        website: 'https://www.aspiralife.ca/our-locations/british-columbia/surrey/aspira-pacifica-retirement-living/',
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
        photo: '/members/tina-coco.jpg',
        logo: '/members/logos/aspira-pacifica.png',
    },
    {
        slug: 'samantha-sigurdson',
        name: 'Samantha Sigurdson',
        credentials: 'CDCP',
        title: 'Lifestyle Consultant',
        company: 'Venvi Renaissance Langley',
        email: 'samantha.sigurdson@cogirseniorliving.ca',
        phone: '604-539-0571',
        website: 'https://venvirenaissancelangley.ca',
        category: 'Senior Living & Care',
        location: 'Langley',
        address: '6676 203 Street, Langley, BC V2Y 2Z1',
        tagline: 'Independent living with assisted living services available.',
        blurb:
            'Samantha Sigurdson has dedicated the past 10 years to working in retirement communities. Starting her career as a server, she has gained experience in reception, recreation, and now sales. Her journey through these roles has given her a well-rounded understanding of senior living and the different levels of care and support available.\n\nSamantha believes every senior and family deserves to find the right fit for their needs. She enjoys building meaningful relationships, sharing her knowledge, and helping families navigate their options with confidence. Her goal is to be a trusted resource and connect people with the right services and community, even when that may be outside her own.',
        description:
            'Venvi Renaissance Langley is a welcoming retirement community where seniors can enjoy an active, independent lifestyle in a warm and supportive environment. Located in the heart of Langley, the community offers comfortable suites, delicious dining, engaging activities, social opportunities, and amenities designed to make everyday life easier and more enjoyable.\n\nRetirement is about living life to the fullest. Residents can stay active, build friendships, explore new interests, enjoy outings, and take part in a vibrant calendar of events. Should additional support be needed, assisted living services are available on site, providing added peace of mind for residents and their families. A dedicated team is committed to creating a community where residents feel valued, connected, and at home.',
        services: [
            'Three-course lunch and dinner, continental breakfast',
            'Weekly housekeeping',
            'Weekly laundering of bedding and linens',
            'Active living programs',
            'All in-suite utilities, cable, internet and telephone',
            'Wearable safety monitor with 24-hour emergency response',
            'Exclusive bus outings',
            'Twice-daily wellness checks',
            'Access to all amenity spaces',
            'Concierge services',
            'Professional on-site management',
            'Assisted living services available on site',
        ],
        idealClients:
            'Seniors and their families in Langley and the surrounding Lower Mainland who are ready to embrace a vibrant, connected retirement lifestyle: a welcoming community with social activities, delicious meals, daily support, and the freedom to remain independent, with assisted living services available on site if needs change.',
        gettingStarted: 'Reach out by phone or email to learn more and arrange a personalized tour of Renaissance Langley.',
        freeConsultation: true,
        payment: ['Private pay'],
        hours: '24 hours',
        languages: ['English'],
        years: '6 to 10 years',
        established: 2004,
        areasServed: ['Langley'],
        social: { facebook: 'https://www.facebook.com/VenviRenaissanceLangley/' },
        logo: '/members/logos/venvi-renaissance-langley.png',
    },
    {
        slug: 'tarn-rai',
        name: 'Tarn Rai',
        company: 'Rosemary Heights Seniors Village',
        email: 'trai@retirementconcepts.com',
        phone: '778-938-1342',
        website: 'https://www.retirementconcepts.com/community/rosemary-heights-seniors-village/',
        category: 'Senior Living & Care',
        location: 'Surrey',
        address: '15240 34th Avenue, Surrey, BC V3Z 2J9',
        description: 'A continuum-of-care community in South Surrey where seniors can age in place. Couples can stay together on site even when their care needs differ.',
        services: ['Independent living', 'Assisted living', 'Complex care'],
    },
    {
        slug: 'michael-amirani',
        name: 'Michael Amirani',
        company: 'Langley Seniors Village',
        email: 'michaelamirani@retirementconcepts.com',
        phone: '604-307-9066',
        website: 'https://www.retirementconcepts.com/community/langley-seniors-village/',
        category: 'Senior Living & Care',
        location: 'Langley',
        address: '20363 65th Avenue, Langley, BC V2Y 3E3',
        description: 'Independent living and assisted living residence in the Willoughby area of Langley.',
        services: ['Independent living', 'Assisted living'],
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
            'Daily meals',
            'Weekly housekeeping',
            '24/7 on-site staff',
            'Two daily wellness checks',
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
        bookingLabel: 'Book a tour',
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
        description: 'Two sister communities in South Surrey and White Rock offering all-inclusive independent living for seniors.',
        services: ['Independent living', 'All-inclusive hospitality services'],
        locations: [
            { name: 'Pacific Carlton', address: '15366 17th Avenue, Surrey, BC V4A 1T9', phone: '604-531-1160', website: 'https://www.pacificcarlton.com' },
            { name: 'Sunnyside Manor', address: '15340 17th Avenue, Surrey, BC V4A 1T9', phone: '604-531-7470', website: 'https://sunnysidemanor.com' },
        ],
    },
    {
        slug: 'keri-severinski',
        name: 'Keri Severinski',
        company: 'Bria Communities',
        email: 'keri.severinski@briacommunities.ca',
        phone: '604-510-5091', // published on briacommunities.ca (Sunridge Gardens)
        website: 'https://briacommunities.ca/communities/',
        category: 'Senior Living & Care',
        location: 'Langley',
        description: 'Bria Communities is a collection of local retirement communities and long-term care homes in Langley and Tsawwassen. Keri looks after the two Langley communities.',
        locations: [
            { name: 'Sunridge Gardens', address: '22301 Fraser Highway, Langley, BC V3A 4H5', phone: '604-510-5091', website: 'https://briacommunities.ca/communities/sunridge-gardens/' },
            { name: 'Magnolia Gardens', address: '5840 Glover Road, Langley, BC V3A 9K3', phone: '604-514-1210', website: 'https://briacommunities.ca/communities/magnolia-gardens/' },
        ],
    },
    {
        slug: 'cassandra-stephens',
        name: 'Cassandra Stephens',
        company: 'Chartwell Langley Gardens',
        email: 'castephens@chartwell.com',
        phone: '604-676-3098', // published on chartwell.com
        website: 'https://chartwell.com/bc/langley/langley-gardens',
        category: 'Senior Living & Care',
        location: 'Langley',
        address: '8888 202nd Street, Langley, BC V1M 4A7',
        description: 'A Langley retirement residence offering independent living and assisted living through to memory living and long-term care, so support can grow as needs change.',
        services: ['Independent living', 'Assisted living', 'Memory living', 'Long-term care'],
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
        bookingLabel: 'Book a free call',
        photo: '/members/karen-tyrell.jpg',
        logo: '/members/logos/dementia-solutions.png',
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
            photo: '/members/diane-hill-doell.jpg',
        logo: '/members/logos/advanced-foot-care.png',
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
        location: 'Delta, Surrey and Langley',
        address: '105 - 11957 80 Avenue, Delta, BC V4C 0E1',
        description: 'Registered physiotherapists who come to you: rehabilitation at home across Delta, Surrey and Langley, with clinic-based physiotherapy, massage therapy and acupuncture also available.',
        services: ['In-home physiotherapy', 'Clinic physiotherapy', 'Massage therapy', 'Acupuncture'],
    },
    {
        slug: 'sunny-upadhyay',
        name: 'Sunny Upadhyay',
        company: 'Save On Scooters & Medical Equipment Inc.',
        email: 's@updy.me',
        phone: '604-541-7550',
        website: 'https://www.saveonscooters.ca',
        category: 'Health & Wellness',
        location: 'South Surrey',
        address: '15231 16 Avenue, Surrey, BC V4A 1R6',
        description: 'Mobility scooters, power chairs, wheelchairs and walkers for seniors and anyone with mobility challenges, for sale or rental, with free local delivery. Over 25 years serving Surrey, White Rock, Langley, Delta and Tsawwassen.',
        services: ['Mobility scooters', 'Power chairs', 'Manual wheelchairs', 'Walkers', 'Accessories', 'Rentals', 'Free local delivery'],
        hours: 'Monday to Friday, 9:00 a.m. to 5:00 p.m.',
        areasServed: ['Surrey and White Rock', 'Langley', 'Delta, Ladner and Tsawwassen'],
    },
    {
        slug: 'shalini-charla',
        name: 'Shalini Charla',
        company: 'Adult Cognitive Wellness Centre',
        email: 'shalinic@adultcognitivewellnesscentre.ca',
        phone: '778-549-6413',
        website: 'https://adultcognitivewellnesscentre.ca',
        category: 'Health & Wellness',
        location: 'Langley',
        address: '6676 203rd Street, Langley, BC V2Y 2Z1',
        description: 'Group cognitive stimulation programs using evidence-based practices to help improve or maintain cognitive function and overall wellness, with caregiver support groups and free half-day trial programs.',
        services: ['Cognitive stimulation programs', 'Physical wellness activities', 'Social engagement', 'Caregiver support groups', 'Free half-day trial programs'],
    },

    {
        slug: 'ethan-martin',
        name: 'Ethan Martin',
        title: 'Owner and Director',
        business: 'comfort-keepers',
        company: 'Comfort Keepers',
        email: 'ethanmartin@comfortkeepersvancouver.ca',
        phone: '604-541-8653',
        category: 'Health & Wellness',
        years: '11 to 20 years',
        photo: '/members/ethan-martin.jpg',
        blurb:
            'Ethan Martin is the Director of Comfort Keepers Home Care, serving seniors and families across the Lower Mainland. His career began in orthopaedics and orthotics before joining his family-owned Comfort Keepers business, where he discovered a passion for supporting people and helping seniors live with dignity, independence, and quality of life.\n\nEthan is committed to building a culture rooted in honesty, integrity, compassion, and respect, values that guide both his leadership and his approach to serving the community. He believes strong relationships between care providers, families, healthcare professionals, and community organizations are essential to supporting seniors.',
    },
    {
        slug: 'erica-kerry',
        name: 'Erica Kerry',
        title: 'Business Development Manager',
        business: 'comfort-keepers',
        company: 'Comfort Keepers',
        email: 'erica@comfortkeepersvancouver.ca',
        phone: '604-541-8653', // office line
        category: 'Health & Wellness',
    },

    // ========================== Moving & Transitions ========================
    {
        slug: 'terrie-orthner',
        name: 'Terrie Orthner',
        title: 'Co-Founder and Director',
        business: 'next-phase-navigators',
        company: 'Next Phase Navigators',
        email: 'terrie@nextphasenavigators.ca',
        phone: '604-250-4860',
        category: 'Moving & Transitions',
        languages: ['English'],
        years: '11 to 20 years',
        blurb:
            'Terrie Orthner is the co-founder of Next Phase Navigators and an experienced senior living professional with a passion for helping older adults and their families navigate change. Drawing on years of experience in senior living, sales, community outreach and her own family’s aging journey, Terrie understands how overwhelming these decisions can feel. She offers warm, practical guidance with retirement living options, housing transitions, appointments, companionship, advocacy and family support.\n\nTerrie believes every senior deserves to feel heard, respected and included. Her goal is to make the aging journey feel less complicated and ensure families never have to navigate it alone.',
        social: { linkedin: 'https://www.linkedin.com/in/terrie-orthner-333787152' },
        photo: '/members/terrie-orthner.jpg',
    },
    {
        slug: 'sonia-hansen',
        name: 'Sonia Hansen',
        title: 'Co-Founder and Director',
        business: 'next-phase-navigators',
        company: 'Next Phase Navigators',
        email: 'sonia@nextphasenavigators.ca',
        phone: '250-490-1838',
        category: 'Moving & Transitions',
        languages: ['English', 'Portuguese'],
        years: '6 to 10 years',
        photo: '/members/sonia-hansen.jpg',
        blurb:
            'Sonia Hansen is Co-Founder and Director of Next Phase Navigators, with over eight years of leadership experience in senior living. She guides older adults and families as they explore housing and aging-in-place options, arrange trusted services, plan transitions and advocate for their needs.\n\nSonia’s commitment to this work is rooted in both professional knowledge and personal experience. While supporting her mother through falls, a Parkinson’s diagnosis and a move to assisted living from another province, she saw how complex the process can be. Sonia now offers clear, compassionate and unbiased guidance so families can make informed decisions and move forward with confidence and peace of mind.',
    },
    {
        slug: 'garrett-robertson',
        name: 'Garrett Robertson',
        title: 'Director',
        business: 'get-started-home-services',
        company: 'Get Started Home Services',
        email: 'admin@getstartedhomeservices.com',
        phone: '604-996-8512',
        category: 'Moving & Transitions',
        languages: ['English'],
        years: '6 to 10 years',
        photo: '/members/garrett-robertson.jpg',
        blurb: 'Garrett Robertson is the director of Get Started Home Services, which he has been building since 2020, originally alongside his mother Dawn. He is hands-on in the work: meeting families at the kitchen table, walking the home, writing the plan, and being on site with the crew on moving day. Based in Surrey, he also co-founded and chairs the Seniors Professional Network, bringing together the professionals a family is likely to need when a senior’s living situation changes.',
    },
    {
        slug: 'dawn-robertson',
        name: 'Dawn Robertson',
        business: 'get-started-home-services',
        company: 'Get Started Home Services',
        email: 'admin@getstartedhomeservices.com',
        phone: '604-996-8512',
        category: 'Moving & Transitions',
        photo: '/members/dawn-robertson.jpg',
    },
    // ============================= Food Services ============================
    {
        // Two INDEPENDENT Heart to Home Meals franchises are in the network.
        // They must stay visibly distinct so families contact the right one.
        slug: 'youla-thomas',
        name: 'Youla Thomas',
        company: 'Heart to Home Meals — Vancouver',
        franchiseOf: 'Heart to Home Meals',
        email: 'vancouver@hearttohomemeals.ca',
        phone: '778-308-4351', // published Heart to Home Meals Vancouver line
        website: 'https://www.hearttohomemeals.ca',
        category: 'Food Services',
        location: 'Vancouver',
        description: 'Over 200 chef-crafted frozen meals for seniors, delivered free to the door by a familiar driver who will even put them in the freezer. Order online or by phone, as often as you like, with lunch and dinner mains, breakfasts, soups, desserts and snacks.',
        services: ['Free home delivery', 'Order online or by phone', 'Low sodium, high fibre and vegetarian options', 'Higher protein and carb-controlled options', 'Allergen-aware choices', 'Texture-modified meals'],
    },
    {
        slug: 'harvin-bhathal',
        name: 'Harvin Bhathal',
        company: 'Heart to Home Meals — Fraser Valley',
        franchiseOf: 'Heart to Home Meals',
        email: 'harvinbhathal.media@gmail.com',
        phone: '604-243-8855', // published Heart to Home Meals Fraser Valley line
        website: 'https://www.hearttohomemeals.ca',
        category: 'Food Services',
        location: 'Fraser Valley',
        description: 'Over 200 chef-crafted frozen meals for seniors, delivered free to the door by a familiar driver who will even put them in the freezer. Order online or by phone, as often as you like, with lunch and dinner mains, breakfasts, soups, desserts and snacks.',
        services: ['Free home delivery', 'Order online or by phone', 'Low sodium, high fibre and vegetarian options', 'Higher protein and carb-controlled options', 'Allergen-aware choices', 'Texture-modified meals'],
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
        description: 'A mortgage brokerage working with more than 26 lenders to find the right fit, with a focus on reverse mortgages that let seniors access the equity in their home. Also handles refinancing, renewals, debt consolidation and home equity lines of credit.',
        services: ['Reverse mortgages (CHIP)', 'Home equity lines of credit', 'Mortgage refinancing and renewals', 'Debt consolidation', 'Mortgage pre-approval'],
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
        description: 'Residential real estate across Metro Vancouver and the Fraser Valley, with more than 21 years of experience helping people sell the family home and find the right next place, whether that is a smaller home, a condo or a retirement community.',
        services: ['Home valuation and selling', 'Downsizing and the move to a smaller home', 'Property search and listing alerts', 'Coordination with mortgage and moving professionals', 'Market reports'],
        areasServed: ['Metro Vancouver', 'Fraser Valley'],
        photo: '/members/sadhana-kumar.jpg',
        logo: '/members/logos/sadhana-kumar.png',
    },

    // ============================ Legal Services ============================
    {
        slug: 'mimi-wang',
        name: 'Mimi Wang',
        company: 'Maximus Law',
        email: 'wang@maximuslaw.ca',
        phone: '778-386-6963', // published on maximuslaw.ca
        website: 'https://www.maximuslaw.ca',
        category: 'Legal Services',
        social: { linkedin: 'https://www.linkedin.com/in/mimi-w-9b69161b' },
        description: 'Wills and estate planning, including powers of attorney, representation agreements and medical directives, along with grants of probate and estate administration for families after a death. Business and corporate law is also offered.',
        services: ['Wills and estate planning', 'Powers of attorney', 'Representation agreements and medical directives', 'Grants of probate', 'Estate administration', 'Business law'],
    },

    // =========================== Travel & Leisure ===========================
    {
        slug: 'yvonna-camire',
        name: 'Yvonna Camire',
        company: 'Paramount Cruise & Travel',
        email: 'yvonnac@shaw.ca',
        phone: '604-575-6200', // published on wegothere.ca
        website: 'https://wegothere.ca',
        category: 'Travel & Leisure',
        description: 'Pre-planned, luxury motorcoach tours and cruises, organized so that travellers can relax and enjoy the trip without the logistics.',
        services: ['Motorcoach tours', 'Cruises', 'Pre-planned group travel'],
    },

    // ========================= End-of-Life Services =========================
    {
        slug: 'vanessa-king',
        name: 'Vanessa King',
        company: 'Alternatives Funeral & Cremation Services',
        email: 'v.king@myalternatives.ca',
        phone: '604-857-5779', // published on myalternatives.ca
        website: 'https://www.myalternatives.ca',
        category: 'End-of-Life Services',
        location: 'Aldergrove',
        address: '3070 275A Street, Aldergrove, BC V4W 3L4',
        description: 'Accessible, flexible cremation and funeral services, available around the clock, from simple cremation to celebrations of life and full funeral services, serving Metro Vancouver and the Fraser Valley.',
        services: ['Simple cremation', 'Funeral services', 'Celebrations of life', 'Graveside and green burial', 'Witness cremation', 'Sea scatter', 'Pre-planning and prepaid arrangements'],
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
        description: 'A community group that creates a supportive environment where men can engage with others, combat isolation, discover new opportunities and take part in purposeful activities that promote personal growth and community connection.',
    },
    {
        slug: 'louise-taylor',
        name: 'Louise Taylor',
        title: 'Director, Community Engagement',
        company: 'Brella Community Services Society',
        email: 'louise.taylor@brellasociety.ca',
        phone: '604-240-2842',
        website: 'https://www.brellasociety.ca',
        category: 'Community Organizations',
        location: 'White Rock',
        address: '15008 26th Avenue, Surrey, BC V4P 3H5',
        languages: ['English'],
        blurb:
            'Louise Taylor is a passionate and purpose-driven leader committed to improving the lives of older adults through innovation, collaboration and community engagement. With a strong focus on strategy and measurable outcomes, she excels at building relationships, inspiring action, and identifying opportunities, both big and small, to create lasting positive change.\n\nA ten-year resident of White Rock, Louise has volunteered and fundraised for various organizations for more than 30 years. She is a charity auctioneer who got her start working aboard cruise ships, and the founder of the Ladner Village Market.',
        description:
            'Brella helps older adults, caregivers and families lead full, engaged and meaningful lives through community-based programs, dementia support, caregiver services, wellness initiatives and volunteer opportunities. For nearly 50 years, Brella has been creating caring communities where older adults can thrive.\n\nThrough its partnership with Crescent Housing Society, Brella also supports affordable, supportive housing for older adults in South Surrey and White Rock, where residents benefit from accessible housing, community connections, wellness programs and opportunities to age in place with dignity and independence.',
        services: [
            'Community-based programs for older adults',
            'Dementia support',
            'Caregiver services',
            'Wellness initiatives',
            'Volunteer opportunities',
            'Affordable, supportive housing through Crescent Housing Society',
        ],
        established: 1977,
        photo: '/members/louise-taylor.jpg',
        logo: '/members/logos/brella.png',
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

/** Other members of the same business record, if any. */
export const colleaguesOf = (m) =>
    m?.business ? members.filter((o) => o.business === m.business && o.slug !== m.slug) : [];

/** Members with the same company, whether via a shared record or the same company name. */
export const sameBusiness = (a, b) => (a.business && a.business === b.business) || a.company === b.company;

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

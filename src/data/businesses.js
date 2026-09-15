// =============================================================================
// Businesses shared by more than one member.
//
// The PERSON is the directory entry: everyone who attends gets their own card
// and their own profile page. But when two or more members work for the same
// business, the business content (description, website, address, services,
// hours, logo and so on) lives here ONCE, and each member points at it with
// `business: '<key>'` in members.js. Their profile pages then show the same
// business block, and each profile lists the colleagues.
//
// A member's own fields always win over the business record, so a person can
// still have their own phone, email, title, bio and photo.
//
// Do NOT use this for the same parent company running different communities
// (Retirement Concepts, Aspira, Heart to Home Meals territories). Those are
// separate places a family would look for on their own, so they stay as
// separate listings with their own details.
//
// Any field from the member schema that describes the business rather than
// the person can go here: company, franchiseOf, website, booking, tagline,
// description, services, idealClients, gettingStarted, freeConsultation,
// payment, accreditations, hours, established, areasServed, address,
// locations, location, social, logo.
// =============================================================================

export const businesses = {
    'get-started-home-services': {
        company: 'Get Started Home Services',
        website: 'https://getstartedhomeservices.com',
        logo: '/members/logos/get-started-home-services.png',
        booking: 'https://www.getstartedhomeservices.com/#quote',
        bookingLabel: 'Book a consultation',
        tagline: 'Full service seniors moving and home transitions.',
        gettingStarted:
            'Call, text, email or book on our website for a free initial consultation. We visit the home, walk through what needs to happen, and follow up with a written plan and estimate.',
        idealClients:
            'Seniors and their families facing a move into a smaller home or a retirement community, and adult children managing a parent’s downsizing or estate, often from a distance. Also homeowners who need a home cleared, organized or made ready for sale.',
        freeConsultation: true,
        payment: ['Private pay', 'Payment plans available'],
        hours: '7 days a week, 8:00 a.m. to 9:00 p.m.',
        established: 2020,
        description:
            'Get Started Home Services helps seniors, families and homeowners across Metro Vancouver and the Fraser Valley through major home transitions with clarity and care. The team manages the whole move from the first assessment to move-in setup: planning, downsizing, packing, moving, unpacking and settling in, along with estate clearing, donation and auction coordination, and preparing the family home for sale. One team, one plan, and no part of the process left for the family to figure out on their own.',
        services: [
            'Seniors moving',
            'Full-service moving',
            'Downsizing and estate transitions',
            'Professional organizing',
            'Home clearing and junk removal',
            'Preparing a home for sale, staging and cleaning',
            'Auction services',
        ],
        areasServed: [
            'Vancouver',
            'North Shore (North and West Vancouver)',
            'Burnaby and New Westminster',
            'Tri-Cities (Coquitlam, Port Coquitlam, Port Moody)',
            'Richmond',
            'Surrey and White Rock',
            'Delta, Ladner and Tsawwassen',
            'Langley',
            'Maple Ridge and Pitt Meadows',
            'Abbotsford and Mission',
            'Chilliwack',
            'Agassiz and Hope',
        ],
        social: { facebook: 'https://www.facebook.com/GetStartedHomeServices', instagram: 'getstartedhs' },
    },

    // Form response 2026-09-14 (Ethan Martin, submitted by Erica Kerry).
    'comfort-keepers': {
        company: 'Comfort Keepers',
        website: 'https://www.comfortkeepers.ca/whiterock/expert-senior-care-for-residents-of-surrey-bc/',
        logo: '/members/logos/comfort-keepers.png',
        phone: '604-541-8653',
        address: '302 - 2121 160 Street, Surrey, BC V3S 9N6',
        location: 'South Surrey',
        tagline: 'Helping people live well, stay connected, and feel supported at home.',
        description:
            'Comfort Keepers provides compassionate, personalized in-home care for seniors, adults, and families throughout the Lower Mainland, helping people remain independent, connected, and engaged in their homes and communities. Comfort Keepers works alongside families, healthcare professionals, retirement communities, and community organizations to help bridge gaps in care and provide support when it is needed most.\n\nWhat sets Comfort Keepers apart is its people-first approach, taking the time to understand each client’s unique needs and build trusted relationships. More than providing care, Comfort Keepers strives to be a supportive community resource for individuals and families navigating changing care needs.',
        services: [
            'Personal care and companionship',
            '24/7 care',
            'Dementia care',
            'Palliative support',
            'Post-operative support',
            'Respite for family caregivers',
            'Meal preparation and light housekeeping',
            'Transportation, accompanying on appointments and running errands',
            'Foot care nurse',
        ],
        idealClients:
            'Seniors and adults who want to remain independent and connected at home, including those recovering from illness, injury, surgery, or hospitalization. Comfort Keepers also supports family caregivers who need additional help, respite, or peace of mind.',
        gettingStarted:
            'Phone or email the office and a nurse or client care coordinator will arrange a care consult to assess what kind of support you need, then schedule a care aide or companion as soon as you are ready to get started.',
        freeConsultation: true,
        payment: ['Private pay', 'Veterans Affairs Canada', 'ICBC', 'Better at Home'],
        accreditations: ['BC Care Providers Association', 'Accredited with Accreditation Canada'],
        hours: 'Office open 7 days a week, with after-hours support by phone, 24/7',
        languages: [
            'English', 'Cantonese', 'Mandarin', 'Punjabi', 'Hindi', 'Tagalog', 'Korean', 'Farsi', 'Spanish', 'French',
            'Japanese', 'Vietnamese', 'Russian', 'German', 'Ukrainian', 'Arabic', 'Urdu', 'Shona',
        ],
        established: 2010,
        areasServed: [
            'Vancouver',
            'Burnaby and New Westminster',
            'Richmond',
            'Surrey and White Rock',
            'Delta, Ladner and Tsawwassen',
            'Langley',
            'Abbotsford',
        ],
        social: {
            linkedin: 'https://ca.linkedin.com/company/comfort-keepers-vancouver',
            facebook: 'https://www.facebook.com/ComfortKeepersVancouver/',
            instagram: 'comfortkeepersvan',
        },
    },

    // Form responses 2026-09-14 (Terrie Orthner and Sonia Hansen).
    'next-phase-navigators': {
        company: 'Next Phase Navigators',
        website: 'https://www.nextphasenavigators.ca',
        logo: '/members/logos/next-phase-navigators.png',
        location: 'Mobile service across the Lower Mainland',
        tagline: 'Helping seniors and families navigate life’s transitions through guidance and advocacy.',
        description:
            'Next Phase Navigators supports older adults and families who feel overwhelmed or unsure where to begin as needs change. The team explains care levels, identifies which homes may best suit each person and explores safe options for aging at home. Services include tour planning, help with forms, appointment support, advocacy, connection visits and referrals to trusted local providers.\n\nLed by two senior living professionals with firsthand family experience, the company understands how emotional these choices can be. It takes time to listen, answer questions and honour each person’s wishes. Through clear, unbiased guidance and one steady point of contact, Next Phase Navigators eases stress and helps families make informed choices and move forward feeling supported, prepared and confident at every step.',
        services: [
            'Personal consultations',
            'Senior living and aging-in-place guidance',
            'Care-level education',
            'Retirement community research and comparisons',
            'Tour planning and attendance',
            'Application support',
            'Advocacy and appointment support',
            'Hospital discharge navigation',
            'Connection visits and family support',
            'Coordination of downsizing, packing, moving, estate clearing and donations',
            'Home safety service referrals and connections to community resources',
        ],
        idealClients:
            'Older adults and families across the Lower Mainland who feel overwhelmed after a fall, hospital stay, new diagnosis or change in care needs. This includes adult children supporting a parent from a distance and seniors deciding whether to remain at home or move to independent or assisted living, who need clear guidance, advocacy and help coordinating next steps.',
        gettingStarted:
            'Call, email or book online for a complimentary 20 to 30 minute discovery call. Next Phase Navigators will learn about your situation, answer initial questions and recommend the most helpful next step.',
        freeConsultation: true,
        payment: ['Private pay', 'Debit or credit card'],
        hours: 'Flexible',
        established: 2026,
        areasServed: [
            'Vancouver',
            'North Shore (North and West Vancouver)',
            'Burnaby and New Westminster',
            'Tri-Cities (Coquitlam, Port Coquitlam, Port Moody)',
            'Richmond',
            'Surrey and White Rock',
            'Delta, Ladner and Tsawwassen',
            'Langley',
            'Maple Ridge and Pitt Meadows',
        ],
        social: { facebook: 'https://www.facebook.com/profile.php?id=61592800696476' },
    },
};

/**
 * A member with their business record folded in underneath. Fields set on
 * the member win; the business fills in whatever the member did not set.
 */
export const withBusiness = (m) => {
    if (!m?.business) return m;
    const b = businesses[m.business];
    if (!b) return m;
    const merged = { ...b };
    for (const [k, v] of Object.entries(m)) {
        if (v !== undefined && v !== null) merged[k] = v;
    }
    return merged;
};

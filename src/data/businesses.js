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

    'comfort-keepers': {
        company: 'Comfort Keepers',
        website: 'https://www.comfortkeepers.ca/whiterock/',
        phone: '604-541-8653',
        address: '210 - 15252 32nd Avenue, Surrey, BC V3Z 0R7',
        location: 'South Surrey',
        description:
            'In-home care that helps seniors stay independent and comfortable at home, tailored to each person, from a few hours of companionship to 24-hour and live-in care.',
        services: [
            'Companion and personal care',
            '24-hour and live-in care',
            'Alzheimer\'s and dementia care',
            'Respite care',
            'In-home nursing',
            'Meal preparation and housekeeping',
            'Transportation assistance',
            'End-of-life care',
        ],
        areasServed: ['Vancouver', 'Burnaby and New Westminster', 'Richmond', 'Surrey and White Rock', 'Langley', 'Abbotsford and Mission'],
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

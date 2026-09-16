// =============================================================================
// Events — what's on for the public and for members.
//
// The Community Education Series ("Navigating the Aging Journey - From
// Independence to Support") is run with the BC Community Response Networks.
// Add a `link` to each session once the registration form exists.
//
// Add one object per event. Past events drop off automatically (see
// upcomingEvents below), so there is no need to delete them; the list is also
// a record. Keep it to the next five or six upcoming events on the home page;
// beyond that the timeline gets crowded.
//
// FIELDS
//   date        ISO date, YYYY-MM-DD. Drives ordering and the month columns.
//   endDate     Optional, for multi-day events.
//   time        Free text, e.g. "9:00–11:00 a.m." Leave out if not fixed.
//   title       Short. Two lines at most on the card.
//   summary     One or two sentences.
//   location    Venue and town, or "Location to confirm".
//   audience    "public"  — open to anyone, the default
//               "members" — SPN members only
//   link        Optional URL for details or registration.
//   organizer   "spn"    — run by the Seniors Professional Network (gets an
//                          "SPN event" tag on the card)
//               "member" — a member's own event (open house, seminar, etc.)
//   hostName    For member events: the business or person hosting, as shown.
//   host        Optional member slug, links the event to their profile.
//
// Members submit their events through the unlisted /submit-event page; the
// submissions arrive by email (Formspree) and are added here by hand.
// =============================================================================

export const events = [
    {
        // Submitted by Louise Taylor via /submit-event, 2026-09-15
        date: '2026-10-17',
        time: '10:00 a.m. to 1:00 p.m.',
        title: 'Elder Abuse',
        summary:
            'Valuable information for seniors and their loved ones: tips, issues to watch out for, knowing who to trust and who to call if you find yourself a victim of abuse. Coffee and refreshments in the morning, followed by a bag lunch. Free. To RSVP, call 604-501-5100.',
        location: 'Newton Seniors Community Centre, Surrey',
        audience: 'public',
        organizer: 'member',
        hostName: 'Brella Community Services Society',
        host: 'louise-taylor',
    },
    {
        date: '2026-10-22',
        time: '10:30 a.m. to 3:00 p.m., doors 10:00 a.m.',
        title: 'Thriving at Home: Resources and Strategies for Staying Independent',
        summary:
            'Community Education Series, part one. Talks on brain health, nutrition, falls prevention and in-home support, plus exhibitor tables and lunch.',
        location: 'Grace Point Church, 3487 King George Blvd, South Surrey',
        audience: 'public',
        organizer: 'spn',
    },
    {
        date: '2026-11-19',
        time: '10:30 a.m. to 3:00 p.m., doors 10:00 a.m.',
        title: 'Planning the Transition: Moving to Supportive Living with Confidence',
        summary:
            'Community Education Series, part two. A panel on housing options, then downsizing, selling and moving, and financing the next step, plus exhibitor tables and lunch.',
        location: 'Grace Point Church, 3487 King George Blvd, South Surrey',
        audience: 'public',
        organizer: 'spn',
    },
];

const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

/** Parse an ISO date as a local calendar date (avoids the UTC-midnight trap). */
export const parseDate = (iso) => {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d);
};

export const monthName = (iso) => MONTHS[parseDate(iso).getMonth()];

/** "Tue 14 Oct" style short date. */
export const shortDate = (iso) =>
    parseDate(iso).toLocaleDateString('en-CA', { weekday: 'short', day: 'numeric', month: 'short' });

/** "Wednesday, October 14, 2026". */
export const longDate = (iso) =>
    parseDate(iso).toLocaleDateString('en-CA', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

/**
 * Events on or after today, soonest first. Multi-day events stay listed until
 * their end date has passed.
 */
export const upcomingEvents = (limit = 6, today = new Date()) => {
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return events
        .filter((e) => parseDate(e.endDate || e.date) >= start)
        .sort((a, b) => a.date.localeCompare(b.date))
        .slice(0, limit);
};

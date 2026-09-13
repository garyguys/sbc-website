// =============================================================================
// "What do you need help with?" — situational entry points.
//
// Families don't arrive thinking "I need a Senior Living & Care professional."
// They arrive thinking "Mom can't manage the stairs anymore." These map the
// second kind of thought onto the first, and drive /directory?need=<key>.
//
// Each key must match the `needs` array on members in ./members.js.
// =============================================================================

export const needs = [
    {
        key: 'downsizing',
        label: 'Selling or downsizing the home',
        description: 'Listing the family home, sorting decades of belongings, and planning the move.',
        icon: 'Home',
    },
    {
        key: 'moving',
        label: 'Choosing a retirement residence',
        description: 'Comparing independent living, assisted living, and long-term care options.',
        icon: 'Building2',
    },
    {
        key: 'care',
        label: 'Arranging help at home',
        description: 'Personal care, companionship, meal delivery, and respite for family caregivers.',
        icon: 'HeartHandshake',
    },
    {
        key: 'memory',
        label: 'Living with dementia',
        description: 'Guidance and support after a diagnosis — for the person and for the family.',
        icon: 'Brain',
    },
    {
        key: 'health',
        label: 'Health and wellbeing',
        description: 'Rehabilitation, foot care, cognitive wellness, and staying nourished.',
        icon: 'Stethoscope',
    },
    {
        key: 'home',
        label: 'Making the home safer',
        description: 'Accessibility changes, mobility equipment, repairs, and easier-to-reach storage.',
        icon: 'Wrench',
    },
    {
        key: 'money',
        label: 'Money and mortgages',
        description: 'Reverse mortgages, releasing equity, and financing the next chapter.',
        icon: 'PiggyBank',
    },
    {
        key: 'planning',
        label: 'Putting affairs in order',
        description: 'Wills, estates, powers of attorney, and funeral or cremation arrangements.',
        icon: 'FileText',
    },
    {
        key: 'living-well',
        label: 'Staying active and connected',
        description: 'Community groups, social programs, and travel worth looking forward to.',
        icon: 'Users',
    },
];

export const NEED_KEYS = needs.map((n) => n.key);

export const getNeed = (key) => needs.find((n) => n.key === key) || null;

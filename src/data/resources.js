// =============================================================================
// Resources — plain-language guides for seniors and the families helping them.
//
// EDITORIAL RULE: everything here is deliberately evergreen and general. It
// contains no claims about specific programs, costs, benefit amounts, wait
// times, or law, because those change and would need checking before every
// publish. If you add an article that DOES make those claims, date it and set
// a review reminder.
//
// `published: false` hides an article from the index and 404s its URL, so you
// can stage drafts in the repo safely.
// =============================================================================

export const resources = [
    {
        slug: 'questions-to-ask-when-touring-a-residence',
        title: 'Questions to ask when touring a retirement residence',
        summary:
            'A tour is a sales visit as much as a viewing. These are the questions that get past the show suite and tell you what living there is actually like.',
        readingTime: '6 min read',
        category: 'Choosing a residence',
        relatedCategories: ['Senior Living & Care'],
        published: true,
        body: [
            { t: 'p', text: 'Most tours follow the same script: the dining room, the show suite, the activity calendar, the view. All of it is worth seeing. None of it tells you what a Tuesday in February feels like when your mother needs help at two in the morning and the hallway is quiet.' },
            { t: 'p', text: 'Bring this list. Ask the questions out loud, write down the answers, and ask the same ones at every residence you visit so you can compare like with like.' },

            { t: 'h2', text: 'About care and staffing' },
            { t: 'ul', items: [
                'How many staff are on overnight, and what are their qualifications?',
                'What happens if someone falls at three in the morning? Walk me through it.',
                'What is your staff turnover like in the last year?',
                'At what point would a resident be asked to move to a higher level of care — or move out entirely?',
                'Can care be increased in place as needs change, and what does that cost?',
            ]},

            { t: 'h2', text: 'About money' },
            { t: 'ul', items: [
                'What is included in the monthly fee, and what is billed separately?',
                'How much have fees increased in each of the last three years?',
                'How much notice is given before a fee increase?',
                'What are the terms if we need to leave — notice period, refunds, deposits?',
            ]},
            { t: 'callout', text: 'Ask for the fee schedule in writing before you leave. A residence that will not put its numbers on paper is telling you something.' },

            { t: 'h2', text: 'About daily life' },
            { t: 'ul', items: [
                'Can I see a menu from an ordinary week, not a special occasion?',
                'What happens if a resident does not like the meal being served?',
                'What does someone do here on a rainy Sunday?',
                'How do you help a new resident who is shy or reluctant to join in?',
                'What are the visiting hours — and are there restrictions on family staying over?',
            ]},

            { t: 'h2', text: 'The two things to do that are not questions' },
            { t: 'ul', items: [
                'Visit twice, and make the second visit unannounced, ideally at a meal or in the evening.',
                'Talk to a resident or a family member without staff present. Ask them what they wish they had known.',
            ]},
            { t: 'p', text: 'If a residence makes either of those difficult, that is useful information too.' },
        ],
    },
    {
        slug: 'downsizing-without-the-overwhelm',
        title: 'Downsizing without the overwhelm: a room-by-room approach',
        summary:
            'Forty years of belongings will not sort themselves in a weekend. A slower, ordered approach that keeps the decisions small and the arguments rare.',
        readingTime: '7 min read',
        category: 'Moving and downsizing',
        relatedCategories: ['Moving & Transitions', 'Real Estate'],
        published: true,
        body: [
            { t: 'p', text: 'The mistake almost everyone makes is starting in the room with the most meaning in it. The photographs, the letters, the boxes in the spare bedroom. Three hours later nothing has been sorted and somebody is upset.' },
            { t: 'p', text: 'Start where the decisions are easy and work toward the ones that are hard. By the time you reach the difficult rooms you will have built up some practice at deciding, and the person doing the downsizing will have had the experience of being in control of it.' },

            { t: 'h2', text: 'The order that works' },
            { t: 'ul', items: [
                'Linen closet, bathroom cabinets, cleaning supplies — almost nothing here carries memory.',
                'Kitchen — duplicates and gadgets first, everyday dishes much later.',
                'Garage, basement, shed — bulky, largely unsentimental, and it frees up staging space.',
                'Clothing — slower than it looks. Budget more time than you think.',
                'Living areas and furniture — now measurable against the floor plan of the new place.',
                'Papers, photographs, and keepsakes — last, and never at the end of a long day.',
            ]},

            { t: 'h2', text: 'Rules that prevent arguments' },
            { t: 'ul', items: [
                'The person whose home it is makes the final call. Every time.',
                'Work in blocks of two hours, not whole days. Fatigue turns into conflict.',
                'Use four destinations, not two: keep, family, sell or donate, and undecided.',
                'The "undecided" box is allowed. Revisit it once, at the end. Most of it resolves itself.',
                'Photograph anything sentimental that will not fit. People part with objects more easily when the image is kept.',
            ]},
            { t: 'callout', text: 'Measure the new home first and tape out the room dimensions on the floor of the old one. Arguments about whether the dining set will fit end the moment the tape goes down.' },

            { t: 'h2', text: 'On the things nobody wants' },
            { t: 'p', text: 'The china, the silver, the dining suite, the collections built over decades — the resale market for all of it is thinner than families expect, and hearing this is genuinely painful. It is worth knowing early rather than discovering it three days before the move, when the only remaining option is a rushed decision.' },
            { t: 'p', text: 'Ask family members what they actually want, specifically and in writing, before you begin. "Take whatever you like" produces nothing; a named list produces decisions.' },
        ],
    },
    {
        slug: 'home-safety-walk-through',
        title: 'A room-by-room home safety walk-through',
        summary:
            'Most falls happen in familiar rooms doing ordinary things. An hour with this checklist and a notepad is the cheapest intervention available.',
        readingTime: '5 min read',
        category: 'Staying at home',
        relatedCategories: ['Health & Wellness', 'Moving & Transitions'],
        published: true,
        body: [
            { t: 'p', text: 'Walk the house at the time of day it is hardest to see — late afternoon in winter, or after dark. Take a notepad. You are looking for three things: what is in the way, what is hard to reach, and what is hard to see.' },

            { t: 'h2', text: 'Entrances and hallways' },
            { t: 'ul', items: [
                'Is there a light switch at both ends of every hallway and stairway?',
                'Are there handrails on both sides of the stairs, running the full length?',
                'Is the path from the car to the door level, lit, and clear in winter?',
                'Are there loose mats or rugs anywhere on the route?',
            ]},

            { t: 'h2', text: 'Bathroom' },
            { t: 'ul', items: [
                'Grab bars beside the toilet and inside the shower — bolted to studs, not suction-cupped.',
                'A non-slip surface in the tub or shower.',
                'Is the water heater set low enough to prevent scalding?',
                'Can the door be unlocked from the outside in an emergency?',
            ]},

            { t: 'h2', text: 'Kitchen' },
            { t: 'ul', items: [
                'Are everyday items between shoulder and knee height, so nothing requires a step stool?',
                'Is there a sturdy chair to sit on while preparing food?',
                'Does the stove have an automatic shut-off, or could one be fitted?',
            ]},

            { t: 'h2', text: 'Bedroom' },
            { t: 'ul', items: [
                'A lamp reachable from the bed without getting up.',
                'A clear, lit path from bed to bathroom — motion-sensor night lights are inexpensive and effective.',
                'Is the bed at a height where the feet rest flat on the floor when sitting on the edge?',
            ]},

            { t: 'h2', text: 'Everywhere' },
            { t: 'ul', items: [
                'Cords and cables run along walls, never across a walking route.',
                'Smoke and carbon monoxide alarms tested, with batteries dated.',
                'A phone or call device reachable from the floor, in case of a fall.',
                'Brighter bulbs throughout — ageing eyes need substantially more light than younger ones.',
            ]},
            { t: 'callout', text: 'If one change is made and no others, make it lighting. It is the cheapest, least intrusive, and least resisted of everything on this list.' },
        ],
    },
    {
        slug: 'talking-to-a-parent-about-help',
        title: 'How to talk to a parent about needing help',
        summary:
            'The conversation most families put off until a crisis forces it. Some ways to start it earlier, and go better.',
        readingTime: '6 min read',
        category: 'Family conversations',
        relatedCategories: ['Health & Wellness', 'Senior Living & Care'],
        published: true,
        body: [
            { t: 'p', text: 'Almost nobody has this conversation well the first time. It usually happens too late, under pressure, with several family members in the room and somebody in tears. It goes better when it happens early, quietly, and long before a decision has to be made.' },

            { t: 'h2', text: 'Start before you need to' },
            { t: 'p', text: 'The best time is when nothing is wrong. A conversation that begins "I want to understand what you would want, if things ever changed" is very different from one that begins after a fall. The first is a request to be understood. The second sounds like a verdict.' },

            { t: 'h2', text: 'Ask, do not announce' },
            { t: 'ul', items: [
                '"What would you want to happen if getting up the stairs became difficult?"',
                '"What would have to change before you would want some help at home?"',
                '"Who would you want making decisions if you could not make them yourself?"',
                '"What matters most to you about staying here?"',
            ]},
            { t: 'p', text: 'The last question is the important one. Independence is rarely about the house. It is about privacy, or the garden, or not being a burden, or being the person who still does things for others. Once you know which, you can often protect that thing while changing everything around it.' },

            { t: 'h2', text: 'Things that make it go badly' },
            { t: 'ul', items: [
                'Arriving with a decision already made and a brochure in hand.',
                'Several adult children at once — it reads as an ambush regardless of intent.',
                'Leading with safety statistics. Nobody has ever been persuaded by a fall statistic.',
                'Framing help as something that happens to them rather than something they choose.',
            ]},

            { t: 'h2', text: 'When the answer is no' },
            { t: 'p', text: 'It very often is, the first time. That is not the end of the conversation, and pushing harder in the same sitting rarely works. Leave it, come back to it in a few weeks, and change one small thing in the meantime — a grab bar, a cleaner, a meal delivery. Small changes that visibly work do more to shift the position than any amount of argument.' },
            { t: 'callout', text: 'If safety has genuinely become urgent and the conversation is stuck, an outside voice — a family doctor, a care professional, a trusted friend — often lands where a son or daughter cannot. That is not a failure on your part. It is very common.' },
        ],
    },
];

export const publishedResources = () => resources.filter((r) => r.published);

export const getResourceBySlug = (slug) =>
    resources.find((r) => r.slug === slug && r.published) || null;

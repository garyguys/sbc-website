/**
 * A handwritten margin note with a curved arrow, e.g.
 *   "Genuinely free — we are not a lead broker"
 *
 * Purely decorative: hidden from assistive tech and from small screens, where
 * there is no margin to write in.
 *
 * `side` controls which side of the text the arrow sits on: "left" points the
 * arrow away to the left of the note, "right" to the right.
 */
export default function Annotation({ children, side = 'right', className = '' }) {
    const flipped = side === 'left';
    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none flex items-end gap-2 ${flipped ? 'flex-row-reverse' : ''} ${className}`}
        >
            <span className="annotation -rotate-6 whitespace-pre-line">{children}</span>
            <svg
                width="58"
                height="46"
                viewBox="0 0 58 46"
                fill="none"
                className={`mb-1 shrink-0 text-terra-500 ${flipped ? '-scale-x-100' : ''}`}
            >
                <path
                    d="M2 3c14 1.5 27 8 34 19 3 5 4.5 10 5 16"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    fill="none"
                />
                <path
                    d="M34 34l7 8 8-6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />
            </svg>
        </div>
    );
}

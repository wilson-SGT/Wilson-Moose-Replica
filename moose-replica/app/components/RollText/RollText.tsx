import "./RollText.css"

type RollTextProps = {
    text: string
}

export default function RollText({ text }: RollTextProps) {
    return (
        <span className="roll-text">
            {text.split("").map((letter, i) =>
                letter === " " ? (
                    " "
                ) : (
                    <span className="roll-letter" key={i}>
                        <span
                            className="roll-letter-inner"
                            style={{ transitionDelay: `${i * 25}ms` }}
                        >
                            <span className="roll-letter-text">{letter}</span>
                            <span className="roll-letter-text roll-letter-copy" aria-hidden="true">
                                {letter}
                            </span>
                        </span>
                    </span>
                )
            )}
        </span>
    )
}

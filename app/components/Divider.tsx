interface DividerProps {
    isFlipped?: boolean;
}

export default function Divider({ isFlipped = false }: DividerProps) {
    return (
        <div className="bg-neutral-900">
            <svg className="h-24 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path className="text-neutral-950 fill-current " fillOpacity="0.99"
                    d="M0,288L60,245.3C120,203,240,117,360,112C480,107,600,181,720,229.3C840,277,960,299,1080,256C1200,213,1320,107,1380,53.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    transform={isFlipped ? "scale(1, -1) translate(0, -320)" : undefined}>
                </path>
            </svg>
        </div>
    );
}

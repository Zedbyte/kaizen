import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import SectionTitle from "../../components/custom/SectionTitle";

export default function TestimonialsSection() {
    return (
        <section className="space-y-10 md:space-y-3 w-full">
            <SectionTitle title="Testimonials and Recommendations" subtitle="Feedback and Recommendations from Colleagues and Industry Professionals"/>

            <div className="w-full py-10 relative md:px-5">
                <InfiniteMovingCards
                    items={testimonialsProfessionals}
                    direction="right"
                    speed="slow"
                />

                {/* <InfiniteMovingCards
                    items={testimonialsPeers}
                    direction="left"
                    speed="slow"
                /> */}
            </div>
        </section>
    )
}

const testimonialsProfessionals = [
    {
        quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Mrs. Lilibeth Cuison",
        title: "Dean, AUF College of Computer Studies",
        img: "/assets/testimonials/user.png"
    },
    {
        quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "Mrs. Melissa Pantig",
        title: "Program Chair, AUF College of Computer Studies",
        img: "/assets/testimonials/user.png"
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Mr. James Esquivel",
        title: "Computer Science PhD, AUF College of Computer Studies",
        img: "/assets/testimonials/user.png"
    },
    {
        quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Mr. Joey Aviles",
        title: "Graduate School, AUF College of Computer Studies",
        img: "/assets/testimonials/user.png"
    },
    {
        quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Mr. Romack Natividad",
        title: "Senior Software Engineering Specialist",
        img: "/assets/testimonials/user.png"
    },
];

// const testimonialsPeers = [
//     {
//         quote:
//         "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//         name: "Juan Dela Cruz",
//         title: "Product Manager",
//     },
//     {
//         quote:
//         "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//         name: "Maria Clara",
//         title: "Software Engineer",
//     },
//     {
//         quote: "All that we see or seem is but a dream within a dream.",
//         name: "Jose Rizal",
//         title: "Software Engineer",
//     },
// ];
import PersonalLinks from "@/partials/components/about/PersonalLinks";

export default function ContentSection() {
    return (
        <section className="content-block bg-[#0A0A0A] px-10">
            <div className="max-w-6xl mx-auto px-4 py-20 h-full space-y-20">
                <article>
                    <p className="text-3xl font-semibold">
                        Hi, I'm a full stack engineer specializing in developing solutions with JavaScript, Python, 
                        and PHP with frameworks like .NET, and React.
                    </p>
                </article>

                <div className="grid grid-cols-12 gap-24">
                    {/* Contact Section */}
                    <aside className="col-span-4 space-y-10">
                        {/* Contact */}
                        <div className="space-y-6">
                            <h2 className="text-lg font-semibold">Contact</h2>
                            <p className="text-justify">
                                For any sort of help or inquiries, feel free to reach out on my&nbsp;
                                <a 
                                    href="mailto:markjeromesantos102@gmail.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="dark:text-white font-bold underline"
                                >
                                    email
                                </a>
                                &nbsp;and I'll get back to you as soon as possible.
                            </p>
                        </div>

                        {/* Freelancing */}
                        <div className="space-y-6">
                            <h2 className="text-lg font-semibold">Want to hire me as a freelancer?</h2>
                            <p className="text-justify ">
                                Schedule a&nbsp;
                                <a 
                                    href="mailto:markjeromesantos102@gmail.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="dark:text-white font-bold underline"
                                >
                                    free consultation
                                </a>
                                &nbsp;with me and we can discuss your project.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-3">
                            <h2 className="text-lg font-semibold">Personal Links</h2>
                            <div className="pl-3 space-y-3">
                                <PersonalLinks
                                    text="Instagram"
                                    link="http://www.instagram.com"
                                    icon={
                                        <svg
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            viewBox="0 0 1024 1024"
                                        >
                                            <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z" />
                                        </svg>
                                    }
                                />
                                <PersonalLinks
                                    text="Twitter"
                                    link="http://www.twitter.com"
                                    icon={
                                        <svg
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                        </svg>
                                    }
                                />
                                <PersonalLinks
                                    text="Medium"
                                    link="http://www.medium.com"
                                    icon={
                                        <svg
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            viewBox="0 0 1024 1024"
                                        >
                                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm256 253.7-40.8 39.1c-3.6 2.7-5.3 7.1-4.6 11.4v287.7c-.7 4.4 1 8.8 4.6 11.4l40 39.1v8.7H566.4v-8.3l41.3-40.1c4.1-4.1 4.1-5.3 4.1-11.4V422.5l-115 291.6h-15.5L347.5 422.5V618c-1.2 8.2 1.7 16.5 7.5 22.4l53.8 65.1v8.7H256v-8.7l53.8-65.1a26.1 26.1 0 0 0 7-22.4V392c.7-6.3-1.7-12.4-6.5-16.7l-47.8-57.6V309H411l114.6 251.5 100.9-251.3H768v8.5z" />
                                        </svg>
                                    }
                                />
                                <PersonalLinks
                                    text="Microsoft"
                                    link="http://www.microsoft.com"
                                    icon={
                                        <svg
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M11.55 21H3v-8.55h8.55V21zM21 21h-8.55v-8.55H21V21zm-9.45-9.45H3V3h8.55v8.55zm9.45 0h-8.55V3H21v8.55z" />
                                        </svg>
                                    }
                                />
                                <PersonalLinks
                                    text="LeetCode"
                                    link="http://www.leetcode.com"
                                    icon={
                                        <svg
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                                        </svg>
                                    }
                                />
                            </div>
                        </div>
                    </aside>

                    {/* Description Section */}
                    <article className="col-span-8">
                        <p>
                            I work with clients to develop custom software solutions that meet their needs.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}

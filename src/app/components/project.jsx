import React from "react";
import Image from "next/image";

const Projects = () => {
    return (
        <div className="mt-[100px] space-y-[50px]">
            {/* Section 1 */}
            <div className="flex justify-center items-center gap-[50px]">
                <div className="flex flex-col items-center group">
                    <Image
                        src="/Images/bentobox.png"
                        alt="Bento Box 1"
                        width={550}
                        height={300}
                        className="transform transition-transform duration-300 group-hover:scale-90"
                    />
                    <div className="font-cinzel text-center text-[36px] mt-[20px] transform transition-transform duration-300 group-hover:scale-90">
                        <h1>Bento Box </h1>
                    </div>
                </div>
                <div className="flex flex-col items-center group">
                    <Image
                        src="/Images/Pic-pop2.png"
                        alt="Bento Box 1"
                        width={550}
                        height={300}
                        className="transform transition-transform duration-300 group-hover:scale-90"
                    />
                    <div className="font-cinzel text-center text-[36px] mt-[20px] transform transition-transform duration-300 group-hover:scale-90">
                        <h1>Pic Pop by Yenling</h1>
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className="flex justify-center items-center gap-[50px]">
                <div className="flex flex-col items-center group">
                    <Image
                        src="/Images/quickqart.png"
                        alt="Bento Box 2"
                        width={550}
                        height={300}
                        className="transform transition-transform duration-300 group-hover:scale-90"
                    />
                    <div className="font-cinzel text-center text-[36px] mt-[20px] transform transition-transform duration-300 group-hover:scale-90">
                        <h1>Quick qart </h1>
                    </div>
                </div>
                <div className="flex flex-col items-center group">
                    <Image
                        src="/Images/Noproblem.png"
                        alt="Bento Box 2"
                        width={550}
                        height={300}
                        className="transform transition-transform duration-300 group-hover:scale-90"
                    />
                    <div className="font-cinzel text-center text-[36px] mt-[20px] transform transition-transform duration-300 group-hover:scale-90">
                        <h1>No problem </h1>
                    </div>
                </div>
            </div>

            {/* Section 3 */}
            <div className="flex justify-center items-center gap-[50px]">
                <div className="flex flex-col items-center group">
                    <Image
                        src="/Images/innocentfox.png"
                        alt="Bento Box 3"
                        width={550}
                        height={300}
                        className="transform transition-transform duration-300 group-hover:scale-90"
                    />
                    <div className="font-cinzel text-center text-[36px] mt-[20px] transform transition-transform duration-300 group-hover:scale-90">
                        <h1>Innocent Fox</h1>
                        <h1>Sponsor</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;

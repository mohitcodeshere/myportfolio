import { FaGithub, FaLinkedin, FaEnvelope, FaCalendarAlt, FaFilePdf } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div>
      {/* Profile Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 px-4 sm:px-6 lg:px-8 w-full mb-10">
        {/* Profile Image */}
        <div className="w-40 h-40 sm:w-56 sm:h-56 mb-6 flex items-center justify-center">
          <Image
            src="/media/displaypic.jpg"
            alt="Mohit Kumar Profile Photo"
            width={224}
            height={224}
            className="rounded-full shadow-lg object-cover"
            priority
          />
        </div>
        
        {/* Profile Info */}
        <div className="flex-1 w-full">
          <Link href="/" className="text-3xl sm:text-5xl font-extrabold mb-2 text-black text-black-700 transition block break-words">Mohit Kumar</Link>
          <div className="flex flex-wrap items-center gap-2 text-gray-600 mb-2">
            <span className="text-base sm:text-lg">Co-Founder/CTO</span>
            <Link href="https://www.moroesports.com" className="text-base sm:text-lg hover:text-blue-600 font-small" target="_blank" rel="noopener">@MoroEsports</Link>
          </div>
          <p className="text-base sm:text-lg text-gray-700 mb-2">With a strong background in software engineering, esports management, and gaming industry leadership. Built a successful gaming startup from zero to profitability.</p>
          
          <div className="flex flex-wrap items-center gap-2 text-gray-500 mb-4">
            <FaLocationDot className="inline-block" />
            <span>Dharamshala, Himachal Pradesh, India</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">EDI Implementations</span>
            <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">Software Development</span>
            <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">AI</span>
            <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">React</span>
            <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">TypeScript</span>
            <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">Node.js</span>
            <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">Esports</span>
            <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">Gaming Industry</span>
          </div>
          
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-6">
            <Link href="mailto:mohit.k.1618@gmail.com" className="bg-black text-white px-6 py-3 rounded font-bold text-lg shadow hover:bg-blue-800 transition">CONTACT ME</Link>
            <Link href="/media/MohitEDIResume.pdf" className="bg-black text-white px-6 py-3 rounded font-bold text-lg shadow hover:bg-blue-800 transition" target="_blank" rel="noopener noreferrer">VIEW RESUME</Link>
          </div>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
            <Link href="https://github.com/mohitcodeshere/" className="text-gray-700 hover:text-black transition" title="GitHub" target="_blank" rel="noopener">
              <FaGithub size={32} />
            </Link>
            <Link href="https://www.linkedin.com/in/mohit-kmr/" className="text-gray-700 hover:text-blue-700 transition" title="LinkedIn" target="_blank" rel="noopener">
              <FaLinkedin size={32} />
            </Link>
            <Link href="mailto:mohit.k.1618@gmail.com" className="text-gray-700 hover:text-red-600 transition" title="Email">
              <FaEnvelope size={32} />
            </Link>
            <Link href="https://calendly.com/mohit-kumar" className="text-gray-700 hover:text-green-600 transition" title="Schedule a meeting" target="_blank" rel="noopener">
              <FaCalendarAlt size={32} />
            </Link>
            <Link href="/media/MohitEDIResume.pdf" className="text-gray-700 hover:text-[#FF371A] transition" title="View Resume" target="_blank" rel="noopener">
              <FaFilePdf size={32} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Me Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">My Journey</h3>
            <p className="text-gray-700 mb-4">
              I&apos;m a software engineer and entrepreneur with a passion for creating technology that makes a meaningful impact.
              My career spans over 8 years, during which I&apos;ve developed expertise in EDI implementations, AI applications,
              and building scalable software solutions.
            </p>
            <p className="text-gray-700 mb-4">
              In 2019, I co-founded MoroEsports, a gaming startup that achieved profitability within just 11 months.
              As the CTO, I&apos;ve led our technical strategy and built innovative solutions that have helped us stand out
              in a competitive market.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Gaming & Esports</h3>
            <p className="text-gray-700 mb-4">
              As the co-founder of MoroEsports, I&apos;ve been deeply involved in the gaming industry since 2019. We&apos;ve built a thriving
              community of gamers, launched competitive teams across multiple titles, and created custom tech solutions for esports tournaments.
            </p>
            <p className="text-gray-700 mb-4">
              Our accomplishments include:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
              <li>Built an esports organization from scratch and achieved profitability in under 12 months</li>
              <li>Developed tournament management systems that streamlined competitive play</li>
              <li>Created custom analytics tools to improve player performance</li>
              <li>Established partnerships with major gaming brands and sponsors</li>
              <li>Organized regional tournaments with 1000+ participants</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-gray-700">
              B.Tech in Computer Science - Himachal Pradesh Technical University
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">JavaScript</span>
              <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">TypeScript</span>
              <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">React</span>
              <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">Node.js</span>
              <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">Next.js</span>
              <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">EDI</span>
              <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">AI/ML</span>
              <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">Python</span>
              <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">MongoDB</span>
              <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">SQL</span>
              <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">AWS</span>
              <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">Game Analytics</span>
              <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">Tournament Systems</span>
              <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">Esports Management</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Interests</h3>
            <p className="text-gray-700">
              When I&apos;m not coding, you can find me exploring new technologies, hiking in the beautiful mountains of Himachal Pradesh,
              or strategizing the next big move for MoroEsports.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

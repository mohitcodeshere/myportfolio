import { FaGithub, FaLinkedin, FaEnvelope, FaCalendarAlt, FaFilePdf } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
  <section className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 px-4 sm:px-6 lg:px-8 w-full">
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
          <Link href="/media/MohitResume_Gaming.pdf" className="bg-black text-white px-6 py-3 rounded font-bold text-lg shadow hover:bg-purple-800 transition" target="_blank" rel="noopener noreferrer">VIEW RESUME</Link>
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
          <Link href="/media/MohitResume_Gaming.pdf" className="text-gray-700 hover:text-[#FF371A] transition" title="View Resume" target="_blank" rel="noopener">
            <FaFilePdf size={32} />
          </Link>
        </div>
  <p className="text-lg sm:text-xl mt-8 mb-2">Hi there! I&apos;m Mohit, CTO @MoroEsports</p>
  <p className="text-base sm:text-lg text-gray-700 mb-4">I am a Software Engineer and Esports Entrepreneur with over 8 years of experience. I combine my technical expertise in AI, machine learning, and scalable applications with my passion for gaming to build innovative solutions for the esports industry.</p>
  <div className="mb-4 w-full">
          <span className="font-bold text-base sm:text-lg">🎮 MoroEsports Success Story</span>
          <p className="text-gray-700 text-sm sm:text-base">I built MoroEsports from the ground up and made it profitable in just 11 months. We&apos;ve organized tournaments with 1000+ participants, developed custom gaming analytics platforms, and built a thriving community of competitive gamers. <a href="https://media.licdn.com/dms/image/v2/C4E22AQGOT9hYp_KDOQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1622310291141?e=1758153600&v=beta&t=xkCaKpU0bqQMYk5uQ98QSydvN4O5CmOjXTEqGdrcXR0" className="text-blue-600 underline">Read our startup story</a></p>
          <div className="flex justify-center items-center w-full mt-6">
            <span className="text-gray-700 text-xs sm:text-base">Made with ❤️ in Next JS, React, TypeScript, Tailwind, and Node.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}

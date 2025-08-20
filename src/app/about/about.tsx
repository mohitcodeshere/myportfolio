import { FC } from 'react';

interface AboutProps {
  // You can add any props you might need
}

const About: FC<AboutProps> = () => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">My Journey</h3>
        <p className="text-gray-700 mb-4">
          I'm a software engineer and entrepreneur with a passion for creating technology that makes a meaningful impact.
          My career spans over 8 years, during which I've developed expertise in EDI implementations, AI applications,
          and building scalable software solutions.
        </p>
        <p className="text-gray-700 mb-4">
          In 2019, I co-founded MoroEsports, a gaming startup that achieved profitability within just 11 months.
          As the CTO, I've led our technical strategy and built innovative solutions that have helped us stand out
          in a competitive market.
        </p>
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
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-2">Interests</h3>
        <p className="text-gray-700">
          When I'm not coding, you can find me exploring new technologies, hiking in the beautiful mountains of Himachal Pradesh,
          or strategizing the next big move for MoroEsports.
        </p>
      </div>
    </div>
  );
};

export default About;

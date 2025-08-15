export default function Projects() {
  return (
    <section>
   {/* <a href="/" className="text-4xl font-bold mb-6 hover:text-blue-700 transition">portfolio</a> */}
      <h1 className="text-4xl font-bold mb-6">PROJECTS</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Project Card 1 */}
        <div className="bg-white rounded-lg shadow p-6 flex-1 flex flex-col">
          <div className="h-32 bg-gray-100 rounded mb-4 flex items-center justify-center text-3xl font-bold">🍋</div>
          <h2 className="text-xl font-semibold mb-2">Loose Lemon - $0 Cost E-commerce Platform</h2>
          <p className="text-gray-600 mb-2">Jun 2024</p>
          <p className="text-gray-700 mb-4">A zero-cost, enterprise-grade e-commerce platform built over a weekend using latest AI tech. Created to eliminate financial barriers for small businesses wanting to sell online.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">E-commerce</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">Zero Cost Solution</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">AI-Assisted Development</span>
          </div>
          <div className="flex gap-2 mt-auto">
            <a href="#" className="bg-black text-white px-3 py-1 rounded text-sm">Demo</a>
            <a href="#" className="border border-black px-3 py-1 rounded text-sm">Source Code</a>
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="bg-white rounded-lg shadow p-6 flex-1 flex flex-col">
          <div className="h-32 bg-gray-100 rounded mb-4 flex items-center justify-center text-3xl font-bold">🅿️</div>
          <h2 className="text-xl font-semibold mb-2">Plural - The world's first p2p hiring marketplace</h2>
          <p className="text-gray-600 mb-2">Mar 2020</p>
          <p className="text-gray-700 mb-4">Plural is a pioneering peer-to-peer job marketplace that connects job seekers with opportunities, focusing on environmental-friendly projects and keeping users informed about news, publications, and events.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">Software Engineering</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">Backend</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">Web</span>
          </div>
          <div className="flex gap-2 mt-auto">
            <a href="#" className="bg-black text-white px-3 py-1 rounded text-sm">Demo</a>
            <a href="#" className="border border-black px-3 py-1 rounded text-sm">Source Code</a>
          </div>
        </div>
        {/* Project Card 3 */}
        <div className="bg-white rounded-lg shadow p-6 flex-1 flex flex-col">
          <div className="h-32 bg-gray-100 rounded mb-4 flex items-center justify-center text-3xl font-bold">🍎</div>
          <h2 className="text-xl font-semibold mb-2">Apple signin for Node.js.</h2>
          <p className="text-gray-600 mb-2">Feb 2020</p>
          <p className="text-gray-700 mb-4">A Node.js library for implementing Sign in with Apple, providing authentication and authorization functionalities. It has become the community standard for Apple authentication in Node.js applications.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">Open Source</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">Software Engineering</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">Backend</span>
          </div>
          <div className="flex gap-2 mt-auto">
            <a href="#" className="border border-black px-3 py-1 rounded text-sm">Source Code</a>
          </div>
        </div>
      </div>
    </section>
  );
}

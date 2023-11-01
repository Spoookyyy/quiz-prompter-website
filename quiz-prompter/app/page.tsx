import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
<main className="min-h-screen flex flex-col justify-between bg-black p-24">

{/* Main Content */}
<div className="flex flex-col items-center justify-center flex-grow animate-fadeInAnimation">

  <h1 
    className="text-5xl md:text-7xl font-bold text-white mb-4 font-segoe"
  >
    Quiz Prompter
  </h1>

  <p 
    className="text-xl md:text-2xl text-white font-light font-segoe mb-8"
  >
    Created by <Link href='https://github.com/Spoookyyy'>Spooky</Link>
  </p>

  {/* Navigation */}
  <nav className="mb-8">
    <ul className="flex justify-center space-x-8">
      <li><Link href="https://github.com/Spoookyyy/QuestionPrompter" className='text-white text-lg transform hover:scale-105 transition-transform duration-300 hover:text-gray-500 transition animate-fadeInAnimation"'>Source</Link></li>
      <li><Link href="/start" className='text-white text-lg transform hover:scale-105 transition-transform duration-300 hover:text-gray-500 transition animate-fadeInAnimation"'>Get Started</Link></li>
      <li><Link href="/contact" className='text-white text-lg transform hover:scale-105 transition-transform duration-300 hover:text-gray-500 transition animate-fadeInAnimation"'>Contact</Link></li>

    </ul>
  </nav>

  {/* Optional: Brief Introduction or Catchy Phrase */}
  <p className="text-white text-center mb-8">
    {/* Content here */}
  </p>

</div>

{/* Footer */}
<footer className="mt-8">
  {/* Content here */}
</footer>

</main>
)
  
}

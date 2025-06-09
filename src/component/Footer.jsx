'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'

const footerLinks = {
  company: [
    { name: 'About us', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' }
  ],
  services: [
    { name: 'Branding', href: '/services/branding' },
    { name: 'Web development', href: '/services/web-development' },
    { name: 'Digital marketing', href: '/services/digital-marketing' },
    // { name: 'Mobile app', href: '/services/mobile-app' },
    // { name: 'SEO', href: '/services/seo' },
    // { name: 'User testing', href: '/services/user-testing' }
  ],
  resources: [
    // { name: 'Blog', href: '/blog' },
    // { name: 'Case study', href: '/case-study' },
    // { name: 'Testimonials', href: '/testimonials' }
    { name: 'SEO', href: '/services/seo' },
       { name: 'Mobile app', href: '/services/mobile-app' },
    { name: 'CRO', href: '/services/cro' }
  ],
  social: [
    { name: 'Instagram', href: 'https://www.instagram.com/musttechsolutions/' },
    { name: 'Facebook', href: 'https://www.facebook.com/musttechsolution' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/musttechsolutions/posts/?feedView=all' }
  ]
}

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <footer className="bg-black px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-6">
          {/* Company Links */}
          <div className="lg:col-span-1">
            <h3 className="mb-6 text-base font-bold text-white">Company</h3>
            <ul className="space-y-6">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-medium text-white/100 transition-colors hover:text-customred"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-1">
            <h3 className="mb-6 text-base font-bold text-white">Services</h3>
            <ul className="space-y-6">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-medium text-white/100 transition-colors hover:text-customred"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-1">
            <h3 className="mb-6 text-base font-bold text-white">Services</h3>
            <ul className="space-y-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-medium text-white/100 transition-colors hover:text-customred"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-1">
            <h3 className="mb-6 text-base font-bold text-white">Follow us</h3>
            <ul className="space-y-6">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-medium text-white/100 transition-colors hover:text-customred"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter and Logo */}
          <div className="lg:col-span-2">
            <Link to="/" className="mb-6 flex items-center text-2xl font-bold">
              {/* <span className="text-white">Must</span>
              <span className="text-red-500">Tech</span> */}
              
              <img
                src="/images/logo.svg" // Path to your image in the "public" folder
                alt="Company Logo"      // Alt text for accessibility
                width={235}              // Set desired width
                height={52}             // Set desired height
              />


            </Link>
            <p className="mb-6 text-sm text-white/100">Get latest updates</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className=" w-full  md:w-3/4 rounded-full text-xs border  bg-black p-3 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-red-500  focus:border-red-500  "
              />
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}


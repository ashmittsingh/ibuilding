'use client'

import { Shield, Lock, Eye, Database, UserCheck, AlertCircle, Mail, Calendar, FileText } from 'lucide-react'
import { useState } from 'react'

export default function PrivacyPolicyPage() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null)

  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      description: 'Understanding what data we gather and why',
      content: [
        {
          subtitle: 'Personal Information',
          items: [
            'Name, email address, and phone number when you contact us',
            'Company name and job title for business inquiries',
            'Project details and specifications you provide',
            'Communication preferences and correspondence history'
          ]
        },
        {
          subtitle: 'Technical Information',
          items: [
            'IP address and geographic location',
            'Browser type, device information, and operating system',
            'Pages visited and time spent on our website',
            'Referral source and navigation patterns'
          ]
        },
        {
          subtitle: 'Cookies and Tracking',
          items: [
            'Essential cookies for website functionality',
            'Analytics cookies to improve user experience',
            'Preference cookies to remember your settings',
            'Marketing cookies (with your consent)'
          ]
        }
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      description: 'The purposes behind our data collection',
      content: [
        {
          subtitle: 'Service Delivery',
          items: [
            'To provide structural design and engineering services',
            'To respond to your inquiries and consultation requests',
            'To manage and execute projects effectively',
            'To communicate project updates and deliverables'
          ]
        },
        {
          subtitle: 'Business Operations',
          items: [
            'To improve our website and service offerings',
            'To analyze usage patterns and optimize user experience',
            'To send relevant industry updates and newsletters (with consent)',
            'To maintain records for accounting and legal purposes'
          ]
        },
        {
          subtitle: 'Legal Compliance',
          items: [
            'To comply with applicable laws and regulations',
            'To respond to legal requests and prevent fraud',
            'To enforce our terms of service and protect rights',
            'To maintain professional engineering standards'
          ]
        }
      ]
    },
    {
      icon: Lock,
      title: 'Data Security & Protection',
      description: 'How we safeguard your information',
      content: [
        {
          subtitle: 'Security Measures',
          items: [
            'SSL/TLS encryption for all data transmission',
            'Secure servers with regular security audits and updates',
            'Access controls limiting data to authorized personnel only',
            'Regular backups and disaster recovery procedures'
          ]
        },
        {
          subtitle: 'Data Storage',
          items: [
            'Data stored on secure cloud infrastructure',
            'Regular security assessments and penetration testing',
            'Compliance with industry-standard security protocols',
            'Encrypted databases for sensitive information'
          ]
        },
        {
          subtitle: 'Breach Response',
          items: [
            'Immediate investigation and containment procedures',
            'Notification to affected parties as required by law',
            'Cooperation with authorities and regulatory bodies',
            'Remediation measures to prevent future incidents'
          ]
        }
      ]
    },
    {
      icon: UserCheck,
      title: 'Your Rights & Choices',
      description: 'Control over your personal data',
      content: [
        {
          subtitle: 'Access & Control',
          items: [
            'Right to access your personal information we hold',
            'Right to request correction of inaccurate data',
            'Right to request deletion of your data (subject to legal requirements)',
            'Right to object to certain data processing activities'
          ]
        },
        {
          subtitle: 'Communication Preferences',
          items: [
            'Opt-out of marketing communications at any time',
            'Unsubscribe from newsletters via email links',
            'Manage cookie preferences through browser settings',
            'Request to stop receiving service updates (except essential communications)'
          ]
        },
        {
          subtitle: 'Data Portability',
          items: [
            'Request a copy of your data in machine-readable format',
            'Transfer your data to another service provider',
            'Receive data export within 30 days of request',
            'Data provided in commonly used formats (CSV, PDF, etc.)'
          ]
        }
      ]
    },
    {
      icon: Shield,
      title: 'Data Sharing & Disclosure',
      description: 'When and how we share information',
      content: [
        {
          subtitle: 'Third-Party Service Providers',
          items: [
            'Cloud hosting and infrastructure providers',
            'Email and communication platforms',
            'Analytics and website optimization tools',
            'All providers bound by strict confidentiality agreements'
          ]
        },
        {
          subtitle: 'Business Partners',
          items: [
            'Contractors and consultants working on your projects (with consent)',
            'Professional engineering associations and regulatory bodies',
            'Insurance providers for project-related coverage',
            'Legal and financial advisors as necessary'
          ]
        },
        {
          subtitle: 'Legal Requirements',
          items: [
            'When required by law or legal process',
            'To comply with government or regulatory requests',
            'To protect our rights, property, or safety',
            'In connection with business transfers or acquisitions'
          ]
        },
        {
          subtitle: 'Important Note',
          items: [
            'We do NOT sell your personal information to third parties',
            'We do NOT share data for third-party marketing purposes',
            'All sharing is limited to necessary business purposes',
            'You can request details about data sharing practices'
          ]
        }
      ]
    },
    {
      icon: AlertCircle,
      title: 'Cookies & Tracking Technologies',
      description: 'Understanding our use of cookies',
      content: [
        {
          subtitle: 'Types of Cookies',
          items: [
            'Essential: Required for basic website functionality',
            'Performance: Help us analyze and improve website performance',
            'Functional: Remember your preferences and settings',
            'Marketing: Track effectiveness of campaigns (with consent)'
          ]
        },
        {
          subtitle: 'Third-Party Cookies',
          items: [
            'Google Analytics for website traffic analysis',
            'Social media plugins for content sharing',
            'Marketing platforms for campaign tracking',
            'You can opt-out through cookie consent banner'
          ]
        },
        {
          subtitle: 'Managing Cookies',
          items: [
            'Update preferences via our cookie consent banner',
            'Configure browser settings to block or delete cookies',
            'Use privacy tools and browser extensions',
            'Note: Blocking cookies may limit website functionality'
          ]
        }
      ]
    },
    {
      icon: Calendar,
      title: 'Data Retention',
      description: 'How long we keep your information',
      content: [
        {
          subtitle: 'Retention Periods',
          items: [
            'Project data: Retained for 7 years after project completion (legal requirement)',
            'Communication records: Retained for 3 years after last contact',
            'Website analytics: Retained for 26 months (Google Analytics default)',
            'Marketing data: Retained until you opt-out or request deletion'
          ]
        },
        {
          subtitle: 'Deletion Policy',
          items: [
            'Data securely deleted after retention period expires',
            'Immediate deletion upon valid request (subject to legal obligations)',
            'Anonymization of data when possible instead of deletion',
            'Archived backups deleted within 90 days of retention expiration'
          ]
        }
      ]
    },
    {
      icon: FileText,
      title: 'International Data Transfers',
      description: 'Cross-border data processing',
      content: [
        {
          subtitle: 'Our Approach',
          items: [
            'Data primarily processed and stored in India',
            'May use international cloud services for infrastructure',
            'All transfers comply with applicable data protection laws',
            'Appropriate safeguards in place for international transfers'
          ]
        }
      ]
    }
  ]

  const contactInfo = {
    title: 'Questions About Privacy?',
    description: 'We\'re here to help you understand how we protect your data',
    items: [
      'Submit a data access or deletion request',
      'Ask questions about our privacy practices',
      'Report a privacy concern or complaint',
      'Update your communication preferences'
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F7FA]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A3E6F] via-[#1F86C8] to-[#1A3E6F]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1F86C8] via-[#BFC5CC] to-[#1A3E6F]"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-6 border border-white/20">
              <Shield className="w-4 h-4 mr-2" />
              YOUR PRIVACY MATTERS
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Privacy <span className="text-[#BFC5CC]">Policy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-100 mb-6 leading-relaxed">
              We are committed to protecting your personal information and being transparent about how we collect, use, and safeguard your data.
            </p>

            <div className="inline-flex items-center gap-2 text-sm text-[#BFC5CC]">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: January 5, 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 border border-[#BFC5CC] shadow-lg">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website or use our structural engineering services. By accessing our website or engaging our services, you agree to the terms outlined in this policy.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              We take your privacy seriously and are committed to maintaining the highest standards of data protection in accordance with applicable laws and regulations.
            </p>
          </div>

          {/* Privacy Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon
              const isExpanded = expandedSection === index
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl md:rounded-2xl border border-[#BFC5CC] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Section Header */}
                  <button
                    onClick={() => setExpandedSection(isExpanded ? null : index)}
                    className="w-full p-6 md:p-8 flex items-start gap-4 text-left hover:bg-[#F5F7FA] transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#1F86C8] to-[#1A3E6F] flex items-center justify-center">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-bold text-[#1A3E6F] mb-2">
                        {section.title}
                      </h2>
                      <p className="text-sm md:text-base text-gray-600">
                        {section.description}
                      </p>
                    </div>

                    <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#1F86C8] flex items-center justify-center transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4 text-[#1F86C8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Section Content */}
                  {isExpanded && (
                    <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-[#BFC5CC]">
                      <div className="pt-6 space-y-6">
                        {section.content.map((subsection, subIndex) => (
                          <div key={subIndex}>
                            <h3 className="text-lg md:text-xl font-bold text-[#1A3E6F] mb-4">
                              {subsection.subtitle}
                            </h3>
                            <ul className="space-y-3">
                              {subsection.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-3">
                                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] mt-2"></div>
                                  <span className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Children's Privacy */}
          <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-6 md:p-8 mt-8 border border-[#BFC5CC] shadow-lg">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-[#1F86C8] flex-shrink-0" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1A3E6F] mb-3">
                  Children's Privacy
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mb-3">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately, and we will take steps to delete such information.
                </p>
              </div>
            </div>
          </div>

          {/* Changes to Privacy Policy */}
          <div className="bg-white rounded-2xl p-6 md:p-8 mt-8 border border-[#BFC5CC] shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-[#1A3E6F] mb-4">
              Changes to This Privacy Policy
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
            </p>
            <ul className="space-y-3 mb-4">
              {[
                'Posting the updated policy on our website with a new "Last Updated" date',
                'Sending an email notification to registered users',
                'Displaying a prominent notice on our website',
                'Requesting your consent if required by law'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] mt-2"></div>
                  <span className="text-sm md:text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base text-gray-700 leading-relaxed">
              Your continued use of our services after changes are posted constitutes acceptance of the updated Privacy Policy.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] rounded-2xl p-8 md:p-12 mt-8 text-center">
            <Mail className="w-12 h-12 md:w-16 md:h-16 text-white mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {contactInfo.title}
            </h2>
            <p className="text-base md:text-lg text-[#BFC5CC] mb-6 max-w-2xl mx-auto">
              {contactInfo.description}
            </p>
            
            <div className="bg-white/10 rounded-xl p-6 mb-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {contactInfo.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#BFC5CC]"></div>
                    <span className="text-sm text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="inline-flex items-center gap-2 px-8 md:px-12 py-3 md:py-4 bg-white text-[#1F86C8] font-bold rounded-xl hover:bg-[#F5F7FA] transition-all transform hover:scale-105 shadow-lg">
              <Mail className="w-5 h-5" />
              Contact Privacy Team
            </button>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8 text-sm text-gray-600">
            <p>
              This privacy policy is provided for informational purposes and does not constitute legal advice. 
              For specific concerns about your data, please contact our privacy team.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
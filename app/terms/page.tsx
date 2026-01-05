'use client'

import { Scale, FileText, CheckCircle, AlertCircle, Shield, Users, DollarSign, Clock, XCircle, Gavel, Award, ScrollText } from 'lucide-react'
import { useState } from 'react'

export default function TermsOfServicePage() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null)

  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      description: 'Agreement to use our services',
      content: [
        {
          subtitle: 'Binding Agreement',
          items: [
            'By accessing or using our website and services, you agree to be bound by these Terms of Service',
            'These terms constitute a legally binding agreement between you and our company',
            'If you do not agree to these terms, you must not access or use our services',
            'Your continued use of our services constitutes acceptance of any modifications to these terms'
          ]
        },
        {
          subtitle: 'Eligibility',
          items: [
            'You must be at least 18 years old to use our services',
            'You must have the legal capacity to enter into binding contracts',
            'You represent that all information provided is accurate and complete',
            'Organizations must be duly authorized to engage our services'
          ]
        },
        {
          subtitle: 'Modifications',
          items: [
            'We reserve the right to modify these terms at any time',
            'Changes will be effective upon posting to our website',
            'Material changes will be communicated via email or prominent notice',
            'Continued use after changes indicates acceptance of modified terms'
          ]
        }
      ]
    },
    {
      icon: Award,
      title: 'Services Provided',
      description: 'Scope and nature of our offerings',
      content: [
        {
          subtitle: 'Engineering Services',
          items: [
            'Structural design for residential, commercial, and industrial projects',
            'Structural audit and building safety assessment services',
            'Project management and construction supervision',
            'Heritage conservation and restoration consultation',
            'Technical documentation and compliance certification'
          ]
        },
        {
          subtitle: 'Service Standards',
          items: [
            'All services performed in accordance with applicable IS Codes and regulations',
            'Professional engineering standards and best practices maintained',
            'Services subject to scope of work defined in service agreements',
            'Deliverables provided as specified in project contracts',
            'Quality assurance and professional liability insurance maintained'
          ]
        },
        {
          subtitle: 'Service Limitations',
          items: [
            'Services limited to structural engineering within our expertise',
            'Site-specific conditions may affect deliverables and timelines',
            'Third-party approvals and permits remain client responsibility',
            'Force majeure events may impact service delivery',
            'Services do not include legal, financial, or other non-engineering advice'
          ]
        }
      ]
    },
    {
      icon: Users,
      title: 'Client Obligations',
      description: 'Your responsibilities when engaging our services',
      content: [
        {
          subtitle: 'Information Provision',
          items: [
            'Provide accurate, complete, and timely project information',
            'Share all relevant site conditions, constraints, and requirements',
            'Disclose any known hazards or special circumstances',
            'Update us promptly of any changes affecting the project',
            'Ensure access to project sites and necessary documentation'
          ]
        },
        {
          subtitle: 'Communication & Cooperation',
          items: [
            'Respond to requests for information within agreed timeframes',
            'Attend scheduled meetings and project reviews',
            'Designate authorized representatives for decision-making',
            'Provide timely feedback on designs and deliverables',
            'Maintain professional and respectful communication'
          ]
        },
        {
          subtitle: 'Compliance & Permits',
          items: [
            'Obtain all necessary permits, approvals, and clearances',
            'Ensure compliance with local regulations and building codes',
            'Implement designs and recommendations as specified',
            'Engage qualified contractors for construction work',
            'Maintain appropriate insurance coverage for your project'
          ]
        },
        {
          subtitle: 'Site Safety',
          items: [
            'Maintain safe working conditions at project sites',
            'Provide necessary safety equipment and protocols',
            'Comply with occupational health and safety regulations',
            'Inform us of any site hazards or safety concerns',
            'Ensure contractor compliance with safety standards'
          ]
        }
      ]
    },
    {
      icon: DollarSign,
      title: 'Payment Terms',
      description: 'Financial arrangements and obligations',
      content: [
        {
          subtitle: 'Fees & Charges',
          items: [
            'Service fees as specified in individual project proposals',
            'Payment schedules established in service agreements',
            'Additional charges for scope changes or extra services',
            'Reimbursable expenses (travel, testing, etc.) billed separately',
            'All fees exclusive of applicable taxes unless stated otherwise'
          ]
        },
        {
          subtitle: 'Payment Schedule',
          items: [
            'Advance payment: Typically 30-40% upon agreement execution',
            'Progress payments: Based on milestone completion',
            'Final payment: Upon project completion and deliverable submission',
            'Invoice payment due within 15-30 days of invoice date',
            'Late payments subject to interest charges as per agreement'
          ]
        },
        {
          subtitle: 'Payment Methods',
          items: [
            'Bank transfer, wire transfer, or electronic payment',
            'Checks accepted subject to clearance',
            'Payment details provided in invoices',
            'Payment receipts issued upon request',
            'Currency and exchange rates as specified in agreement'
          ]
        },
        {
          subtitle: 'Non-Payment Consequences',
          items: [
            'Work may be suspended for overdue payments beyond 30 days',
            'Late payment interest charged at 18% per annum',
            'Legal action may be initiated for significant defaults',
            'Client responsible for collection costs and legal fees',
            'Intellectual property rights retained until full payment'
          ]
        }
      ]
    },
    {
      icon: Shield,
      title: 'Intellectual Property Rights',
      description: 'Ownership of designs and deliverables',
      content: [
        {
          subtitle: 'Our Intellectual Property',
          items: [
            'All designs, drawings, and calculations remain our property until full payment',
            'Methodologies, processes, and technical approaches are proprietary',
            'Website content, logos, and branding protected by copyright',
            'Software, tools, and proprietary systems remain our exclusive property',
            'Unauthorized reproduction or distribution is prohibited'
          ]
        },
        {
          subtitle: 'License to Client',
          items: [
            'Upon full payment, client receives non-exclusive license to use deliverables',
            'License limited to the specific project for which services were engaged',
            'Client may not modify designs without our written approval',
            'Reuse of designs for other projects requires separate agreement',
            'License does not include right to sublicense or transfer'
          ]
        },
        {
          subtitle: 'Client Materials',
          items: [
            'Client retains ownership of materials provided to us',
            'We may use client materials solely for providing services',
            'Confidential client information protected per confidentiality terms',
            'Client grants us license to use materials as needed for project',
            'Client responsible for ensuring they have rights to provided materials'
          ]
        },
        {
          subtitle: 'Portfolio & Marketing',
          items: [
            'We reserve right to showcase projects in portfolio (with consent)',
            'Project details may be anonymized or generalized for marketing',
            'Client may request exclusion from public portfolio',
            'Case studies and testimonials require explicit approval',
            'Confidential projects excluded from all public materials'
          ]
        }
      ]
    },
    {
      icon: Scale,
      title: 'Liability & Warranties',
      description: 'Limitations and responsibilities',
      content: [
        {
          subtitle: 'Professional Standards',
          items: [
            'Services performed with reasonable skill and care expected of qualified engineers',
            'Compliance with applicable codes, standards, and regulations',
            'Professional indemnity insurance maintained as per industry standards',
            'No warranty that designs will receive approval from authorities (not in our control)',
            'Recommendations based on information provided and site conditions observed'
          ]
        },
        {
          subtitle: 'Limitation of Liability',
          items: [
            'Liability limited to fees paid for the specific service in question',
            'Not liable for indirect, consequential, or incidental damages',
            'Not liable for client\'s failure to implement recommendations',
            'Not liable for actions of contractors or third parties',
            'Not liable for defects in client-provided information or materials',
            'Claims must be brought within 12 months of service completion'
          ]
        },
        {
          subtitle: 'Disclaimers',
          items: [
            'Services provided "as is" without warranty except as explicitly stated',
            'No guarantee of specific outcomes or regulatory approvals',
            'Not responsible for unforeseen site conditions or hidden defects',
            'Third-party reports and data assumed accurate unless stated otherwise',
            'Website information for general guidance only, not professional advice'
          ]
        },
        {
          subtitle: 'Indemnification',
          items: [
            'Client indemnifies us against claims arising from client\'s use of deliverables',
            'Client indemnifies us for claims from modifications made without approval',
            'Client responsible for third-party claims related to their project',
            'Indemnification excludes claims arising from our negligence or misconduct',
            'Legal costs covered by indemnifying party'
          ]
        }
      ]
    },
    {
      icon: ScrollText,
      title: 'Confidentiality',
      description: 'Protection of sensitive information',
      content: [
        {
          subtitle: 'Confidential Information',
          items: [
            'Project details, technical specifications, and client business information',
            'Proprietary methodologies, calculations, and design approaches',
            'Financial information and commercial terms',
            'Personal data and contact information',
            'Any information marked or designated as confidential'
          ]
        },
        {
          subtitle: 'Our Obligations',
          items: [
            'Maintain confidentiality of all client information',
            'Use information solely for providing contracted services',
            'Implement reasonable security measures to protect data',
            'Limit access to authorized personnel on need-to-know basis',
            'Not disclose to third parties without consent (except as required by law)'
          ]
        },
        {
          subtitle: 'Exceptions',
          items: [
            'Information that is publicly available or becomes public through no fault of ours',
            'Information independently developed without using confidential data',
            'Information disclosed with prior written consent',
            'Information required to be disclosed by law or regulatory authority',
            'Information shared with consultants under confidentiality obligations'
          ]
        },
        {
          subtitle: 'Duration',
          items: [
            'Confidentiality obligations continue for 5 years after project completion',
            'Some categories may have longer protection periods by agreement',
            'Obligations survive termination of service agreement',
            'Return or destruction of confidential materials upon request'
          ]
        }
      ]
    },
    {
      icon: XCircle,
      title: 'Termination',
      description: 'Ending the service relationship',
      content: [
        {
          subtitle: 'Termination by Client',
          items: [
            'Client may terminate with 30 days written notice',
            'Payment due for all work completed up to termination date',
            'Client responsible for reasonable wind-down costs',
            'Deliverables provided for completed phases only',
            'Early termination fee may apply as per agreement'
          ]
        },
        {
          subtitle: 'Termination by Us',
          items: [
            'We may terminate with 30 days notice for convenience',
            'Immediate termination for non-payment beyond 60 days',
            'Immediate termination for breach of material terms',
            'Termination if continuation would violate professional standards',
            'Refund of unused advance payments if we terminate without cause'
          ]
        },
        {
          subtitle: 'Effects of Termination',
          items: [
            'All payment obligations become immediately due',
            'Licenses to use deliverables granted only upon full payment',
            'Return or destruction of client confidential materials',
            'Survival of confidentiality, payment, and IP provisions',
            'No liability for lost profits or consequential damages'
          ]
        }
      ]
    },
    {
      icon: Clock,
      title: 'Project Timelines',
      description: 'Schedule expectations and delays',
      content: [
        {
          subtitle: 'Timeline Commitments',
          items: [
            'Project schedules provided in service agreements',
            'Timelines are estimates based on information available',
            'Dependent on timely client input and approvals',
            'Subject to resource availability and workload',
            'Force majeure events may necessitate extensions'
          ]
        },
        {
          subtitle: 'Delays',
          items: [
            'Client delays (information, decisions, payments) extend timelines accordingly',
            'We will notify client promptly of anticipated delays from our end',
            'Schedule extensions formalized through written amendments',
            'Reasonable extensions granted for unforeseen circumstances',
            'Significant delays may result in fee adjustments'
          ]
        },
        {
          subtitle: 'Acceleration',
          items: [
            'Expedited services available subject to resource availability',
            'Rush fees apply for compressed schedules',
            'Client must request acceleration in writing',
            'We reserve right to decline if quality would be compromised',
            'Acceleration may require additional client resources'
          ]
        }
      ]
    },
    {
      icon: Gavel,
      title: 'Dispute Resolution',
      description: 'Handling disagreements and conflicts',
      content: [
        {
          subtitle: 'Informal Resolution',
          items: [
            'Parties agree to first attempt good-faith negotiations',
            'Issues escalated to senior management before formal proceedings',
            'Mediation encouraged as cost-effective alternative',
            'Documentation of disputes and resolution attempts required',
            '30-day period for informal resolution before formal action'
          ]
        },
        {
          subtitle: 'Arbitration',
          items: [
            'Disputes not resolved informally subject to binding arbitration',
            'Arbitration conducted under rules of recognized arbitration body',
            'Arbitration location: [Your City/Jurisdiction]',
            'Single arbitrator unless parties agree otherwise',
            'Arbitration award final and binding on both parties'
          ]
        },
        {
          subtitle: 'Legal Proceedings',
          items: [
            'Litigation only after exhausting arbitration options',
            'Exclusive jurisdiction: Courts of [Your Jurisdiction]',
            'Prevailing party entitled to recover legal costs',
            'No class action or consolidated proceedings',
            'Injunctive relief available for IP violations'
          ]
        },
        {
          subtitle: 'Governing Law',
          items: [
            'These terms governed by laws of India',
            'Compliance with Indian Contract Act, 1872',
            'Subject to Indian engineering regulations and codes',
            'International projects may have additional jurisdictional provisions',
            'Conflict of laws principles do not apply'
          ]
        }
      ]
    },
    {
      icon: AlertCircle,
      title: 'General Provisions',
      description: 'Additional important terms',
      content: [
        {
          subtitle: 'Entire Agreement',
          items: [
            'These terms, along with service agreements, constitute entire agreement',
            'Supersedes all prior negotiations, discussions, and agreements',
            'Amendments must be in writing and signed by both parties',
            'No oral modifications or waivers are valid',
            'Service agreements take precedence over these general terms if conflicting'
          ]
        },
        {
          subtitle: 'Assignment',
          items: [
            'Client may not assign rights without our written consent',
            'We may assign to affiliates or successors in business',
            'Subcontracting permitted for specific technical services',
            'Assignment does not relieve original party of obligations',
            'Notice required within 30 days of any assignment'
          ]
        },
        {
          subtitle: 'Severability',
          items: [
            'Invalid provisions will be modified to be enforceable',
            'Remaining provisions continue in full force',
            'Parties will negotiate replacement for unenforceable terms',
            'Intent of parties preserved to maximum extent possible'
          ]
        },
        {
          subtitle: 'Notices',
          items: [
            'All notices must be in writing (email acceptable)',
            'Sent to addresses specified in service agreement',
            'Deemed received: email (24 hours), mail (3 business days)',
            'Change of address must be notified promptly',
            'Critical notices should be sent by multiple methods'
          ]
        },
        {
          subtitle: 'Relationship',
          items: [
            'Parties are independent contractors',
            'No partnership, joint venture, or employment created',
            'Neither party has authority to bind the other',
            'No agency relationship established',
            'Each party responsible for own taxes and obligations'
          ]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F7FA]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A3E6F] via-[#1F86C8] to-[#1A3E6F]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1F86C8] via-[#BFC5CC] to-[#1A3E6F]"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-6 border border-white/20">
              <Scale className="w-4 h-4 mr-2" />
              LEGAL TERMS
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Terms of <span className="text-[#BFC5CC]">Service</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-100 mb-6 leading-relaxed">
              Please read these terms carefully before using our services. These terms govern your use of our website and engineering services.
            </p>

            <div className="inline-flex items-center gap-2 text-sm text-[#BFC5CC]">
              <Clock className="w-4 h-4" />
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
              These Terms of Service ("Terms") govern your access to and use of our website, services, and deliverables. By engaging our services or accessing our website, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              These Terms apply to all visitors, users, and clients who access or use our structural engineering services, whether directly or indirectly. Please contact us if you have any questions about these Terms before using our services.
            </p>
          </div>

          {/* Terms Sections */}
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
                                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#1F86C8] flex-shrink-0 mt-0.5" />
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

          {/* Important Notice */}
          <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-6 md:p-8 mt-8 border border-[#BFC5CC] shadow-lg">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-[#1F86C8] flex-shrink-0" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1A3E6F] mb-3">
                  Important Notice
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mb-3">
                  These Terms of Service are provided for general information and do not constitute legal advice. Specific projects may have additional terms outlined in individual service agreements. In case of any conflict between these general terms and a specific service agreement, the service agreement shall prevail.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  We recommend that you consult with your legal counsel if you have questions about how these terms apply to your specific situation. By using our services, you acknowledge that you have had the opportunity to seek independent legal advice.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] rounded-2xl p-8 md:p-12 mt-8 text-center">
            <FileText className="w-12 h-12 md:w-16 md:h-16 text-white mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Questions About Our Terms?
            </h2>
            <p className="text-base md:text-lg text-[#BFC5CC] mb-6 max-w-2xl mx-auto">
              If you have any questions about these Terms of Service or need clarification on any provision, our team is here to help.
            </p>
            
            <div className="bg-white/10 rounded-xl p-6 mb-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {[
                  'Request clarification on specific terms',
                  'Discuss project-specific requirements',
                  'Negotiate custom service agreements',
                  'Report terms of service violations'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#BFC5CC]"></div>
                    <span className="text-sm text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="inline-flex items-center gap-2 px-8 md:px-12 py-3 md:py-4 bg-white text-[#1F86C8] font-bold rounded-xl hover:bg-[#F5F7FA] transition-all transform hover:scale-105 shadow-lg">
              <FileText className="w-5 h-5" />
              Contact Legal Team
            </button>
          </div>

          {/* Acknowledgment */}
          <div className="bg-white rounded-2xl p-6 md:p-8 mt-8 border border-[#BFC5CC] shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-[#1A3E6F] mb-4 text-center">
              Acknowledgment
            </h3>
            <p className="text-base text-gray-700 leading-relaxed text-center">
              By using our services, you acknowledge that you have read these Terms of Service, understand them, and agree to be bound by them. If you do not agree to these terms, you must not use our services.
            </p>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8 text-sm text-gray-600">
            <p>
              These terms are subject to change. Please review them periodically for updates. Your continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
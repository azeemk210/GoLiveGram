import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Upload,
  CheckCircle,
  Code,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  icon: React.ReactNode;
}

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    portfolio: '',
    coverLetter: '',
    resume: null as File | null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobOpenings: JobOpening[] = [
    {
      id: '1',
      title: 'Senior React Native Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $180k',
      icon: <Code className="w-6 h-6" />,
      description: 'We\'re looking for an experienced React Native developer to help build and scale our mobile app that serves millions of creators and viewers worldwide.',
      responsibilities: [
        'Develop and maintain high-quality React Native applications for iOS and Android',
        'Collaborate with designers and backend engineers to implement new features',
        'Optimize app performance and ensure smooth user experience',
        'Write clean, maintainable, and well-tested code',
        'Participate in code reviews and mentor junior developers',
        'Stay up-to-date with latest mobile development trends and technologies'
      ],
      requirements: [
        '5+ years of experience in mobile app development',
        'Strong expertise in React Native, JavaScript/TypeScript',
        'Experience with Redux, MobX, or similar state management',
        'Familiarity with native iOS (Swift) and Android (Kotlin) development',
        'Experience with RESTful APIs and WebSocket connections',
        'Knowledge of mobile app deployment and CI/CD pipelines',
        'Strong problem-solving skills and attention to detail'
      ]
    },
    {
      id: '2',
      title: 'React Native Developer (Internship)',
      department: 'Engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Internship',
      salary: '$25 - $35/hour',
      icon: <Code className="w-6 h-6" />,
      description: 'Join our engineering team as an intern and gain hands-on experience building features for a rapidly growing live streaming platform.',
      responsibilities: [
        'Assist in developing mobile app features under mentorship',
        'Write unit tests and integration tests',
        'Participate in daily standups and sprint planning',
        'Debug and fix issues reported by QA team',
        'Learn best practices in mobile development',
        'Contribute to documentation and code reviews'
      ],
      requirements: [
        'Currently pursuing or recently completed a degree in Computer Science or related field',
        'Knowledge of React Native, JavaScript, or TypeScript',
        'Understanding of mobile app development concepts',
        'Familiarity with Git and version control',
        'Strong willingness to learn and take feedback',
        'Good communication skills',
        'Available for 3-6 months internship'
      ]
    },
    {
      id: '3',
      title: 'Social Media Manager',
      department: 'Marketing',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      salary: '$70k - $95k',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'We\'re seeking a creative and data-driven Social Media Manager to grow our brand presence across all social platforms and engage with our creator community.',
      responsibilities: [
        'Develop and execute social media strategy across all platforms',
        'Create engaging content that resonates with our creator community',
        'Manage daily social media activities and community engagement',
        'Collaborate with creators to showcase success stories',
        'Analyze metrics and optimize content performance',
        'Stay on top of social media trends and platform updates',
        'Plan and execute social media campaigns and contests'
      ],
      requirements: [
        '3+ years of experience in social media management',
        'Proven track record of growing social media presence',
        'Strong content creation skills (copywriting, basic design)',
        'Experience with social media management tools (Hootsuite, Buffer, etc.)',
        'Knowledge of analytics and performance metrics',
        'Creative mindset with attention to detail',
        'Experience in creator economy or streaming platforms is a plus'
      ]
    },
    {
      id: '4',
      title: 'Social Media Content Intern',
      department: 'Marketing',
      location: 'Remote',
      type: 'Internship',
      salary: '$20 - $25/hour',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Learn the ropes of social media marketing while helping us create engaging content for our growing creator community.',
      responsibilities: [
        'Assist in creating social media content (posts, stories, reels)',
        'Schedule and publish content across platforms',
        'Engage with community comments and messages',
        'Research trending topics and viral content',
        'Help track and report on social media metrics',
        'Support social media campaigns and initiatives'
      ],
      requirements: [
        'Currently pursuing a degree in Marketing, Communications, or related field',
        'Active presence on major social media platforms',
        'Basic understanding of content creation and editing',
        'Familiarity with Canva, Adobe Creative Suite, or similar tools',
        'Creative mindset and passion for social media',
        'Excellent written communication skills',
        'Available for 3-6 months internship'
      ]
    },
    {
      id: '5',
      title: 'Community Manager',
      department: 'Community',
      location: 'Remote',
      type: 'Full-time',
      salary: '$65k - $85k',
      icon: <Users className="w-6 h-6" />,
      description: 'Build and nurture our creator community, ensuring they have the support and resources needed to succeed on GoLiveGram.',
      responsibilities: [
        'Manage and grow the GoLiveGram creator community',
        'Respond to creator inquiries and provide support',
        'Organize community events, webinars, and workshops',
        'Gather feedback and communicate with product team',
        'Create resources and guides for creators',
        'Identify and engage with top creators',
        'Monitor community health and sentiment'
      ],
      requirements: [
        '2+ years of community management experience',
        'Excellent communication and interpersonal skills',
        'Experience with community platforms (Discord, Slack, etc.)',
        'Passion for helping creators succeed',
        'Strong organizational and multitasking abilities',
        'Experience in streaming or creator economy is a plus',
        'Empathetic and patient approach to problem-solving'
      ]
    },
    {
      id: '6',
      title: 'Senior Frontend Developer (React)',
      department: 'Engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      salary: '$130k - $190k',
      icon: <Code className="w-6 h-6" />,
      description: 'Lead frontend development efforts for our web platform serving millions of creators worldwide. Build high-performance, responsive web applications using modern React technologies.',
      responsibilities: [
        'Design and implement scalable frontend architecture using React and TypeScript',
        'Develop responsive, accessible web interfaces',
        'Optimize web application performance and bundle size',
        'Mentor junior engineers and conduct code reviews',
        'Collaborate with designers and product team on feature implementation',
        'Implement state management solutions using Context API or Redux',
        'Lead frontend performance optimization initiatives'
      ],
      requirements: [
        '6+ years of professional frontend development experience',
        'Expert-level proficiency in React, TypeScript, and modern JavaScript',
        'Strong knowledge of HTML5, CSS3, and responsive design',
        'Experience with state management tools (Redux, Zustand, etc.)',
        'Knowledge of web performance optimization techniques',
        'Familiarity with testing frameworks (Jest, React Testing Library)',
        'Experience with Git and agile development practices'
      ]
    },
    {
      id: '7',
      title: 'Full Stack Developer (Node.js + React)',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$110k - $160k',
      icon: <Code className="w-6 h-6" />,
      description: 'Build end-to-end features for our web application. Work on both frontend (React) and backend (Node.js) to create seamless user experiences for our creator community.',
      responsibilities: [
        'Develop full-stack features using Node.js and React',
        'Design and implement RESTful APIs and GraphQL endpoints',
        'Optimize database queries and improve system performance',
        'Implement authentication and security best practices',
        'Collaborate with team members on system architecture',
        'Write clean, testable code with comprehensive documentation',
        'Deploy and monitor applications in production'
      ],
      requirements: [
        '4+ years of full-stack development experience',
        'Strong proficiency in Node.js and Express.js',
        'Solid React and TypeScript skills',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of RESTful API design and GraphQL',
        'Familiarity with Docker and deployment tools',
        'Understanding of microservices architecture is a plus'
      ]
    },
    {
      id: '8',
      title: 'Mobile App Developer (Flutter/Swift)',
      department: 'Engineering',
      location: 'Remote / Bangalore, India',
      type: 'Full-time',
      salary: '$80k - $130k',
      icon: <Code className="w-6 h-6" />,
      description: 'Develop cross-platform mobile applications for iOS and Android using Flutter. Help creators reach their audiences across all devices.',
      responsibilities: [
        'Build cross-platform mobile apps using Flutter',
        'Develop iOS-specific features using Swift when needed',
        'Implement real-time features for live streaming',
        'Optimize app performance and reduce load times',
        'Collaborate with product and design teams',
        'Conduct code reviews and maintain code quality',
        'Test and debug mobile applications across devices'
      ],
      requirements: [
        '4+ years of mobile application development',
        'Strong experience with Flutter and Dart',
        'Knowledge of Swift, Kotlin, or native mobile development',
        'Experience with Firebase and cloud services',
        'Understanding of mobile UI/UX principles',
        'Experience with version control (Git)',
        'Familiarity with app store deployment process'
      ]
    },
    {
      id: '9',
      title: 'Web Application Developer (Next.js)',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100k - $150k',
      icon: <Code className="w-6 h-6" />,
      description: 'Build scalable web applications using Next.js for our rapidly growing platform. Focus on performance, SEO, and user experience.',
      responsibilities: [
        'Develop server-side rendering applications with Next.js',
        'Implement SSR, SSG, and ISR strategies',
        'Build responsive UI components with React',
        'Optimize web vitals and SEO performance',
        'Integrate with backend APIs and databases',
        'Implement authentication and authorization',
        'Deploy applications to production environments'
      ],
      requirements: [
        '3+ years of web application development',
        'Strong expertise in Next.js and React',
        'Proficiency in TypeScript and modern JavaScript',
        'Experience with Tailwind CSS or styled-components',
        'Knowledge of SEO best practices and web performance',
        'Experience with API integration and database management',
        'Familiarity with Vercel deployment platform is a plus'
      ]
    },
    {
      id: '10',
      title: 'Junior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$50k - $75k',
      icon: <Code className="w-6 h-6" />,
      description: 'Start your career with us as a Junior Frontend Developer. Work on real projects, grow your skills, and contribute to features used by millions of creators.',
      responsibilities: [
        'Build React components based on design specifications',
        'Implement responsive user interfaces',
        'Collaborate with senior developers and designers',
        'Fix bugs and improve application functionality',
        'Write unit tests for components',
        'Learn and adopt best practices in frontend development',
        'Participate in code reviews and team discussions'
      ],
      requirements: [
        'Strong understanding of HTML5, CSS3, and JavaScript',
        'Solid knowledge of React basics and hooks',
        'Familiarity with responsive design principles',
        'Basic understanding of TypeScript',
        'Experience with Git and version control',
        'Passion for learning and self-improvement',
        'Bachelor\'s degree in Computer Science or equivalent experience'
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit the form data to your backend
    console.log('Application submitted:', { ...formData, jobId: selectedJob?.id });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedJob(null);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        linkedIn: '',
        portfolio: '',
        coverLetter: '',
        resume: null,
      });
    }, 3000);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 via-white to-white py-16 md:py-24">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Join the GoLiveGram Team <span className="text-red-600">🚀</span></h1>
            <p className="text-lg md:text-xl mb-4 text-gray-700">
              Help us empower millions of creators worldwide
            </p>
            <p className="text-base text-gray-600">
              We're building the future of live streaming and creator monetization.
              Join our passionate team and make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
          <h2 className="text-fluid-h2 font-bold text-center mb-12">Why Join GoLiveGram?</h2>
          
          {/* Later h2 */}
          {/* skip to preserve unique context */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-white border border-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast-Growing</h3>
              <p className="text-black">Join a rocket ship with millions of users</p>
            </div>
            <div className="text-center">
              <div className="bg-white border border-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Amazing Team</h3>
              <p className="text-black">Work with talented, passionate people</p>
            </div>
            <div className="text-center">
              <div className="bg-white border border-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Remote-First</h3>
              <p className="text-black">Work from anywhere in the world</p>
            </div>
            <div className="text-center">
              <div className="bg-white border border-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Great Benefits</h3>
              <p className="text-black">Competitive salary, equity, and perks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
          <h2 className="text-fluid-h2 font-bold text-center mb-12">Open Positions</h2>

          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-black text-white border border-white p-3 rounded-lg">
                      {job.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">{job.title}</h3>
                      <p className="text-black opacity-70">{job.department}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-black opacity-70 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-black opacity-70 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {job.type}
                  </div>
                </div>

                <p className="text-black opacity-90 mb-4 line-clamp-2">{job.description}</p>

                <button
                  className="w-full bg-black text-white border border-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedJob(job);
                  }}
                >
                  View Details & Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedJob(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Job Details */}
            <div className="p-6 md:p-8 border-b">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">{selectedJob.title}</h2>
                  <div className="flex flex-wrap gap-4 text-black opacity-70">
                    <span className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {selectedJob.department}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {selectedJob.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {selectedJob.type}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-black opacity-50 hover:text-black text-2xl transition-all duration-300"
                >
                  ×
                </button>
              </div>

              <p className="text-black opacity-90 mb-6">{selectedJob.description}</p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Responsibilities</h3>
                <ul className="list-disc pl-5 space-y-2 text-black opacity-90">
                  {selectedJob.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Requirements</h3>
                <ul className="list-disc pl-5 space-y-2 text-black opacity-90">
                  {selectedJob.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Application Form */}
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Apply for this Position</h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: '#ee3a3a' }} />
                    <h4 className="text-2xl font-bold text-black mb-2">Application Submitted! 🎉</h4>
                    <p className="text-black opacity-70">Thank you for your interest. We'll review your application and get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 transition-all duration-300" style={{ outlineColor: '#ee3a3a' }}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 transition-all duration-300" style={{ outlineColor: '#ee3a3a' }}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 transition-all duration-300" style={{ outlineColor: '#ee3a3a' }}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        LinkedIn URL
                      </label>
                      <input
                        type="url"
                        name="linkedIn"
                        value={formData.linkedIn}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 transition-all duration-300" style={{ outlineColor: '#ee3a3a' }}
                        placeholder="https://linkedin.com/in/johndoe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Portfolio / GitHub (Optional)
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 transition-all duration-300" style={{ outlineColor: '#ee3a3a' }}
                      placeholder="https://github.com/johndoe or https://yourportfolio.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Cover Letter *
                    </label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 transition-all duration-300 resize-none" style={{ outlineColor: '#ee3a3a' }}
                      placeholder="Tell us why you're a great fit for this role..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Resume / CV * (PDF, DOC, DOCX - Max 5MB)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-black rounded-lg cursor-pointer hover:border-black transition-colors"
                      >
                        <div className="text-center">
                          <Upload className="w-8 h-8 text-black opacity-50 mx-auto mb-2" />
                          <p className="text-sm text-black opacity-70">
                            {formData.resume ? (
                              <span className="text-black font-semibold">{formData.resume.name}</span>
                            ) : (
                              <>Click to upload or drag and drop</>
                            )}
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      className="flex-1 px-6 py-3 border-2 border-black text-black rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-black text-white border border-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Back to Home */}
      <div className="py-12 text-center">
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-black text-white border border-white font-semibold rounded-full hover:bg-red-600 transition-all duration-300 shadow-lg"
        >
          ← Back to Home
        </Link>
      </div>
      </main>
      <Footer />
    </>
  );
};

export default Careers;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <Link
            to="/"
            className="inline-flex items-center hover:scale-105 transition-transform duration-200"
            aria-label="Go back to GoLiveGram homepage"
          >
            <img
              src="/logo.svg"
              alt="GoLiveGram - Stream, Connect & Monetize Your Passion"
              className="h-10 w-auto hover:scale-105 transition-transform duration-200"
              style={{ maxWidth: '260px', mixBlendMode: 'multiply' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/logo.svg';
              }}
            />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join the GoLiveGram Team 🚀</h1>
            <p className="text-xl md:text-2xl mb-4">
              Help us empower millions of creators worldwide
            </p>
            <p className="text-lg opacity-90">
              We're building the future of live streaming and creator monetization.
              Join our passionate team and make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Join GoLiveGram?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast-Growing</h3>
              <p className="text-gray-600">Join a rocket ship with millions of users</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Amazing Team</h3>
              <p className="text-gray-600">Work with talented, passionate people</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Remote-First</h3>
              <p className="text-gray-600">Work from anywhere in the world</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Great Benefits</h3>
              <p className="text-gray-600">Competitive salary, equity, and perks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Open Positions</h2>

          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-lg">
                      {job.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <p className="text-gray-600">{job.department}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {job.salary}
                  </div>
                </div>

                <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>

                <button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{selectedJob.title}</h2>
                  <div className="flex flex-wrap gap-4 text-gray-600">
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
                    <span className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {selectedJob.salary}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <p className="text-gray-700 mb-6">{selectedJob.description}</p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Responsibilities</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {selectedJob.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Requirements</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
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
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted! 🎉</h4>
                  <p className="text-gray-600">Thank you for your interest. We'll review your application and get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        name="linkedIn"
                        value={formData.linkedIn}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="https://linkedin.com/in/johndoe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Portfolio / GitHub (Optional)
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="https://github.com/johndoe or https://yourportfolio.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Cover Letter *
                    </label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      placeholder="Tell us why you're a great fit for this role..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                        className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-colors"
                      >
                        <div className="text-center">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">
                            {formData.resume ? (
                              <span className="text-purple-600 font-semibold">{formData.resume.name}</span>
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
                      className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
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
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200 shadow-lg"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} GoLiveGram. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Careers;

import React from 'react';

const reviews = [
  {
    text: "GoLiveGram ne meri zindagi badal di! Maine 2 mahine pehle se streaming start ki aur already 4 lakhs ka rewards ho gaya. Monetization features bilkul easy hain!",
    name: "Priya Sharma",
    stars: 5
  },
  {
    text: "Best platform for fitness creators. My community engagement increased by 300% compared to other apps. Highly recommended!",
    name: "Arjun Patel",
    stars: 5
  },
  {
    text: "Brand partnerships kamaal ki hain. Mene 5+ major brands ke saath collaborate kiya aur ₹8 lakhs rewards hogai is mahine.",
    name: "Kavya Reddy",
    stars: 5
  },
  {
    text: "As a tech content creator, the analytics dashboard is incredibly detailed. I can optimize my content strategy perfectly with the insights provided.",
    name: "Rohit Gupta",
    stars: 4
  },
  {
    text: "App kitna smooth hai, koi lag nahi, aur payment system bilkul reliable hai. Go live karna aur apne audience se connect karna bahut easy hai!",
    name: "Neha Singh",
    stars: 5
  },
  {
    text: "Pehle 0 followers the, ab 2 lakhs followers ho gaye sirf 1 saal mein. GoLiveGram ka algorithm quality content ko promote karti hai!",
    name: "Ravi Kumar",
    stars: 4
  },
  {
    text: "Customer support team ka response time just kamal hai. Jab bhi koi issue aata hai, minutes mein reply aa jata hai. Professional-grade support!",
    name: "Anjali Gupta",
    stars: 5
  },
  {
    text: "Finally a platform where creators get priority. The payout system is transparent and I get my money every month like clockwork.",
    name: "Vikas Patel",
    stars: 4
  },
  {
    text: "Mein music online sikhati hoon aur GoLiveGram ka streaming quality pristine hai. Mere students ko sabhi interactive features bahut pasand hain.",
    name: "Sneha Kapoor",
    stars: 5
  },
  {
    text: "Shopping integration ab add ho gaya, toh ab main live stream ke during hi product sell kar sakta hoon. Game changer bilkul!",
    name: "Deepak Sharma",
    stars: 3
  },
  {
    text: "Beauty creation ke liye best platform! Video quality aur lighting bilkul superior hai. Followers ki quality bhi bohot acha raehta hai.",
    name: "Ritika Verma",
    stars: 5
  },
  {
    text: "I switched from other platforms and regret not doing it sooner. The rewards are 5x better here. Worth every bit!",
    name: "Mohan Singh",
    stars: 4
  },
  {
    text: "Yahan par community bohot supportive hai. Mene real friends bhi banaye through creator network. Sirf paise nahi, true connection milti hai!",
    name: "Shreya Nair",
    stars: 5
  },
  {
    text: "Gaming streams bilkul smooth hain. Zero lag, amazing filters, aur audience interaction feature unmatched hai.",
    name: "Aditya Reddy",
    stars: 4
  },
  {
    text: "Naye creators ke liye guides aur tutorials bohot helpful hain. Pehle din se hi monetization start kar sakte ho easily!",
    name: "Pooja Desai",
    stars: 3
  },
  {
    text: "I earned ₹50,000 in my first week! The viral potential here is real. My content gets discovered so naturally.",
    name: "Ishan Tiwari",
    stars: 5
  },
  {
    text: "Donation system bilkul perfect hai streaming ke time. Loyal followers ko support karna bahut easy ho gaya!",
    name: "Divya Chatterjee",
    stars: 4
  },
  {
    text: "I host productivity workshops and GoLiveGram's scheduling features are perfect. My recurring viewers never miss a session.",
    name: "Suresh Kumar",
    stars: 5
  },
  {
    text: "Safety features kamaal ke hain. Mujhe secure feel hota hai is platform par. Blocking aur moderation tools bilkul effective hain.",
    name: "Ananya Wagh",
    stars: 4
  },
  {
    text: "Mera career ka best investment! Ab GoLiveGram hi mera main income source hai. Day job se bhi zyada earn kar rahe hain!",
    name: "Vikram Deshmukh",
    stars: 5
  }
];

const row1 = reviews.slice(0, 10);
const row2 = reviews.slice(10, 20);

const TestimonialCard = ({ text, name, stars }: { text: string; name: string; stars: number }) => (
  <div className="testimonial-card-new">
    <div className="testimonial-card-stars">
      {Array.from({ length: stars }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
    <p className="testimonial-card-text">{text}</p>
    <p className="testimonial-card-name">{name}</p>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <span className="inline-block text-xs bg-white text-red-600 px-3 py-1 rounded-full font-medium mb-4 border border-black">
          Reviews
        </span>
        <h2 className="text-fluid-h2 font-bold text-black mb-3">
          What Creators Are Saying
        </h2>
        <p className="text-fluid-body text-black max-w-prose mx-auto">
          Thousands of creators trust GoLiveGram every day.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="max-w-6xl mx-auto mb-4 px-4">
        <div className="testimonial-marquee-row">
          <div className="testimonial-marquee-track testimonial-marquee-track--left">
            {[...row1, ...row1].map((r, i) => (
              <TestimonialCard key={`r1-${i}`} text={r.text} name={r.name} stars={r.stars} />
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="testimonial-marquee-row">
          <div className="testimonial-marquee-track testimonial-marquee-track--right">
            {[...row2, ...row2].map((r, i) => (
              <TestimonialCard key={`r2-${i}`} text={r.text} name={r.name} stars={r.stars} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
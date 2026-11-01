export type Testimonial = {
  id: string;
  name: string;
  /** Local path under public, e.g. /images/clients/nikhil.jpg. */
  image: string | null;
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;
};

// Sample copy: replace with approved client feedback before presenting as verified reviews.
export const testimonials: Testimonial[] = [
  { id: "nikhil", name: "Nikhil Agarwal", image: "/images/clients/nikhil.jpg", rating: 5, review: "Patkar Infotech delivered a clean, professional website. The entire experience was excellent." },
  { id: "vikram", name: "Vikram Joshi", image: "/images/clients/vikram.jpg", rating: 5, review: "The team understood our requirements clearly and delivered a polished solution." },
  { id: "neha", name: "Neha Gupta", image: "/images/clients/neha.jpg", rating: 5, review: "Very happy with our new website. The design feels modern, smooth and professional." },
  { id: "rahul", name: "Rahul Sharma", image: "/images/clients/rahul.jpg", rating: 5, review: "Clear communication from start to finish, and the final product works smoothly." },
  { id: "arjun", name: "Arjun Nair", image: "/images/clients/arjun.jpg", rating: 5, review: "The clean finish gives our business a much more premium digital presence." },
  { id: "priya", name: "Priya Mehta", image: "/images/clients/priya.jpg", rating: 5, review: "Our online store is easy to manage, and customers find it simple to shop." },
  { id: "sneha", name: "Sneha Iyer", image: "/images/clients/sneha.jpg", rating: 5, review: "A thoughtful team that turned our ideas into a website we are proud to share." },
  { id: "amit", name: "Amit Verma", image: "/images/clients/amit.jpg", rating: 5, review: "The dashboard keeps our daily work organised. Everything we need is easy to find." },
  { id: "kavya", name: "Kavya Shah", image: "/images/clients/kavya.jpg", rating: 5, review: "Our website looks sharp on mobile, and getting in touch is much easier for visitors." },
  { id: "rohit", name: "Rohit Deshmukh", image: "/images/clients/rohit.jpg", rating: 5, review: "They explained the technical details clearly and kept us involved at every stage." },
  { id: "ananya", name: "Ananya Rao", image: "/images/clients/ananya.jpg", rating: 5, review: "The attention to detail shows. Our new site feels fast, clear and easy to navigate." },
  { id: "sanjay", name: "Sanjay Kulkarni", image: "/images/clients/sanjay.jpg", rating: 5, review: "A reliable development partner with practical ideas and helpful support after launch." },
];

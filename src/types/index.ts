// Common interface for all section props
export interface SectionProps {
  id?: string;
  className?: string;
}

// Hero section types
export interface HeroProps extends SectionProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
}

// Feature item type
export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// Features section props
export interface FeaturesProps extends SectionProps {
  title: string;
  subtitle: string;
  features: FeatureItem[];
}

// Product item type
export interface ProductItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

// Products section props
export interface ProductsProps extends SectionProps {
  title: string;
  subtitle: string;
  products: ProductItem[];
}

// Testimonial item type
export interface TestimonialItem {
  id: string;
  text: string;
  author: {
    name: string;
    position: string;
    image: string;
  };
}

// Testimonials section props
export interface TestimonialsProps extends SectionProps {
  title: string;
  subtitle: string;
  testimonials: TestimonialItem[];
}

// About section types
export interface AboutProps extends SectionProps {
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  bulletPoints: string[];
  image: string;
}

// Contact info item type
export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  details: string[];
}

// Contact section props
export interface ContactProps extends SectionProps {
  title: string;
  subtitle: string;
  description: string;
  contactInfo: ContactInfoItem[];
  backgroundImage: string;
}

// Navigation link type
export interface NavLink {
  id: string;
  text: string;
  url: string;
}

// Button props
export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

// Card props
export interface CardProps {
  children: React.ReactNode;
  elevation?: "low" | "medium" | "high";
  hoverable?: boolean;
  className?: string;
  onClick?: () => void;
}

// Header props
export interface HeaderProps {
  navLinks?: NavLink[];
  logoImage?: string;
  logoText?: string;
  className?: string;
}

// Footer link category
export interface FooterLinkCategory {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

// Footer props
export interface FooterProps {
  logoImage?: string;
  description?: string;
  socialLinks?: {
    platform: string;
    url: string;
  }[];
  linkCategories?: FooterLinkCategory[];
  copyright?: string;
  className?: string;
}

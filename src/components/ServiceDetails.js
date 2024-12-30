import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Services.css';
import './ServiceDetails.css';

const servicesList = [
  { 
    id: 1, 
    title: 'Social Media Marketing', 
    icon: '🚀',
    description: 'Boost your social media presence',
    fullDescription: 'Our social media marketing services help you grow your brand presence across all major platforms. We create engaging content, manage your social media accounts, and develop strategies to increase your followers and engagement.',
    features: [
      'Content strategy development',
      'Social media account management',
      'Engagement monitoring and response',
      'Analytics and reporting',
      'Paid social media advertising'
    ]
  },
  { 
    id: 2,
    title: 'Web Designing',
    icon: '💻', 
    description: 'Create stunning, responsive websites',
    fullDescription: 'Get a beautiful, modern, and responsive website that represents your brand perfectly. Our web design services focus on user experience, mobile responsiveness, and conversion optimization.',
    features: [
      'Custom website design',
      'Mobile-first approach',
      'SEO optimization',
      'Fast loading speeds',
      'Regular maintenance and updates'
    ]
  },
  { 
    id: 3,
    title: 'Application Development',
    icon: '📱', 
    description: 'Build powerful mobile and web applications',
    fullDescription: 'Transform your ideas into powerful applications. We develop custom mobile and web applications that are scalable, secure, and user-friendly.',
    features: [
      'Custom app development',
      'Cross-platform compatibility',
      'API integration',
      'Performance optimization',
      'Ongoing support'
    ]
  },
  { 
    id: 4,
    title: 'Thumbnail Designing',
    icon: '🎨', 
    description: 'Eye-catching thumbnails for your content',
    fullDescription: 'Get attention-grabbing thumbnails that increase your click-through rates. Our designers create compelling thumbnails optimized for various platforms.',
    features: [
      'Custom thumbnail design',
      'Platform-specific optimization',
      'A/B testing options',
      'Quick turnaround time',
      'Unlimited revisions'
    ]
  },
  { 
    id: 5,
    title: 'Photo Editing',
    icon: '📸', 
    description: 'Professional photo editing services',
    fullDescription: 'Transform your photos with our professional editing services. We enhance colors, remove backgrounds, and make your images stand out.',
    features: [
      'Color correction',
      'Background removal',
      'Retouching',
      'Format conversion',
      'Batch processing'
    ]
  },
  { 
    id: 6,
    title: 'Video Editing', 
    icon: '🎥',
    description: 'High-quality video editing',
    fullDescription: 'Professional video editing services to make your content shine. We handle everything from basic cuts to advanced effects and animations.',
    features: [
      'Professional editing',
      'Color grading',
      'Sound mixing',
      'Special effects',
      'Format optimization'
    ]
  },
  { 
    id: 7,
    title: 'Youtube Shorts Editing',
    icon: '▶️', 
    description: 'Engaging shorts for YouTube',
    fullDescription: 'Create engaging YouTube Shorts that capture attention and drive engagement. Our editing style is optimized for vertical video format.',
    features: [
      'Vertical video optimization',
      'Trending style editing',
      'Music selection',
      'Caption addition',
      'Performance optimization'
    ]
  },
  { 
    id: 8,
    title: 'Instagram Reels Editing',
    icon: '📱', 
    description: 'Trending reels for Instagram',
    fullDescription: 'Get professionally edited Instagram Reels that follow the latest trends and help you grow your following.',
    features: [
      'Trend-based editing',
      'Music synchronization',
      'Effect application',
      'Caption optimization',
      'Hashtag research'
    ]
  },
  { 
    id: 9,
    title: 'Logo Designing',
    icon: '✒️', 
    description: 'Unique and memorable logos',
    fullDescription: 'Get a unique and professional logo that represents your brand identity. Our designers create timeless logos that work across all platforms.',
    features: [
      'Custom logo design',
      'Multiple concepts',
      'Vector files',
      'All file formats',
      'Unlimited revisions'
    ]
  },
  { 
    id: 10,
    title: 'Visiting Card Designing',
    icon: '📇', 
    description: 'Professional business cards',
    fullDescription: 'Make a lasting impression with professionally designed business cards. We create modern and elegant designs that represent your brand.',
    features: [
      'Custom design',
      'Print-ready files',
      'Multiple layouts',
      'High-quality templates',
      'Quick turnaround'
    ]
  }
];

export { servicesList };

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const service = servicesList.find(s => s.id === parseInt(id));

  if (!service) {
    return <div className="service-details">Service not found</div>;
  }

  const handleInterested = () => {
    navigate('/contact');
  };

  return (
    <div className="service-details fade-in">
      <div className="service-details-card fade-in">
        <div className="service-details-icon">{service.icon}</div>
        <h2>{service.title}</h2>
        <p className="service-description">{service.fullDescription}</p>
        <button className="interested-button hover-effect" onClick={handleInterested}>
          Interested
        </button>
      </div>
      <div className="features-card">
        <h3>Features:</h3>
        <ul>
          {service.features.map(feature => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetails;

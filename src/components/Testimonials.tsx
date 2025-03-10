
import { useState, useRef } from 'react';
import { useInView } from '@/lib/animations';
import { cn } from '@/lib/utils';

type TestimonialProps = {
  name: string;
  role: string;
  content: string;
  imageSrc: string;
}

const TestimonialCard = ({ name, role, content, imageSrc }: TestimonialProps) => {
  const { ref, isInView } = useInView();
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "bg-white rounded-2xl p-6 shadow-sm transition-all duration-700 ease-apple",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="mb-6">
        <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5714 0H7.14285L0 12V24H12V12H4.28571L12.5714 0ZM30 0H24.5714L17.1429 12V24H29.1429V12H21.4286L30 0Z" fill="currentColor" fillOpacity="0.1"/>
        </svg>
      </div>
      
      <p className="text-foreground mb-6">{content}</p>
      
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-4 bg-secondary">
          {imageSrc ? (
            <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-primary">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { ref, isInView } = useInView();
  
  const testimonials = [
    {
      name: "Alex Morgan",
      role: "Computer Science Student",
      content: "The clarity of instruction and thoughtful design of the curriculum has transformed how I approach problem-solving. It's refreshing to experience education that values both form and function.",
      imageSrc: "",
    },
    {
      name: "Samantha Lee",
      role: "Mathematics Major",
      content: "Vector Tuition has an uncompromising attention to detail. Every concept is presented with such precision and elegance that complex topics become intuitive and approachable.",
      imageSrc: "",
    },
    {
      name: "Rahul Patel",
      role: "Engineering Graduate",
      content: "I appreciate how the program respects my time and intelligence. The material is dense but accessible, allowing for deeper understanding without unnecessary complexity.",
      imageSrc: "",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={cn(
            "text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-apple",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="chip mb-4">Testimonials</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What our students say</h2>
          <p className="text-muted-foreground text-lg">
            The experiences of our students reflect our commitment to excellence and thoughtful education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

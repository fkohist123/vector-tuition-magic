
import { useInView } from '@/lib/animations';
import { cn } from '@/lib/utils';

const About = () => {
  const { ref, isInView } = useInView();
  
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={cn(
            "text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-apple",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="chip mb-4">About Us</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-muted-foreground text-lg">
            Founded by a team of dedicated professionals with a passion for education, we've created a platform that combines technology and expertise to deliver an exceptional learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className={cn(
              "transition-all duration-700 ease-apple",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <div className="rounded-2xl overflow-hidden bg-white shadow-md">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/30 flex items-center justify-center">
                <span className="text-muted-foreground text-center">Team image will appear here</span>
              </div>
            </div>
          </div>
          
          <div 
            className={cn(
              "space-y-6 transition-all duration-700 ease-apple",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-muted-foreground">
              At Vector Tuition, we believe that education should be accessible, engaging, and effective. Our mission is to provide students with the tools and support they need to succeed in their academic journey.
            </p>
            
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="text-muted-foreground">
              We envision a world where every student has access to high-quality education that adapts to their unique learning style and needs. Through innovative technology and expert instruction, we're making this vision a reality.
            </p>
            
            <h3 className="text-2xl font-semibold">Our Values</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Excellence in everything we do</li>
              <li>Innovation that drives learning forward</li>
              <li>Accessibility for all learners</li>
              <li>Personalization that respects individual needs</li>
              <li>Community that supports and uplifts</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

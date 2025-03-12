import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Clock, Award, Users, MessageCircle, ArrowUpRight } from 'lucide-react';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: Award,
      title: "Experienced Tutors",
      description: "Learn from tutors with extensive experience and proven results."
    },
    {
      icon: Users,
      title: "1-on-1 Attention",
      description: "Get dedicated focus in personalized sessions to maximize your learning potential."
    },
    {
      icon: ArrowUpRight,
      title: "Fostering Confidence",
      description: "We develop ' self belief by nurturing talent and guiding past limitations."
    },
    {
      icon: BookOpen,
      title: "Personalized Curriculum",
      description: "Tailored learning plans designed specifically for your needs."
    }
  ];

  const tutor = {
    name: "Yousaf Kohistani",
    role: "Physics Teacher",
    avatar: "/lovable-uploads/de1c5b6f-d53a-4d9e-bf51-3417256efb5f.png",
    description: "Fully qualified Physics teacher with a proven track record of outstanding results. Personalised, interactive teaching methods designed to make Physics engaging and accessible."
  };

  const testimonials = [
    {
      content: "The tuition lessons I had with Yousaf were a big help in achieving all 9s in my GCSEs. Especially for Maths and Sciences. I want to say a big thank you.",
      author: "Yaser S.",
      relation: "A-level Student",
      bgColor: "bg-blue-100"
    },
    {
      content: "Before I took lessons with Yousaf, A-level Physics was a struggle. He explained concepts in a way that was easy to understand and gave me tools to remember how to answer questions.",
      author: "Adam H.",
      relation: "A-level Student",
      bgColor: "bg-green-100"
    },
    {
      content: "Yousaf tutored my son James, from KS3 through to GCSE. We are thoroughly pleased with the quality of his teaching and credit him with our son getting into a top sixth form.",
      author: "Oliver M.",
      relation: "Parent",
      bgColor: "bg-purple-100"
    },
    {
      content: "Yousaf taught A-level Physics to me in a way that made it so simple. I found the jump from GCSE very tough and just couldn't understand in class.",
      author: "Hannah.",
      relation: "A-level Student",
      bgColor: "bg-pink-100"
    },
    {
      content: "I want to thank Mr Kohistani for helping me improve my grades in Maths and Science as well as helping me with my personal statement for my UCAS application.",
      author: "Shahram O.",
      relation: "Student",
      bgColor: "bg-yellow-100"
    }
  ];

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Hero
        title="Expert tutoring to reach your full potential"
        subtitle={<>Personalized tuition and academic coaching for <span className="font-semibold">KS3</span>, <span className="font-semibold">GCSE</span> and <span className="font-semibold">A-Levels</span>. Book a call today and start your journey to academic success.</>}
        imageSrc="https://media.istockphoto.com/id/1345678276/photo/teenage-boy-with-laptop-having-online-school-class-at-home.jpg?s=612x612&w=0&k=20&c=BA8210GPVx_NWI9HIxukFhQJUrt2rYTBjqxXYT3zx1Q="
      />
      
      <section className="content-section bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full mb-4">
              <Sparkles size={14} className="mr-1" />
              <span>About Us</span>
            </div>
            <h2 className="text-3xl font-semibold mb-6">10+ Years of nurturing academic excellence</h2>
            <p className="text-muted-foreground mb-6">
              We've helped hundreds of students achieve their academic goals. Our approach combines proven teaching methods with personalized attention to ensure each student gets exactly what they need to reach their potential.
            </p>
            <p className="text-muted-foreground mb-8">
              We specialize in mathematics and sciences with a track record of helping students improve their grades significantly. Our teaching philosophy centers on building strong foundations, developing critical thinking skills, and fostering confidence.
            </p>
            <Button onClick={() => navigate('/pricing')}>
              View Packages
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=612x612&w=0&k=20&c=yvFDnYMNEJ6WEDYrAaOOLXv-Jhtv6ViBRXSzJhL9S_k="
              alt="Student studying online"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
      
      <section className="content-section bg-white">
        <div className="section-title">
          <h2>How We Can Help You Succeed</h2>
          <p>
            Our approach goes beyond just teaching the curriculum, taking an interest in the holistic development of each student.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-5 bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      <section className="content-section bg-gray-50">
        <div className="section-title">
          <h2>Meet Your Tutor</h2>
          <p>
            A dedicated educator passionate about helping students achieve their academic goals.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm border border-gray-100"
          >
            <div className="relative mb-6">
              <div className="w-48 h-48 relative rounded-full overflow-hidden bg-blue-50">
                <Avatar className="w-full h-full">
                  <AvatarImage 
                    src={tutor.avatar} 
                    alt={tutor.name} 
                    className="object-cover"
                  />
                </Avatar>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-1">{tutor.name}</h3>
            <p className="text-blue-600 font-medium text-sm mb-4">{tutor.role}</p>
            <p className="text-muted-foreground max-w-lg text-center whitespace-pre-wrap">{tutor.description}</p>
          </motion.div>
        </div>
      </section>
      
      <section className="content-section bg-white">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
          <p>
            Hear from students who have transformed their academic performance with our tutoring services.
          </p>
        </div>
        
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent className="px-1 sm:px-0">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="h-full mx-1 sm:mx-0">
                      <CardContent className="flex flex-col h-full p-4 sm:p-6">
                        <div className="text-blue-600 mb-4">
                          <MessageCircle size={24} />
                        </div>
                        <p className="text-base sm:text-lg italic mb-6 flex-grow">"{testimonial.content}"</p>
                        <div className="mt-auto">
                          <span className={`${testimonial.bgColor} px-3 py-1 rounded-full inline-block font-medium text-sm sm:text-base`}>
                            {testimonial.author}
                          </span>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1">{testimonial.relation}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static" />
              <CarouselNext className="static" />
            </div>
          </Carousel>
        </div>
      </section>
      
      <section className="content-section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Begin your journey to fulfill your potential</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a discovery call to discuss how we can help you meet your academic goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={() => navigate('/discovery')}>
              Book a Call
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/pricing')}>
              View Pricing
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

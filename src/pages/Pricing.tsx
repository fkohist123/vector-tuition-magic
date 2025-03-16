import { motion } from 'framer-motion';
import { useState } from 'react';
import PricingCard from '@/components/PricingCard';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const Pricing = () => {
  const [pricingType, setPricingType] = useState<'hourly' | 'package'>('hourly');
  
  const hourlyPricingPlans = [{
    title: "KS3",
    price: "£30",
    frequency: "hr",
    description: "Foundational tutoring for Key Stage 3 students.",
    subjects: "Maths, English, Science",
    features: [{
      text: "1-on-1 personalized sessions"
    }, {
      text: "All KS3 subjects covered"
    }, {
      text: "Homework assistance"
    }, {
      text: "Weekly progress reports"
    }],
    popular: false,
    discount: null
  }, {
    title: "GCSE",
    price: "£40",
    frequency: "hr",
    description: "Comprehensive support for GCSE exam preparation.",
    subjects: "Maths, English, Science",
    features: [{
      text: "1-on-1 GCSE-focused sessions"
    }, {
      text: "Exam technique coaching"
    }, {
      text: "Past paper practice"
    }, {
      text: "Subject-specific help"
    }],
    popular: false,
    discount: null
  }, {
    title: "A-level",
    price: "£55",
    frequency: "hr",
    description: "Advanced tutoring for A-level students.",
    subjects: "Maths, Biology, Physics",
    features: [{
      text: "1-on-1 specialized A-level tutoring"
    }, {
      text: "In-depth subject knowledge"
    }, {
      text: "University preparation"
    }, {
      text: "Exam strategy guidance"
    }],
    popular: false,
    discount: null
  }];
  
  const packagePricingPlans = [{
    title: "KS3",
    price: "£50",
    frequency: "week (2 hours)",
    description: "Foundational tutoring for Key Stage 3 students.",
    subjects: "Maths, English, Science",
    features: [{
      text: "1-on-1 personalized sessions"
    }, {
      text: "All KS3 subjects covered"
    }, {
      text: "Homework assistance"
    }, {
      text: "Weekly progress reports"
    }],
    popular: false,
    discount: "17%"
  }, {
    title: "GCSE",
    price: "£70",
    frequency: "week (2 hours)",
    description: "Comprehensive support for GCSE exam preparation.",
    subjects: "Maths, English, Science",
    features: [{
      text: "1-on-1 GCSE-focused sessions"
    }, {
      text: "Exam technique coaching"
    }, {
      text: "Past paper practice"
    }, {
      text: "Subject-specific help"
    }],
    popular: false,
    discount: "12.5%"
  }, {
    title: "A-level",
    price: "£100",
    frequency: "week (2 hours)",
    description: "Advanced tutoring for A-level students.",
    subjects: "Maths, Biology, Physics",
    features: [{
      text: "1-on-1 specialized A-level tutoring"
    }, {
      text: "In-depth subject knowledge"
    }, {
      text: "University preparation"
    }, {
      text: "Exam strategy guidance"
    }],
    popular: false,
    discount: "9%"
  }];
  
  const pricingPlans = pricingType === 'hourly' ? hourlyPricingPlans : packagePricingPlans;
  
  return <div className="page-transition min-h-screen flex flex-col">
      <section className="content-section bg-gray-50 pt-24">
        <div className="section-title">
          <h2>Online Tuition Pricing</h2>
          <p>First lessons for new students are discounted 50%. For our packages, we ask students to commit to at least 8 hours a month.</p>
        </div>
        
        <div className="flex justify-center items-center mt-8 space-x-4">
          <span className={`text-sm font-medium ${pricingType === 'hourly' ? 'text-gray-900' : 'text-gray-500'}`}>
            Hourly
          </span>
          <Switch checked={pricingType === 'package'} onCheckedChange={checked => setPricingType(checked ? 'package' : 'hourly')} />
          <span className={`text-sm font-medium ${pricingType === 'package' ? 'text-gray-900' : 'text-gray-500'}`}>
            Package
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto px-4">
          {pricingPlans.map((plan, index) => <PricingCard key={index} title={plan.title} price={plan.price} frequency={plan.frequency} description={plan.description} subjects={plan.subjects} features={plan.features} popular={plan.popular} discount={plan.discount} delay={index} />)}
        </div>
      </section>
      
      <section className="content-section">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <motion.div initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4
          }} viewport={{
            once: true
          }}>
              <h4 className="text-lg font-medium mb-2">What is your cancellation policy?</h4>
              <p className="text-muted-foreground">
                Cancellations made at least 48 hours in advance are fully refundable or can be rescheduled. Late cancellations may be subject to a fee.
              </p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1,
            duration: 0.4
          }} viewport={{
            once: true
          }}>
              <h4 className="text-lg font-medium mb-2">Do you offer any discounts?</h4>
              <p className="text-muted-foreground">
                Yes, we offer sibling discounts and referral bonuses. Additionally, booking multiple packages upfront can result in savings.
              </p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.4
          }} viewport={{
            once: true
          }}>
              <h4 className="text-lg font-medium mb-2">How do I pay for sessions?</h4>
              <p className="text-muted-foreground">
                Payment can be made via credit card, bank transfer, or PayPal. For packages, payment plans are available upon request.
              </p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.4
          }} viewport={{
            once: true
          }}>
              <h4 className="text-lg font-medium mb-2">Are sessions in-person or online?</h4>
              <p className="text-muted-foreground">
                We offer online tutoring sessions. Online sessions are conducted via Zoom with interactive whiteboards and shared materials.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};

export default Pricing;

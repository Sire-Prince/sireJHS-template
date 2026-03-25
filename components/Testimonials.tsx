"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Dr. Edem Adzogenu",
    role: "Medical Doctor, Korle Bu Teaching Hospital",
    content: "sireSCH gave me the strong foundation I needed for medical school. The science department's dedication and the school's discipline shaped my career. I'm forever grateful for the opportunities I had.",
    rating: 5,
    image: "/assets/testimonial1.jpg",
    year: "Class of 2008",
  },
  {
    id: 2,
    name: "Sena Amedorme",
    role: "CEO, AgriTech Ghana Ltd",
    content: "The business skills and agricultural training at sireSCH inspired me to start my own company. Today, we help farmers across Ghana. The school's practical approach made all the difference.",
    rating: 5,
    image: "/assets/testimonial2.jpg",
    year: "Class of 2015",
  },
  {
    id: 3,
    name: "Kafui Mensah",
    role: "Award-winning Journalist, GBC",
    content: "My love for storytelling was nurtured by incredible teachers in the Arts department. sireSCH believed in me when I was just a dreamer. Now I tell Ghana's stories to the world.",
    rating: 5,
    image: "/assets/testimonial3.jpg",
    year: "Class of 2012",
  },
  {
    id: 4,
    name: "Ama Dzokoto",
    role: "Visual Artist, International Exhibitions",
    content: "The Visual Arts department opened my eyes to possibilities I never knew existed. Today, my work is shown in galleries across Africa and Europe. sireSCH sparked my creativity.",
    rating: 5,
    image: "/assets/testimonial4.jpg",
    year: "Class of 2018",
  },
  {
    id: 5,
    name: "John Mensah",
    role: "Civil Engineer, Ghana Highways Authority",
    content: "The science program at sireSCH prepared me for the rigors of engineering school. The practical approach to learning and dedicated teachers gave me confidence to pursue my dreams.",
    rating: 5,
    image: "/assets/testimonial5.jpg",
    year: "Class of 2010",
  },
  {
    id: 6,
    name: "Mercy Adjei",
    role: "Head of HR, Ghana Education Service",
    content: "sireSCH taught me leadership and integrity. The school's values have guided my career in public service. I'm proud to be an alumni of this great institution.",
    rating: 5,
    image: "/assets/testimonial6.jpg",
    year: "Class of 2005",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  // Auto-play logic
  useEffect(() => {
    autoPlayTimerRef.current = setInterval(() => {
      setDirection(1); // Auto-play goes right
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 7000);

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [totalSlides]);

  // Scroll right - animation from right to left
  const handleNext = useCallback(() => {
    setDirection(1); // Right direction
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  // Scroll left - animation from left to right
  const handlePrev = useCallback(() => {
    setDirection(-1); // Left direction
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const handleDotClick = useCallback((index: number) => {
    // Determine direction based on whether we're going forward or backward
    if (index > currentIndex) {
      setDirection(1);
    } else if (index < currentIndex) {
      setDirection(-1);
    }
    setCurrentIndex(index);
  }, [currentIndex]);

  const currentTestimonials = testimonials.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

  // Animation variants based on direction
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold-dark text-sm font-medium mb-4"
          >
            <Quote className="w-4 h-4" />
            Success Stories
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What Our <span className="text-gold">Alumni Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from graduates who started their journey at sireSCH and went on to achieve greatness.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-8 md:px-12">
          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-border hover:bg-gold hover:text-white transition-colors flex items-center justify-center"
                aria-label="Previous testimonials - scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-border hover:bg-gold hover:text-white transition-colors flex items-center justify-center"
                aria-label="Next testimonials - scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`grid gap-8 ${itemsPerView === 1 ? 'grid-cols-1' : 'md:grid-cols-2'}`}
            >
              {currentTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all group"
                >
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-gold/20 mb-6" />
                  
                  {/* Content */}
                  <p className="text-foreground leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center overflow-hidden">
                      {testimonial.image ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gold/30 flex items-center justify-center">
                          <span className="text-gold font-bold text-lg">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gold">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === idx
                    ? "w-8 bg-gold"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
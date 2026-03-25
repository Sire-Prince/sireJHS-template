"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { Quote, ChevronLeft, ChevronRight, Star, Users } from "lucide-react";
import Image from "next/image";

const parentTestimonials = [
  {
    id: 1,
    parentName: "Mrs. Akosua Mensah",
    studentName: "Yaw Mensah",
    jhsLevel: "JHS 3",
    role: "Parent",
    content: "Since my son joined Sire JHS, his confidence and academic performance have improved tremendously. The teachers are very dedicated and the BECE preparation is top-notch. We are extremely grateful.",
    rating: 5,
    image: "/assets/parent1.jpg", // Replace with real parent or student photo later
  },
  {
    id: 2,
    parentName: "Mr. Kwame Osei",
    studentName: "Abena Osei",
    jhsLevel: "JHS 2",
    role: "Parent",
    content: "The discipline, moral values, and individual attention my daughter receives here are outstanding. She now loves going to school and her grades have improved significantly.",
    rating: 5,
    image: "/assets/parent2.jpg",
  },
  {
    id: 3,
    parentName: "Mrs. Fatima Ibrahim",
    studentName: "Ahmed Ibrahim",
    jhsLevel: "JHS 1",
    role: "Parent",
    content: "I am impressed with how they balance academics with sports and extracurricular activities. My son is happier and more focused than ever. Best decision we made for his education.",
    rating: 5,
    image: "/assets/parent3.jpg",
  },
  {
    id: 4,
    parentName: "Mr. Samuel Adjei",
    studentName: "Akua Adjei",
    jhsLevel: "JHS 3",
    role: "Parent",
    content: "The weekly mock exams and personalized support helped my daughter perform very well in her BECE trials. The school truly cares about every child's success.",
    rating: 5,
    image: "/assets/parent4.jpg",
  },
  {
    id: 5,
    parentName: "Mrs. Evelyn Tetteh",
    studentName: "Kojo Tetteh",
    jhsLevel: "JHS 2",
    role: "Parent",
    content: "Small class sizes mean my child gets real attention. The teachers know each student personally. We have seen massive improvement in both academics and character.",
    rating: 5,
    image: "/assets/parent5.jpg",
  },
];

export default function ParentTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [direction, setDirection] = useState(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(parentTestimonials.length / itemsPerView);

  // Auto-play
  useEffect(() => {
    autoPlayTimerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [totalSlides]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const handleDotClick = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const currentTestimonials = parentTestimonials.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section className="py-20 bg-cream relative overflow-hidden" id="testimonials">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold-dark text-sm font-medium mb-4"
          >
            <Users className="w-4 h-4" />
            Happy Parents
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What <span className="text-gold">Parents Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from real parents whose children are thriving at Sire Junior High School.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-8 md:px-12">
          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-lg border border-border hover:bg-gold hover:text-white transition-all flex items-center justify-center"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-lg border border-border hover:bg-gold hover:text-white transition-all flex items-center justify-center"
                aria-label="Next"
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
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={`grid gap-8 ${itemsPerView === 1 ? "grid-cols-1" : "md:grid-cols-2"}`}
            >
              {currentTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-xl transition-all group"
                >
                  <Quote className="w-10 h-10 text-gold/20 mb-6" />

                  <p className="text-foreground leading-relaxed mb-8 italic text-[15.5px]">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                   

                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.parentName}</h4>
                      <p className="text-sm text-muted-foreground">
                        Parent of {testimonial.studentName} • {testimonial.jhsLevel}
                      </p>
                      <p className="text-xs text-gold mt-0.5">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === idx
                    ? "w-8 bg-gold"
                    : "w-2.5 bg-muted-foreground/40 hover:bg-muted-foreground/60"
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
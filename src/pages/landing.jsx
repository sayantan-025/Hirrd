import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-3xl sm:text-5xl lg:text-7xl tracking-tight py-4">
          Find Your Dream Job
          <span className="flex items-center justify-center gap-2 sm:gap-4">
            and get
            <img
              src="/logo.png"
              className="h-10 sm:h-20 lg:h-28 object-contain"
              alt="Hirrd Logo"
            />
          </span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
        <Link to="/jobs" className="w-full sm:w-auto">
          <Button variant="blue" size="xl" className="w-full">
            Find Jobs
          </Button>
        </Link>
        <Link to="/post-job" className="w-full sm:w-auto">
          <Button variant="destructive" size="xl" className="w-full">
            Post a Job
          </Button>
        </Link>
      </div>

      {/* Carousel */}
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10 -z-10"
      >
        <CarouselContent className="flex items-center gap-4 sm:gap-8">
          {companies.map(({ name, id, path }) => (
            <CarouselItem
              key={id}
              className="basis-1/3 sm:basis-1/4 md:basis-1/6"
            >
              <img
                src={path}
                alt={name}
                className="h-8 sm:h-12 lg:h-14 object-contain mx-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Banner */}
      <img
        src="/banner.jpeg"
        className="w-full  object-cover rounded-xl shadow-lg"
        alt="Banner"
      />

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="font-bold text-lg sm:text-xl">
              For Job Seekers
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base">
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="font-bold text-lg sm:text-xl">
              For Employers
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base">
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-center font-bold text-2xl sm:text-3xl mb-6">
          Frequently Asked Questions
        </h2>
        <Accordion type="multiple" className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-left text-sm sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
};

export default LandingPage;

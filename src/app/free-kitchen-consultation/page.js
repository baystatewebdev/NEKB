import Image from "next/image";
import Link from "next/link";
import { ExternalLink, InternalLink } from "@/components/Link";
import Cta from "@/components/Cta";
import {
	ArrowCircleRight,
	CalendarCheck,
	Quotes,
	PencilLine,
	Phone,
	Swatches,
} from "@phosphor-icons/react/dist/ssr";
import ContactForm from "@/components/ContactForm";
import PreHeading from "@/components/PreHeading";
import Heading from "@/components/Heading";
import images from "@/helpers/work";
import { LinkButton } from "@/components/Button";
import Dropdown from "@/components/Dropdown";

import kitchenRemodelImg from "public/img/kitchen-remodel.jpg";
import kitchenImg2 from "public/img/kitchen-remodel-2.jpg";
import graftonImg from "public/img/grafton/grafton-6.webp";
import kitchenImg1 from "public/img/grafton/grafton-10.webp";
import kitchenImg4 from "public/img/grafton/grafton-12.webp";
import kitchenImg5 from "public/img/asylum/asylum-1.webp";
import kitchenImg6 from "public/img/asylum/asylum-5.webp";

export const metadata = {
	title: "Free Kitchen Remodel Design & Consultation",
	description:
		"NorthEast provides personalized kitchen remodels all over Massachusetts. See how we can customize your home to fit your needs today!",
	robots: {
		index: false,
		follow: false,
	},
};

export default function Page() {
	return (
		<main className="text-lg">
			<section className="pt-16 pb-24 bg-gray-gradient-l lg:py-24">
				<div className="container mx-auto">
					<div className="grid items-center gap-12 lg:grid-cols-2">
						<div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
							<Heading level="h1" levelStyle="h2" className="mb-8">
								Free Kitchen Remodel Consultation & Design - Transform Your Home
								Today!
							</Heading>
							<p className="mb-8 text-neutral-600 text-balance">
								Are you looking to remodel your kitchen with an updated design
								or functionality? Look no further! Northeast offers personalized
								renovation solutions in a planned, functional way, with good
								taste and sophistication, using high-quality materials,
								technology, and exclusive designs. Call{" "}
								<ExternalLink href="tel:617-650-8814">
									617-650-8814
								</ExternalLink>{" "}
								or fill out the form to get your free consultation and design
								today!
							</p>
							<Image
								src={graftonImg}
								priority
								alt="remodeled kitchen by northeast"
							/>
						</div>
						<div>
							<div className="shadow-md" id="contact-us">
								<ContactForm
									title="Start Your Free Consultation"
									submitButtonClasses="bg-primary hover:bg-primary-darker"
									submitButtonText="Get Started"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="">
				<div className="py-16 bg-neutral-100 lg:py-32">
					<div className="container mx-auto">
						<div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-24">
							<div>
								<Image
									src={kitchenRemodelImg}
									alt="photo of a beautiful and modern remodeled kitchen"
								/>
							</div>
							<div className="text-center lg:text-left">
								<span className="uppercase text-primary inline-block mb-4">
									Culinary Canvases
								</span>
								<h2 className="text-4xl md:text-5xl mb-4">
									Fully Custom Kitchen Remodels
								</h2>
								<p className="text-neutral-600 mb-4">
									Elevate your home with a kitchen remodel tailored to your
									style and needs. Our team transforms your vision into reality,
									crafting a one-of-a-kind space that reflects your personality.
									With attention to detail and superior craftsmanship, we bring
									innovation and luxury to every aspect of your kitchen, from
									bespoke cabinetry to premium finishes.
								</p>
								<InternalLink
									href="#contact-us"
									className="inline-flex items-center gap-2 uppercase text-sm group"
								>
									Get Started{" "}
									<ArrowCircleRight
										className="relative group-hover:translate-x-2 transition-transform"
										size="1.25em"
									/>
								</InternalLink>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-24 bg-gray-gradient-r">
				<div className="container mx-auto">
					<PreHeading className="text-center lg:text-left">
						Testimonials
					</PreHeading>
					<Heading level="h2" className="mb-8 text-center lg:text-left">
						Hear From Our Clients
					</Heading>
					<ul className="grid lg:grid-cols-2 gap-8">
						<li className="flex flex-col items-center justify-center bg-white border border-black px-8 py-8">
							<Quotes
								size={80}
								weight="fill"
								className="text-neutral-300 -scale-y-100 -scale-x-100 mb-2"
							/>
							<blockquote className="text-center">
								<p className="mb-4 text-neutral-600">
									NorthEast Kitchen and Bath completly transformed our outdated,
									disfunctional, bathroom into a luxurious space that we love to
									use every day. Thais was incredibly helpful through the entire
									process to ensure every detail was to our liking. We
									couldn&apos;t be happier with the results!
								</p>
								<footer>Kevin & Heather</footer>
							</blockquote>
						</li>
						<li className="flex flex-col items-center justify-center bg-white border border-black px-8 py-8">
							<Quotes
								size={80}
								weight="fill"
								className="text-neutral-300 -scale-y-100 -scale-x-100 mb-2"
							/>
							<blockquote className="text-center">
								<p className="mb-4 text-neutral-600">
									Very responsive. The appt was set up done quickly and done
									within a week.
								</p>
								<footer>Eilleen DiGirolamo</footer>
							</blockquote>
						</li>
						<li className="flex flex-col items-center justify-center bg-white border border-black px-8 py-8">
							<Quotes
								size={80}
								weight="fill"
								className="text-neutral-300 -scale-y-100 -scale-x-100 mb-2"
							/>
							<blockquote className="text-center">
								<p className="mb-4 text-neutral-600">
									It was good. I got what I wanted, I&apos;m happy the service,
									and they were on time.
								</p>
								<footer>Cliff Moylan</footer>
							</blockquote>
						</li>
						<li className="flex flex-col items-center justify-center bg-white border border-black px-8 py-8">
							<Quotes
								size={80}
								weight="fill"
								className="text-neutral-300 -scale-y-100 -scale-x-100 mb-2"
							/>
							<blockquote className="text-center">
								<p className="mb-4 text-neutral-600">
									Thais was great to work with. Everything went smoothly and the
									product worked out exactly as planned. Would highly recommend!
								</p>
								<footer>Scott Barrows</footer>
							</blockquote>
						</li>
					</ul>
					<LinkButton href="#contact-us" className="mt-8 capitalize">
						Start Your Remodel
					</LinkButton>
				</div>
			</section>
			<section className="py-24 bg-neutral-100">
				<div className="container mx-auto">
					<PreHeading>Why Choose Us</PreHeading>
					<Heading level="h2" className="mb-8">
						What We Offer
					</Heading>
					<ul className="grid gap-8 lg:grid-cols-3">
						<li className="p-4 bg-white border border-black flex flex-col gap-4 items-center text-center lg:text-left lg:items-start">
							<PencilLine size="3.5rem" className="text-primary" />
							<Heading level="h3" levelStyle="h4" className="text-balance">
								Expertly Designed
							</Heading>
							<p className="text-balance">
								Each project features an expertly crafted design and
								presentation.
							</p>
						</li>
						<li className="p-4 bg-white border border-black flex flex-col gap-4 items-center text-center lg:text-left lg:items-start">
							<Swatches size="3.5rem" className="text-primary" />
							<Heading level="h3" levelStyle="h4" className="text-balance">
								Completely Customizable
							</Heading>
							<p className="text-balance">
								We offer fully customizable solutions - if you can dream it, we
								can do it!
							</p>
						</li>
						<li className="p-4 bg-white border border-black flex flex-col gap-4 items-center text-center lg:text-left lg:items-start">
							<CalendarCheck size="3.5rem" className="text-primary" />
							<Heading level="h3" levelStyle="h4" className="text-balance">
								Timely Project Completion
							</Heading>
							<p className="text-balance">
								NorthEast delivers your project on schedule, without
								disruptions!
							</p>
						</li>
					</ul>
				</div>
			</section>
			<section className="py-16 lg:py-32 bg-gray-gradient-l">
				<div className="container mx-auto">
					<div className="grid lg:grid-cols-5 items-center gap-24">
						<div className="text-center lg:text-left lg:col-span-3">
							<PreHeading>What We Do</PreHeading>
							<Heading level="h2" className="mb-4">
								We Do It All
							</Heading>
							<p className="mb-4">
								Our dedicated professionals work closely with you to understand
								your vision and preferences. Whether it&apos;s a single-family
								home, multi-family residence, or commercial property, our
								kitchen remodel services are tailored to deliver a stunning
								transformation. Let us to breathe new life into your kitchen
								space and increase your home&apos;s value.
							</p>
							<ul className="pl-4 columns-2 mb-8 lg:list-disc">
								<li>Islands</li>
								<li>Shelving</li>
								<li>Storage</li>
								<li>Accents</li>
								<li>Built-ins</li>
								<li>And more...</li>
							</ul>
							<LinkButton href="#contact-us" className="capitalize">
								Free Consultation
							</LinkButton>
						</div>
						<div className="lg:col-span-2">
							<div className="min-h-[35em] relative md:min-h-[39.25em] text-[min(2.959vw,_.745em)] md:text-[min(1.959vw,_1.745em)] lg:text-[min(0.9vw,_0.8em)]">
								<Image
									src={kitchenImg4}
									className="w-[25em] h-[80%] top-0 right-0 absolute object-cover"
									alt="kitchen"
								/>
								<Image
									src={kitchenImg1}
									className="w-[25em] h-[45%] bottom-0 left-0 absolute object-cover"
									alt="kitchen"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="py-16 bg-neutral-100 lg:py-24">
					<div className="container mx-auto text-center lg:text-left">
						<PreHeading>Our Portfolio</PreHeading>
						<Heading level="h2" className="mb-8">
							Some of Our Latest Work
						</Heading>
						<ul className="grid gap-8 md:grid-cols-2">
							{images
								.filter((image) => image.alt.includes("kitchen"))
								.slice(0, -1)
								.map((image, index) => (
									<li key={index}>
										<Image
											src={image.src}
											className="w-full h-full object-cover"
											alt={image.alt}
										/>
									</li>
								))}
						</ul>
					</div>
				</div>
			</section>
			<section className="py-16 bg-gray-gradient-r lg:py-24">
				<div className="container mx-auto relative z-10">
					<div className="text-center lg:text-left">
						<span className="uppercase text-primary inline-block mb-4">
							How It&apos;s Done
						</span>
						<h2 className="text-3xl md:text-4xl lg:text-5xl mb-16 ">
							Our Process
						</h2>
					</div>
					<ul className="grid items-center gap-12 text-center md:grid-cols-2 lg:grid-cols-4 lg:text-left">
						<li className="md:col-span-2">
							<Image
								src={kitchenImg2}
								alt="photo of a beautiful and modern remodeled bathroom"
								className="aspect-[3/2] object-cover"
							/>
						</li>
						<li className="flex flex-col gap-4 items-center lg:items-start">
							<span className="block text-neutral-600">01</span>
							<h3 className="uppercase text-xl">Initial Consultation</h3>
							<p>
								Discuss your vision, budget, and requirements for the remodel,
								ensuring a clear understanding of your goals. 
							</p>
							<Link
								href="#contact-us"
								className="px-2 py-1 border-2 bg-white border-black uppercase inline-block text-sm transition-colors hover:bg-black hover:text-white"
							>
								Get Started
							</Link>
						</li>
						<li className="flex flex-col gap-4 items-center lg:items-start">
							<span className="block text-neutral-600">02</span>
							<h3 className="uppercase text-xl">Design &amp; Planning</h3>
							<p>
								Develop comprehensive design plans, including layout options,
								material selections, and project timelines. 
							</p>
							<Link
								href="#contact-us"
								className="px-2 py-1 border-2 bg-white border-black uppercase inline-block text-sm transition-colors hover:bg-black hover:text-white"
							>
								Get Started
							</Link>
						</li>
						<li className="flex flex-col gap-4 items-center lg:items-start">
							<span className="block text-neutral-600">03</span>
							<h3 className="uppercase text-xl">
								Execution &amp; Construction
							</h3>
							<p>
								Begin the construction process, while maintaining open
								communication throughout the renovation. 
							</p>
							<Link
								href="#contact-us"
								className="px-2 py-1 border-2 bg-white border-black uppercase inline-block text-sm transition-colors hover:bg-black hover:text-white"
							>
								Get Started
							</Link>
						</li>
						<li className="flex flex-col gap-4 items-center lg:items-start">
							<span className="block text-neutral-600">04</span>
							<h3 className="uppercase text-xl">
								Completion &amp; Final Inspection
							</h3>
							<p>
								Conduct a thorough inspection to ensure your satisfaction,
								addressing any final touch-ups or adjustments as needed. 
							</p>
							<Link
								href="#contact-us"
								className="px-2 py-1 border-2 bg-white border-black uppercase inline-block text-sm transition-colors hover:bg-black hover:text-white"
							>
								Get Started
							</Link>
						</li>
						<li className="md:col-span-2">
							<Image
								src={kitchenImg4}
								alt="photo of a beautiful and modern remodeled bathroom"
								className="aspect-[3/2] object-cover"
							/>
						</li>
					</ul>
				</div>
			</section>
			<section className="py-16 lg:py-32 bg-neutral-100">
				<div className="container mx-auto">
					<div className="grid lg:grid-cols-5 items-center gap-24">
						<div className="lg:col-span-2">
							<div className="min-h-[35em] relative md:min-h-[39.25em] text-[min(2.959vw,_.745em)] md:text-[min(1.959vw,_1.745em)] lg:text-[min(0.9vw,_0.8em)]">
								<Image
									src={kitchenImg5}
									className="w-[25em] h-[80%] top-0 left-0 absolute object-cover"
									alt="kitchen"
								/>
								<Image
									src={kitchenImg6}
									className="w-[25em] h-[45%] bottom-0 right-0 absolute object-cover"
									alt="kitchen"
								/>
							</div>
						</div>
						<div className="lg:col-span-3">
							<PreHeading>Still Not Sure?</PreHeading>
							<Heading level="h2" className="mb-8">
								Frequently Asked Questions
							</Heading>
							<div className="flex flex-col gap-4">
								<Dropdown title="Do I need permits for my kitchen remodel?">
									<p>
										The need for permits varies depending on the scope of work
										and local building codes. Generally, cosmetic upgrades like
										replacing cabinets or countertops may not require permits,
										but structural changes such as moving walls or changing
										plumbing and electrical systems typically do. As part of our
										service, we assist clients in obtaining the necessary
										permits and ensure that all work is compliant with local
										regulations.
									</p>
								</Dropdown>
								<Dropdown title="How long does a typical kitchen remodel take?">
									<p>
										The duration of a kitchen remodel depends on various
										factors, including the scope of work, size of the kitchen,
										and any unforeseen challenges encountered during the
										process. On average, a minor remodel may take around 4-6
										weeks, while a more extensive renovation could range from
										8-12 weeks or longer. We provide detailed timelines during
										the initial consultation based on your specific project
										requirements.
									</p>
								</Dropdown>
								<Dropdown title="How do I choose the right materials for my kitchen remodel?">
									<p>
										Selecting materials for your kitchen remodel is an important
										decision that can significantly impact the overall look,
										feel, and functionality of the space. Our experienced
										designers offer guidance and recommendations based on your
										preferences, budget, and lifestyle. We provide access to a
										wide range of high-quality materials, including cabinetry,
										countertops, flooring, and fixtures, and assist you in
										selecting options that meet your needs and aesthetic goals.
									</p>
								</Dropdown>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container mx-auto">
					<Cta href="#contact-us" />
				</div>
			</section>
			<section className="fixed bottom-0 left-0 w-full z-10 lg:hidden">
				<ul className="flex divide-x">
					<li className="basis-1/2 lg:hidden">
						<LinkButton
							href="tel:617-650-8814"
							className="inline-flex items-center justify-center gap-2 capitalize px-2 w-full text-center"
							target=""
						>
							<Phone color="currentColor" size="1.6rem" />
							Call Now
						</LinkButton>
					</li>
					<li className="basis-1/2">
						<LinkButton
							href="#contact-us"
							className="inline-flex items-center justify-center gap-2 capitalize px-2 w-full text-center"
							target=""
						>
							Free Consultation
						</LinkButton>
					</li>
				</ul>
			</section>
		</main>
	);
}

import "./blogCard.css";
import { ArrowUpRight, Dot } from "lucide-react";
import { LookAtHeader } from "../LookAt/LookAt";
import { useState } from "react";
import { motion } from "framer-motion";

interface Blog {
  title: string;
  date: string;
  category: string;
  author: string;
  image: string;
}

const blogs: Blog[] = [
  {
    title: "The Future of Web Design: Trends to Watch in 2024",
    date: "15 Dec, 2023",
    category: "Web Design",
    author: "Sarah Jenkins",
    image: "/assets/lookAtCard1.jpg",
  },
  {
    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
    date: "10 Nov, 2023",
    category: "UI/UX Design",
    author: "Jayesh Patil",
    image: "/assets/lookAtCard.png",
  },
  {
    title: "Mastering React: A Comprehensive Guide for Beginners",
    date: "05 Jan, 2024",
    category: "Development",
    author: "Mike Chen",
    image: "/assets/lookAtCard2.png",
  },
];

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-12 px-5 py-10 w-screen lg:px-10 lg:overflow-x-visible"
    >
      <LookAtHeader
        title="From my blog"
        highlight="post"
        headerClass="lg:w-1/6 "
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="grid grid-rows-1 gap-4 grid-flow-col w-full overflow-x-scroll snap-mandatory snap-x scrollbar-hide lg:gap-8 lg:px-5 lg:py-10 "
      >
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </motion.div>
    </motion.div>
  );
};

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  const [isCardHover, setIsCardHover] = useState(false);
  return (
    <motion.div
      className="w-[80vw] relative flex flex-col items-start gap-4 sm:w-[47vw] lg:w-[400px] "
      onMouseEnter={() => setIsCardHover(true)}
      onMouseLeave={() => setIsCardHover(false)}
    >
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: isCardHover ? 1 : 0, scaleY: isCardHover ? 1 : 0 }}
        exit={{ opacity: 0, scaleY: 0 }}
        transition={{ duration: 0.3, type: "spring" }}
        className="absolute w-full origin-top h-full rounded-4xl bg-[#FD853A]/10"
      />
      <motion.div
        className="h-[53vh] w-full relative snap-center sm:h-[40vh] lg:h-[60vh] "
        style={{
          filter: "drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.2))",
        }}
        animate={{
          scale: isCardHover ? 1.03 : 1,
        }}
        transition={{
          type: "spring",
          bounce: 0.6,
        }}
      >
        <motion.img
          src={blog.image}
          className="h-full object-contain cardMask"
        />
        <motion.button
          animate={{
            background: isCardHover ? "#FD853A" : "#1D2939",
            scale: isCardHover ? 1.04 : 1,
            boxShadow: isCardHover
              ? "0px 10px 30px rgba(0, 0, 0, 0.2)"
              : "0px 0px 0px rgba(0, 0, 0, 0)",
          }}
          transition={{
            type: "spring",
            bounce: 0.5,
          }}
          className="absolute bottom-0 right-0  bg-[#1D2939] rounded-full border-none flex items-center justify-center
            size-22 sm:size-24 lg:size-26
        
        "
        >
          <ArrowUpRight
            color="white"
            strokeWidth={1}
            className="size-16 sm:size-24"
          />
        </motion.button>
      </motion.div>
      <motion.p
        animate={{
          background: isCardHover ? "#FD853A" : "#F2F4F7",
          color: isCardHover ? "white" : "black",
        }}
        transition={{
          type: "spring",
          bounce: 0.5,
        }}
        className="px-5 py-2 bg-[#F2F4F7] rounded-full lg:mt-4 relative lg:mx-2"
      >
        {blog.category}
      </motion.p>
      <div className="flex items-center gap-4 relative">
        <p className="flex items-center">
          <Dot color="#FD853A" size={40} />
          <span>{blog.author}</span>
        </p>
        <p className="flex items-center">
          <Dot color="#FD853A" size={40} />
          <span>{blog.date}</span>
        </p>
      </div>
      <p className="blogCardParagraph text-2xl relative lg:mx-2">
        {blog.title}
      </p>
    </motion.div>
  );
};

export default Blog;

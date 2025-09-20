import b1 from "../../assets/blogs/b1.jpg";
import b2 from "../../assets/blogs/b2.jpg";
import b3 from "../../assets/blogs/b3.jpg";
import BlogCard from "../BlogCard/BlogCard";
import "./Blogs.css";
const Blogs = () => {
  const blogs = [
    {
      id: 1,
      img: b1,
      title1: "Look even slightly bleiveable",
      title2: "if you are",
      desc:'lorem ipsum dolor sit amet lit odi lorem ipsum dolor sit amet consectetur',
    },
    {
      id: 2,
      img: b2,
      title1: "anything ambrassing hidden",
      title2: "in the middle",
      desc:'lorem ipsum dolor sit amet lit odi lorem ipsum dolor sit amet consectetur',

    },
    {
      id: 3,
      img: b3,
      title1: "Lorem ipsum dolor",
      title2: "sit amet.",
      desc:'lorem ipsum dolor sit amet lit odi lorem ipsum dolor sit amet consectetur',

    },
  ];

  return (
    <div className="container blogs-section">
      <h1 className="text-center mb-5">Latest Blogs</h1>
      <div className="row g-4">
        <BlogCard blogs={blogs} />
      </div>
    </div>
  );
};

export default Blogs;

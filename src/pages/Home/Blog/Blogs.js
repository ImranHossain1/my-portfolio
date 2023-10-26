import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);
  return (
    <div id="blogs" className="pt-12">
      <div className="grid justify-items-center mx-auto my-12 text-center ">
        <h2 className="text-5xl mb-5 font-bold text-gray-300 ">
          My Technical Writings
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8 mx-0 md:mx-2 lg:mx-20">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

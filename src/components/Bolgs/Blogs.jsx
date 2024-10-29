import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div className="w-11/12 mx-auto pt-10">
      <h3 className="text-center font-bold text-2xl">Blogs : {blogs.length}</h3>
      <div className="grid grid-cols-3 gap-4 ">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

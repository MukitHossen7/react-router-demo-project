import { useLoaderData, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const blogDetail = useLoaderData();
  const { name, phone, userName, website, company } = blogDetail;
  const navigate = useNavigate();
  const handleBackBlogs = () => {
    navigate("/blogs");
  };

  return (
    <div className="w-11/12 mx-auto pt-10">
      <div className="flex flex-col items-center justify-center text-center border border-slate-300 rounded-xl p-8">
        <h2 className="font-bold text-2xl">Name : {name} </h2>
        <p className="font-medium">Phone : {phone}</p>
        <p className="font-medium">UserName : {userName}</p>
        <p className="font-medium">Website : {website}</p>
        <p className="font-medium">Company : {company.name}</p>
        <button
          onClick={handleBackBlogs}
          className="btn btn-primary mt-4 font-bold"
        >
          Go Back Blog
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;

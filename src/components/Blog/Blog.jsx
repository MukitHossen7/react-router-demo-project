import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const { name, email, phone } = blog;
  return (
    <div className="pt-10">
      <div className="border border-yellow-400 rounded-xl p-6 space-y-2 text-center">
        <h4 className="font-bold text-2xl">Name : {name}</h4>
        <p className="font-medium">Email : {email}</p>
        <p>{phone}</p>
        <button className="btn btn-primary font-bold mt-5">Blog Details</button>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object,
};
export default Blog;

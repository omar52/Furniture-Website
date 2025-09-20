import MainButton from "../Buttons/MainButton";
import "./BlogCard.css";
const BlogCard = ({ blogs }) => {
  return (
    <>
      {blogs && blogs.length > 0 ? (
        blogs.map((item) => (
          <div
            className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4"
            key={item.id || item.img}
          >
            <div className="card ">
              <img src={item.img} className="card-img-top " />
              <div className="blog-cont">
                <div className="card-body">
                  <h5 className="card-title">
                    {item.title1}
                    <br />
                    {item.title2}
                  </h5>
                </div>
                <div className="cont">
                  <p href="#" className="cost">
                    ${item.desc}{" "}
                  </p>
                  <MainButton className="read">Read More</MainButton>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2>No blogs available</h2>
      )}
    </>
  );
};

export default BlogCard;

import RelatedPost from "./sections/RelatedPost";
import Banner from "./sections/banner";
import Post from "./sections/post";

const Resources = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Banner />
      </div>
      <div className="row">
        <Post />
      </div>
      <div className="row">
        <RelatedPost />
      </div>
    </div>
  );
};

export default Resources;

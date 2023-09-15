import BookSection from "../components/booksection";
import SkillRatingFormUpdate from "./components/SkillRatingFormUpdate";
const UpdateSkill = () => {
  return (
    <section class="content-section white-bg">
      <div class="container k-container">
        <div class="row">
          <div class="col px-0 text-left">
            <h1 class="blue f-55">Rate your Skills</h1>
            <h2 class="red f-30 fn">What you do Best</h2>
          </div>
        </div>
        <div class="row">
          <div class="col px-0 mtop-20 fn">
            <p class="f-16">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
          </div>
        </div>
        {/* dito */}
        <SkillRatingFormUpdate />
      </div>
    </section>
  );
};

export default UpdateSkill;

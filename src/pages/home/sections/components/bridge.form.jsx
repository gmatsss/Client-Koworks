const B_form = () => {
    return (
        <div className="banner-form">
            <form
                //action="https://linkagekoworks.viewourdesign.info/search"
                method="GET"
            >
                <input
                    type="text"
                    name="s"
                    className="banner-search"
                    placeholder="What skills are you looking for?"
                />
                <button type="submit" id="search-btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </form>
            <span>or</span>
            <a
                //href="https://linkagekoworks.viewourdesign.info/post-a-job"
                className="btn-default-red"
            >
                Post a Job - It's Free
            </a>
        </div>
    );
};

export default B_form;

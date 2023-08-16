const BookmarkJobModal = () => {
  return (
    <div
      className="modal fade"
      id="bookmarkJob"
      aria-labelledby="bookmarkJobLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content ptb-40">
          <div className="modal-body text-center">
            <h1 className="f-35 b blue" id="bookmarkJobLabel">
              Bookmark Job
            </h1>
            <div className="kform-container">
              <form className="kform kform-wider">
                <div className="kform-group">
                  <label className="text-left d-block" htmlFor="notes">
                    Notes:
                  </label>
                  <textarea
                    name="notes"
                    id="notes"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="kform-group inline-radio mtop-20">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn-default-red fn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkJobModal;

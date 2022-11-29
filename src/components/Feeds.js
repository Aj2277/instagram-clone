const Feeds = ({ data, randomPhotos }) => {
  //   const { data } = useContext(ImageContext);
  return (
    <div className="feed-container">
      {data.results ? (
        data.results.map((x) => (
          <div className="each-feed" key={x.id}>
            <a href={x.urls.regular} target="_blank" rel="noreferrer">
              <div className="feed-user-info">
                <img src={x.user.profile_image.small} alt={x.user.name} />
                <h4>
                  {x.user.instagram_username
                    ? x.user.instagram_username
                    : x.user.name}
                </h4>
              </div>
              <div className="photo-container">
                <img
                  className="each-feed-photo"
                  src={x.urls.small}
                  alt={x.alt_description}
                />
              </div>
              <div className="feed-footer">
                <h4>{x.likes} likes</h4>
                <h4 className="footer-name">
                  {x.user.instagram_username
                    ? x.user.instagram_username
                    : x.user.name}
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </a>
          </div>
        ))
      ) : randomPhotos ? (
        randomPhotos.map((x) => (
          <div className="each-feed" key={x.id}>
            <div className="feed-user-info">
              <img src={x.user.profile_image.small} alt={x.user.name} />
              <h4>
                {x.user.instagram_username
                  ? x.user.instagram_username
                  : x.user.name}
              </h4>
            </div>

            <div className="photo-container">
              <img
                className="each-feed-photo"
                src={x.cover_photo.urls.small}
                alt={x.cover_photo.alt_description}
              />
            </div>
            <div className="feed-footer">
              <h4>{x.cover_photo.likes} likes</h4>
              <h4 className="footer-name">
                {x.user.instagram_username
                  ? x.user.instagram_username
                  : x.user.name}
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>nothing searched</p>
      )}
    </div>
  );
};

export default Feeds;

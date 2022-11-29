const Stories = ({ userStories }) => {
  return (
    <div className="story-container">
      {userStories ? (
        userStories.map((x) => (
          <div className="each-story" key={x.id}>
            <img src={x.user.profile_image.medium} alt={x.user.name} />
            <p className="story-names">
              {x.user.instagram_username
                ? x.user.instagram_username
                : x.user.name}
            </p>
          </div>
        ))
      ) : (
        <p>Stories loading...</p>
      )}
    </div>
  );
};

export default Stories;

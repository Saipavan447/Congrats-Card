const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-image"
      />
      <h1 className="name">Kiran V</h1>
      <p className="paragraph">
        Vishnu Institute Computer Education and Technology,Bhivmavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

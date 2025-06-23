const Loading = () => (
  <div className="loading-background">
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring-delayed"></div>
      </div>
      <p className="loading-text">Loading weather data...</p>
    </div>
  </div>
);

export default Loading;

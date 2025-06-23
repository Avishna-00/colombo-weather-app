const Error = ({ message, onRetry }) => (
 <div className="error-background">
    <div className="error-container">
      <div className="error-icon">
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </div>
      <h2 className="error-title">Oops! Something went wrong</h2>
      <p className="error-message">{message}</p>
      <button onClick={onRetry} className="error-button">
        Try Again
      </button>
    </div>
  </div>
);

export default Error;

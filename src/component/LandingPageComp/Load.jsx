const LoadingComponent = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loading-container">
          <div className="loading-border"></div>
          <img
            src={img} // Replace with your image URL
            alt="Loading"
            className="loading-image"
          />
        </div>
      </div>
    );
  }
  
  export default LoadingComponent;
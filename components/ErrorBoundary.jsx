import React from "react";
import "../styles/Home.module.css"

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      //logErrorToMyService(error, errorInfo);
      console.log(error,errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <h1 className="labelFindText">Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }
  export default ErrorBoundary
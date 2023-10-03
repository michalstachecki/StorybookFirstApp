import { DefaultFallback } from "../defaults/defaults";
import React from 'react';
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';

export default class ErrorBoundary extends React.Component {
  notyf = new Notyf();
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidMount() {
    this.notyf.error("Error");
  }

  componentWillUnmount() {
    this.dismissAllNotifications();
  }

  onReloadClick = () => {
    this.dismissAllNotifications();
    this.notyf.success("Reload clicked");
  }

  dismissAllNotifications = () => {
    this.notyf.dismissAll();
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      const fallback = this.props.fallback ? this.props.fallback : DefaultFallback;
      return <div>
        {fallback}
        <button onClick={this.onReloadClick}>Reload page</button>
      </div>
    }

    return this.props.children;
  }
}
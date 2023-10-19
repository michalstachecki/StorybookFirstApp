import { DefaultFallback } from "../defaults/defaults";
import React from 'react';
import 'notyf/notyf.min.css';
import * as CustomNotyf from "../defaults/notyfSetup";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentWillUnmount() {
    this.dismissAllNotifications();
  }

  onReloadClick = () => {
    this.dismissAllNotifications();
    CustomNotyf.default.success("Reload clicked");
  }

  dismissAllNotifications = () => {
    CustomNotyf.default.dismissAll();
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
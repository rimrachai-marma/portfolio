// import React from 'react';

// export class ErrorBoundary extends React.Component {
//   state = { hasError: false, error: null };

//   static getDerivedStateFromError(error) {
//     return { hasError: true, error };
//   }

//   render() {
//     if (this.state.hasError) {
//       if (typeof this.props.fallback === 'function') {
//         return this.props.fallback(this.state.error);
//       }

//       return this.props.fallback;
//     }
//     return this.props.children;
//   }
// }

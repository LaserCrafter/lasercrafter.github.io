import { Link } from 'react-router-dom';

function LinkContainer({ children, to, ...props }) {
  return (
    <div {...props} className="link-container">
      <Link to={to}>{children}</Link>
    </div>
  );
}

function MyComponent() {
  return (
    <LinkContainer to="/new-route">
      Go to new route
    </LinkContainer>
  );
}

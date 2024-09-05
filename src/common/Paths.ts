/**
 * Express router paths go here.
 */


export default {
  Base: '/api/v1',
  Users: {
    Base: '/users',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },
} as const;

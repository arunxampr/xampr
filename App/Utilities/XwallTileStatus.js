export const getXwallTileStatus = (activityType) => {
  switch (activityType) {
    case 'EventPlannerActivity':
      return (
        {
          backgroundColor: '#33a',
          icon: 'md-calendar',
        }
      );
    case 'TodoActivity':
      return (
        {
          backgroundColor: '#5a5',
          icon: 'md-checkmark-circle',
        }
      );
    default:
      return (
        {
          backgroundColor: '#fff',
          icon: '',
        }
      );
  }
}

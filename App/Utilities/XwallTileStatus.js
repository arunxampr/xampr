export const getXwallTileStatus = (activityType) => {
  switch (activityType) {
    case 'EventPlannerActivity':
      return (
        {
          backgroundColor: '#32a',
        }
      );
    case 'MeetingActivity':
      return (
        {
          backgroundColor: '#32a',
          icon: 'clock',
          text: 'Dec 31, 11:30 PM',
        }
      );
    case 'TaskActivity':
      return (
        {
          backgroundColor: '#f80',
          icon: '',
          text: 'In Progress',
        }
      );
    case 'TodoActivity':
      return (
        {
          backgroundColor: '#5a5',
          icon: 'playlist-check',
          text: '2/2',
        }
      );
    default:
      return (
        {
          backgroundColor: '#fff',
        }
      );
  }
}

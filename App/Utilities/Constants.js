export const getActivitiesList = () => {
  return [ "BusinessContainer", "CommunityActivity", "ConferenceActivity", "ContainerActivity", "DoctorActivity", "EventPlannerActivity", "EventPlannerProActivity", "EventPlannerTaskActivity", "EventPlannerTaskProActivity", "ForumActivity", "LeaveRequestActivity", "MeetingActivity", "OneToOneActivity", "OrderActivity", "QuestionActivity", "PollActivity", "ProjectActivity", "ProjectManagerActivity","ProjectTaskConsumer", "ServiceOrderActivity", "SiteInvoiceActivity", "SiteVisitActivity", "SubTaskActivity", "SurveyActivity", "SurveyQuestionActivity", "TaskActivity", "TeamManagerActivity", "TimeSheetActivity", "TodoActivity", "WebXampr" ]
}

export const getActivityColor = (activityType) => {
  const activityColors = {
    ForumActivity: '#f43e38',
    MeetingActivity: '#303f9f',
    QuestionActivity: '#39114c',
    PollActivity: '#ffa000',
    ProjectActivity: '#00b79b',
    TaskActivity: '#2196f3',
    TodoActivity: '#4caf50',
  }
  return activityColors[activityType];
}

export const getActivityIcon = (activityType) => {
  const activityIcons = {
    ForumActivity: 'forum',
    MeetingActivity: 'calendar-today',
    QuestionActivity: 'help-circle',
    PollActivity: 'poll',
    ProjectActivity: 'clipboard-check',
    TaskActivity: 'clipboard-text',
    TodoActivity: 'format-list-bulleted',
  }
  return activityIcons[activityType];
}

export const getActivityAssets = (activityType) => {
  return {
    icon: getActivityIcon(activityType),
    iconBackgroundColor: getActivityColor(activityType),
  }
}

export const icons = () => ({
  chat: 'message-text',
  group: 'message-reply-text',
  forum: 'forum',
  meeting: 'calendar-today',
  question: 'comment-question',
  poll: 'poll',
  project: 'clipboard-check',
  task: 'clipboard-text',
  todo: 'format-list-bulleted',
  workspace: 'book-open',
});

export const getActivitiesList = () => {
  return [ "BusinessContainer", "CommunityActivity", "ConferenceActivity", "ContainerActivity", "DoctorActivity", "EventPlannerActivity", "EventPlannerProActivity", "EventPlannerTaskActivity", "EventPlannerTaskProActivity", "ForumActivity", "LeaveRequestActivity", "MeetingActivity", "OneToOneActivity", "OrderActivity", "QuestionActivity", "PollActivity", "ProjectActivity", "ProjectManagerActivity","ProjectTaskConsumer", "ServiceOrderActivity", "SiteInvoiceActivity", "SiteVisitActivity", "SubTaskActivity", "SurveyActivity", "SurveyQuestionActivity", "TaskActivity", "TeamManagerActivity", "TimeSheetActivity", "TodoActivity", "WebXampr" ]
}

export const getActivityIcon = (activityType) => {
  const activityIcons = {
    CommunityActivity: 'message-reply-text',
    ContainerActivity: 'book-open',
    ForumActivity: 'forum',
    MeetingActivity: 'calendar-today',
    OneToOneActivity: 'message-text',
    QuestionActivity: 'help-circle',
    PollActivity: 'poll',
    ProjectActivity: 'clipboard-check',
    TaskActivity: 'clipboard-text',
    TodoActivity: 'format-list-bulleted',
  }
  return activityIcons[activityType];
}

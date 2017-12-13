export const getActivitiesList = () => {

  return [ "BusinessContainer", "CommunityActivity", "ConferenceActivity", "ContainerActivity", "DoctorActivity", "EventPlannerActivity", "EventPlannerProActivity", "EventPlannerTaskActivity", "EventPlannerTaskProActivity", "ForumActivity", "LeaveRequestActivity", "MeetingActivity", "OneToOneActivity", "OrderActivity", "QuestionActivity", "PollActivity", "ProjectActivity", "ProjectManagerActivity","ProjectTaskConsumer", "ServiceOrderActivity", "SiteInvoiceActivity", "SiteVisitActivity", "SubTaskActivity", "SurveyActivity", "SurveyQuestionActivity", "TaskActivity", "TeamManagerActivity", "TimeSheetActivity", "TodoActivity", "WebXampr" ]

}

export const getActivityImageSource = (activityType) => {

  let activitiesImages = {
    BusinessContainer: require('../Images/activity_icons/BusinessContainer.png'),
    CommunityActivity: require('../Images/activity_icons/CommunityActivity.png'),
    // "ConferenceActivity": require('../Images/activity_icons/ConferenceActivity.png'),
    ContainerActivity: require('../Images/activity_icons/ContainerActivity.png'),
    // "DoctorActivity": require('../Images/activity_icons/DoctorActivity.png'),
    EventPlannerActivity: require('../Images/activity_icons/EventPlannerActivity.png'),
    // "EventPlannerProActivity": require('../Images/activity_icons/EventPlannerProActivity.png'),
    // "EventPlannerTaskActivity": require('../Images/activity_icons/EventPlannerTaskActivity.png'),
    // "EventPlannerTaskProActivity": requirerequire('../Images/activity_icons/EventPlannerTaskProActivity.png'),
    // "ForumActivity": require('../Images/activity_icons/ForumActivity.png'),
    // "LeaveRequestActivity": require('../Images/activity_icons/LeaveRequestActivity.png'),
    // "MeetingActivity": require('../Images/activity_icons/MeetingActivity.png'),
    // "OneToOneActivity": require('../Images/activity_icons/OneToOneActivity.png'),
    // "OrderActivity": require('../Images/activity_icons/OrderActivity.png'),
    // "QuestionActivity": require('../Images/activity_icons/QuestionActivity.png'),
    // "PollActivity": require('../Images/activity_icons/PollActivity.png'),
    // "ProjectActivity": require('../Images/activity_icons/ProjectActivity.png'),
    // "ProjectManagerActivity": require('../Images/activity_icons/ProjectManagerActivity.png'),
    // "ProjectTaskConsumer": require('../Images/activity_icons/ProjectTaskConsumer.png'),
    // "ServiceOrderActivity": require('../Images/activity_icons/ServiceOrderActivity.png'),
    // "SiteInvoiceActivity": require('../Images/activity_icons/SiteInvoiceActivity.png'),
    // "SiteVisitActivity": require('../Images/activity_icons/SiteVisitActivity.png'),
    // "SubTaskActivity": require('../Images/activity_icons/SubTaskActivity.png'),
    // "SurveyActivity": require('../Images/activity_icons/SurveyActivity.png'),
    // "SurveyQuestionActivity": require('../Images/activity_icons/SurveyQuestionActivity.png'),
    // "TaskActivity": require('../Images/activity_icons/TaskActivity.png'),
    // "TeamManagerActivity": require('../Images/activity_icons/TeamManagerActivity.png'),
    // "TimeSheetActivity": require('../Images/activity_icons/TimeSheetActivity.png'),
    TodoActivity: require('../Images/activity_icons/TodoActivity.png'),
    // "WebXampr": require('../Images/activity_icons/WebXampr.png'),
  }

  return activitiesImages[activityType];
}

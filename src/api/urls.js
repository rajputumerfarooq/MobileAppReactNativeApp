export const API_BASE_URL = "https://du9sycvyuh.execute-api.eu-central-1.amazonaws.com/dev";

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const API_LOGIN_URL = getApiUrl ("/user/login")
export const API_ALL_APPOINTMENT_FOR_SCHEDULAR_URL = getApiUrl ("/scheduler/getAllAppointments")
export const API_ALL_APPOINTMENT_FOR_DASHBOARD_URL = getApiUrl ("/playerdashboard/getUserPlanner")



export const API_GET_CONNECTED_USERS = getApiUrl("/teams/getconntecteduser")
export const API_GET_CONNECTED_USERS_IMAGES = getApiUrl("/user/image")
export const API_SAVE_USER_LOCATIONS = getApiUrl("/user/adduserLocation")
export const API_GET_COUNTRIES = getApiUrl("/user/countries")


export const API_verifyEmail= getApiUrl("/user/validate/data")
export const API_REGISTER_USER= getApiUrl("/user/register")

export const API_GET_STATES = getApiUrl("/user/states")
export const API_GET_CITIES = getApiUrl("/user/cities")
export const API_GET_ROLES = getApiUrl("/user/roles")
export const API_GET_STRIKERS = getApiUrl("/notifications/getstriker")
export const API_GET_COACHES = getApiUrl("/notifications/getcoaches")
export const API_GET_PLANNER_SUBCATEGORIES = getApiUrl("/planner/getPlanSubCategories")

export const API_GET_PLANNER_EXERCISES = getApiUrl("/planner/getplanexcercises")

export const API_GET_Create_Appointment = getApiUrl("/planner/createappointmentschedular")

export const API_GET_Planner_BodyTypes = getApiUrl("/planner/getplanbodytypes")

export const API_GET_Planner_EquipmentTypes = getApiUrl("/planner/getplanequipmenttypes")
export const API_GET_Planner_Locations = getApiUrl("/planner/getplanlocations")

export const API_GET_ALLOPENTASKS= getApiUrl("/scheduler/getallopentask")

export const API_GET_UPDATE_SCHEDULAR_TASKS= getApiUrl("/scheduler/updateschedulartasks")

export const API_DELLETE_SCHEDULAR_TASK = getApiUrl("/scheduler/deleteSchedularOpenTasks")




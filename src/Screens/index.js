


//Auth Exports
export {default as Splash} from './Splash'
export {default as Login} from './Login'
export {default as Signup} from './Signup'
//Forget Password Exports 
    export {default as EmailVerification} from './Auth/ForgetPassword/EmailVerification'
    export {default as PasscodeVerification} from './Auth/ForgetPassword/PasscodeVerification'
    export {default as PasswordChange} from './Auth/ForgetPassword/PasswordChange'
 //Account Verification
 export {default as AccountVerification} from './Auth/AccountVerification/AccountVerification'


//Coach Exports
export {default as CoachDashboard} from './Coach/Dashboard'
export {default as CoachNotification} from './Coach/Notification'
export {default as CoachProfile} from './Coach/Profile'
export {default as TeamMembers} from './Coach/Dashboard/Mobile/TeamMembers' //This screen is a dependent screen
//Striker Exports
export {default as StrikerDashboard} from './Striker/Dashboard/Dashboard'
export {default as Notification} from './Striker/Notification'
export {default as Profile} from './Striker/Profile'







// STRIKER Planner Exports 
export {default as Planner} from './Common/Planner/Main'
export {default as Category} from './Common/Planner/Golf/Categories'
    //Golf Exports
export {default as GolfSubCategories} from './Common/Planner/Golf/SubCategories'
export {default as GolfExercises} from './Common/Planner/Golf/Exercises'
export {default as GolfExerciseDetails} from './Common/Planner/Golf/ExerciseDetails'
    //Athletic Exports
export {default as AthleticSubCategories} from './Common/Planner/Athletics/SubCategories'
export {default as AthleticBodytypes} from './Common/Planner/Athletics/BodyTypes'
export {default as AthleticEquipmentTypes} from './Common/Planner/Athletics/EquipmentTypes'
export {default as AthleticExercises} from './Common/Planner/Athletics/Exercises'
export {default as AthleticExerciseDetails} from './Common/Planner/Athletics/ExerciseDetails'
export {default as AthleticViewExercises} from './Common/Planner/Athletics/ViewExercises'






// Exports 
export {default as CoachPlanner} from './Coach/Planner/Main'


    //Golf Exports
export {default as CoachGolfSubCategories} from './Coach/Planner/Golf/SubCategories'
export {default as CoachGolfExercises} from './Coach/Planner/Golf/Exercises'
export {default as CoachGolfExerciseDetails} from './Coach/Planner/Golf/ExerciseDetails'













//Common Exports
export {default as Contact} from './Common/Contact'
export {default as AddNewContact}  from './Common/Contact/Mobile/AddNewContact'
export {default as Messenger} from './Common/Messenger'
//Open Task Stack
    export {default as OpenTasks} from './Common/OpenTasks/Main'
    export {default as OpenTasksDetail} from './Common/OpenTasks/OpenTasksDetail'
    export {default as OpenTasksModify} from './Common/OpenTasks/OpenTasksModify'
//schedular stack
    export {default as Schedular} from './Common/Schedular/Schedular'
    export {default as SchedularTaskDetail} from './Common/Schedular/TaskDetail'
    export {default as SchedularWorkout} from './Common/Schedular/WorkOut'
    
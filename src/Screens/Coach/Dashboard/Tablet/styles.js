import { StyleSheet, Platform, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#FFFFFF",
    },
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 15,
        padding: 16,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#FFFFFF",
        alignItems: "flex-start",
        backgroundColor:"#FFFFFF",
      
    },
    avatar: {
        width: 55,
        height: 55,
        borderRadius: 25,
    },

    content: {
        flex: 1,
        marginLeft: 16,
        marginRight: 0,
    },
    mainContent: {
        marginRight: 60,

    },
    memberImage: {
        height: 30,
        width: 30,
        marginRight: 4,
        borderRadius: 10,
    },
    separator: {
        height: 1,
        backgroundColor: "#CCCCCC",

    },
    countMembers: {
        color: "#20B2AA",
    },
    timeAgo: {
        fontSize: 12,
        color: "#696969",
    },
    groupName: {
        fontSize: 23,
        color: "#1E90FF",
    },
    groupMembersContent: {
        flexDirection: "row",
        marginTop: 10,
    },
    scrollContainer: {
        width: "100%",

        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },

    scroll: {
        width: "100%",
        marginTop: 0,
    },

    boxContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        paddingTop: 40,
        position: "relative",
        width: "100%",
    },
    boxHeader: {
        paddingTop: 20,
        alignItems: "center",
        height: 30,
    },
    text: {
        marginBottom: 5,
        flexDirection: "row",
        flexWrap: "wrap",
        color: colors.text,
        fontSize: 18,
        fontWeight: "bold",
    },
    action: {
        flexDirection: "row",
        marginBottom:10,
        padding: 5,
        justifyContent: "center",
        alignItems:"center",
        borderColor: colors.border,
        borderWidth: 2,
        width: 350,
        borderRadius: 15,
    },
    header: {
        padding: 5,
        margin: 5,
        borderRadius: 15,
        justifyContent: "flex-start",

        flexDirection: "row",
        borderWidth: 3,
        borderColor: colors.border,

        width: 100,
    },
    signIn: {
        width: "90%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    box: {
        borderRadius: 30,
        alignSelf: "center",
        alignItems: "center",

        height: 160,
        width: Platform.OS === "android" ? 320 : 360,
        marginBottom: 10,

        flexWrap: "wrap",

        paddingRight: 10,


        borderColor: colors.boxborder,
        borderWidth: 2,
    },
    boxHeader: {
        paddingBottom: 20,
        paddingTop: 20,
        alignItems: "center",
    },
});

// Exporting the object
export default styles;
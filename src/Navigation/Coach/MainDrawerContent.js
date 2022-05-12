import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

// Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//redux
import { useSelector,useDispatch } from 'react-redux';
import { SetUser } from '../../Store/userReducer/type';

import { SetSelectedUser } from "../../Store/selectedUserReducer/type";

//Navigation
import NavigationStrings from '../../Constants/NavigationStrings';


export function DrawerContent(props) {

    const paperTheme = useTheme();
    const [isDarkTheme, setDarkTheme] = React.useState(false);

       //redux

  const { user } = useSelector(state => {
    return {
      user: state.userReducer.user
    }
  })
//redux
  
const { selecteduser } = useSelector((state) => {
    return {
      selecteduser: state.SelectedUserReducer.selecteduser,
    };
  });


  const dispatch = useDispatch();
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                               source={user.profilePicture? { uri: user.profilePicture} : 'https://api.adorable.io/avatars/50/abott@adorable.png'}

                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>{user.firstName} {user.lastName}</Title>
                                
                                <Caption style={styles.caption}>{user.roleName} @{user.userName}</Caption> 

                            </View>
                        </View>

                        {/* <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View> */}
                        <View style={styles.row}>
                            <View style={{borderWidth:1,width:'90%'}}>
                                
                            </View>
                          
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                      
                    <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="lock"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Federation Dashboard"
                           // onPress={() => { props.navigation.navigate(NavigationStrings.COACH_DASHBOARD_STACK) }}
                        />
                         <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="lock"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="club Dashboard"
                           // onPress={() => { props.navigation.navigate(NavigationStrings.COACH_DASHBOARD_STACK) }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Coach Dashboard"
                            onPress={() => { props.navigation.navigate(NavigationStrings.COACH_DASHBOARD_STACK) }}
                        />
                        
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Contact Page"
                            onPress={() => { props.navigation.navigate(NavigationStrings.CONTACT) }}
                        />
                      <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="calendar"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Planner"
                            onPress={() => { 
                                
                                selecteduser==undefined? 
                                alert("Please Select Any Striker")
                                : props.navigation.navigate(NavigationStrings.PLANNER_STACK, { screen: NavigationStrings.PLANNER,initial: false, })
                               

                          
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="calendar"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Schedular"
                            onPress={() => { selecteduser==undefined? 
                                alert("Please Select Any Striker")
                                : props.navigation.navigate(NavigationStrings.SCHEDULAR) }}
                        />

<DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="lock"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Reporting"
                           // onPress={() => { props.navigation.navigate(NavigationStrings.COACH_DASHBOARD_STACK) }}
                        />
                     <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="lock"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Statistis"
                            onPress={() => { props.navigation.navigate(NavigationStrings.STATISTICS) }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="lock"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Diaries"
                           // onPress={() => { props.navigation.navigate(NavigationStrings.COACH_DASHBOARD_STACK) }}
                        />
                     <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="lock"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Tests"
                           // onPress={() => { props.navigation.navigate(NavigationStrings.COACH_DASHBOARD_STACK) }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="lock"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Coach Corner"
                           // onPress={() => { props.navigation.navigate(NavigationStrings.COACH_DASHBOARD_STACK) }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="lock"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                           // onPress={() => { props.navigation.navigate(NavigationStrings.COACH_DASHBOARD_STACK) }}
                        />






                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch
                                        value={paperTheme.dark}
                                        value={isDarkTheme}
                                    />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {   
                        dispatch({ type: SetUser, payload: undefined });
                      dispatch({ type: SetSelectedUser, payload: undefined});
                    } }
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {

     //  marginTop: 25,
        
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

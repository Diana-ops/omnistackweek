import React from 'react';
import { View } from 'react-native';
import { webView } from 'react-native-webview'

function Profile({ navigation }){
	const githubUsername = navigation.getParam('github_username');
	return <webView style={{ flex: 1}} source={{ uri: `https://github.com/${githubUsername}`}} />
}

export default Profile;

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    ListView,
    TouchableOpacity,
} from 'react-native';
import VideoControls from 'react-native-video-controls'
{/*引入渐变色API*/ }
import LinearGradient from 'react-native-linear-gradient';
{/*引入导航API*/ }
import TabNavigator from 'react-native-tab-navigator';
import { Navigator } from 'react-native-deprecated-custom-components';
{/*引入全局component*/ }
let Dimensions = require('Dimensions');
let { width: winWidth, height: winHeight, scale: winScale } = Dimensions.get('window');
let WH = winHeight / 2295;
let WW = winWidth / 1243;
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
class zhuyoua extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container} >
                    <View style={{ paddingTop: 80 * WH, paddingLeft: 100 * WW, paddingRight: 100 * WW }}>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between'
                        }}>
                            <TouchableOpacity onPress={() => { this.popTopHome() }}>
                                <Image source={{ uri: 'zijiaochengh' }} resizeMode='contain' style={{ width: WW * 100, height: WH * 100 }} />
                            </TouchableOpacity>
                            <View>
                                <Text style={{ alignSelf: 'flex-end', fontSize: WW * 53, fontWeight: 'bold', color: 'rgba(72,89,109,1)' }}>
                                    园林专家
                        </Text>
                                <Text style={{ fontSize: WW * 28, color: 'rgba(72,89,109,1)' }}>
                                    兰州方言讲景点
                        </Text>
                            </View>
                        </View>
                        <Image source={{ uri: 'http://p7ik6bm59.bkt.clouddn.com/%E5%93%88%E5%B0%94%E6%BB%A8%E5%A4%A7%E5%89%A7%E9%99%A2.jpg' }} resizeMode="contain" style={{ height: 820 * WH }} />
                        <View style={{ width: winWidth * 0.8, marginTop: 10, height: winHeight * 0.2 }}>
                            <VideoControls source={{ uri: "http://p7ik6bm59.bkt.clouddn.com/%E5%93%88%E5%B0%94%E6%BB%A8%E5%A4%A7%E5%89%A7%E9%99%A2.m4a" }}
                                disableBack={true}
                                disableFullscreen={true}
                                disableVolume={true}
                                showOnStart={false}
                                resizeMode="cover"
                                paused={true}
                                posterResizeMode="cover"
                                poster="http://p7ik6bm59.bkt.clouddn.com/%E5%93%88%E5%B0%94%E6%BB%A8%E5%A4%A7%E5%89%A7%E9%99%A2.jpg"
                            />
                        </View>
                        <Image source={{ uri: 'zizhuyouc' }} resizeMode="contain" style={{ height: 1024 * WH }} />

                    </View>
                </View>
            </ScrollView>
        );
    }
    popTopHome() {
        this.props.navigator.pop();
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});
module.exports = zhuyoua;
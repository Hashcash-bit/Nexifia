// Important React dependencies
import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native'

import { Svg, Path } from 'react-native-svg';

const Landingpage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                {/* <Image source={require('../assets/NEXIFIA.png')} style={styles.header} /> */}
                <Svg height="100" width="100">
                <Path d="M30.4559 34H22.2479L8.51994 13.216L8.51994 34L0.311938 34L0.311938 0.303999H8.51994L22.2479 21.184L22.2479 0.303999H30.4559L30.4559 34ZM44.6137 6.88L44.6137 13.696H55.6057V20.032L44.6137 20.032V27.424L57.0457 27.424L57.0457 34L36.4057 34L36.4057 0.303999L57.0457 0.303999V6.88H44.6137ZM83.0144 34L76.1504 23.68L70.1024 34H60.7904L71.5904 16.864L60.5504 0.303999L70.1024 0.303999L76.8704 10.48L82.8224 0.303999L92.1344 0.303999L81.4304 17.296L92.5664 34L83.0144 34ZM104.895 0.303999L104.895 34H96.6869L96.6869 0.303999L104.895 0.303999ZM132.779 0.303999V6.88L119.051 6.88V13.984L129.323 13.984V20.368H119.051V34H110.843V0.303999L132.779 0.303999ZM145.301 0.303999V34H137.093V0.303999L145.301 0.303999ZM172.225 28.048H159.649L157.633 34H149.041L161.233 0.303999L170.737 0.303999L182.929 34L174.241 34L172.225 28.048ZM170.113 21.712L165.937 9.376L161.809 21.712H170.113Z" fill="#000"/>
                </Svg>
            </View>
            <View style={styles.content}>
                <Image source={require('../assets/phone.png')} />
            </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#131417',
      },
      title: {
        height: 100,
        // backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
      },
      header: {
        paddingTop: 0,
        marginTop: 50,
      },
      content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -80,
      },
      image: {
        width: 300,
        height: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 100,
      },
      button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#582FFF',
        justifyContent: 'center',
        alignItems: 'center',
      },
      linearGradient: {
        flex: 1,
      }
    });
export default Landingpage

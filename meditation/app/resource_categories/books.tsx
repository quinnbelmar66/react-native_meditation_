// Modal screen setup


import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity,Linking } from 'react-native';
import { Text, View } from '@/components/Themed';
import { ExternalLink } from '@/components/ExternalLink';
import React from 'react';
import Colors from '@/constants/Colors';

export default function Breathing_TechniquesScreen() {

  const openURL = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  }

  return (


  
    <View style={styles.container}>
      <Text style={styles.title}>Books</Text>
      <View style={styles.separator} lightColor=" #eee" darkColor="rgba(255,255,255,0.1)" />
      
      <Text style = {styles.description}>
        Books on general wellness encompass a wide range of topics
        aimed at enhancing one's health and well being across
        multiple dimensions. These books provide insights to help individuals improve their quality of life, manage stress, cultivate
        a positive mindeset, maintain physical health, and achieve personal growth.

      </Text>      
        <TouchableOpacity
          style={styles.helpLink}
          onPress={() => openURL("https://www.amazon.com/Secret-Rhonda-Byrne/dp/1582701709")}
          >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for The Secret (Book and Movie) by Rhonda Byrne - Focuses on the law of attraction.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.helpLink}
          onPress={() => openURL("https://www.amazon.com/The-Telomere-Effect-audiobook/dp/B01MYPLF2X/ref=sr_1_1?crid=30IRPCSXFWEFA&dib=eyJ2IjoiMSJ9.M7l0UCzXNayBlpT7C8Hm6Y4w4rAsM962dswxwKWW8mjXauvphShGBaa-7c4ThyOhx5ibfXhSGY646lHZC9nI8SrJ5SXAgh9TkKrVgQk-nKqjY-F3ps9lGPQ2gyTK-PWsKHOy8wSSG4dxy9lR_hMJM_u1KTa0b2DiMxaEmkjrHlL-atK5W6Cv3yNYbwiZZeKxI8ROzBlSqWteFQsEj88VheCfa9kqBJZMX-CClyfz-GA.lDQj4knixjOVLgSu4QWBpRs5DF73IrEW3qIvEmVku5I&dib_tag=se&keywords=the+telomere+effect&qid=1708315091&s=books&sprefix=the+telomere+effec%2Cstripbooks%2C117&sr=1-1")}
          >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for The Telomere Effect - Discusses the impact of lifestyle on aging and health.

          </Text>
        </TouchableOpacity>
      

      
        <TouchableOpacity
          style={styles.helpLink}
          onPress={() => openURL("https://www.amazon.com/How-Not-Die-Discover-Scientifically/dp/1250066115/ref=tmm_hrd_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.vmw_g4q-7tUmP5JlaDNJHi6fYu1E3tEByj2roP114qDNr7gUq4LFD-aiDTno56zSGNMw3nJZ2NHcz4bdS8zUQLWnxdK2GRQCpoFGv9hS2uqDIcxaUSQtGqgXY093I7-XN5iBUnnztTzVHPBUHd8uP4owg0A8tiTTG7FYjQX-mBcFU8_R68_MORpUveV_JfmO0AqBgUAnff4_IMEGc0j43uOmCDFnhPsVlVF1lpoo0Lw.H13pkpyxDgrLQsOlY6H3NyK2ChfYOLuBl_e2JGNnPRM&qid=1708315145&sr=1-1")}
          >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for How Not to Die by Dr. Michael Greger - Offers nutritional advice to prevent and reverse disease

          </Text>
        </TouchableOpacity>
  


      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description:{
    fontSize:13,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 10,
    paddingHorizontal: 20, 
    backgroundColor: 'orange', 
    borderRadius: 10, 
    marginTop: 10, 
  },
  helpLinkText: {
    color: 'white', 
    textAlign: 'center',
  }
});

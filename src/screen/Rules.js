import { StyleSheet, Text, View,ScrollView } from "react-native";
import { i18n } from "../lib/i18n";

export default function Rules() {
    

    return (        

        <View style={styles.container}>    
        <ScrollView>  
            <Text style={styles.text}>
            {i18n.t('rules_privacy_content_collect_data')}
             </Text>   
            <Text style={styles.text}>
            {i18n.t('rules_privacy_content_share_voluntary')}
             </Text>   
            <Text style={styles.text}>
            {i18n.t('rules_privacy_content_storage_security')}
             </Text>  
            <Text style={styles.text}>
            {i18n.t('rules_privacy_content_user_rights')}
            </Text>   
            <Text style={styles.text}>      
            {i18n.t('rules_privacy_content_compliance')}
            </Text> 
            <Text style={styles.text}>   
            {i18n.t('rules_privacy_content_modifications')}
            </Text>
             <Text style={styles.text}>     
                {i18n.t('rules_privacy_content_version')}
            </Text>
        </ScrollView>
        </View>        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      alignSelf: 'center',
      marginTop:20,
      marginBottom:20,
      fontSize:18,
      textAlign:'left',
      padding:15
    }
  });
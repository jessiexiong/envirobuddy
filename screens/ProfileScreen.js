import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar,ScrollView, SafeAreaView } from 'react-native';
import {
  Avatar, Caption, Title, TouchableRipple
} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* for the avatar, name & caption */}
      <View style={styles.userInfoSection}> 
        <View style={{flexDirection: 'row',}}>
          <Avatar.Image
          style=
              {{
              overflow: "hidden",
              borderWidth: .5,
              borderColor: "black"}}
          source={{
            uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBAVEBAVDRIbDRUVDRsQEA4SIB0iIiAdHx8kKDQsJCYxJx8fLTstMSw3MDAwIys9QD84NzQ5Qy0BCgoKDQ0NFQ8PDysZFRkrKysrNy83Ny03LTctKystKy0tKy0zKystLS0rLS0tLSsrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABAEAABAwEFBQUFBgQFBQAAAAABAAIDEQQFEiExBkFRYZETIjJxgUJSobHBBzNi0eHwFHKCkhUjc6LxJDRDU9L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQEBAAICAgICAgMAAAAAAAAAAQIRITEDQRJhE1EiMgQUgf/aAAwDAQACEQMRAD8AgQ88T1SjXHieqSCbTXnEzV1TwbmuR0JONx4nqlg88T1Valvx+kbQOFcz0XG2O2T6h2H8RwN6J6G09PesUfikz4A4ilbuvETAluIUNM1BWnZx0UT5HyAloHda3LUb042X0d/MjU12W7tZWk8T1RwTxPVEajhSoYOPE9V3EeJ6oq6gDBx4nqhiPE9VxBAGDjxPVGDjxPVEC6gDhx4nquhx4nqiLoKCHxHj8UMR4nqi1QqgOlx4/FFLjxPVAoqogLjxPVEc48T1XSUUlIxS48T1SbnHieqOUk8pkTe48T1XFxyCAqLLBap83HCPxGg6BSVk2cjFDI4vPAd0KQbOGhoI9kFKNnLmvLciKYd6N05DqyWGOPwMa3nTPqnBlaK1IUPC1z3gueThkblWg6Jvfc5BfhJBa/UHjxS1u9jpKXtIH2aYitMO/wBFDbLHxjmE7sU/aWGYkkkNeHE7yAmmy2r/AE+qfUpe1lajAorUYKFOhdquIVTDtV2qKuVQB6roKTqhiQCtV0FJgroKCKVQqiArtUwMSikoEohKABKISg4qMtV6tZPHBqXeI+7wTg2kSUm4oxKTcUARyCK5BBIK9iT2LQSC4DRSV0wlrJRQ93DrvSLbAZX2Z1aBobXnorTDYw3F+KmijLLXDTDHfKmGVwnhNTnIMQrlrT5KRvCynHIQK1c3dWvop/8AwiCocWVINQSdCnJjHBL8n0r4KzYbIY7LaAQRVshzFPZUbst4pPT6q2XnIxsUgc5rSY3gVcBXJVPZXxSeQVy7lrLKasWcLqAXVJuIFK2aB0jgxoqTzUo24SD/AJjxhqPCc6b0zkt6iDLkjJamt1cB/UoDbi+OxlfZ4CRQ5uIo6hAoP1VGknc41JJO/NaY4bZ5ZaaZJfcDTQytr/NX5JSC9oX+F4PWizKPNKxSuYatJB86Kvxz9p+d/TVmSAgEGoKOCqJd9/uipjzB1pqrZd15xzAFjgeI3hRcbFzLZ5HOC5zNHDUcRuKWUZetnc4CSLKVmbPxje0pa7bwZOzE3IjJ7d7DwS0N+j1xTRttjc8xh4Lx4mh2YTa/7aYYHuaaOpRvIneqNdE5bPE4H/yAHmDkfmnMdxNy1dNCtEwa0uJoA0k+QVJuqR09sa86l5ceQH7AU1tVa8EBaDm91PTU/vmmex9lyfKRr3W/M/RPHiFebpaCURy5VFJUtBXlBFcUE0oyzbQQRtYCS4hoqA3812XbUexET/M+nwCZR3DENS53rRPYbrhbpGPXNKzFUuUNZNrrU7Jga3yZU/GqbutNvm1dKRwqWN+iscETRo0DyCctCW5OofN9qnHcFof4iG+bqqeuO6nQYi54dUbhopJoRwUbGtDokkgaCSaAIFyrm1t5dnHgb4nZeQ3pSbot0k7g2jxWtzGghvZup3R/c41yGXxS20e2rI2lkZD3mtACcuZPD4+Sy+OdzSS1xBIoSNSjsHqVt+OJnlyk1BrfaZJnmSQlzicym7I+Kl7BdjpSrbd+yLHNBdqi+SYnj4ssuVEjiCUEJOVK+i0mDYyL3Sn8WycbW0ApXU0zUXzRf+tkyW0wloFeOm8JS7Z3xuDmGh+aud/bGOALozXkqTNG6J1CKEFXjnMumWfjyxvMaDdd4iVgOjqZjgVDXuXWS0Nnj8En3jdxO/8ANQ92W3A8Or3Sc1Y75Z29mdTNzRibTiP0S1qp7iP2nvNskLWje9rm/jZQ5+hyKgbrFZ4gP/az5pF9oBiDDq19WeR1HWnxTjZ4/wDUR/1fIqtajPe6f7U2gvmbGM8LdPxH9hWawQCKNkY9lufM71UrCe1tpccwJHH0Gn0Vmslqx4nDw4qM501PWvRTl1ppj3s+L1wuUVe15dizLxnwD6prabeYIWAmsrm786E6kqZFXJLPtTcfZg1dSpA9kc0FH3PDhjxOze/N5OvJBOlEiRmjNRHIzSs1nUSVCQiKVBSUVaV2qICuoDkj6fVZxf8AbO1mefZBo3yCuW0Fs7OFxrmRRqzuVy28c9ss6DOKk7pspleGj1UazQK37NxsiaHyGhJyyzVZ3UPx47vKz3PdYaBluVmsUSr1lvyLQseBxw5Kdu684nEYXdRRclmXb0cLjOIn7PEKJXsQiwzNIFM0YSgHM5KLGsN7dZQWnJZTtvc1CZGjzWszWuPe4D1VZ2ls7XxvoQcjpmjx245M/LjMsWMQHUKWuu8zC4VNY3eL8PNRkgwvI4OKAFQRwXf28q8OXvZxHK4NNWHvRkaFpQueXDJi4RvP+0pvJNVoYdWu7vIHUfvmi2d1MX+m/wCSfpHs6uydzS4MHfeMLT7tVb4sMbABk1rfkqVdkgbI1x0Dqqdva04mMYw1Mh+CnKcqxujZs/bSumf92zMD5D1S1hiNolMsmgOm7kE0nAGGCPMA94+/Ip+zRhjA0bhmeaKc5O8S4oa13uB3Y+8eO704oKdU9xYCc0dqIjtWbSl40sEjElQUjHXHnIoJKc5ICo7UWnFlwNB9VWFJ33NikIGgy9VG0XRjxGV7P7qsvaysZzzWiNu6OMBzwAAMq6BVXYWz45yTo1i1A3eyduBwDhwIqsPLlzp1/wCPhvHaAs+01mjNKFwBoS1tQp+77TZpxjhoeIpQhJO2ThAp2IIrXJ2HNPrJc4aGUBYGAhtSPDwOWaztx1xXRPlvmcHdjBAoDvRLeRoSR5FO7vYMRFU2vuwOdUtJ0zoM1PtohRZrGXf5ktCToZcPyXLyudjYzJZ3mh172IFNbHspEXkuc4kk5OjxDP1UxYdmnQghk7nR+65o+arLU6rOS3vFjF6RFszxvxJpWjhwIU7tdZ8FqkFKZj5KAn0BXVjdx5uc1lSNqbQ1SOKnROpRiaOITQqmdSViirA87zK0D9+qTlmcx5acnMDmj8Jqa/VL2c0sx/n+oTefvOJ1c+Vx+KIElcNn1kO7Jn1KUvm1mojaf56fJEtdq7FjY2eLDrw5otjYGN7STU+Aaknj5qfs/o5u+xiMdpJTFz0Z+qC7FC6Q4pch7LPzQStCxVR2olEYBZtjiIpQJKMJUJGOEpJY3GJ8mlGEty1oj2KDG4DdvUjecsgjcyGIuOEip7rB11St5DFbQO8a8SkmhOZx33bxiKQAzouliuf2dNGKU7+6tSu0AUWV7AvzkG+rfqtEsVpPkuXyf2eh/j3+EWsPBCjbxtzAC0Oz4BMZrxqMLT5ngovtAx5LqkEa0qs5HRpY7mdX6lSdoextMRpnkqxd154MhpzUjbLY2dhaGnFlQ0yCKetpljWHPIpTsqjhwVXsVudG7A45eyp6K8Bh9ErU2X0xz7TGAW11N8TCfPNUuQ5eSs23NtE1unI0aQ0egz+NVWHaFdnj/rHm+a7yoQCtRxCazMonllHeHkUa1Q19QrY64E7akMbBvcSfKqFkIa50h0bXDzcU1ANQDuyS4ZiOHQYiT+aCL2YBxMsmYB0993BS1njJPaP8Xsj3B+aaWKHEQ4ijG/dD6qSCi1UHBQXAupBK1PE/3D8ko1zuJ6NVSErveP8AcjC0PHtu/uKrStrixzuJ/sH5pVpdz/s/VU5lvlGkjutU6gviYe1i82pfEfJodyxGhcd592if29tYnCtAWOHwSV2sIjbXXCMXmlbWRhJOgH/Kw9tfTDLSKPeODykXbil7X43eeaRcN66mFSez14/w8zXnwHJ/IcVq9ika6hBqCKjmsTBoeSsezu0T7OQx5Loq93iz9Fj5fHvmOjweX48Vodvs8jamIiu4HRwTexWuSQUMYDxXE3FQ5cOKWst4NkaCDUU3JC1wd6oz4hZYz9u/H+XtKRRyV/7c1Aqe9lRL2m9TCRGIMch3NfUt5ngoxlqJ3OzFCO2dQjyqpKzsGHQDyySykjXLHU7IPY+RwJGE666cly9bxFnge958Lcs9SkbzvmKzgue4AfErNdoL9ktsgaKtjB7jePMowwuV+nJ5fLMZ3yj5pS8ukOrnOJ8yUi8UCXyOQ0AoOaJONBzXXHn0LOzMFST7qnDcRjcWHNrg3EBzySdBjFBRpEeXoKrTdk4hJC0bg0fNRldHIya12bR1NcnciuWSzYnEHIV73PktctlxQzSRskjBxOcHEd11aHOo8q+qSOxEcAJaHSCpNTSvSieOe+CuOlAY0biOqOBzHVTl4XZG0ZNzUUbKfdHUo0WyNF1GNm/D/uQRoIdBWg7HPrlICObKfVLRbHAZySk8mtonuHqqjVPbmhxzxt3GRvTUpS/GWZhbHACXA995dWvIKR2OsZNoa7Dk1riPPT6ot4EnLQ4cgo6/7UGQyE7mHqpuKyEjNVL7RZeys4jB7z3Af0ipP0WWOF9ruTLLU6rieJQizIG4Vr5BEmOfqnEUdCeBafkt2Zu4VKUjaluxoR/KnVjsLn1DQXGmg80HIktn7e+Ije3eFfLJamPaDr81TbusRAo5paRuIoVMwRFuhosMu3Z4crIs8LYq1oNU0ve9WsBbHm7lo1Q73P3k9U9u3Z2a094gxxbydXeSn4/Kts/NqKNewfKXSOJLWjM8+Ch3vDG4W+I+I72jgrvtuyOBrYI8gMzkqEG4iV0YzXDzs8t3ZxDk0JzDCHtdx9mmtTp8adUixuSdXaO+PPJKlCtm7jnNkFHaOqKUNfkr/sFbg0CF5oHOd2Z9fCeaaxWCG2swvFJ2tycMi7nz/VQYilgcWHLA/Su/cQovPCumo9lW1xAaNYXO5ZEBS9veA2g1Ph5KD2QmMsTp3klziB0FE+nmL5CfZBp0WfsycVibTMDokrXcFneKGMV4gYSOikYjlXonMbD606J7sSoF57JPZUxd8cD4/wBUFovYg0FKoJ/IaU55AqqftdfBazs4zm5xDyNRy+KebU3/ANiMDPvHDL8A4qktlLnBziTmeee8rTQ/6c2GzUoXDOmVPgtF2Gu44P4hw17sWVMgc3ep+So1zXa+0Sxx0Iq8AdzJvE67gtpsVmaxrI2ijWtAaOACehvU4dfFhFVlX2oyEzsbwjr1K2KaOrafhKx77Q7OXWgmhybl6JpZ66KrwOeaXYcyd2RSs0NKmmZafmPzQiFQAB7WfyToKDvNpvacubVPbIffR7u9TqomGAip4ty6qwbJ2UicVBpSppxBUqarHcjnAB0bJGnSqINkGu0hDf6yAn93W84RQ1oFIf4gaUqnx+kzKzqoqzbI2eMh0gDiMwNyabT39FZYjQgbgB7RRtoL67NhNdyxXaG95J3lzjl7A90Jz6g3b3TO+7ydPK57syTmOATAgN8ygSBnvSbGkmpQDxjch6pSyZOCTgdV3Ld5USseQaeCStrvs6M8LqtI+6dvA11R9pWVfUkFxa1tRo/fXzoQkbltYEddSKFg47qdE/uuxvkeJpATG01YPffw9VnrnZpnZV5islKitXAcjWik7ON1c/qmd4XWYXNZXDIGgy08LnHf808sLXAAOGeeakkjCPh8U/iFaU46BNLON6fR1yodfzopBZoAFddwoglYhmOA04lBBvNF6OdJKAAThY0GuZJ319apxZrIG5kYjUZYM/3vXbFZyBvxF3fcW+Lj+SfMY1prQV1JXR9M12+ze72udNK4Ztwtiy0rWpV8jho/kVUvs3ZSCR/vTU14AfmrzEyqehtxzdAqVtPcmNxcBUiteYV6fH4eOLNNrfZgQSlobYPtDdRieG0yxHDlxp/8qBsjwH5+EnpwK0/7R2xMhrUY3HuDes4sFnL3NFK98Ciej2kbJFm0EZgV6LQdg7t7xkI5N8v+SqXYbKfvMzQkLXtm7IGxMc3QtHw/4UztWXR7b2Qxx9o6MGhGgzNSlbFZ4ZY2yNZha5tRxTq02FsrMDtPJLR2YRsaxgo1rQB5AK9co3wzn7SXtZG9rGgClDl5k/RY5amEmvH81sv2kWYkScCwkedW/QLKZ7IWu6HqgImSzkEcwi4dwz4qYttmDo2ur3ye8PdG4IWWBjRxKVpyI+GEt1Ck7rsmMGumMZo8VmL3UaK/VWux3R2UcbSO851eoSPRtc9kwTtac2OJp5rX7hutjrLCCKFrmOBpqQQfoqBZrLWduHOhIB3VWt2OEMaGjQAAeQRJyWXSP2hu4Sxl4FHsBLTxG8KvRQjJXdwrlu3qs/w+F2GmQfRT5JrkYko265Vz+KfRChFdfLcixsOmWvDSqXgYKg0NBqeSxWVijpmd1ahBKgUqdTuNdyCCYZeV2B+cYDSNAB3VBOJBo4EHeCriyYULRma6ptbbEJYyXUDh4ctFvjSq3/Z/DSxx/ie8/Gn0VtacOuigdj4sNks3+kD1zVlwYm0VodmeO6fxKl7ZbYizl0UYDpKeeFWO1vc1jmjUCrPNVu7th2PrNOTJI41NTpVIMwms9qt0pJDpHcTo0JzZbhma4UFM6NNcyVq/+ABowRns2key0VKdWHZxjKb+LtXH1TuzmldsWz7WQFhGZFfI8VYdmQWx0pXCaSt38nD0KlWXblQCg4n98kpDYwyVzmjVrcQ46j6BKQ7TqBwOYzB6JYjkk3Q0OJuR3jc795JcK0K5tVdPbwkAd6hp0WQWy6Hdo+N4wPDB2dfbAXoB8ddVUtqtnRIBKGYnNJxN0q060PHejRysctEIwPxCjwBl5ZfT4qLijOZ5q7XzdTAHOa6opvPe9Qom7boe5+HDnuB+alVPdkbs7R5cR3R8Srvdl0PtL3SE4I25NNKn0UncWzvZWcMAoXAYne0a0qrB/BdnF2bMhQCg3lGi2gLhulhnxNH+XFv99+uu/RXAJCxWdsbA0CmWfmnCcmit2CirbF3zzGSlU0trNDvzA9VHkm4ePZgWcDTT0HBLAat5/BdbHpkdM+CLJWpr5rnaCWmYtbrmTpvQURfFqOTGnM8NQOK6gMxs9WtkArXiUteUuCE73FtG+a6gumIrTLjgw2eBvCFg+AUrCUEFSSNpYCRlvCkIIqCgQQQDaVlHab06hZoggmRwAuBuqCCA6UAEEEB1cLaoIICGtuz8UhzApXPJcl2fhyowVBGehCCCNchLxsDQANAF1mYBQQQB0EEEAEjavCfMIIKcuqc7MjWgoKgn6pvapw0EagAkLiC52quYi92M5Yj3ct37+aCCCA//2Q==',
          }}

          size={80}
          />
          <SafeAreaView style={{marginLeft: 10,}}>
            <Text style={[styles.titleName]}>John Doe:</Text>
            <Text style= {styles.title}> Level 1 Gardener</Text>
            <Caption style={styles.caption}>@jess</Caption>
          </SafeAreaView>
        </View>
      </View>

      <View style={[styles.infoBoxWrapper, {marginTop: 50}]}>
        <View style={[styles.infoBox,
        {borderRightColor: '#dddddd', borderRightWidth: 1}]}
        >
          <Title style={styles.title}>Your Balance</Title>
          <Caption>49,000</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title style={styles.title}>Your rewards</Title>
          <Caption>4</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={()=>{}}>
          <View style={styles.menuItem}>
            <Icon name='share-outline' color='black' size={25} />
            <Text style={styles.menuItemText}>Share </Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={()=>{}}>
          <View style={styles.menuItem}>
            <Icon name='account-check-outline' color='black' size={25} />
            <Text style={styles.menuItemText}>Support and FAQ </Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={()=>{}}>
          <View style={styles.menuItem}>
            <Icon name='settings-outline' color='black' size={25} />
            <Text style={styles.menuItemText}>Settings </Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
}

  export default ProfileScreen;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginTop: 25,
    },
    titleName: {
      fontFamily: 'Times New Roman',
      fontWeight: 'bold',
      fontSize: 30,
      letterSpacing: -1.5,
    },
    title: {
      fontFamily: 'Times New Roman',
      fontWeight: 'bold',
      fontSize: 24,
      letterSpacing: -1.5
      
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
  });
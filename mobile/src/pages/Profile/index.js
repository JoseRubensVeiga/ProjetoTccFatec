import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, Image} from 'react-native';

const Profile = () => {
  const userName = 'Roger da Silva';
  const userEmail = 'roger_silva@dcode.com';

  return (
    <SafeAreaView>
      <Image
        style={styles.userPhoto}
        source={require('/Estudos/projeto-tcc-fatec/mobile/src/assets/images/user.png')}
      />
      <TextInput style={styles.input} value={userName} />
      <TextInput style={styles.input} value={userEmail} />
      <TextInput style={styles.input} placeholder="Senha atual" />
      <TextInput style={styles.input} placeholder="Nova senha" />
      <TextInput style={styles.input} placeholder="Confirme nova senha" />
      <Button title="Salvar" color="#2eae99" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
  },
});

export default Profile;

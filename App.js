import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (!username || !password) {
      setMessage('Please enter both username and password');
    } else if (username === 'admin' && password === '1234') {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In Screen</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        placeholderTextColor="lightgrey"
        value={username}
        onChangeText={setUserName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="lightgrey"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.rememberContainer}>
        <TouchableOpacity
          style={[styles.checkbox, remember && styles.checkboxChecked]}
          onPress={() => setRemember(!remember)}
        />
        <Text style={styles.rememberText}>Remember me</Text>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>

      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2F',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: 'white',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    backgroundColor: '#2C2C3A',
    color: 'white',
    padding: 12,
    marginBottom: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#444',
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 4,
  },
  checkboxChecked: {
    backgroundColor: '#FF3366',
  },
  rememberText: {
    color: 'white',
    marginLeft: 8,
  },
  loginButton: {
    width: '80%',
    backgroundColor: '#FF3366',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 20,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
